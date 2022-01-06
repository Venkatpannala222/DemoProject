it("CancelTransfer", async function() {

  await navigateToMoveMoney();
  await SelectFromAccount(Transfers.sameBankAccount.fromAccount);
  await SelectToAccount(Transfers.sameBankAccount.toAccount);
  await EnterAmount(Transfers.sameBankAccount.amountValue);
  await SelectFrequency("Daily");
  await SelectDateRange();
  await EnterNoteValue("SameBank-CancelTransfer");
  await CancelTransfer();
  await verifyAccountsLandingScreen();

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

  //   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
  //   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"SameBank-CancelTransfer");

  //   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);

  //   await kony.automation.playback.waitFor(["frmReview","btnCancel"]);
  //   kony.automation.button.click(["frmReview","btnCancel"]);

  //   await kony.automation.playback.waitFor(["frmReview","CustomPopup","btnYes"]);
  //   kony.automation.button.click(["frmReview","CustomPopup","btnYes"]);

  //   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
  //   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

},TimeOuts.Transfers.transfer);