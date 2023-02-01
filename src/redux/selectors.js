export const selectIsLogged = state => state.session.isAuth;
export const selectAuthToken = state => state.session.token;
export const selectIsModalOpen = state => state.global.isModalAddTransactionOpen;
export const selectCategories = state => state.finance.categories;
export const selectTransactions = state => state.finance.transactions;
export const selectIsLoading = state => state.global.isLoading;