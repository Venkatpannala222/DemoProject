it("ValidateRegisteredTermDepositAccountDetails", async function() {
  
  await clickOnFirstRegisteredTermDepositAccount();
  //added new function in AllAccounts.js by Tapasya "VerifyNonRegisteredTermDepositAccountDetails" 
  await VerifyRegisteredTermDepositAccountDetails();
  await verifyAccountsLandingScreen();
  
},450000);