import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * docs/contracts/platform-abi-surface.json is neo-os-contracts'. It generates the
 * file from its compiled manifests
 * (scripts/generate_platform_abi_surface.mjs) and this package vendors a copy so
 * the surface-parity audit can run without reaching into another repo.
 *
 * The checksum below is the upstream contents. A platform contract that gains or
 * loses an app-facing method changes it, and this test then fails until the copy
 * is refreshed - which is the point: the surface almost certainly needs updating
 * in the same change. The identical checksum is asserted upstream, so a contract
 * change fails there too until this repo catches up.
 *
 * To land a real change: rebuild the contracts, regenerate the file upstream,
 * copy it here, update both checksums, and update the surfaces.
 */
const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..");

const VENDORED = [
  {
    local: "docs/contracts/platform-abi-surface.json",
    upstream: "neo-os-contracts:docs/contracts/platform-abi-surface.json",
    sha256: "76029beece5b21836612ea68a550617934da7427264e143e0633a18c86163c1e",
  },
  {
    // The SDK imports this from shared/factory/. It is generated in
    // neo-os-contracts from the compiled factory template NEFs, so a template
    // rebuild has to be copied across rather than edited here.
    local: "shared/factory/generated-template-artifacts.ts",
    upstream: "neo-os-contracts:docs/contracts/generated-template-artifacts.ts",
    sha256: "bee93cf6ee9ab4aa86c57d12af2dc453eab301257ed80efc26ab8f2c5f25c81d",
  },
];

const sha256 = (relative) =>
  crypto
    .createHash("sha256")
    .update(fs.readFileSync(path.join(repoRoot, relative)))
    .digest("hex");

for (const entry of VENDORED) {
  test(`${entry.local} matches ${entry.upstream}`, () => {
    assert.equal(
      sha256(entry.local),
      entry.sha256,
      `${entry.local} no longer matches ${entry.upstream}. Regenerate it upstream, copy it ` +
        `here, and update the checksum in this file and in the upstream pin.`,
    );
  });
}
