export const selectTransactionsSummary = state =>
  state.transactionsSummary.summary;
export const selectIsLoading = state => state.transactionsSummary.isLoading;
export const selectError = state => state.transactionsSummary.error;
export const selectExpenseSummary = state =>
  state.transactionsSummary.expenseSummary;
export const selectIncomeSummary = state =>
  state.transactionsSummary.incomeSummary;
