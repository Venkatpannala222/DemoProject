it("ValidateSavingAccountDetails", async function() {
  
  await clickOnFirstSavingsAccount();
  await VerifySavingsAccountDetails();
  await VerifySavingsAccount_InfoTab();
  await MoveBackToLandingScreen_AccDetails();  
},450000);