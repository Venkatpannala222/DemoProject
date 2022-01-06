it("ValidateUICashflowitems", async function() {
	kony.automation.widget.touch(["frmBBAccountsLanding"], null,null,[93,99]);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
	await kony.automation.playback.wait(1000);
	kony.automation.widget.touch(["frmBBAccountsLanding"], null,null,[360,413]);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlowflxRichTextAccountsMenu"]);
	kony.automation.widget.touch(["frmBBAccountsLanding"], null,null,[212,291]);
	await kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlow0flxMyAccounts"]);
	await kony.automation.playback.waitFor(["frmAccountSetupStatus"]);
	kony.automation.widget.touch(["frmAccountSetupStatus"], null,null,[188,218]);
	kony.automation.richtext.click(["frmAccountSetupStatus","heading","rtxCashFlow"]);
	await kony.automation.playback.waitFor(["frmAccountSetupStatus"]);
	kony.automation.widget.touch(["frmAccountSetupStatus"], null,null,[330,214]);
	kony.automation.button.click(["frmAccountSetupStatus","heading","btnReceivables"]);
	await kony.automation.playback.waitFor(["frmAccountSetupStatus"]);
	kony.automation.widget.touch(["frmAccountSetupStatus"], null,null,[418,214]);
	kony.automation.button.click(["frmAccountSetupStatus","heading","btnPayables"]);
});