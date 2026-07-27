import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * The SDK-owned half of the platform's production-data guardrails, which used to
 * read these files as apps/shared across the repo boundary. The assertions are
 * the platform's verbatim; what moved is which repo holds the source.
 */
const repoRoot = path.resolve(__dirname, "../..");

describe("Production data guardrails", () => {
  it("does not ship hard-coded fallback prices as live data", () => {
    const priceSource = fs.readFileSync(
      path.join(repoRoot, "shared/utils/price.ts"),
      "utf8",
    );

    expect(priceSource).not.toContain("mockPrices");
    expect(priceSource).not.toContain("using fallback");
    expect(priceSource).not.toContain("neo: 15.5");
  });

  it("does not ship local OS edge previews as production API data", () => {
    const edgeSource = fs.readFileSync(
      path.join(repoRoot, "shared/services/os/EdgeClient.ts"),
      "utf8",
    );

    expect(edgeSource).not.toContain("resolveLocalPreviewData");
    expect(edgeSource).not.toContain("localPreviewResponse");
    expect(edgeSource).not.toContain("shouldUseLocalPreview");
    expect(edgeSource).not.toContain("local-preview");
  });
});
