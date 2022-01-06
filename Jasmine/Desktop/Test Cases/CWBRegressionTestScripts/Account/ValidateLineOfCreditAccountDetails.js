it("ValidateLineOfCreditAccountDetails", async function() {
  
  
  await clickOnFirstCreditCardAccount();
  //added new function in AllAccounts.js by Tapasya "VerifyLineOfCreditAccountDetails" 
  await VerifyLineOfCreditAccountDetails();
  await verifyAccountsLandingScreen();
  
},450000);