/**
 * Async helpers — re-exported from the framework canonical.
 *
 * The implementation moved to framework/utils/async-utils.ts (S0 utils
 * consolidation); this file keeps existing `@shared/utils/async-utils`
 * imports working with the SAME function identities.
 */

export {
  handleAsync,
  handleContractOperation,
  withTimeout,
  retryAsync,
  pollForEvent,
  safeAsync,
} from "@r3e-network/neo-miniapp-framework/utils/async-utils";
