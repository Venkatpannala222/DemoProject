it("ValidateAccountSettingsTermLoanAccount", async function() {

  await clickOnFirstLoanAccount();
  await ClickUpdateAccountSettings();//Added new function By Tapasya "ClickUpdateAccountSettings"
  await MoveBackToDashBoard_ProfileManagement();
},350000);