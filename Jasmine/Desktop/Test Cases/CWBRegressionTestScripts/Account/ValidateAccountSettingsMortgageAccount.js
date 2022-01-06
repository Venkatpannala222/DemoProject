it("ValidateAccountSettingsMortgageAccount", async function() {

  await clickOnFirstMortgageAccount();
  await ClickUpdateAccountSettings();//Added new function By Tapasya "ClickUpdateAccountSettings"
  await MoveBackToDashBoard_ProfileManagement();
},350000);