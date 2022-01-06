it("ValidateTermLoanAccountDetails", async function() {
  
  
  await clickOnFirstLoanAccount();
  //added new function in AllAccounts.js by Tapasya "VerifyTermLoanAccountDetails" 
  await VerifyTermLoanAccountDetails();
  await verifyAccountsLandingScreen();
  
},450000);