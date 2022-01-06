it("OwnTransferVerifyConfirmation", async function() {
  await navigateToMoveMoney();
  await SelectFromAccount(Transfers.ownAccount.fromAccount);
  await SelectToAccount(Transfers.ownAccount.toAccount);
  await EnterAmount(Transfers.ownAccount.amountValue);
  await EnterNoteValue("OwnAcc-OneTimeTransfer");
  await VerifyTransfer_OneTimeTransfer();
  await MoveBackToLandingScreen_TransfersReviewScreen();
},180000);