it("ValidateAccountSettingsChequingAccount", async function() {

  await clickOnFirstCheckingAccount();
  await ChequingAccountQuickActionsSecondaryOption("Update Account Settings");//Added new function By Tapasya "ChequingAccountQuickActionsSecondaryOption"
  await MoveBackToDashBoard_ProfileManagement();
},350000);