it("ValidateMoveMoneyOptionChequingAccount", async function() {

  await clickOnFirstCheckingAccount();
  await MoveMoneyAllAccountsValidation();//Added new function By Tapasya
  await MoveBackToLandingScreen_Transfers();
  await verifyAccountsLandingScreen();//changing from "MoveBackToLandingScreen_Accounts" to "verifyAccountsLandingScreen" bby Tapasya
},350000);