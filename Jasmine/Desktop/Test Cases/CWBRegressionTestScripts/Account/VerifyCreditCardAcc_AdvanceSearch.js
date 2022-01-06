it("VerifyCreditCardAcc_AdvanceSearch", async function() {
  
  await clickOnFirstCreditCardAccount();
  await verifyAdvancedSearch_CreditCardAccount("1","1000");
  await MoveBackToLandingScreen_AccDetails();
  
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[2,0]","flxAccountNameWrapper"]);

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnTransfersChecking"]);
//   kony.automation.button.click(["frmAccountsDetails","transactions","btnTransfersChecking"]);

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","flxSearch"]);
//   kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxSearch"]);
//   //await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTransactionType"]);
//   //kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTransactionType"], "Transfers");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeFrom"]);
//   kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeFrom"],"1");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeTo"]);
//   kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeTo"],"1000");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTimePeriod"]);
//   kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTimePeriod"], "LAST_THREE_MONTHS");

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
  
},500000);