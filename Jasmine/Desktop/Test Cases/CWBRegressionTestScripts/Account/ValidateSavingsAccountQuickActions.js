it("ValidateSavingsAccountQuickActions", async function() {
  
  await clickOnFirstSavingsAccount();
  await verifySavingsAccountQuickActionsOptions(); //Added new function By Tapasya
  await verifyAccountsLandingScreen();//changing from "MoveBackToLandingScreen_Accounts" to "verifyAccountsLandingScreen" bby Tapasya
  
},350000);