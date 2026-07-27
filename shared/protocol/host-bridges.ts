/**
 * Wire constants for the host <-> MiniApp postMessage bridges.
 *
 * Both ends of every bridge now live in different repositories - the host in
 * neo-miniapps-platform, the clients in neo-minigames and neo-miniapps - so
 * neither side can import the other's copy. This module is the one declaration
 * they share, and each side's guard test asserts against it. Change a value here
 * and both sides fail together, which is the point: a silently renamed event was
 * previously a runtime mismatch nobody caught until an app went dark in
 * production.
 *
 * Bump the protocol version rather than changing an existing event name. Hosts
 * accept the compatible versions listed alongside each bridge, so a client can
 * be published before or after the host that answers it.
 */

/** Wallet bridge: the general host wallet surface every app can call. */
export const WALLET_BRIDGE = Object.freeze({
  REQUEST: "neo-miniapp-wallet-bridge:request",
  RESPONSE: "neo-miniapp-wallet-bridge:response",
  STATE: "neo-miniapp-wallet-bridge:state",
  RESULT: "neo-miniapp-wallet-bridge:result",
  ERROR: "neo-miniapp-wallet-bridge:error",
  PROTOCOL_VERSION: 1,
  COMPATIBLE_PROTOCOL_VERSIONS: Object.freeze([1]) as readonly number[],
});

/**
 * Credential bridge: a host-held gateway credential handed to one allowlisted
 * app. Scoped deliberately - widening the allowlist is a security decision, so
 * the app id is part of the protocol rather than configuration.
 */
export const CREDENTIAL_BRIDGE = Object.freeze({
  REQUEST: "neo-miniapp-credential:request",
  RESPONSE: "neo-miniapp-credential:response",
  PROTOCOL_VERSION: 1,
  SUPPORTED_APP_ID: "miniapp-automation-copilot",
});

/**
 * Storage bridge: device-local persistence for allowlisted first-party apps,
 * which cannot use their own origin's storage inside a sandboxed frame.
 */
export const STORAGE_BRIDGE = Object.freeze({
  REQUEST: "neo-miniapp-storage:request",
  RESPONSE: "neo-miniapp-storage:response",
  PROTOCOL_VERSION: 1,
  /** Apps the host will persist for. Adding one is a security decision. */
  SUPPORTED_APP_IDS: Object.freeze([
    "miniapp-zhuada-e",
    "miniapp-forever-album",
  ]) as readonly string[],
});

/** Methods the host must never answer without an explicit user confirmation. */
export const SENSITIVE_BRIDGE_METHODS: readonly string[] = Object.freeze([
  "signMessage",
  "invoke",
  "send",
]);
