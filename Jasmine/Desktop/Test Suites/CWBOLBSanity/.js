describe("", function() {
	it("Account_Statement", async function() {
		
	  await NavigatetoAccountStatement();
	  await Statement_SelectMonthandverify();
	  await NaviagteBacktoDashboard_Statements;
	  
		//kony.automation.widget.touch(["frmAccountsDetails"], null,null,[400,252]);
		
		//kony.automation.flexcontainer.click(["frmAccountsDetails","noStatementsPopup"]);
		
	},90000);
	
	it("Sample", async function() {
	  appLog("Hello");
	  await kony.automation.playback.wait(95000);
	  appLog("Test");
	},120000);
});