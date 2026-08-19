import { writeFile } from "node:fs/promises";

const required = [
  "CLOUDFLARE_ACCOUNT_ID",
  "HANABIO_D1_DATABASE_ID",
  "HANABIO_GITHUB_CLIENT_ID",
  "HANABIO_ADMIN_GITHUB_IDS",
];
for (const name of required) {
  if (!process.env[name]) throw new Error(`Missing required environment variable: ${name}`);
}

const quote = (value) => JSON.stringify(String(value));
const config = `name = "hanabio-comments"
main = "src/index.mjs"
compatibility_date = "2026-08-01"
account_id = ${quote(process.env.CLOUDFLARE_ACCOUNT_ID)}

[[d1_databases]]
binding = "DB"
database_name = "hanabio-comments"
database_id = ${quote(process.env.HANABIO_D1_DATABASE_ID)}

[vars]
SITE_URL = "https://ximiku.github.io/HanaBio-Archive/"
ALLOWED_ORIGINS = "https://ximiku.github.io,http://127.0.0.1:8000,http://localhost:8000"
GITHUB_CLIENT_ID = ${quote(process.env.HANABIO_GITHUB_CLIENT_ID)}
ADMIN_GITHUB_IDS = ${quote(process.env.HANABIO_ADMIN_GITHUB_IDS)}

[triggers]
crons = ["17 3 * * *"]
`;

await writeFile(new URL("wrangler.toml", import.meta.url), config, { mode: 0o600 });
console.log("Generated temporary Wrangler configuration");
