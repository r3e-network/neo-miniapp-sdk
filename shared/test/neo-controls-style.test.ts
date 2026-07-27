import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * NeoButton / NeoInput / NeoSelect styling contract.
 *
 * Ported from the platform monorepo (deploy/scripts/lib/shared_react_controls_style.test.mjs)
 * when apps/shared moved here as shared/. It is the only guard on three rules that
 * have regressed before:
 *  - wallet-style typography: zero tracking everywhere in the control styles;
 *  - readable disabled states: `opacity: 1` rather than the 0.5 dimming that made
 *    disabled primaries unreadable;
 *  - NeoSelect uses the native picker indicator — no bespoke chevron element and no
 *    background-colour on the control, which is what the padding-right reserves for.
 *
 * Static on purpose: jsdom applies no stylesheets, so a render test cannot see any
 * of this.
 */

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

function read(relativePath: string): string {
  return readFileSync(path.join(REPO_ROOT, relativePath), "utf8");
}

function assertOnlyZeroLetterSpacing(styles: string): void {
  const values = [...styles.matchAll(/letter-spacing:\s*([^;]+);/g)].map((match) =>
    match[1].trim(),
  );
  expect(values.length, "expected at least one letter-spacing declaration").toBeGreaterThan(0);
  expect(values).toEqual(values.map(() => "0"));
}

describe("shared React controls", () => {
  it("keep wallet-style typography and readable disabled states", () => {
    const buttonStyles = read("shared/components-react/NeoButton.scss");
    const inputStyles = read("shared/components-react/NeoInput.scss");
    const selectStyles = read("shared/components-react/NeoSelect.scss");
    const selectComponent = read("shared/components-react/NeoSelect.tsx");

    expect(buttonStyles).toMatch(/\.neo-btn\s*\{[^}]*letter-spacing:\s*0;/s);
    expect(inputStyles).toMatch(/&__label\s*\{[^}]*letter-spacing:\s*0;/s);
    assertOnlyZeroLetterSpacing(buttonStyles);
    assertOnlyZeroLetterSpacing(inputStyles);

    expect(buttonStyles).toMatch(/&:disabled\s*\{[^}]*opacity:\s*1;/s);
    expect(inputStyles).toMatch(/&--disabled\s*\{[^}]*opacity:\s*1;/s);
    expect(buttonStyles).not.toMatch(/opacity:\s*0\.5/);
    expect(inputStyles).not.toMatch(/opacity:\s*0\.5/);

    expect(selectStyles).toMatch(/background-color:\s*transparent;/);
    expect(selectStyles).toMatch(/padding-right:\s*14px;/);
    expect(selectComponent).not.toMatch(/neo-select__chevron/);
    expect(selectStyles).not.toMatch(/&__chevron/);
  });
});
