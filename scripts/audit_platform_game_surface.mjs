#!/usr/bin/env node
/**
 * The platform's side of the shared game reward contract.
 *
 * The platform does not know which games exist - an app declares what it needs
 * through its manifest and the platform serves that through a generic surface.
 * What this audits is that the surface itself is intact: the framework facade
 * builds a reward chain, the adapter refuses unprepaid shared entries and
 * withholds the settlement event until it has one, and defineMiniApp reads the
 * game config from the manifest rather than from anything app-specific.
 *
 * Whether any individual game has adopted it is that game's business, asserted
 * in neo-minigames.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// scripts/ sits directly under the repo root here; in neo-os-web this script
// lived at deploy/scripts/ and needed one more level.
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

export function buildPlatformGameSurfaceLedger() {
  const facade = read("framework/game-facade.ts");
  const adapter = read(
    "framework/gamefi/platform-game-reward-adapter.ts",
  );
  const definition = read(
    "shared/react/defineMiniApp.tsx",
  );

  return {
    reward_chain_available: facade.includes("createPlatformGameRewardChain"),
    shared_entries_require_prepay: adapter.includes(
      "Shared PlatformGame entries must be prepaid",
    ),
    settlement_event_withheld_until_settled: adapter.includes("event: undefined"),
    config_read_from_manifest: definition.includes("platformGameConfigFromManifest"),
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const ledger = buildPlatformGameSurfaceLedger();
  console.log(JSON.stringify(ledger, null, 2));
  const broken = Object.entries(ledger).filter(([, ok]) => !ok);
  if (broken.length > 0) {
    console.error(`\nplatform game surface incomplete: ${broken.map(([k]) => k).join(", ")}`);
    process.exit(1);
  }
}
