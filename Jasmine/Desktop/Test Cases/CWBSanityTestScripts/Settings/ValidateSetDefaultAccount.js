it("ValidateEditDefaultAccount", async function() {
  
  await NavigateToAccountSettings();
  await clickonDefaultAccountstab();
  await SetDefaultAccountPreferences();
  await MoveBackToDashBoard_ProfileManagement();
  await verifyAccountsLandingScreen();

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxMenu"]);

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","Settings2flxMyAccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","Settings2flxMyAccounts"]);
//   await kony.automation.playback.wait(5000);


//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxSetDefaultAccount"]);
//   kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxSetDefaultAccount"]);

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblDefaultTransactionAccounttHeading"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblDefaultTransactionAccounttHeading"], "text")).toEqual("Default Transaction Accounts");

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
//   kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblSelectedDefaultAccounts"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblSelectedDefaultAccounts"], "text")).toEqual("You have set the following accounts as your default transaction accounts");


//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblBillPayKey"]);
//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxBillPay"]);
//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblCheckDeposit"]);
//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxCheckDeposit"]);

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxBillPay"]);
//   kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxBillPay"], "190128223241502");

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxCheckDeposit"]);
//   kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxCheckDeposit"], "190128223242830");

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
//   kony.automation.flexcontainer.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblSelectedDefaultAccounts"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblSelectedDefaultAccounts"], "text")).toEqual("You have set the following accounts as your default transaction accounts");

//   //Move back to base state
//   await kony.automation.playback.waitFor(["frmProfileManagement","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmProfileManagement","customheader","topmenu","flxaccounts"]);

//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");


},120000);