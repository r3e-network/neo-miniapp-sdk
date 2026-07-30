import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { evaluateParity } from "../audit_platform_surface_parity.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..");
const abiSurfacePath = path.join(repoRoot, "docs/contracts/platform-abi-surface.json");

const SURFACES = {
  MiniAppFactory: "framework/platform-factory-surface.ts",
  PlatformAnchor: "framework/platform-anchor-surface.ts",
  PlatformDeFi: "framework/platform-defi-surface.ts",
  PlatformEscrow: "framework/platform-escrow-surface.ts",
  PlatformSocial: "framework/platform-social-surface.ts",
  PlatformVesting: "framework/platform-vesting-surface.ts",
};

const abiSurface = () => JSON.parse(fs.readFileSync(abiSurfacePath, "utf8")).contracts;

test("the vendored ABI surface names every contract that has a surface file", () => {
  const surface = abiSurface();
  const missing = Object.keys(SURFACES).filter((contract) => !surface[contract]);
  assert.deepEqual(missing, [], "these surfaces have no contract half to compare against");
});

test("every surface file exists", () => {
  const missing = Object.values(SURFACES).filter(
    (relative) => !fs.existsSync(path.join(repoRoot, relative)),
  );
  assert.deepEqual(missing, [], "a renamed surface file would otherwise silently stop being audited");
});

test("current sources pass the parity audit", () => {
  const report = evaluateParity({ abiSurface: abiSurface(), surfaces: SURFACES });

  const failing = Object.entries(report.contracts)
    .filter(([, entry]) => !entry.passed)
    .map(([contract, entry]) =>
      `${contract}: missing ${JSON.stringify(entry.missing_methods)} extra ${JSON.stringify(entry.extra_methods)}`,
    );
  assert.deepEqual(failing, []);
  assert.equal(report.passed, true);
  assert.equal(report.contract_count, Object.keys(SURFACES).length);
});

test("a method the contract exposes but no surface calls fails the audit", () => {
  // The failure mode this audit exists for: a contract gains an app-facing
  // method and the surface is never updated, so no app can reach it.
  const surface = abiSurface();
  surface.PlatformSocial = [...surface.PlatformSocial, "aMethodNoSurfaceCalls"];

  const report = evaluateParity({ abiSurface: surface, surfaces: SURFACES });

  assert.equal(report.passed, false);
  assert.deepEqual(report.contracts.PlatformSocial.missing_methods, ["aMethodNoSurfaceCalls"]);
});

test("a surface call the contract does not expose fails the audit", () => {
  // The other direction: a surface invokes a method that was renamed or removed
  // from the contract, which faults at runtime and type-checks fine.
  const surface = abiSurface();
  surface.PlatformSocial = surface.PlatformSocial.filter((name) => name !== "notarize");

  const report = evaluateParity({ abiSurface: surface, surfaces: SURFACES });

  assert.equal(report.passed, false);
  assert.deepEqual(report.contracts.PlatformSocial.extra_methods, ["notarize"]);
});

test("a contract with no entry in the ABI surface fails rather than being skipped", () => {
  const surface = abiSurface();
  delete surface.PlatformVesting;

  const report = evaluateParity({ abiSurface: surface, surfaces: SURFACES });

  assert.equal(report.passed, false);
  assert.match(report.contracts.PlatformVesting.error, /no entry in the vendored ABI surface/);
});

test("auditing zero contracts is not a pass", () => {
  const report = evaluateParity({ abiSurface: abiSurface(), surfaces: {} });
  assert.equal(report.passed, false);
  assert.equal(report.contract_count, 0);
});
