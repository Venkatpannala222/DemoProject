it("VerifyPayBusinessCRATaxes", async function() {
  
  await  NaviagtetoPayBusinessTaxes_CRATab();
  await VerifyCRAPayBusinessTaxesscreen();
  await Naviagatebacktodashboard_PayBusinessTaxes();
  
	/*kony.automation.widget.touch(["frmAccountsLanding","customheader","topmenu","flxMyBills"], [140,34],null,null);
	kony.automation.widget.touch(["frmAccountsLanding"], null,null,[666,104]);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
	kony.automation.widget.touch(["frmAccountsLanding"], null,null,[618,175]);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"]);
	kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[156,211]);
	kony.automation.button.click(["frmPayBusinessTaxes","btnCRATaxes"]);
	kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[205,156]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxMain"]);*/
},120000);