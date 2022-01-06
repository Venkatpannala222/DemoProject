it("VerifyTransferUnderAccounts", async function() {
  
    // Do a One Time Tramsfer and verify in Accounts screen
  // Filter as Amount range and Date range as Today
  
//   await navigateToTransfers();
//   await SelectFromAccount();
//   await SelectToAccount("OwnAcc");
//   await EnterAmount("1.9");
//   await EnterNoteValue("OwnAcc-OneTimeTransfer");
//   await ConfirmTransfer();
//   await VerifyTransferSuccessMessage();
//   await verifyAccountsLandingScreen();
  
  // Verify Search for Transfer now
  await clickOnFirstCheckingAccount();
  await verifyAdvancedSearch_AccountDetails("1","100");
 // await clickOnSearch_AccountDetails();
 // await selectTranscationtype("Transfers");
 // await selectAmountRange("1","100");
//   await selectCustomdate();
//   await clickOnbtnSearch();
//   await validateSearchResult();
  await MoveBackToLandingScreen_AccDetails();
  

//   // Do a One Time Tramsfer and verify in Accounts screen
//   // Filter as Amount range and Date range as Today
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
//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]); 

//   await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"]);
//   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1.9");

//   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
//   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"OwnAcc-OneTimeTransfer");

//   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
//   await kony.automation.playback.waitFor(["frmReview","btnConfirm"]);
//   kony.automation.button.click(["frmReview","btnConfirm"]);

//   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblTransactionMessage"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully completed the transfer");

//   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"]);
//   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);

//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");


//   // Verify Search for Transfer now
//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[0,0]","flxAccountNameWrapper"]);
//   await kony.automation.playback.wait(5000);

//        //await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnTransfersChecking"]);
//        //kony.automation.button.click(["frmAccountsDetails","transactions","btnTransfersChecking"]);

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","flxSearch"]);
//   kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxSearch"]);
  
//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTransactionType"]);
//   kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTransactionType"], "Transfers");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeFrom"]);
//   kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeFrom"],"1.9");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeTo"]);
//   kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeTo"],"2");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTimePeriod"]);
//   kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTimePeriod"], "CUSTOM_DATE_RANGE");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnSearch"]);
//   kony.automation.button.click(["frmAccountsDetails","transactions","btnSearch"]);
//   await kony.automation.playback.wait(5000);

//   var noResult=await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","rtxNoPaymentMessage"],10000);
//   if(noResult){
//     kony.print("No Results found with given criteria..");
//     expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","rtxNoPaymentMessage"], "text")).toEqual("No Transactions Found");
//   }else{
//      await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions"]);
//      kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0,0]","flxDropdown"]);
//   }

//   await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
  
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");


},TimeOuts.Transfers.transfer);