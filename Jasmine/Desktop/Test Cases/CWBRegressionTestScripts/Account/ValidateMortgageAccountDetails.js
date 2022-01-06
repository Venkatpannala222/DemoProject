it("ValidateMortgageAccountDetails", async function() {
  
 
  await clickOnFirstMortgageAccount();
  //added new function in AllAccounts.js by Tapasya "VerifyMortgageAccountDetails" 
  await VerifyMortgageAccountDetails();
  await verifyAccountsLandingScreen();
  
},450000);