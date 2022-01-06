it("ValidateStopChequePaymentChequingAccount", async function() {

  await clickOnFirstCheckingAccount();
  await ChequingAccountQuickActionsSecondaryOption("Stop Cheque Payment");
  await MoveBackToAccLandingScreen_StopCheq();
},350000);