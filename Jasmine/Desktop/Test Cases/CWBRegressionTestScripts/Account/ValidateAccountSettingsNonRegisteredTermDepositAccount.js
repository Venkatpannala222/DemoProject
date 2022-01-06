it("ValidateAccountSettingsNonRegisteredTermDepositAccount", async function() {

  await clickOnFirstNonRegisteredTermDepositAccount();
  await ClickUpdateAccountSettings();//Added new function By Tapasya "ClickUpdateAccountSettings"
  await MoveBackToDashBoard_ProfileManagement();
},350000);