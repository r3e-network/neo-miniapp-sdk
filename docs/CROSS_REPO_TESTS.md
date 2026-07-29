# Cross-repo tests

Twenty-five tests that came over with the SDK cannot run here, because the code
they assert against moved to a different repository. They are listed in
`CROSS_REPO_TESTS` in `framework/vitest.config.ts` and `shared/vitest.config.ts`,
excluded from `npm test`, and runnable with:

```bash
npm run test:cross-repo
```

They are kept rather than deleted: each encodes a real invariant. What changed is
which repository is in a position to check it.

## Belongs in neo-os-web

These read `contracts/**` — ABI manifests and `CreateContractHash` vectors — to
assert the SDK surface covers every tenant-facing contract method. The contracts
live in the platform repo, so the check belongs there, asserting against the
published SDK package.

| Test | Asserts |
| --- | --- |
| `framework/test/aa-account-hash.test.ts` | Account-hash derivation matches the contract's `CreateContractHash` vectors |
| `framework/test/platform-defi-surface.test.ts` | Every tenant-facing `PlatformDeFi` ABI method has a surface |
| `framework/test/platform-factory-surface.test.ts` | Same for `MiniAppFactory` |
| `framework/test/platform-registry-tenant-surface.test.ts` | Same for `PlatformRegistry`, minus control plane |
| `framework/test/platform-social-surface.test.ts` | Same for `PlatformSocial` |

## Belongs in neo-minigames

These walk game app sources.

| Test | Asserts |
| --- | --- |
| `framework/test/phaser-framework.test.ts` | Scenes stay on the framework API, get mixer audio, use real art, no emoji placeholders, deferred Phaser runtime |
| `framework/test/game-rules-adoption.test.ts` | Games use the framework difficulty selector without erasing game-specific rules |
| `framework/test/reward-game-sdk-adoption.test.ts` | Reward games are wired through the SDK runner |
| `shared/test/game-experience.audit.test.ts` | TEE reward games meet the shared experience bar |
| `shared/test/game-scene-polish-adoption.test.ts` | Scene polish adoption per game |
| `shared/test/minigame-everyday-migrations.production.test.ts` | Everyday minigames are executable, offline, guest-only |
| `shared/test/platform-game-manifest-config.test.ts` | `SOLVED_SLOTS` in each game's main matches the contract's event slot order |

## Belongs in whichever repo owns the apps (both)

Conformance audits that walk every app directory. Each app repo should run them
over its own catalogue; four of them were already copied into both app repos as
`apps/tests/conformance/`.

| Test | Asserts |
| --- | --- |
| `shared/test/design-language-v4.audit.test.ts` | Design-token and layout conformance |
| `shared/test/i18n-key-parity.test.ts` | Every locale key exists in en + zh |
| `shared/test/i18n-normalize-locale-single-source.test.ts` | One locale-normalizing implementation |
| `shared/test/miniapp-bundles.coverage.test.ts` | Every app ships the expected bundle shape |
| `shared/test/miniapp-framework-adoption.test.ts` | Apps consume the framework rather than reimplementing it |
| `shared/test/official-token-assets.test.tsx` | Token artwork comes from the official asset set |
| `shared/test/open-ui-lite-class-contract.test.ts` | Apps honour the Open-UI-lite class contract |
| `shared/test/platform-module-permissions.production.test.ts` | Declared module permissions match usage |
| `shared/test/playarea-background-clarity.test.ts` | Playfield backgrounds meet contrast rules |
| `shared/test/typography-weight.test.ts` | Typography weights stay on the scale |
| `shared/test/anchor-stake-memo.test.ts` | Custom Anchor's stake memo matches `PlatformAnchor.OnNEP17Payment` |

## Needs restating, not moving

| Test | Why |
| --- | --- |
| `framework/test/framework-boundary.test.ts` | Asserts the framework is a root workspace package of the monorepo. The boundary it protects — the shared package must not re-export framework internals — is still worth enforcing, but has to be expressed against this repo's two-package layout. |
