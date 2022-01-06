it("VerifyAddnewEmailID", async function() {
  
  var isPrimary='NO';
  var emailid=Settings.email.emailAddress;
  
  await NavigateToProfileSettings();
  await selectProfileSettings_EmailAddress();
  await ProfileSettings_VerifyaddEmailAddressFunctionality(emailid,isPrimary);
  await MoveBackToDashBoard_ProfileManagement();
  await verifyAccountsLandingScreen();
  
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxMenu"]);

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","Settings0flxMyAccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","Settings0flxMyAccounts"]);

//   await kony.automation.playback.wait(5000);
//   kony.automation.flexcontainer.click(["frmProfileManagement","settings","lblPersonalDetailsHeading"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblPersonalDetailsHeading"], "text")).toEqual("Personal Details");


//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxEmail"]);
//   kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxEmail"]);

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEmailHeading"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblEmailHeading"], "text")).toEqual("Email");

//   // Add new email ID
//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddNewEmail"]);
//   kony.automation.button.click(["frmProfileManagement","settings","btnAddNewEmail"]);
//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddNewEmailHeading"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAddNewEmailHeading"], "text")).toEqual("Add New Email");
//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxEmailId"]);
//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblMarkAsPrimaryEmailCheckBox"]);
//   kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxEmailId"],"testautomation@dbx.com");
//   kony.automation.button.click(["frmProfileManagement","settings","btnAddEmailIdAdd"]);
//   await kony.automation.playback.wait(5000);

//   // Move back to base state
//   await kony.automation.playback.waitFor(["frmProfileManagement","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmProfileManagement","customheader","topmenu","flxaccounts"]);
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

},120000);