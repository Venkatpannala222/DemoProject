it("ModifyOneTimeTransfer", async function() {

  await navigateToMoveMoney();
  await SelectFromAccount(Transfers.ownAccount.fromAccount);
  await SelectToAccount(Transfers.ownAccount.toAccount);
  await EnterAmount(Transfers.ownAccount.amountValue);
  await SelectFrequency("Daily");
  await SelectDateRange();
  await EnterNoteValue("OwnAcc-ModifyTransfer");
  await ModifyOnTimeTransfer();
  await SelectFromAccount(Transfers.ownAccount.fromAccount);
  await SelectToAccount(Transfers.ownAccount.toAccount);
  await EnterAmount(Transfers.ownAccount.amountValue);
  await SelectFrequency("Daily");
  await SelectDateRange();
  await EnterNoteValue("OwnAcc-ModifyTransfer");
  await ConfirmTransfer();
  await VerifyTransferSuccessMessage();
  await verifyAccountsLandingScreen();

},TimeOuts.Transfers.transfer);