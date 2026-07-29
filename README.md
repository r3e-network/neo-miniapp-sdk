# neo-miniapp-sdk

The SDK every Neo MiniApp and MiniGame builds against. Split out of
[neo-os-web](https://github.com/r3e-network/neo-os-web) so
that the platform repo holds only platform code, and app repos depend on a
versioned SDK instead of a monorepo path.

## Packages

| Package | Path | Import alias | What it is |
| --- | --- | --- | --- |
| `@r3e-network/neo-miniapp-framework` | `framework/` | `@framework/*` | Business SDK surfaces reached from an app as `ctx.framework` — chain, wallet, AA, credits, oracle, platform game/social/anchor/registry/defi/escrow/vesting, plus the Phaser game kernel. |
| `@r3e-network/neo-miniapp-shared` | `shared/` | `@shared/*` | Shared app runtime — React and Vue components, composables, services, locale, chain constants, and the embedded host bridge. Depends on the framework. |

## Consumers

- `neo-miniapps` — non-game MiniApps
- `neo-minigames` — MiniGames
- `neo-os-web` — host app and admin console

Apps keep importing `@shared/*` and `@framework/*`; only what those aliases
point at changed. In an app repo they resolve into `node_modules`.

## Install

Both packages publish to GitHub Packages under the `@r3e-network` scope, so a
consumer needs an `.npmrc` with:

```
@r3e-network:registry=https://npm.pkg.github.com
```

Then:

```bash
npm install @r3e-network/neo-miniapp-framework @r3e-network/neo-miniapp-shared
```

Packages ship TypeScript source, not a build artifact. Consumers are bundlers
(Vite, Next) that compile the SDK alongside app code, which keeps the alias
imports, `.scss` assets, and tree-shaking working the way they did in the
monorepo.

## Tests

```bash
npm test
```

`framework/test` and `shared/test` cover the SDK itself. Tests that exercise a
specific app moved to that app's repo.
