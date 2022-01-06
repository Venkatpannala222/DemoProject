it("ValidateAccountSettingsRegisteredTermDepositAccount", async function() {

  await clickOnFirstRegisteredTermDepositAccount();
  await ClickUpdateAccountSettings();//Added new function By Tapasya "ClickUpdateAccountSettings"
  await MoveBackToDashBoard_ProfileManagement();
},350000);