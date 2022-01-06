it("ValidateManageBillPayChequingAccount", async function() {

  await clickOnFirstCheckingAccount();
  await ChequingAccountQuickActionsSecondaryOption("Manage Bill Pay Payees");//Added new function By Tapasya "SelectQuickActionsSecondaryOption"
  await MoveBackToDashBoard_ManagePayees();
},350000);