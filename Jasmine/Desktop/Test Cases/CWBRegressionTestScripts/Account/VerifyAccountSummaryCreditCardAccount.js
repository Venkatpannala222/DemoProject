it("VerifyAccountSummaryForCreditCardAccounts", async function() {

  await clickOnFirstCreditCardAccount();
  await verifyAccountSummary_CreditCardAccounts();
  await MoveBackToLandingScreen_AccDetails();
  
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"],10000);
//   kony.automation.widget.touch(["frmDashboard","accountList","segAccounts[2,0]","flxContent"], null,null,[303,1]);
//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"],10000);
//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[2,0]","flxAccountDetails"]);
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldValue"]);
//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceValue"]);
//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingDepositsValue"]);
//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAsOf"]);
//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceValue"]);

//   await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);

},200000);