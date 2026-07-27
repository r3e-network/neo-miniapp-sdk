import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * Standalone status toast layout.
 *
 * Ported from the platform monorepo (deploy/scripts/lib/standalone_status_toast_layout.test.mjs)
 * when apps/shared moved here as shared/. It is the only guard that the toast in the
 * standalone (OneGate / chrome-free) shell stays out of the way: bottom-anchored into
 * the safe area rather than pinned to the top over the hero metrics, width-capped so it
 * cannot span the viewport, and `pointer-events: none` so it never eats a tap meant for
 * the content underneath.
 *
 * The styles are an inline <style> string inside MiniAppRoot.tsx, so this reads the
 * source and slices out the rule block. jsdom applies no stylesheets, so a render test
 * cannot see any of this.
 */

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

function read(relativePath: string): string {
  return readFileSync(path.join(REPO_ROOT, relativePath), "utf8");
}

function cssBlock(source: string, selector: string): string {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = source.match(new RegExp(`${escapedSelector}\\s*\\{([\\s\\S]*?)\\n\\s*\\}`, "m"));
  expect(match, `missing CSS selector: ${selector}`).toBeTruthy();
  return match![1];
}

describe("standalone status toast", () => {
  it("stays in the bottom safe area instead of covering hero metrics", () => {
    const miniAppRoot = read("shared/react/MiniAppRoot.tsx");
    const toastStyles = cssBlock(miniAppRoot, ".standalone-dapp-root .status-toast");
    const topDeclarations = [...toastStyles.matchAll(/top:\s*([^;]+);/g)].map((match) =>
      match[1].trim(),
    );

    expect(toastStyles).toMatch(/position:\s*fixed/);
    expect(topDeclarations).toEqual(["auto"]);
    expect(toastStyles).toMatch(
      /bottom:\s*calc\(16px\s*\+\s*env\(safe-area-inset-bottom,\s*0px\)\)/,
    );
    expect(toastStyles).toMatch(/max-width:\s*min\(calc\(100vw - 32px\),\s*520px\)/);
    expect(toastStyles).toMatch(/pointer-events:\s*none/);
  });
});
