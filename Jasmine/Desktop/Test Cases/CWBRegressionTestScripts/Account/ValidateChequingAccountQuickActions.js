it("ValidateChequingAccountQuickActions", async function() {
  
  await clickOnFirstCheckingAccount();
  await verifyChequingAccountQuickActionsOptions(); //Added new function By Tapasya
  await verifyAccountsLandingScreen();//changing from "MoveBackToLandingScreen_Accounts" to "verifyAccountsLandingScreen" bby Tapasya
  
  
},350000);