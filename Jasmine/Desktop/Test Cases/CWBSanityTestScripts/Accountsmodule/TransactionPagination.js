it("TransactionPagination", async function() {
  await clickOnFirstCheckingAccount();
 // await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
 // kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[0,0]","flxAccountNameWrapper"]);
	//kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[0,0]","flxAccountNameWrapper"]);
 //await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","flxPaginationWrapper"]);
 //kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxPaginationWrapper"]);
  await VerifyTransactionPagination();
  await MoveBackToLandingScreen_AccDetails();
},120000);