it("ValidatePayeeSortIcon", async function() {

  await NavigateToBillPay();
  await PayeeSortIconOneTimePaymentValidation();
  await PayeeSortIconScheduledTabValidation();
  await PayeeSortIconHistoryTabValidation();
  await PayeeSortIconMangeePayeeTabValidation();
  await MoveBackToDashBoard_ManagePayees();
  await verifyAccountsLandingScreen();
},400000);