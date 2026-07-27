import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * NeoCard's styling contract.
 *
 * Ported from the platform monorepo (deploy/scripts/lib/shared_react_card_style.test.mjs)
 * when apps/shared moved here as shared/. It is the only guard on the card surface:
 * the `neo-card__body neo-card__content` hook that AA and recovery layouts select on,
 * the tokenised radius, and the wallet-style typography rules (no gradients, no
 * uppercasing, no tracking) that the design language forbids.
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

describe("shared React cards", () => {
  it("render the expected content hook and wallet-style surfaces", () => {
    const cardComponent = read("shared/components-react/NeoCard.tsx");
    const cardStyles = read("shared/components-react/NeoCard.scss");

    expect(
      cardComponent,
      "NeoCard body should expose the content hook used by AA and recovery layouts",
    ).toMatch(/className="neo-card__body neo-card__content"/);

    expect(cardStyles).toMatch(/border-radius:\s*var\(--card-radius,\s*12px\);/);
    expect(cardStyles).not.toMatch(/linear-gradient/);
    expect(cardStyles).not.toMatch(/text-transform:\s*uppercase/);
    assertOnlyZeroLetterSpacing(cardStyles);
  });
});
