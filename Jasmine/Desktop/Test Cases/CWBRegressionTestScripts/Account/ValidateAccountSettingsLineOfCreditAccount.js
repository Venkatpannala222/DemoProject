it("ValidateAccountSettingsLineOfCreditAccount", async function() {

  await clickOnFirstCreditCardAccount();
  await ClickUpdateAccountSettings();//Added new function By Tapasya "ClickUpdateAccountSettings"
  await MoveBackToDashBoard_ProfileManagement();
},350000);