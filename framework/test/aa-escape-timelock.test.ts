import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * The escape timelock is one window expressed in two places: this package pins
 * it in seconds, and the AppAccount contract pins the same span in
 * milliseconds. The platform used to assert both halves by reading this file
 * across the repo boundary; it now owns the contract side and this owns ours.
 *
 * If these drift, an account could escape on a schedule the contract will not
 * honour, or the reverse.
 */
describe("AA registration escape timelock", () => {
  it("pins the 30-day window the AppAccount contract mirrors", () => {
    const source = readFileSync(
      path.join(__dirname, "../utils/aa-account.ts"),
      "utf8",
    );

    expect(source).toContain(
      "AA_REGISTRATION_ESCAPE_TIMELOCK_SECONDS = 30 * 24 * 60 * 60",
    );
  });

  it("agrees with the contract's millisecond constant", async () => {
    const { AA_REGISTRATION_ESCAPE_TIMELOCK_SECONDS } = await import(
      "../utils/aa-account"
    );

    // AppAccount pins ESCAPE_TIMELOCK_MS = 2_592_000_000.
    expect(AA_REGISTRATION_ESCAPE_TIMELOCK_SECONDS * 1000).toBe(2_592_000_000);
  });
});
