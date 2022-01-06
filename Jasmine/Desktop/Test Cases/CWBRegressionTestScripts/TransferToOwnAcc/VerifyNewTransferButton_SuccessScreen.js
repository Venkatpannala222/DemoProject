it("VerifyNewTransferButton_SuccessScreen", async function() {
  await navigateToMoveMoney();
  await SelectFromAccount(Transfers.ownAccount.fromAccount);
  await SelectToAccount(Transfers.ownAccount.toAccount);
  await EnterAmount(Transfers.ownAccount.amountValue);
  await EnterNoteValue("OwnAcc-OneTimeTransfer");
  await ConfirmTransfer();
  await ClickOnNewTransfer_TransferAcknowledgemntScreen();
  await MoveBackToLandingScreen_Transfers();
  await verifyAccountsLandingScreen();
},TimeOuts.Transfers.transfer);