it("VerifyAccountdetailsandaccountInfo", async function() {
  await clickOnFirstSavingsAccount();
	//kony.automation.widget.touch(["frmAccountsLanding"], null,null,[362,291]);
 // await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
 // kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[0,0]","flxAccountNameWrapper"]);
  await VerifySavingsAccountDetails();
  await VerifySavingsAccount_InfoTab();
  await MoveBackToLandingScreen_AccDetails();
	/*kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxLeft1"]);
	kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxLeft2"]);
	kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxAvailableBalance"]);
	kony.automation.widget.touch(["frmAccountsDetails"], null,null,[311,220]);
	kony.automation.button.click(["frmAccountsDetails","accountSummary","btnBalanceDetails"]);
	kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxBalanceField1"]);
	kony.automation.widget.touch(["frmAccountsDetails"], null,null,[436,214]);
	kony.automation.button.click(["frmAccountsDetails","accountSummary","btnAccountInfo"]);
	kony.automation.widget.touch(["frmAccountsDetails"], null,null,[184,263]);
	kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxField3"]);
	kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxField4"]);
	kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxField5"]);
	kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxField6"]);*/
}, 120000);