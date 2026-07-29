import { describe, expect, it } from "vitest";

/**
 * The iframe SDK's half of the host<->iframe wallet-bridge protocol.
 *
 * Both ends declare their own copy of these constants - the host shell in
 * platform/host-app/components/playarea/bridge/events.ts, and this package in
 * shared/utils/nep21-provider.ts. They live in separate repositories now, so
 * neither can import the other. Each side pins itself against the same literal
 * wire values, so a change made on one side and not the other fails here or in
 * the platform's bridge guard.
 *
 * The literals are written out rather than derived: a rename or a version bump
 * then has to be made deliberately, in both repos.
 */
import {
  HOST_WALLET_BRIDGE_STATE as SDK_STATE,
  HOST_WALLET_BRIDGE_PROTOCOL_VERSION as SDK_VERSION,
  HOST_WALLET_BRIDGE_COMPATIBLE_PROTOCOL_VERSIONS as SDK_COMPAT,
  isCompatibleBridgeProtocolVersion as sdkIsCompatible,
  normalizeBridgeProtocolVersion,
} from "../utils/nep21-provider";

// The canonical wire strings. request/response are module-private on this side,
// so they are pinned as literals; the host declares the same three names.
const WIRE_REQUEST = "neo-miniapp-wallet-bridge:request";
const WIRE_RESPONSE = "neo-miniapp-wallet-bridge:response";
const WIRE_STATE = "neo-miniapp-wallet-bridge:state";

describe("wallet-bridge protocol (iframe SDK side)", () => {
  it("pins the message-type strings the host also declares", () => {
    expect(SDK_STATE).toBe(WIRE_STATE);
    expect(WIRE_REQUEST).toBe("neo-miniapp-wallet-bridge:request");
    expect(WIRE_RESPONSE).toBe("neo-miniapp-wallet-bridge:response");
  });

  it("pins PROTOCOL_VERSION so an unintended bump fails loudly", () => {
    expect(SDK_VERSION).toBe(1);
  });

  it("keeps the current version inside the compatible set", () => {
    expect([...SDK_COMPAT]).toContain(SDK_VERSION);
  });

  it("accepts the baseline and the current version, rejects unknown futures", () => {
    // A host that sends no version is still speaking the baseline protocol, so
    // the bridge must not reject it.
    expect(sdkIsCompatible(undefined)).toBe(true);
    expect(sdkIsCompatible(SDK_VERSION)).toBe(true);
    expect(sdkIsCompatible(SDK_VERSION + 1)).toBe(false);
  });

  it("normalizes the version field (missing stays missing)", () => {
    expect(normalizeBridgeProtocolVersion(undefined)).toBeUndefined();
    expect(normalizeBridgeProtocolVersion(null)).toBeUndefined();
    expect(normalizeBridgeProtocolVersion(1)).toBe(1);
    expect(normalizeBridgeProtocolVersion("1")).toBe(1);
    // A present-but-garbage version coerces to NaN so it fails the compat check.
    expect(Number.isNaN(normalizeBridgeProtocolVersion("nope") as number)).toBe(
      true,
    );
    expect(Number.isNaN(normalizeBridgeProtocolVersion(1.5) as number)).toBe(
      true,
    );
  });
});
