it("ValidateChequingAccountDetails", async function() {
  
  await clickOnFirstCheckingAccount();
  await VerifyChequingAccountDetails();
 //added new function in AllAccounts.js by Tapasya"VerifyChequingAccountDetails"
 // await MoveBackToLandingScreen_Accounts();
  await verifyAccountsLandingScreen();//changing from "MoveBackToLandingScreen_Accounts" to "verifyAccountsLandingScreen" bby Tapasya
  
  
},450000);