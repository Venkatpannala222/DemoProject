it("TransactionSectionHeaders", async function() {

  await clickOnFirstCheckingAccount();
  await TransactionHeadersValidation();
  await MoveBackToLandingScreen_AccDetails();
},350000);