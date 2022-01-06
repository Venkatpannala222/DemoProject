it("ValidateNonRegisteredTermDepositAccountDetails", async function() {
  
  await clickOnFirstNonRegisteredTermDepositAccount();
  //added new function in AllAccounts.js by Tapasya "VerifyNonRegisteredTermDepositAccountDetails" 
  await VerifyNonRegisteredTermDepositAccountDetails();
  await verifyAccountsLandingScreen();
  
},450000);