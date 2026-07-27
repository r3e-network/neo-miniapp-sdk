import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * The platform's game-migration audit used to assert that this package carries
 * regression coverage for the shared reward adapter, by reading the test file
 * across the repo boundary. Test files are not published, so that read cannot
 * work from an installed package - and whether this package tests its own
 * adapter is this repo's business anyway.
 *
 * The three cases named here are the ones that audit required: an insufficient
 * prepaid balance must fail closed rather than settle, settlement must poll to a
 * settled snapshot rather than assume one, and an interrupted session must
 * recover the active shared game.
 */
const REQUIRED_CASES = [
  "fails closed when prepaid credit is insufficient",
  "polls until a settled snapshot",
  "recovers the active shared game",
];

describe("shared reward adapter regression coverage", () => {
  it.each(REQUIRED_CASES)("keeps the %s case", (name) => {
    const source = readFileSync(
      path.join(__dirname, "platform-game-reward-adapter.test.ts"),
      "utf8",
    );

    expect(source).toContain(name);
  });
});
