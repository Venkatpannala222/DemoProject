it("ValidateLeaseAccountDetails", async function() {
  
  //Added new function in AllAccounts.js "clickOnFirstLeaseAccount" by Tapasya
  await clickOnFirstLeaseAccount();
  //added new function in AllAccounts.js by Tapasya "VerifyLeaseAccountDetails" 
  await VerifyLeaseAccountDetails();
  await verifyAccountsLandingScreen();
  
},450000);