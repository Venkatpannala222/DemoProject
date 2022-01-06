it("ValidateAccountSettingsLeaseAccount", async function() {

  await clickOnFirstLeaseAccount();
 await ClickUpdateAccountSettings();//Added new function By Tapasya "ClickUpdateAccountSettings"
  await MoveBackToDashBoard_ProfileManagement();
  await verifyBBAccountsLandingScreen();
},350000);