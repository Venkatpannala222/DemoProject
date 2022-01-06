it("ValidateBillPayOptionSavingsAccount", async function() {

  await clickOnFirstSavingsAccount();  
  await SelectQuickActionsOption("Pay Bill");//Added new function By Tapasya "SelectQuickActionsOption"
  await BillPayValidationAllAccounts(); //Added new function By Tapasya "BillPayValidationAllAccounts"
  await verifyAccountsLandingScreen();//changing from "MoveBackToLandingScreen_Accounts" to "verifyAccountsLandingScreen" bby Tapasya  
},350000);