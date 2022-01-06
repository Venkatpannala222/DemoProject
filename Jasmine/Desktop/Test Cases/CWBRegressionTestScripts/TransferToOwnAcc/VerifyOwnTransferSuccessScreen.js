it("VerifyOwnTransferSuccessScreen", async function() {
    await navigateToMoveMoney();
  await SelectFromAccount(Transfers.ownAccount.fromAccount);
  await SelectToAccount(Transfers.ownAccount.toAccount);
  await EnterAmount(Transfers.ownAccount.amountValue);
  await SelectFrequency("Daily");
  await SelectDateRange();
  await EnterNoteValue("OwnAcc-ModifyTransfer");
  await VerifyTransferConfirmationscreen_OneTimeTransfer();
  await ConfirmTransfer();
  await VerifyTransferSuccessScreenRightPanel_OneTime();
  await ClickOnAccountsButton_TransferAcknowledgemntScreen();
  await verifyAccountsLandingScreen();
},TimeOuts.Transfers.transfer);