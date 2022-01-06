it("CRATemplate1", async function() {
   var Template1BusinessNumber = CRATaxes.BusinessNo.Template1;
   await  NaviagtetoPayBusinessTaxes_CRATab();
  await SelectTaxandPaymenttype(Template1BusinessNumber);
  await AddCRATaxesForm(Template1BusinessNumber);
  await VerifytheAddedCRAform(Template1BusinessNumber);
  await Naviagatebacktodashboard_PayBusinessTaxes();
	
	/*kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxAddCraForms"]);
	kony.automation.widget.touch(["frmAddCRAForm"], null,null,[364,296]);
	kony.automation.listbox.selectItem(["frmAddCRAForm","lbxTaxType"], "Excise Duty");
	kony.automation.widget.touch(["frmAddCRAForm"], null,null,[0,0]);
	kony.automation.widget.touch(["frmAddCRAForm"], null,null,[302,381]);
	kony.automation.listbox.selectItem(["frmAddCRAForm","lbxPaymentType"], "Amount Owing");
	kony.automation.widget.touch(["frmAddCRAForm"], null,null,[0,0]);
	kony.automation.widget.touch(["frmAddCRAForm","txtBusinessName"], null,null,[146,13]);
	kony.automation.widget.touch(["frmAddCRAForm"], null,null,[246,449]);
	kony.automation.textbox.enterText(["frmAddCRAForm","txtBusinessName"],"123456782RD0016");
	kony.automation.button.click(["frmAddCRAForm","btnConfirm"]);
	kony.automation.widget.touch(["frmSelectCRAForms","segTaxFormsList[0]","flxCheckBox"], null,null,[16,3]);
	kony.automation.widget.touch(["frmSelectCRAForms"], null,null,[116,363]);
	kony.automation.button.click(["frmSelectCRAForms","btnContinue"]);
	kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[788,215]);
	kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[114,195]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
	kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[192,208]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxBusniessNumber0"]);*/
},350000);