it("AddandRemoveProvincialTaxes", async function() {
  
  await  NaviagtetoPayBusinessTaxes_CRATab();
  await AddProvincialTaxesForm();
  await RemoveProvincialTaxesBusinessNumber();
  await kony.automation.playback.wait(7000);
  await Naviagatebacktodashboard_PayBusinessTaxes();
  
	//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
	//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"]);
	//kony.automation.button.click(["frmPayBusinessTaxes","btnProvincialTaxes"]);
	/*kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxAddProvincialFroms"]);
	kony.automation.textbox.enterText(["frmAddNewProvincialTax","tbxBusinessNumber"],"409000007");
	kony.automation.button.click(["frmAddNewProvincialTax","btnContinue"]);
	kony.automation.button.click(["frmSelectProvincialForms","btnContinue"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxBottomRow0"]);
	kony.automation.butt15on.click(["frmPayBusinessTaxes","RemovePopup","btnYes"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","customheadernew","flxAccounts"]);*/
},450000);