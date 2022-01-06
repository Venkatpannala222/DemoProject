it("Savingscontextual", async function() {
	kony.automation.widget.touch(["frmAccountsLanding","accountList","segAccounts[1,0]","flxMenu"], [48,43],null,null);
	kony.automation.widget.touch(["frmAccountsLanding"], null,null,[785,427]);
	kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[1,0]","flxMenu"]);
});