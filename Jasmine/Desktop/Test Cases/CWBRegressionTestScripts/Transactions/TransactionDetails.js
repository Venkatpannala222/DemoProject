it("TransactionDetails", async function() {

  await clickOnFirstCheckingAccount();
  await TransactionDetailsValidation();
  await MoveBackToLandingScreen_AccDetails();
},350000);