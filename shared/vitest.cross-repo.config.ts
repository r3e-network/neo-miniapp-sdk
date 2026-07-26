import { defineConfig, mergeConfig } from "vitest/config";

import base, { CROSS_REPO_TESTS } from "./vitest.config";

/**
 * Runs only the tests `vitest.config.ts` excludes - the conformance audits that
 * need app sources from neo-miniapps / neo-minigames. They are expected to fail
 * here; the config exists so the suite stays runnable and visible while it is
 * being re-homed.
 */
export default mergeConfig(
  base,
  defineConfig({
    test: {
      include: CROSS_REPO_TESTS,
      exclude: ["**/node_modules/**", "**/dist/**"],
    },
  }),
);
