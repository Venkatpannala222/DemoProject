it("VerifySavingsAcc_ContextualMenu_Transfer", async function() {

  await clickOnSavingsAccountContextMenu();
  await selectContextMenuOption("Move Money");
  
  //Do Transfer
  await SelectToAccount(Accounts.savingAcc.toAccount);
  await EnterAmount(Accounts.savingAcc.amountValue);
  await EnterNoteValue("SavAcc_Transfer");
  await ConfirmTransfer();
  await VerifyTransferSuccessMessage();
  await verifyAccountsLandingScreen();
  
  
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[1,0]","flxMenu"]);
//   await kony.automation.playback.waitFor(["frmDashboard","accountListMenu","segAccountListActions"]);
  
//    await kony.automation.playback.waitFor(["frmDashboard","accountListMenu","segAccountListActions"]);
//   var accounts_Size=kony.automation.widget.getWidgetProperty(["frmDashboard","accountListMenu","segAccountListActions"],"data");
  
//   var segLength=accounts_Size.length;
//   kony.print("Length is :: "+segLength);
//   for(var x = 0; x <segLength; x++) {

//     var seg="segAccountListActions["+x+"]";
//     kony.print("Segment is :: "+seg);
//     await kony.automation.playback.waitFor(["frmDashboard","accountListMenu",seg,"flxAccountTypes","lblUsers"]);
//     var TransfersText=kony.automation.widget.getWidgetProperty(["frmDashboard","accountListMenu",seg,"flxAccountTypes","lblUsers"], "text");
//     kony.print("Text is :: "+TransfersText);
//     if(TransfersText==="Transfer"){
//       kony.automation.flexcontainer.click(["frmDashboard","accountListMenu",seg,"flxAccountTypes"]);
//        break;
//     }
//   }
  
//   await kony.automation.playback.wait(5000);
  
//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]); 
//   await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"]);
//   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1");
//   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
//   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"VerifySavingsAcc_ContextualMenu_Transfer");
//   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
//   await kony.automation.playback.waitFor(["frmReview","btnConfirm"]);
//   kony.automation.button.click(["frmReview","btnConfirm"]);

//   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblTransactionMessage"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully completed the transfer");
//   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"]);
//   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

},90000);