it("DepositAcc_ScrollToTranscation", async function() {

  await clickOnFirstDepositAccount();
  await scrolltoTranscations_accountDetails();
  await MoveBackToLandingScreen_AccDetails();
  
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"],10000);
//   kony.automation.widget.touch(["frmDashboard","accountList","segAccounts[3,0]","flxContent"], null,null,[303,1]);
//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"],10000);
//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[3,0]","flxAccountDetails"]);
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lblTransactions"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","lblTransactions"],"text")).toEqual("Transactions");

//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions"]);
//   await kony.automation.scrollToWidget(["frmAccountsDetails","transactions","segTransactions"]);

//   await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");


},90000);