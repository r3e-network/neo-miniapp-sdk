# Graph Report - .  (2026-07-28)

## Corpus Check
- 478 files · ~434,788 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 4619 nodes · 10152 edges · 228 communities (159 shown, 69 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 287 edges (avg confidence: 0.7)
- Token cost: 157,607 input · 0 output

## Community Hubs (Navigation)
- Framework Errors and Credits
- Chain and Amount Surfaces
- NEP-21 and OS Edge Client
- Abstract Account Relay
- Vendored SHA-3 Shims
- Vendored Curve Modular Math
- Guest Game Kit
- Reward Game SDK
- Vendored Curve Primitives
- Error Surface Translation
- Platform DeFi Surface
- Chain Error Classification
- Vendored BLS12-381
- Credits Surface
- App Constants
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 30
- Community 31
- Community 32
- Community 33
- Community 34
- Community 35
- Community 36
- Community 37
- Community 38
- Community 39
- Community 40
- Community 41
- Community 42
- Community 43
- Community 44
- Community 45
- Community 46
- Community 47
- Community 48
- Community 49
- Community 50
- Community 51
- Community 52
- Community 53
- Community 54
- Community 55
- Community 56
- Community 57
- Community 58
- Community 59
- Community 60
- Community 61
- Community 62
- Community 63
- Community 64
- Community 65
- Community 66
- Community 67
- Community 68
- Community 69
- Community 70
- Community 71
- Community 72
- Community 73
- Community 74
- Community 75
- Community 76
- Community 77
- Community 78
- Community 79
- Community 80
- Community 81
- Community 82
- Community 83
- Community 84
- Community 85
- Community 86
- Community 87
- Community 88
- Community 89
- Community 90
- Community 91
- Community 92
- Community 93
- Community 94
- Community 95
- Community 96
- Community 97
- Community 98
- Community 99
- Community 100
- Community 101
- Community 102
- Community 103
- Community 104
- Community 105
- Community 106
- Community 107
- Community 108
- Community 109
- Community 110
- Community 111
- Community 112
- Community 113
- Community 114
- Community 115
- Community 116
- Community 117
- Community 118
- Community 119
- Community 120
- Community 121
- Community 122
- Community 123
- Community 124
- Community 125
- Community 126
- Community 127
- Community 128
- Community 129
- Community 130
- Community 131
- Community 132
- Community 133
- Community 134
- Community 135
- Community 136
- Community 137
- Community 138
- Community 139
- Community 140
- Community 141
- Community 142
- Community 143
- Community 145
- Community 146
- Community 147
- Community 148
- Community 149
- Community 150
- Community 151
- Community 152
- Community 153
- Community 154
- Community 155
- Community 156
- Community 157
- Community 158
- Community 159
- Community 160
- Community 161
- Community 162
- Community 163
- Community 164
- Community 165
- Community 166
- Community 167
- Community 168
- Community 169
- Community 170
- Community 171
- Community 172
- Community 173
- Community 174
- Community 175
- Community 176
- Community 177
- Community 178
- Community 179
- Community 180
- Community 181
- Community 182
- Community 183
- Community 184
- Community 185
- Community 186
- Community 187
- Community 188
- Community 189
- Community 190
- Community 191
- Community 192
- Community 193
- Community 194
- Community 195
- Community 196
- Community 197
- Community 198
- Community 199
- Community 200
- Community 201
- Community 202
- Community 203
- Community 204
- Community 205
- Community 207
- Community 208
- Community 209
- Community 210
- Community 211
- Community 212
- Community 213
- Community 214
- Community 215
- Community 217
- Community 218
- Community 219
- Community 220
- Community 227

## God Nodes (most connected - your core abstractions)
1. `createObservable()` - 138 edges
2. `createMiniAppFramework()` - 106 edges
3. `Observable` - 76 edges
4. `FrameworkPlatformDeFiSurface` - 65 edges
5. `FrameworkRegistrySurface` - 58 edges
6. `addressToScriptHash()` - 57 edges
7. `parseBigInt()` - 52 edges
8. `ChainService` - 50 edges
9. `FrameworkPlatformAnchorSurface` - 43 edges
10. `FrameworkPlatformSocialSurface` - 42 edges

## Surprising Connections (you probably didn't know these)
- `NeoHub logo lockup (hex network mark + NeoHub wordmark, transparent WebP)` --references--> `@r3e-network/neo-miniapp-shared`  [INFERRED]
  shared/assets/logo.webp → README.md
- `Neo Service Layer logo lockup: shield mark + 'TEE-Powered MiniApp Platform for Neo N3' tagline` --references--> `neo-miniapps-platform (host app + admin console)`  [INFERRED]
  shared/assets/logo.svg → README.md
- `GAS token icon (outlined Neo cube, #01e397, 512 viewBox)` --conceptually_related_to--> `app.credits — platform credits: on-chain buys, instant feeless spends, stale-flagged fallback reads`  [INFERRED]
  shared/assets/tokens/gas-icon.svg → framework/README.md
- `official-token-assets.test.tsx` --references--> `GAS token icon (outlined Neo cube, #01e397, 512 viewBox)`  [INFERRED]
  docs/CROSS_REPO_TESTS.md → shared/assets/tokens/gas-icon.svg
- `official-token-assets.test.tsx` --references--> `NEO token icon (filled two-tone Neo cube, #00e599/#00af92)`  [INFERRED]
  docs/CROSS_REPO_TESTS.md → shared/assets/tokens/neo-icon.svg

## Import Cycles
- 3-file cycle: `shared/react/context.ts -> shared/services/index.ts -> shared/services/BalanceService.ts -> shared/react/context.ts`
- 3-file cycle: `shared/react/context.ts -> shared/services/index.ts -> shared/services/ChainService.ts -> shared/react/context.ts`
- 3-file cycle: `shared/react/context.ts -> shared/services/index.ts -> shared/services/LifecycleService.ts -> shared/react/context.ts`
- 3-file cycle: `framework/chain-surface.ts -> framework/types.ts -> framework/platform-defi-surface.ts -> framework/chain-surface.ts`
- 3-file cycle: `framework/chain-surface.ts -> framework/types.ts -> framework/platform-anchor-surface.ts -> framework/chain-surface.ts`
- 3-file cycle: `framework/chain-surface.ts -> framework/types.ts -> framework/platform-escrow-surface.ts -> framework/chain-surface.ts`
- 3-file cycle: `framework/chain-surface.ts -> framework/types.ts -> framework/platform-game-surface.ts -> framework/chain-surface.ts`
- 3-file cycle: `framework/chain-surface.ts -> framework/types.ts -> framework/platform-social-surface.ts -> framework/chain-surface.ts`
- 3-file cycle: `framework/chain-surface.ts -> framework/types.ts -> framework/platform-vesting-surface.ts -> framework/chain-surface.ts`
- 3-file cycle: `framework/chain-surface.ts -> framework/types.ts -> framework/registry-surface.ts -> framework/chain-surface.ts`
- 3-file cycle: `framework/game/guest-kit.ts -> framework/types.ts -> framework/game/index.ts -> framework/game/guest-kit.ts`
- 4-file cycle: `shared/composables/useWalletBalanceReader.ts -> shared/react/context.ts -> shared/services/index.ts -> shared/services/BalanceService.ts -> shared/composables/useWalletBalanceReader.ts`
- 4-file cycle: `shared/react/context.ts -> shared/services/index.ts -> shared/services/PlatformServices.ts -> shared/services/BalanceService.ts -> shared/react/context.ts`
- 4-file cycle: `shared/react/context.ts -> shared/services/index.ts -> shared/services/BalanceService.ts -> shared/services/ChainService.ts -> shared/react/context.ts`
- 4-file cycle: `shared/composables/useAbstractAccount.ts -> shared/react/context.ts -> shared/services/index.ts -> shared/services/AAService.ts -> shared/composables/useAbstractAccount.ts`
- 4-file cycle: `shared/composables/useContractInteraction.ts -> shared/react/context.ts -> shared/services/index.ts -> shared/services/ChainService.ts -> shared/composables/useContractInteraction.ts`
- 4-file cycle: `shared/react/context.ts -> shared/services/index.ts -> shared/services/ChainService.ts -> shared/utils/wallet-sdk.ts -> shared/react/context.ts`
- 4-file cycle: `shared/react/context.ts -> shared/services/index.ts -> shared/services/PlatformServices.ts -> shared/services/ChainService.ts -> shared/react/context.ts`
- 4-file cycle: `shared/react/context.ts -> shared/services/index.ts -> shared/services/PlatformServices.ts -> shared/services/LifecycleService.ts -> shared/react/context.ts`
- 4-file cycle: `shared/react/context.ts -> shared/services/index.ts -> shared/services/TransferService.ts -> shared/services/ChainService.ts -> shared/react/context.ts`

## Hyperedges (group relationships)
- **Shared platform-contract module surfaces exposed to tenant apps** — framework_readme_app_registry, framework_readme_app_platformgame, framework_readme_app_platformsocial, framework_readme_app_platformanchor, framework_readme_app_platformdefi, framework_readme_app_platformvesting, framework_readme_app_platformescrow, framework_readme_app_platformfactory, framework_readme_app_permissions [EXTRACTED 1.00]
- **Reward-game lifecycle: start, session, op-log, finalize, settle** — framework_gamefi_readme_start_reward_game, framework_gamefi_readme_open_reward_game_session, framework_gamefi_readme_record_reward_game_op, framework_gamefi_readme_finalize_reward_game, framework_gamefi_readme_create_localstorage_reward_game_storage, framework_gamefi_readme_sealed_op_log, framework_gamefi_readme_solved_event [EXTRACTED 1.00]
- **SDK-to-consumer distribution contract: two published packages, three consumer repos, one registry** — readme_neo_miniapp_framework_package, readme_neo_miniapp_shared_package, readme_neo_miniapps_repo, readme_neo_minigames_repo, readme_neo_miniapps_platform, readme_github_packages_registry, _github_workflows_publish_publish_workflow, readme_typescript_source_distribution [EXTRACTED 1.00]

## Communities (228 total, 69 thin omitted)

### Community 0 - "Framework Errors and Credits"
Cohesion: 0.04
Nodes (74): FrameworkCapabilityError, gasForCredits(), createMiniAppFramework(), createModeModule(), FrameworkPermissionError, createObservable(), createReadCell(), makeFramework() (+66 more)

### Community 1 - "Chain and Amount Surfaces"
Cohesion: 0.03
Nodes (76): gasFixed8Amount(), FrameworkTxOutcome, FrameworkTxOutcomeOptions, accountToHash160(), ChainSurfaceDeps, compactInvokeOptions(), createChainSurface(), frameworkArg (+68 more)

### Community 2 - "NEP-21 and OS Edge Client"
Cohesion: 0.05
Nodes (76): NeoDapiProvider, resetNep21ProviderCacheForTests(), InvocationIntent, isRecord(), isSenderPlaceholder(), normalizeArgs(), RecordLike, resolveInvocationIntent() (+68 more)

### Community 3 - "Abstract Account Relay"
Cohesion: 0.05
Nodes (51): createAaSurface(), FrameworkAaRelayPayload, FrameworkAaRelayResult, FrameworkAaService, FrameworkAaSponsorshipResult, FrameworkAaSponsorshipStatus, FrameworkAaSurface, FrameworkAaSurfaceDeps (+43 more)

### Community 4 - "Vendored SHA-3 Shims"
Cohesion: 0.05
Nodes (40): chooseLen(), cshake128, cshake256, cshakePers(), EMPTY, gencShake(), genKmac(), genPrl() (+32 more)

### Community 5 - "Vendored Curve Modular Math"
Cohesion: 0.04
Nodes (52): isNegativeLE(), mod(), pow2(), equalBytes(), numberToBytesLE(), calcElligatorRistrettoMap(), ed25519_pow_2_252_3(), invertSqrt() (+44 more)

### Community 6 - "Guest Game Kit"
Cohesion: 0.06
Nodes (37): clampDifficulty(), createGuestLeaderboardAdapter(), createGuestPersistence(), createGuestRng(), GuestLeaderboardAdapter, GuestLeaderboardAdapterOptions, GuestLeaderboardEntry, GuestPersistence (+29 more)

### Community 7 - "Reward Game SDK"
Cohesion: 0.06
Nodes (22): NormalizedRewardGameMode, RewardGameBalances, RewardGameFinalizeResult, RewardGameProgressionState, RewardGameRecoverResult, RewardGameSession, RewardGameSettlement, RewardGameSnapshot (+14 more)

### Community 8 - "Vendored Curve Primitives"
Cohesion: 0.04
Nodes (56): _0n, _1n, TODO: Research returning 2d JS array of windows, instead of a single window. Thi, TODO: maybe check that scalar is less than group order? wNAF behavious is undefi, validateBasic(), wNAF(), nLength(), _0n (+48 more)

### Community 9 - "Error Surface Translation"
Cohesion: 0.07
Nodes (37): createErrorsSurface(), ErrorsSurfaceDeps, Translator, createPermissionsSurface(), FrameworkPermissionsSurface, FrameworkPlatformInvokePermission, NormalizedDeclaration, normalizePermissions() (+29 more)

### Community 11 - "Chain Error Classification"
Cohesion: 0.06
Nodes (20): CHAIN_ERROR_FAMILIES, ChainErrorKey, classifyChainError(), mapChainError(), rawErrorText(), ContractArg, ReadOptions, SignedMessageResult (+12 more)

### Community 12 - "Vendored BLS12-381"
Cohesion: 0.04
Nodes (56): numberToBytesBE(), _0n, _16n, _1n, _2n, _3n, _4n, _8n (+48 more)

### Community 13 - "Credits Surface"
Cohesion: 0.06
Nodes (39): asCount(), createCreditsSurface(), creditsForGas(), CreditsSurfaceChain, CreditsSurfaceDeps, decodeEvent(), FrameworkCreditsBalance, FrameworkCreditsBuyResult (+31 more)

### Community 14 - "App Constants"
Cohesion: 0.06
Nodes (47): CONSTANTS, CONTRACT, DEFAULTS, GAME, LIMITS, TIME, CREDENTIAL_CATEGORIES, CREDENTIAL_REGISTRY (+39 more)

### Community 15 - "Community 15"
Cohesion: 0.04
Nodes (31): RFC-1321, BUF_160, Id160, idxL, idxLR, idxR, RFC-3174, K (+23 more)

### Community 16 - "Community 16"
Cohesion: 0.07
Nodes (41): amountToBaseUnits(), gasToBaseUnits(), neoToInteger(), bytesToHex(), formatAddress(), formatCompactNumber(), formatCountdown(), formatCurrency() (+33 more)

### Community 17 - "Community 17"
Cohesion: 0.07
Nodes (24): number(), output(), B2B_IV, BBUF, BLAKE2b, G1b(), G2b(), NOTE: V is LE here (+16 more)

### Community 18 - "Community 18"
Cohesion: 0.09
Nodes (45): buildRewardGameIdentity(), createLocalStorageRewardGameStorage(), DEFAULT_EVENT_SLOTS, DEFAULT_EVENTS, DEFAULT_METHODS, enqueueRewardGameSessionTask(), expireRewardGame(), finalizeRewardGame() (+37 more)

### Community 19 - "Community 19"
Cohesion: 0.08
Nodes (51): Candidate, createHostBridgeRequestId(), deriveHostBridgeOrigin(), extractNep21ProviderFromReadyEvent(), findLegacyBalanceAmount(), findProviderCandidate(), getHostWalletBridgeProvider(), getLegacyNeoLineEventName() (+43 more)

### Community 21 - "Community 21"
Cohesion: 0.07
Nodes (33): pollForEvent(), extractTxid(), pollForTxEvent(), PollForTxEventParams, TransactionResult, ListEventsFn, useAllEvents(), UseAllEventsOptions (+25 more)

### Community 22 - "Community 22"
Cohesion: 0.09
Nodes (39): RFC-2104, RFC-2898, RFC-7914, assert, bytes(), hash(), isBytes(), countBytes() (+31 more)

### Community 23 - "Community 23"
Cohesion: 0.06
Nodes (21): ActionsSurfaceDeps, createActionsSurface(), createOperationsSurface(), devWarn(), OperationsSurfaceDeps, createNotifyModule(), NotifyModule, NotifySurfaceDeps (+13 more)

### Community 24 - "Community 24"
Cohesion: 0.06
Nodes (23): createStateSurface(), StateSurfaceDeps, Observable, makeWallet(), ADDRESS_HASH, makeBalanceService(), makeChain(), ReadCall (+15 more)

### Community 25 - "Community 25"
Cohesion: 0.08
Nodes (37): BaseMessages, createUseI18n(), interpolate(), InterpolationArgs, MergedMessages, sharedLocale, useI18n, warnedMissingKeys (+29 more)

### Community 26 - "Community 26"
Cohesion: 0.06
Nodes (18): FrameworkErrorsSurface, boundedCap(), createBusSurface(), createEventsSurface(), createLocalBus(), eventTxid(), FrameworkBusChannel, FrameworkBusDeps (+10 more)

### Community 27 - "Community 27"
Cohesion: 0.09
Nodes (31): ReadCellStatus, ConsoleToolPanelProps, useMessages(), isObservable(), MiniAppActionsContext, MiniAppContext, MiniAppContextValue, MiniAppStateContext (+23 more)

### Community 28 - "Community 28"
Cohesion: 0.05
Nodes (43): dependencies, @noble/curves, @noble/hashes, description, exports, files, lucide-react, phaser (+35 more)

### Community 29 - "Community 29"
Cohesion: 0.09
Nodes (34): factoryMessages, buildState(), HarnessState, loadFactoryModules(), NEP17_INPUT, renderPlayArea(), buildCtx(), harness (+26 more)

### Community 30 - "Community 30"
Cohesion: 0.10
Nodes (9): RefCompatObservable, ChainService, InvokeOptions, TxResult, NOTE: Unlike transferGas() which takes display units (e.g. "1.5"),, TransferService, InvokeArg, makeChainStub() (+1 more)

### Community 31 - "Community 31"
Cohesion: 0.10
Nodes (32): coder, Handler, AbiEncParam, bytesToHex(), bytesToUtf8(), connectEvm(), DecodedEvmMessage, decodeMessageStruct() (+24 more)

### Community 32 - "Community 32"
Cohesion: 0.10
Nodes (31): ConsoleNotifyPolicy, ConsolePreviewKernel, ConsolePreviewKernelOptions, ConsolePreviewKernelState, ConsoleRequestRecord, createConsolePreviewKernel(), isConsoleInputRequired(), TransientFlag (+23 more)

### Community 33 - "Community 33"
Cohesion: 0.07
Nodes (17): exists(), HashMD, NOTE: we do division by 4 later, which should be fused in single op with modulo, setBigUint64(), SHA224, SHA256, SHA256_IV, SHA256_K (+9 more)

### Community 34 - "Community 34"
Cohesion: 0.08
Nodes (11): BalanceService, CacheEntry, CacheService, makeInteraction(), mocks, FakeInteraction, makeChain(), makeInteraction() (+3 more)

### Community 35 - "Community 35"
Cohesion: 0.10
Nodes (31): A2_BUF, argon2(), argon2d(), argon2i(), argon2id(), argon2Init(), argon2Output(), blamka() (+23 more)

### Community 36 - "Community 36"
Cohesion: 0.09
Nodes (27): FetchTimeoutError, fetchWithTimeout(), FetchWithTimeoutInit, HttpResponseError, isTransientFetchError(), AAConfig, basePair(), canonicalAsset() (+19 more)

### Community 38 - "Community 38"
Cohesion: 0.05
Nodes (38): _0n, _10n, _1n, _20n, _2n, _40n, _5n, _80n (+30 more)

### Community 39 - "Community 39"
Cohesion: 0.08
Nodes (33): _0n, _16n, _1n, _2n, _3n, _4n, _5n, _8n (+25 more)

### Community 41 - "Community 41"
Cohesion: 0.09
Nodes (23): AARelayPayload, AARelayResponse, appendQueryParams(), cleanSponsorScope(), GasSponsorCheckResponse, GasSponsorClientLike, GasSponsorRequestResponse, GasSponsorScope (+15 more)

### Community 42 - "Community 42"
Cohesion: 0.11
Nodes (31): factoryTemplateArtifactHashes(), artifactStatusFrom(), buildFactoryPlan(), buildMiniAppPlan(), buildNep11Plan(), buildNep17Plan(), createFactoryDraftFromLaunchContext(), DEFAULT_FACTORY_DRAFT (+23 more)

### Community 43 - "Community 43"
Cohesion: 0.09
Nodes (34): FetchInit, AccountInfo, AccountTransaction, apiFetch(), ContractEvent, ContractInfo, getAccount(), getAccountTransactions() (+26 more)

### Community 44 - "Community 44"
Cohesion: 0.11
Nodes (31): ARTIFACT_DEPLOYMENT_PARAMETER_TYPES, asEpochMs(), asString(), estimateFactoryFeeGas(), FactoryDeploymentItem, FactoryRecordReadResult, fetchFactoryArtifactDeploymentSupport(), fetchFactoryDeployments() (+23 more)

### Community 45 - "Community 45"
Cohesion: 0.09
Nodes (28): compactGameLaunchCopy(), explicitLaunchGameMode(), FORMAT_MAP, FormatFn, GAME_ENTRY_MODE_PARAM_KEYS, GameEntryMode, GameHomePageWrapper(), getFormatter() (+20 more)

### Community 46 - "Community 46"
Cohesion: 0.07
Nodes (15): BadgeSurfaceDeps, createBadgeSurface(), ModeModule, ModeModuleDeps, createStatsSurface(), StatsSurfaceDeps, createStorageSurface(), StorageSurfaceDeps (+7 more)

### Community 47 - "Community 47"
Cohesion: 0.09
Nodes (11): BaseScene, collectTweenTargets(), createNopBridge(), createReducedMotionCounter(), GameButtonFeedbackOptions, PressFeedbackOptions, resolveTweenValue(), SceneTweenTarget (+3 more)

### Community 48 - "Community 48"
Cohesion: 0.09
Nodes (15): GameFacadeDeps, argValue(), createPlatformGameRewardChain(), platformGameEventsForApp(), PlatformGameRewardAdapterDeps, snapshotAsCloneRow(), withoutTenantSlot(), RewardGameConfig (+7 more)

### Community 49 - "Community 49"
Cohesion: 0.10
Nodes (26): WRITE_PLATFORM_ANCHOR, byteArray(), createPlatformAnchorSurface(), FrameworkPlatformAnchorConfig, FrameworkPlatformAnchorInvokeOptions, FrameworkPlatformAnchorTx, PlatformAnchorSurfaceChain, PlatformAnchorSurfaceDeps (+18 more)

### Community 50 - "Community 50"
Cohesion: 0.07
Nodes (22): appMessages, messages, BaseMessageKey, baseMessages, mergeMessages(), CommonMessageKey, commonMessages, messages (+14 more)

### Community 51 - "Community 51"
Cohesion: 0.11
Nodes (32): isogenyMap(), hashToPrivateScalar(), bytesToNumberBE(), ensureBytes(), _0n, _1n, _2n, challenge() (+24 more)

### Community 52 - "Community 52"
Cohesion: 0.10
Nodes (23): ErrorToast(), ErrorToastProps, iconMap, ToastType, FIREWORK_COLORS, Fireworks(), FireworksProps, FormCard() (+15 more)

### Community 53 - "Community 53"
Cohesion: 0.12
Nodes (30): anum(), expand_message_xmd(), expand_message_xof(), hash_to_field(), i2osp(), RFC-9380, strxor(), RFC-6979 (+22 more)

### Community 54 - "Community 54"
Cohesion: 0.10
Nodes (25): RFC-6979, _0n, _1n, _2n, abytes(), asciis, asciiToBase16(), bytesToHex() (+17 more)

### Community 55 - "Community 55"
Cohesion: 0.08
Nodes (31): _0n, _0x71n, _1n, _256n, _2n, _7n, gen(), keccak_224 (+23 more)

### Community 56 - "Community 56"
Cohesion: 0.15
Nodes (25): FrameworkAaSponsorScope, fixture, HashVector, repoRoot, NOTE: the apps/shared import below is intentional and allowed here — the, AnchorAgentDerivationOptions, buildAnchorAgentVerifierParam(), bytesToHex() (+17 more)

### Community 57 - "Community 57"
Cohesion: 0.09
Nodes (24): openRewardGameSession(), replayRewardGameOps(), RewardGameContractArg, base64ToHex(), formatSessionError(), identityBody(), parseConfig(), postSession() (+16 more)

### Community 58 - "Community 58"
Cohesion: 0.08
Nodes (13): WRITE_PLATFORM_FACTORY, callValues(), createPlatformFactorySurface(), FrameworkPlatformFactoryCall, FrameworkPlatformFactoryConfig, FrameworkPlatformFactoryInvokeOptions, FrameworkPlatformFactoryNetwork, FrameworkPlatformFactorySurface (+5 more)

### Community 59 - "Community 59"
Cohesion: 0.12
Nodes (23): ConsoleMiniApp(), ConsoleMiniAppProps, DetailCardGrid(), DetailCardGridItem, DetailCardGridProps, HeroSection(), HeroSectionProps, HeroVariant (+15 more)

### Community 60 - "Community 60"
Cohesion: 0.08
Nodes (28): ContractMode, DocsSection, DocsSectionType, GamePageConfig, GamePageFeature, HeroConfig, MiniAppCategory, MiniAppFeatures (+20 more)

### Community 61 - "Community 61"
Cohesion: 0.08
Nodes (21): factoryTemplateIdFor(), FactoryTemplateStatus, MiniAppDraft, Nep11Draft, Nep17Draft, ARTIFACT_STATUS_KEYS, ChoiceOption, cloneDraft() (+13 more)

### Community 62 - "Community 62"
Cohesion: 0.13
Nodes (24): deriveSchedule(), canClaim(), deriveSchedulePreview(), isFinalizedStatus(), releasePerDayDisplay(), SchedulePreview, statusLabelKey(), StreamStatusKey (+16 more)

### Community 63 - "Community 63"
Cohesion: 0.13
Nodes (19): applyGameSnapshot(), parsePlayerStats(), mapField(), RewardGameStatus, rewardGameStatusOf(), createPlatformGameSurface(), decodeGameSnapshot(), FrameworkPlatformGameFinalizeResult (+11 more)

### Community 64 - "Community 64"
Cohesion: 0.20
Nodes (23): AgentTopology(), AnchorAdminWorkspace(), AnchorAdminWorkspaceProps, EMPTY_AGENTS, PlannerProps, RoutePlanner(), TopologyProps, anchorAgentBalance() (+15 more)

### Community 65 - "Community 65"
Cohesion: 0.07
Nodes (26): DOM, ESNext, ./framework/index.ts, ./shared/components/index.ts, compilerOptions, baseUrl, esModuleInterop, isolatedModules (+18 more)

### Community 66 - "Community 66"
Cohesion: 0.12
Nodes (26): createLocalStorageRewardGameStorage, app.actions — registered actions, drop-mode single-flight, guestBlocked, registerConnectWallet, app.bus — in-app pub/sub, app.errors — messageOf + typed is(error, code) error-copy lane, app.events — chain event queries, app.clipboard / app.share / app.resources — copy with toasts, share sheet, host-base asset resolution, app.lifecycle — mount/unmount, loaders, visibility-aware poll, app.notify — single toast surface with guard / guardResult (+18 more)

### Community 67 - "Community 67"
Cohesion: 0.09
Nodes (3): FrameworkQueryResult, FrameworkReadOptions, FrameworkChainSurface

### Community 68 - "Community 68"
Cohesion: 0.19
Nodes (16): ReadCell, configuredPlatformHash(), defineMiniApp(), legacySharedHash(), platformAnchorConfigFromManifest(), platformDeFiConfigFromManifest(), platformEscrowConfigFromManifest(), platformFactoryConfigFromManifest() (+8 more)

### Community 69 - "Community 69"
Cohesion: 0.20
Nodes (17): ActionRail(), ActionRailAction, ActionRailProps, PhaseValue(), PhaseValueProps, resolvePhase(), Skeleton(), SkeletonProps (+9 more)

### Community 70 - "Community 70"
Cohesion: 0.12
Nodes (12): Window, BridgeEventMap, BridgeListener, bridgeRegistry, formatBridgeError(), GameBridge, GameBridgeCarrier, getBridge() (+4 more)

### Community 71 - "Community 71"
Cohesion: 0.18
Nodes (17): attachBridgeToGame(), AUDIO_TOGGLE_BUTTON_STYLE, AutoMobileSize, numericDimension(), PhaserGameComponent(), getBrowserWindow(), isSceneAudioMuted(), SCENE_AUDIO_PRESETS (+9 more)

### Community 72 - "Community 72"
Cohesion: 0.19
Nodes (15): base58Decode(), base58Encode(), bytesToHex(), bytesToPrintableText(), decodeBase64Bytes(), extractHash160Bytes(), hexToBytes(), normalizeScriptHash() (+7 more)

### Community 73 - "Community 73"
Cohesion: 0.19
Nodes (17): buildConfidentialTransferPackage(), ConfidentialTransferInput, ConfidentialTransferPackage, decodeBase64ToBytes(), encodeBytesToBase64(), encryptJsonWithOraclePublicKey(), encryptTextWithOraclePublicKey(), randomHex() (+9 more)

### Community 74 - "Community 74"
Cohesion: 0.18
Nodes (17): AgentAccountInfo, TRUSTANCHOR_AGENT_ACCOUNTS, AnchorAdminInfo, AnchorAgent, asMapValue(), asNumber(), normalizeAgentId(), normalizeHash160OrAddress() (+9 more)

### Community 75 - "Community 75"
Cohesion: 0.16
Nodes (19): mergeAriaIds(), normalizeSelectValue(), OpenUiNotice(), OpenUiNoticeProps, OpenUiPanel(), OpenUiPanelProps, OpenUiProvider(), OpenUiProviderProps (+11 more)

### Community 76 - "Community 76"
Cohesion: 0.18
Nodes (18): AgentAccountInfo, PROFITANCHOR_AGENT_ACCOUNTS, AnchorAdminInfo, AnchorAgent, asMapValue(), asNumber(), normalizeAgentId(), normalizeHash160OrAddress() (+10 more)

### Community 77 - "Community 77"
Cohesion: 0.15
Nodes (18): accountMatches(), ApplicationLogResult, clean(), FrameworkPendingPollOptions, FrameworkPendingTx, FrameworkTxNotification, FrameworkTxOutcomeState, isDisplayHash160() (+10 more)

### Community 79 - "Community 79"
Cohesion: 0.10
Nodes (19): **/*.vue, compilerOptions, baseUrl, paths, types, exclude, extends, include (+11 more)

### Community 80 - "Community 80"
Cohesion: 0.20
Nodes (13): createStatusTimer(), isStickyStatus(), StatusType, STICKY_TYPES, useStatusMessage(), useStatusMessage(), MINIAPP_ACTIONS_KEY, MINIAPP_CONTEXT_KEY (+5 more)

### Community 81 - "Community 81"
Cohesion: 0.11
Nodes (13): f(), Id, idxL, idxR, Kl, Kr, Pi, R_BUF (+5 more)

### Community 82 - "Community 82"
Cohesion: 0.11
Nodes (13): f(), Id, idxL, idxR, Kl, Kr, Pi, R_BUF (+5 more)

### Community 83 - "Community 83"
Cohesion: 0.15
Nodes (19): aa-account-hash.test.ts, platform-defi-surface.test.ts, platform-factory-surface.test.ts, Contract-surface tests owned by neo-miniapps-platform, platform-registry-tenant-surface.test.ts, platform-social-surface.test.ts, app.aa — sponsorship / relay / host-provided session keys with typed capability errors, app.stats / app.achievements / app.db — legacy OS lanes, partially deprecated (+11 more)

### Community 84 - "Community 84"
Cohesion: 0.16
Nodes (19): Game-source tests owned by neo-minigames, phaser-framework.test.ts, platform-game-manifest-config.test.ts (SOLVED_SLOTS ordering), reward-game-sdk-adoption.test.ts, Three-mode balance defaults (Easy 0.02/0.10, Medium 0.10/0.50, Hard 0.20/1.00 GAS), Non-negotiable UI rules for the play surface, Standard GameFi product structure (lobby, start, TEE seed, gameplay, submit, recovery, results), Difficulty progression gate (+11 more)

### Community 85 - "Community 85"
Cohesion: 0.11
Nodes (18): compilerOptions, baseUrl, paths, types, exclude, extends, include, dist (+10 more)

### Community 86 - "Community 86"
Cohesion: 0.18
Nodes (17): AnchorAgentAccount, bytesToHex(), CANDIDATES, hexToBytes(), hostAccountId(), le32(), stringToHex(), AnchorContractArg (+9 more)

### Community 87 - "Community 87"
Cohesion: 0.12
Nodes (15): _0n, _1n, _2n, _8n, RFC-8032, twistedEdwards(), validateOpts(), VERIFY_DEFAULT (+7 more)

### Community 88 - "Community 88"
Cohesion: 0.17
Nodes (7): mockEvents(), mockI18n(), mockPayments(), mockWallet(), ref(), renderWithSetup(), setupMocks()

### Community 89 - "Community 89"
Cohesion: 0.19
Nodes (13): CardFrame(), CardFrameProps, ChipArt(), ChipArtProps, CoinArt(), CoinArtProps, ParticleBurst(), ParticleBurstProps (+5 more)

### Community 90 - "Community 90"
Cohesion: 0.19
Nodes (14): AssetRef, DEFAULT_DECIMALS_BY_ASSET, parseBalanceBigInt(), ReadWalletBalanceOptions, resolveAssetDecimals(), resolveAssetHash(), scaleBalance(), useWalletBalanceReader() (+6 more)

### Community 91 - "Community 91"
Cohesion: 0.14
Nodes (6): bytesToHex(), bytesToNumberLE(), hexToNumber(), assertRstPoint(), bytes255ToNumberLE(), RistPoint

### Community 92 - "Community 92"
Cohesion: 0.18
Nodes (16): GlobalStyleConfig, MiniAppFactoryConfig, MiniAppTemplateOptions, PageConfig, SidebarItemDef, ContentType, DocsConfig, MetadataConfig (+8 more)

### Community 93 - "Community 93"
Cohesion: 0.14
Nodes (10): findNotification(), HALT_LOG, HASH_BYTES, HASH_BYTES_BASE64, makeHarness(), makeStorage(), RAW_TX, RPC_ERROR (+2 more)

### Community 94 - "Community 94"
Cohesion: 0.15
Nodes (10): createMemoryRewardGameStorage(), RewardGameError, balancesOf(), config, hooks, makeFakeDeps(), makeSession(), Op (+2 more)

### Community 95 - "Community 95"
Cohesion: 0.18
Nodes (12): WRITE_PLATFORM_VESTING, assetKind(), createPlatformVestingSurface(), FrameworkPlatformVestingAmount, FrameworkPlatformVestingConfig, FrameworkPlatformVestingCreateInput, FrameworkPlatformVestingInvokeOptions, FrameworkPlatformVestingTx (+4 more)

### Community 96 - "Community 96"
Cohesion: 0.18
Nodes (12): assetKind(), createPlatformEscrowSurface(), FrameworkEscrowAsset, FrameworkPlatformEscrowAmount, FrameworkPlatformEscrowConfig, FrameworkPlatformEscrowCreateInput, FrameworkPlatformEscrowInvokeOptions, FrameworkPlatformEscrowTx (+4 more)

### Community 97 - "Community 97"
Cohesion: 0.18
Nodes (13): GameHomePage(), GameHomePageProps, GameHomePageRulesPreview, HomeShellFeature, HomeShellLeaderboardItem, HomeShellStat, HomeShellTeaser, MiniAppHomeShell() (+5 more)

### Community 98 - "Community 98"
Cohesion: 0.12
Nodes (5): EmbeddedStorageBridgeError, EmbeddedStorageClient, EmbeddedStorageClientOptions, EmbeddedStorageOperation, EmbeddedStorageResponse

### Community 99 - "Community 99"
Cohesion: 0.21
Nodes (16): CI workflow (typecheck + test on Node 22), Publish workflow (npm publish both workspaces on v* tag), Cross-repo tests, CROSS_REPO_TESTS exclusion list in vitest.config.ts, framework-boundary.test.ts, Test ownership follows the code, not the history, @framework/* import alias, GitHub Packages @r3e-network scoped registry (+8 more)

### Community 100 - "Community 100"
Cohesion: 0.19
Nodes (11): WRITE_PLATFORM_DEFI, Amount, createPlatformDeFiSurface(), FrameworkPlatformDeFiConfig, FrameworkPlatformDeFiInvokeOptions, FrameworkPlatformDeFiTx, nonNegative(), PlatformDeFiSurfaceChain (+3 more)

### Community 101 - "Community 101"
Cohesion: 0.15
Nodes (5): createLifecycleSurface(), FrameworkLifecycleSurface, FrameworkPollOptions, LifecycleSurfaceDeps, LifecycleSurfaceService

### Community 103 - "Community 103"
Cohesion: 0.12
Nodes (15): framework/**/*.ts, framework/**/*.tsx, shared/**/*.ts, shared/**/*.tsx, **/test-utils/**, exclude, extends, include (+7 more)

### Community 104 - "Community 104"
Cohesion: 0.33
Nodes (5): CheckinData, EscrowParams, LeaderboardEntry, OSServiceProxy, StreamParams

### Community 105 - "Community 105"
Cohesion: 0.22
Nodes (8): RFC-5869, EMPTY_BUFFER, expand(), extract(), hkdf(), HKDF_COUNTER, NOTE: some libraries treat zero-length array as 'not provided';, HMAC

### Community 106 - "Community 106"
Cohesion: 0.17
Nodes (9): createQueryResult(), createResourcesSurface(), FALLBACK_TOKEN_ART_PATHS, FrameworkResourcesSurface, FrameworkTokenArtUrls, isAbsoluteUrl(), ResourcesSurfaceDeps, withTrailingSlash() (+1 more)

### Community 107 - "Community 107"
Cohesion: 0.18
Nodes (8): FrameworkPlatformAccountSnapshot, FrameworkPlatformAccountSurface, PlatformAccountSurfaceDeps, FrameworkRegistryAbstractAccount, FrameworkRegistryApp, FrameworkRegistryInvokeOptions, FrameworkRegistryTx, VirtualAAAccount

### Community 109 - "Community 109"
Cohesion: 0.19
Nodes (13): buildTokenMap(), __dirname, DRY, expandHex(), files, HEX_TO_TOKEN, insideVarFallback(), isValuePosition() (+5 more)

### Community 110 - "Community 110"
Cohesion: 0.20
Nodes (12): FALLBACK_DETAIL_STYLE, FALLBACK_PANEL_STYLE, fallbackHostStyle(), LazyPhaserGameComponent(), LazyPhaserGameProps, LoadedRuntime, PhaserSceneLoader, positiveDimension() (+4 more)

### Community 111 - "Community 111"
Cohesion: 0.25
Nodes (12): ArtifactFactoryKind, base64ToBytes(), buildFactoryArtifactCall(), bytesToBase64(), concatBytes(), deploymentInitParams(), FactoryArtifactCall, hashToBase64() (+4 more)

### Community 112 - "Community 112"
Cohesion: 0.16
Nodes (6): CheckinProxy, PaymentProxy, OSServices, PlatformServicesOptions, IMPORTANT: In the React runtime, MiniAppRoot creates the instance once via, usePlatformServices()

### Community 113 - "Community 113"
Cohesion: 0.15
Nodes (13): @douyinfe/semi-foundation, @douyinfe/semi-ui, ethers, lucide-react, react, react-dom, peerDependencies, @douyinfe/semi-foundation (+5 more)

### Community 114 - "Community 114"
Cohesion: 0.15
Nodes (13): jsdom, devDependencies, ethers, jsdom, react-dom, @types/react-dom, typescript, vitest (+5 more)

### Community 115 - "Community 115"
Cohesion: 0.21
Nodes (10): ActionModal(), ActionModalProps, ActionModalSize, ActionModalVariant, AppIcon(), AppIconProps, ICON_MAP, MEDAL_COLORS (+2 more)

### Community 116 - "Community 116"
Cohesion: 0.24
Nodes (11): aexists(), ahash(), anumber(), aoutput(), assert, bytes(), exists(), hash() (+3 more)

### Community 117 - "Community 117"
Cohesion: 0.26
Nodes (10): createMockContractState(), createMockDatafeed(), createMockEvents(), createMockPayments(), createMockRNG(), createMockSDK(), createMockWallet(), mockAddress (+2 more)

### Community 118 - "Community 118"
Cohesion: 0.20
Nodes (12): App-catalogue conformance audits (apps/tests/conformance), miniapp-framework-adoption.test.ts, official-token-assets.test.tsx, gasToFixed8, bigint base units for protocol math vs strings for display, app.amount — protocol math on bigint base units, app.fmt — blessed display formatters (address, gas, clock, compact), One shared NEO/GAS amount layer (GAS Fixed8, NEO whole-number only) (+4 more)

### Community 120 - "Community 120"
Cohesion: 0.38
Nodes (9): localStorageAvailable(), safeReadJSON(), safeReadStorage(), safeRemoveStorage(), safeWriteJSON(), safeWriteStorage(), clearCachedValue(), readCachedJSON() (+1 more)

### Community 121 - "Community 121"
Cohesion: 0.17
Nodes (11): description, framework, shared, license, name, private, repository, type (+3 more)

### Community 122 - "Community 122"
Cohesion: 0.21
Nodes (4): ErrorBoundary, ErrorBoundaryProps, ErrorBoundaryState, NeoButton

### Community 123 - "Community 123"
Cohesion: 0.20
Nodes (4): GameProxy, PoolConfig, PoolState, walletMock

### Community 124 - "Community 124"
Cohesion: 0.21
Nodes (10): apps, APPS_DIR, collectSourceFiles(), collectUsedKeys(), discoverApps(), DiscoveredApp, missingKeys(), NON_MINIAPP_DIRS (+2 more)

### Community 125 - "Community 125"
Cohesion: 0.41
Nodes (10): buildOneGateDirectMiniAppUrl(), buildOneGateLaunchUrl(), LaunchParamValue, normalizeMiniAppOrigin(), normalizeOneGateBaseUrl(), normalizeOneGateDappId(), OneGateLaunchParams, safeParamKey() (+2 more)

### Community 126 - "Community 126"
Cohesion: 0.22
Nodes (6): formatClock(), createGameFacade(), createDifficultyRuleSelector(), createGameRules(), DifficultyRuleLike, FrameworkGameRuleConfig

### Community 127 - "Community 127"
Cohesion: 0.22
Nodes (5): GameState, FakeGame, FakeGameConfig, { fakeGames, FakeGameClass }, ProbeScene

### Community 128 - "Community 128"
Cohesion: 0.29
Nodes (10): _2n, _3n, bls(), TODO: export, createHasher(), getFieldBytesLength(), getMinHashLength(), mapHashToField() (+2 more)

### Community 130 - "Community 130"
Cohesion: 0.24
Nodes (9): APPS_DIR, collectSourceFiles(), discoverGameApps(), GAME_LIKE_SOCIAL_APPS, GameApp, gameApps, readAppSources(), SOURCE_EXTENSIONS (+1 more)

### Community 131 - "Community 131"
Cohesion: 0.29
Nodes (5): blockHeight(), createChainPendingSurface(), FrameworkChainPendingDeps, FrameworkPendingHandlers, isPendingEntry()

### Community 133 - "Community 133"
Cohesion: 0.20
Nodes (9): description, exports, license, main, name, publishConfig, registry, type (+1 more)

### Community 135 - "Community 135"
Cohesion: 0.42
Nodes (9): Archetype contract declared in the framework registry, Deterministic TEE verification (seed + input log + replay rule), Falling Fruit, Knife Timing, GameFi Microgame Backlog, Microgame selection criteria (10-90s round, one core verb, deterministic verification, skill signal, mobile-first), Stack Tower, Ten Second Stand (+1 more)

### Community 136 - "Community 136"
Cohesion: 0.28
Nodes (9): Start-game payment selection: existing credit first, prepaid GAS fallback, openRewardGameSession, recordRewardGameOp, Morpheus confidential session and sealed op-log, app.chain — typed query lane, fire-and-notify write lane, arg builders, signing, multi-invoke, waitForState, app.credits — platform credits: on-chain buys, instant feeless spends, stale-flagged fallback reads, app.funds — payAndCall / prepayAndCall / receiptPay payment lanes + prepaid-credit recovery, app.oracle — HTTP/VRF/compute/seal envelopes, dispatch, dataFeed reader, seal client (+1 more)

### Community 137 - "Community 137"
Cohesion: 0.22
Nodes (9): optional, optional, optional, optional, peerDependenciesMeta, @douyinfe/semi-foundation, @douyinfe/semi-ui, ethers (+1 more)

### Community 138 - "Community 138"
Cohesion: 0.22
Nodes (9): files, **/*, !**/*.map, !test/**, !**/*.test.ts, !**/*.test.tsx, !tsconfig.json, !vitest.config.ts (+1 more)

### Community 141 - "Community 141"
Cohesion: 0.43
Nodes (7): buildMiniAppContractRegistry(), defaultRepoRoot(), generatedTargetPath(), main(), NETWORK_MANIFEST_KEYS, renderGeneratedTs(), sortByKey()

### Community 142 - "Community 142"
Cohesion: 0.36
Nodes (8): Neo Service Layer repo banner (1200x300 SVG, neo-green/cyan gradients on #0D1117), NeoHub app mark: hexagonal node-graph with inscribed N, Neo Service Layer logo lockup: shield mark + 'TEE-Powered MiniApp Platform for Neo N3' tagline, NeoHub brand identity (green-to-cyan neon on near-black, hexagonal node-graph motif), NeoHub logo lockup (hex network mark + NeoHub wordmark, transparent WebP), NeoHub hero banner: neon circuit cityscape with centered NeoHub wordmark, NeoHub slim banner strip (wide aspect, neon NEOHUB wordmark), NeoHub gradient separator rule (green-to-cyan)

### Community 143 - "Community 143"
Cohesion: 0.25
Nodes (5): ContractAvailabilityCard(), ContractAvailabilityCardProps, CardVariant, NeoCard(), NeoCardProps

### Community 145 - "Community 145"
Cohesion: 0.29
Nodes (7): _0n, _1n, RFC-7748, montgomery(), NOTE: not really montgomery curve, just bunch of very specific methods for X2551, validateOpts(), CURVE

### Community 148 - "Community 148"
Cohesion: 0.29
Nodes (4): EmptyStateArt(), EmptyStateArtProps, ErrorArt(), StatusArtProps

### Community 152 - "Community 152"
Cohesion: 0.29
Nodes (6): browser, node:crypto, node, ./crypto, sideEffects, type

### Community 153 - "Community 153"
Cohesion: 0.43
Nodes (6): appPath(), APPS_ROOT, attributionPath(), MIGRATIONS, read(), runtimeArt()

### Community 154 - "Community 154"
Cohesion: 0.38
Nodes (4): gitFiles(), PHASER_GAS_TOKEN_SCENES, readRepo(), repoRoot()

### Community 155 - "Community 155"
Cohesion: 0.52
Nodes (5): playAreaFiles(), readRepoFile(), repoRoot(), sourceOffenders(), trackedFiles()

### Community 156 - "Community 156"
Cohesion: 0.33
Nodes (4): canvasContext2d, canvasContextState, createMemoryStorage(), ensureLocalStorage()

### Community 159 - "Community 159"
Cohesion: 0.33
Nodes (6): scripts, test, test:cross-repo, test:framework, test:shared, typecheck

### Community 162 - "Community 162"
Cohesion: 0.40
Nodes (5): collectSourceFiles(), repoRoot, sharedRoot, SKIP_DIRS, SOURCE_OF_TRUTH

### Community 163 - "Community 163"
Cohesion: 0.40
Nodes (3): frameworkRoot, repoRoot, sharedRoot

### Community 165 - "Community 165"
Cohesion: 0.50
Nodes (3): CROSS_REPO_TESTS, currentDir, repoRoot

### Community 166 - "Community 166"
Cohesion: 0.40
Nodes (4): CREDENTIAL_BRIDGE, SENSITIVE_BRIDGE_METHODS, STORAGE_BRIDGE, WALLET_BRIDGE

### Community 168 - "Community 168"
Cohesion: 0.40
Nodes (3): APPS_DIR, miniapps, NON_MINIAPP_DIRS

### Community 169 - "Community 169"
Cohesion: 0.70
Nodes (3): backingCss(), read(), repoRoot()

### Community 171 - "Community 171"
Cohesion: 0.50
Nodes (3): CROSS_REPO_TESTS, currentDir, repoRoot

### Community 174 - "Community 174"
Cohesion: 0.50
Nodes (4): repository, directory, type, url

### Community 175 - "Community 175"
Cohesion: 0.83
Nodes (3): repoFile(), repoRoot(), trackedFiles()

### Community 186 - "Community 186"
Cohesion: 0.67
Nodes (3): @r3e-network/neo-miniapp-framework, dependencies, @r3e-network/neo-miniapp-framework

### Community 188 - "Community 188"
Cohesion: 0.67
Nodes (3): scripts, test, test:cross-repo

## Knowledge Gaps
- **885 isolated node(s):** `RpcExecution`, `ApplicationLogResult`, `RawTransactionResult`, `RpcEnvelope`, `PendingEnvelope` (+880 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **69 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SHA256` connect `Community 33` to `Community 42`, `Community 15`, `Community 22`, `Community 111`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Why does `mapToCurveSimpleSWU()` connect `Vendored Curve Primitives` to `Framework Errors and Credits`, `Community 51`, `Vendored BLS12-381`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Why does `createObservable()` connect `Framework Errors and Credits` to `NEP-21 and OS Edge Client`, `Abstract Account Relay`, `Guest Game Kit`, `Reward Game SDK`, `Error Surface Translation`, `Chain Error Classification`, `Credits Surface`, `Community 16`, `Community 21`, `Community 23`, `Community 24`, `Community 25`, `Community 27`, `Community 29`, `Community 32`, `Community 34`, `Community 36`, `Community 41`, `Community 44`, `Community 45`, `Community 46`, `Community 48`, `Community 50`, `Community 62`, `Community 68`, `Community 74`, `Community 76`, `Community 80`, `Community 88`, `Community 90`, `Community 94`, `Community 117`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **What connects `RpcExecution`, `ApplicationLogResult`, `RawTransactionResult` to the rest of the system?**
  _885 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Framework Errors and Credits` be split into smaller, more focused modules?**
  _Cohesion score 0.04104379753474954 - nodes in this community are weakly interconnected._
- **Should `Chain and Amount Surfaces` be split into smaller, more focused modules?**
  _Cohesion score 0.034427284427284426 - nodes in this community are weakly interconnected._
- **Should `NEP-21 and OS Edge Client` be split into smaller, more focused modules?**
  _Cohesion score 0.04769038701622971 - nodes in this community are weakly interconnected._