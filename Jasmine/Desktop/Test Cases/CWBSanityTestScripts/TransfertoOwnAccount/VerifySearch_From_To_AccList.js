it("VerifySearch_From_To_AccList", async function() {
  
  await navigateToMoveMoney();
  await SelectFromAccount(Transfers.ownAccount.fromAccount);
  await SelectToAccount(Transfers.ownAccount.toAccount);
  await MoveBackToLandingScreen_Transfers();
  await verifyAccountsLandingScreen();

//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
//   await kony.automation.playback.wait(10000);

//   await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferFrom"]);
//   kony.automation.textbox.enterText(["frmFastTransfers","txtTransferFrom"],"My Checking");
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);

//   await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferTo"]);
//   kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],"My Savings");
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]);

//   await kony.automation.playback.waitFor(["frmFastTransfers","customheadernew","flxAccounts"]);
//   kony.automation.flexcontainer.click(["frmFastTransfers","customheadernew","flxAccounts"]);

//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

},90000);