/**
 * SafeStorage — re-exported from the framework canonical.
 *
 * The implementation moved to framework/utils/safe-storage.ts (S0 utils
 * consolidation); this file keeps existing `@shared/utils/safe-storage`
 * imports working with the SAME function identities.
 */

export {
  localStorageAvailable,
  safeReadStorage,
  safeWriteStorage,
  safeRemoveStorage,
  safeReadJSON,
  safeWriteJSON,
} from "@r3e-network/neo-miniapp-framework/utils/safe-storage";
