// Runs in the publisher's GitHub Actions workflow. The private key is provided
// only through an encrypted Actions secret and is never written to the repo.
import { createPrivateKey, createPublicKey, sign } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';

const expectedPublicKey =
  'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5QIefIaIncR2nPyIwy20ggtnPmeVKewAUNptKqWuyK6fekVi5GGzEFSiC2imQGgsi8O0n9uZGBSh2V9jChHptg==';
const domain = 'OllamaSidekick Agent Safety v1\n';
const key = createPrivateKey(process.env.SIDEKICK_AGENT_SAFETY_PRIVATE_KEY ?? '');
const publicKey = createPublicKey(key).export({ type: 'spki', format: 'der' }).toString('base64');
if (publicKey !== expectedPublicKey) throw new Error('The configured signing key does not match the pinned public key.');

const issuedAt = Date.now();
const payload = Buffer.from(JSON.stringify({
  version: 1,
  kind: 'ollama-sidekick-agent-safety',
  issuedAt,
  expiresAt: issuedAt + 90 * 60 * 1000,
  // A missing or invalid repository variable is deliberately restrictive.
  enabled: process.env.SIDEKICK_AGENT_SAFETY_MODE === 'enabled',
})).toString('base64');
const signature = sign('sha256', Buffer.from(domain + payload), {
  key,
  dsaEncoding: 'ieee-p1363',
}).toString('base64');
mkdirSync('ollama-sidekick', { recursive: true });
writeFileSync('ollama-sidekick/agent-safety.json', `${JSON.stringify({ payload, signature })}\n`);
console.log(`Signed safety setting generated; Agent Mode ${process.env.SIDEKICK_AGENT_SAFETY_MODE === 'enabled' ? 'enabled' : 'disabled'}.`);
