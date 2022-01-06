it("DailySheduledTransfer-DateRange", async function() {
  var frequency = "Daily";
  var Range = "DateRange";
  await navigateToMoveMoney();
  await SelectFromAccount(Transfers.sameBankAccount.fromAccount);
  await SelectToAccount(Transfers.sameBankAccount.toAccount);
  await EnterAmount(Transfers.sameBankAccount.amountValue);
  await SelectFrequency("Daily");
  await SelectDateRange();
  await EnterNoteValue("DailySheduleTransferDateRange");
  await VerifyTransferConfirmationscreen_ReccurringTransfer(frequency,Range);
  await ConfirmTransfer();
  await VerifyTransferSuccesscreenRightPanel_ReccurringTransfer(frequency,Range);
  await VerifyTransferSuccessMessage();
  await verifyAccountsLandingScreen();

  //   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
  //   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

  //   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
  //   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
  //   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
  //   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);

  //   await kony.automation.playback.wait(10000);
  //   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
  //   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);
  //   //await kony.automation.playback.wait(5000);
  //    //Enter Recipitent Name
  //   await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferTo"]);
  //   kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],"Dan Markus");
  //   await kony.automation.playback.wait(5000);
  //   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
  //   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]);


  //   await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"]);
  //   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1");

  //   kony.automation.flexcontainer.click(["frmFastTransfers","flxContainer4"]);
  //   kony.automation.listbox.selectItem(["frmFastTransfers","lbxFrequency"], "Daily");
  //   kony.automation.calendar.selectDate(["frmFastTransfers","calSendOnNew"], [10,25,2021]);
  //   kony.automation.calendar.selectDate(["frmFastTransfers","calEndingOnNew"], [11,25,2021]);

  //   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
  //   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"SameBank-DailySheduledTransfer-DateRange");

  //   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
  //   await kony.automation.playback.waitFor(["frmReview","btnConfirm"]);
  //   kony.automation.button.click(["frmReview","btnConfirm"]);

  //   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblTransactionMessage"]);
  //   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully scheduled your transfer");

  //   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"]);
  //   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);

  //   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
  //   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

},TimeOuts.Transfers.transfer);