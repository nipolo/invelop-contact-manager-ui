export const urlRoutes = {
  postGetAccessToken: 'auth/get-access-token',
  postRefreshAccessToken: 'auth/refresh-access-token',
  putRevokeRefreshToken: 'auth/revoke-refresh-token',

  postUsers: 'users',
  getCheckEmailAlreadyTaken: 'users/check-email-already-taken',
  getUseResetToken: 'users/use-reset-token',
  getConfirmEmail: 'users/confirm-email',
  postGenerateResetToken: 'users/generate-reset-token',
  postResetPassword: 'users/reset-password',
  putResendConfirmationEmail: 'users/resend-confirmation-email',
  widgets: {
    tradingHistory: 'widgets/trading-history',
    averageHoldingPosition: 'widgets/average-holding-position',
    priceGraph: 'widgets/price-graph',
    ordersSummary: 'widgets/orders-summary'
  }
};
