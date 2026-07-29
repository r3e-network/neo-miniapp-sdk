import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const currentDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(currentDir, "..");

/**
 * Tests that cannot run in this repository, and why.
 *
 * They came over with the framework and still assert against things the SDK
 * repo does not contain: contract ABI manifests and hash-vector fixtures from
 * neo-os-web, game sources from neo-minigames, and - in
 * framework-boundary - the monorepo workspace layout that the split replaced.
 *
 * They are excluded from `npm test` rather than deleted: each one encodes a real
 * invariant that still matters, it just has to be asserted from the repo that
 * owns the other half. `npm run test:cross-repo` runs them, and
 * docs/CROSS_REPO_TESTS.md tracks where each belongs.
 */
export const CROSS_REPO_TESTS = [
  // Reads contracts/**: ABI coverage and CreateContractHash vectors live in the
  // platform repo, so these belong there, asserting against the published SDK.
  "test/aa-account-hash.test.ts",
  "test/platform-defi-surface.test.ts",
  "test/platform-factory-surface.test.ts",
  "test/platform-registry-tenant-surface.test.ts",
  "test/platform-social-surface.test.ts",
  // Walks game app sources: belongs in neo-minigames as a conformance audit.
  "test/game-rules-adoption.test.ts",
  "test/phaser-framework.test.ts",
  "test/reward-game-sdk-adoption.test.ts",
  // Asserts the monorepo workspace layout. The boundary it protects - the shared
  // package must not re-export framework internals - is still worth enforcing,
  // but has to be restated against the two-package SDK layout.
  "test/framework-boundary.test.ts",
];

export default defineConfig({
  root: currentDir,
  resolve: {
    alias: {
      "@framework": currentDir,
      "@shared": resolve(repoRoot, "shared"),
      phaser: resolve(repoRoot, "node_modules/phaser/dist/phaser.esm.js"),
    },
  },
  test: {
    environment: "jsdom",
    include: ["test/**/*.test.ts", "test/**/*.test.tsx"],
    exclude: ["**/node_modules/**", "**/dist/**", ...CROSS_REPO_TESTS],
    setupFiles: [resolve(currentDir, "test/setup.ts")],
  },
});
