it("DailySheduledTransfer-Occurences", async function() {
  var frequency = "Daily";
  var Range = "DateRange";  
  await navigateToMoveMoney();
 await SelectFromAccount(Transfers.sameBankAccount.fromAccount);
  await SelectToAccount(Transfers.sameBankAccount.toAccount);
  await EnterAmount(Transfers.sameBankAccount.amountValue);
  await SelectFrequency("Daily");
  await SelectOccurences("2");
  await EnterNoteValue("DailySheduleTransferOccur");
  await VerifyTransferConfirmationscreen_Occurrences(frequency,Range);
  await ConfirmTransfer();
  await VerifyTransferSuccesscreenRightPanel_Occurences(frequency,Range);
  await VerifyTransferSuccessMessage();
 await verifyAccountsLandingScreen();
  },TimeOuts.Transfers.transfer);