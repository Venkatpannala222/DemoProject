it("VerifyCheckingAcc_AdvanceSearch", async function() {
  
  await clickOnFirstCheckingAccount();
  await verifyAdvancedSearch_AccountDetails("1","1000");
  await MoveBackToLandingScreen_AccDetails();
  
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"],10000);
//   kony.automation.widget.touch(["frmDashboard","accountList","segAccounts[0,0]","flxContent"], null,null,[303,1]);
//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"],10000);
//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[0,0]","flxAccountDetails"]);
//   await kony.automation.playback.wait(5000);
  
//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","btnFilter2"]);
//   kony.automation.button.click(["frmAccountsDetails","accountTransactionList","btnFilter2"]);
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","flxSearch"]);
//   kony.automation.flexcontainer.click(["frmAccountsDetails","accountTransactionList","flxSearch"]);
//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","lstbxTransactionType"]);
//   kony.automation.listbox.selectItem(["frmAccountsDetails","accountTransactionList","lstbxTransactionType"], "Transfers");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","txtAmountRangeFrom"]);
//   kony.automation.textbox.enterText(["frmAccountsDetails","accountTransactionList","txtAmountRangeFrom"],"1");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","txtAmountRangeTo"]);
//   kony.automation.textbox.enterText(["frmAccountsDetails","accountTransactionList","txtAmountRangeTo"],"1000");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","lstbxTimePeriod"]);
//   kony.automation.listbox.selectItem(["frmAccountsDetails","accountTransactionList","lstbxTimePeriod"], "LAST_THREE_MONTHS");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","btnSearch"]);
//   kony.automation.button.click(["frmAccountsDetails","accountTransactionList","btnSearch"]);
//   await kony.automation.playback.wait(5000);
  
//   var noResult=await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","rtxNoPaymentMessage"],10000);
//   if(noResult){
//     kony.print("No Results found with given criteria..");
//     expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountTransactionList","rtxNoPaymentMessage"], "text")).toEqual("No Transactions Found");
//   }else{
//      await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","segTransactions"]);
//      kony.automation.flexcontainer.click(["frmAccountsDetails","accountTransactionList","segTransactions[0,0]","flxDropdown"]);
//   }
  
//   await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
  
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
  
},200000);