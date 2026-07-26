import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const currentDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(currentDir, "..");

/**
 * Tests that cannot run in this repository, and why.
 *
 * Each one discovers its subjects by walking the monorepo that no longer exists:
 * app sources now live in neo-miniapps and neo-minigames, and a few assert on
 * the old `apps/shared` + root `framework/` directory layout directly. They fail
 * on a missing path or on an app set that is legitimately empty here - not on
 * anything wrong with the shared runtime, which the other 46 files cover.
 *
 * They are excluded from `npm test` rather than deleted: every one encodes a real
 * conformance rule (i18n key parity, guest-mode adoption, scene polish, asset
 * provenance, background clarity, typography). Those rules have to be enforced
 * from the repo that owns the apps. `npm run test:cross-repo` runs them, and
 * docs/CROSS_REPO_TESTS.md tracks the re-homing.
 */
export const CROSS_REPO_TESTS = [
  // Walk every app directory to audit design, i18n, and asset conformance.
  "test/design-language-v4.audit.test.ts",
  "test/game-experience.audit.test.ts",
  "test/game-scene-polish-adoption.test.ts",
  "test/i18n-key-parity.test.ts",
  "test/i18n-normalize-locale-single-source.test.ts",
  "test/miniapp-bundles.coverage.test.ts",
  "test/miniapp-framework-adoption.test.ts",
  "test/minigame-everyday-migrations.production.test.ts",
  "test/official-token-assets.test.tsx",
  "test/open-ui-lite-class-contract.test.ts",
  "test/platform-module-permissions.production.test.ts",
  "test/playarea-background-clarity.test.ts",
  "test/typography-weight.test.ts",
  // Asserts the pre-split directory layout (apps/shared beside a root framework/).
  "test/miniapp-framework.test.ts",
  // Read a specific app's source to assert cross-boundary parity: the anchor
  // stake memo against custom-anchor, and the shared Solved payout slots against
  // four game mains. Both belong beside the apps they pin.
  "test/anchor-stake-memo.test.ts",
  "test/platform-game-manifest-config.test.ts",
];

export default defineConfig({
  root: currentDir,
  resolve: {
    alias: {
      "@framework": resolve(repoRoot, "framework"),
      "@shared": currentDir,
      // No "@" alias on purpose: it means "this app's src" everywhere else, and
      // binding it here would silently resolve app imports to shared modules.
      phaser: resolve(repoRoot, "node_modules/phaser/dist/phaser.esm.js"),
    },
  },
  test: {
    testTimeout: 30_000,
    environment: "jsdom",
    include: ["test/**/*.test.ts", "test/**/*.test.tsx"],
    exclude: ["**/node_modules/**", "**/dist/**", ...CROSS_REPO_TESTS],
    environmentOptions: { jsdom: { url: "http://localhost/" } },
    setupFiles: [resolve(currentDir, "test-utils/vitest-setup.ts")],
    server: {
      deps: {
        inline: ["@douyinfe/semi-icons", "@douyinfe/semi-ui", /@douyinfe\/semi-foundation/],
      },
    },
  },
});
