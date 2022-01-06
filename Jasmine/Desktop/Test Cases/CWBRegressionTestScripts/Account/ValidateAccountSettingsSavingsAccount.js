it("ValidateAccountSettingsSavingsAccount", async function() {

  await clickOnFirstSavingsAccount();
  await SavingsAccountQuickActionsSecondaryOption("Update Account Settings");//Added new function By Tapasya "SelectQuickActionsSecondaryOption"
  await MoveBackToDashBoard_ProfileManagement();
},350000);