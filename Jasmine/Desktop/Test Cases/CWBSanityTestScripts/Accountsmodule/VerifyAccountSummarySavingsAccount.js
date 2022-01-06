it("VerifyAccountSummarySavingsAccount", async function() {

  await clickOnFirstSavingsAccount();
  await verifyAccountSummary_SavingsAccounts();
  await MoveBackToLandingScreen_AccDetails();
  
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[1,0]","flxAccountNameWrapper"]);

//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceValue"]);
//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingDepositsValue"]);
//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingWithdrawalsValue"]);
//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAsOf"]);
//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceValue"]);

//   await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);

},120000);