import { writeFile } from "node:fs/promises";

const output = process.argv[2];
if (!output) throw new Error("Expected an output path for the temporary secrets file");

const source = {
  JWT_SECRET: "HANABIO_WORKER_JWT_SECRET",
  DEPLOY_SECRET: "HANABIO_WORKER_DEPLOY_SECRET",
  TURNSTILE_SECRET_KEY: "HANABIO_TURNSTILE_SECRET_KEY",
  GITHUB_CLIENT_SECRET: "HANABIO_GITHUB_CLIENT_SECRET",
};
const secrets = {};
for (const [workerName, environmentName] of Object.entries(source)) {
  const value = process.env[environmentName];
  if (!value) throw new Error(`Missing required environment variable: ${environmentName}`);
  secrets[workerName] = value;
}
await writeFile(output, JSON.stringify(secrets), { mode: 0o600 });
