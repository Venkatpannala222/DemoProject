it("ValidateRegisteredSavingsAccountDetails", async function() {
  
  //Added new function in AllAccounts.js "clickOnFirstRegisteredSavingsAccount" by Tapasya
  await clickOnFirstRegisteredSavingsAccount();
  //added new function in AllAccounts.js by Tapasya "VerifyLeaseAccountDetails" 
  await VerifyRegisteredSavingsAccountDetails();
  await verifyAccountsLandingScreen();
  
},450000);