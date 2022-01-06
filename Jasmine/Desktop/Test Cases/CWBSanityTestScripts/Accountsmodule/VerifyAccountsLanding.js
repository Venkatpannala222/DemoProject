it("VerifyAccountsLandingPage", async function() {
  var PreferredAcc = kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","flxAccountsRightContainer","btnShowAllAccounts"], "text");
  appLog(PreferredAcc);
  if(PreferredAcc==="Preferred Accounts")
    {
     
	kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","flxAccountsRightContainer"]);
          await kony.automation.playback.wait(15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","FavouriteAccountTypes","segAccountTypes[0]","flxAccountTypes"]);
      appLog("Successfully clicked on All accounts");
  await kony.automation.playback.wait(15000);

    }
  else
    {
      appLog("All accounts are shown");
    }
  await verifyAccountsLandingScreen();

},240000);