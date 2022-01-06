it("ValidateEditAccountPreference", async function() {
  
  await NavigateToAccountSettings();
  await EditFavAccountPreferences();
  await MoveBackToDashBoard_ProfileManagement();
  await verifyAccountsLandingScreen();
  
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxMenu"]);

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","Settings2flxMyAccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","Settings2flxMyAccounts"]);
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountsHeader"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountsHeader"], "text")).toEqual("Accounts");

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAccounts"]);
//   kony.automation.button.click(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"]);

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditAccountsHeader"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblEditAccountsHeader"], "text")).toEqual("Edit Account");

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAccountNickNameValue"]);
//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblFavoriteEmailCheckBox"]);
//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEnableEStatementsCheckBox"]);
//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditAccountsSave"]);
  
//   kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAccountNickNameValue"],'My Checking');
//   kony.automation.button.click(["frmProfileManagement","settings","btnEditAccountsSave"]);

//   //Move back to base state
//   await kony.automation.playback.waitFor(["frmProfileManagement","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmProfileManagement","customheader","topmenu","flxaccounts"]);

//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

},120000);