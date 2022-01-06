it("RepeatSendMoney", async function() {
  
  //OnetimeTransfer
//   await navigateToTransfers();
//   await SelectFromAccount();
//   await SelectToAccount("SameBankAccJasmine");
//   await EnterAmount("1");
//   await EnterNoteValue("OneTimeTransferWithTransferNow");
//   await ConfirmTransfer();
//   await VerifyTransferSuccessMessage();
//   await verifyAccountsLandingScreen();
 
  //repeat Transfer
  await navigateToTransferActivities();
  await navigateToPastTransfersTab();
  await verifyRepeatTransferFunctionality("SameBank");
  await verifyAccountsLandingScreen();


//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

//   // Do Transfer then Repeat to avoid any issues
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);

//   await kony.automation.playback.wait(10000);
//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);
//   //await kony.automation.playback.wait(5000);
//   await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferTo"]);
//   kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],"Dan Markus");
//   await kony.automation.playback.wait(5000);
//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]);


//   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1");
//   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"SameBank-OneTimeTransferWithTransferNow");
//   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
//   await kony.automation.playback.waitFor(["frmReview","btnConfirm"]);
//   kony.automation.button.click(["frmReview","btnConfirm"]);
//   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblTransactionMessage"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully completed the transfer");

//   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"]);
//   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");


//   // Repeat Transfer
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxPayBills"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxPayBills"]);

//   await kony.automation.playback.waitFor(["frmFastTransfersActivites","btnRecent"]);
//   kony.automation.button.click(["frmFastTransfersActivites","btnRecent"]);
//   await kony.automation.playback.wait(5000);

//   var noTransfers=await kony.automation.playback.waitFor(["frmFastTransfersActivites","rtxNoPaymentMessage"],10000);

//   if(noTransfers){
//     await kony.automation.playback.waitFor(["frmFastTransfersActivites","customheadernew","flxAccounts"]);
//     kony.automation.flexcontainer.click(["frmFastTransfersActivites","customheadernew","flxAccounts"]);
//     await kony.automation.playback.wait(5000);
//     await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//     expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
//   }else{
//     await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers"]);
//     kony.automation.button.click(["frmFastTransfersActivites","segmentTransfers[0]","btnAction"]);
//     await kony.automation.playback.wait(5000);

//     await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
//     kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"SameBank-RepeatSendMoney_Automation");

//     await kony.automation.playback.waitFor(["frmFastTransfers","btnConfirm"]);
//     kony.automation.button.click(["frmFastTransfers","btnConfirm"]);

//     await kony.automation.playback.waitFor(["frmReview","btnConfirm"]);
//     kony.automation.button.click(["frmReview","btnConfirm"]);

//     await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"]);
//     kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);

//     await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//     expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
//   }



},TimeOuts.Transfers.transfer);