it("VerifyRecipitentsList", async function() {
  await kony.automation.playback.wait(7000);
 await NavigateToManageRecipitents();
 await clickOnManageRecipientsAccountsTab();
 await MoveBacktoDashboard_ManageRecipitent();

//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");

//   //External Acc list
//   await kony.automation.playback.waitFor(["frmFastManagePayee","btnExternalAccounts"]);
//   kony.automation.button.click(["frmFastManagePayee","btnExternalAccounts"]);
//   await kony.automation.playback.wait(5000);
//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
//   kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);

//   //P2P Acc list
//   await kony.automation.playback.waitFor(["frmFastManagePayee","btnRecipients"]);
//   kony.automation.button.click(["frmFastManagePayee","btnRecipients"]);
//   await kony.automation.playback.wait(5000);
//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
//   kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);

//   await kony.automation.playback.waitFor(["frmFastManagePayee","customheadernew","flxAccounts"]);
//   kony.automation.flexcontainer.click(["frmFastManagePayee","customheadernew","flxAccounts"]);
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");


},90000);