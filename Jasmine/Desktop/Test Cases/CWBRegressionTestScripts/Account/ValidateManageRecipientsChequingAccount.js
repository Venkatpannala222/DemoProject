it("ValidateManageRecipientsChequingAccount", async function() {

  await clickOnFirstCheckingAccount();
  await ChequingAccountQuickActionsSecondaryOption("Manage Recipients");//Added new function By Tapasya "SelectQuickActionsSecondaryOption"
  await MoveBacktoDashboard_ManageRecipitent();
},350000);