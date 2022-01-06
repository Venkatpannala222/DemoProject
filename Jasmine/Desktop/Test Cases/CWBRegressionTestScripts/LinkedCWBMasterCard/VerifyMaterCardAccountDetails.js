it("VerifyMaterCardAccountDetails", async function() {
	kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[2,0]","flxWrapper"]);
	kony.automation.flexcontainer.click(["frmBRIMAccountsDetails","summary","flxCreditLimitSection"]);
	kony.automation.flexcontainer.click(["frmBRIMAccountsDetails","summary","flxlInstallmentLimitSection"]);
	kony.automation.button.click(["frmBRIMAccountsDetails","summary","btnBalanceDetails"]);
	kony.automation.button.click(["frmBRIMAccountsDetails","summary","btnAccountInfo"]);
});