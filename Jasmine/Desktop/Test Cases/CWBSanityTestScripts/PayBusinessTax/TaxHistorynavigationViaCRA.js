it("TaxHistorynavigationViaCRA", async function() {
	await NaviagtetoPayBusinessTaxes_CRATab();
 await NaviagatetoTaxHistoryViaCRATaxes();
  await kony.automation.playback.wait(5000);
  await Naviagatebacktodashboard_TaxHistoryPayBusinessTaxes();
  //kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
	//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"]);
	/*await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxMenu00"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[0]","flxAccountTypes"]);
	kony.automation.widget.touch(["frmPayBusinessTaxHistory"], null,null,[178,270]);
	await kony.automation.playback.waitFor(["frmPayBusinessTaxHistory","flxShowingResults"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxHistory","flxShowingResults"]);
	kony.automation.button.click(["frmPayBusinessTaxHistory","btnProvincialTaxes"]);
	await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxMenu00"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[0]","flxAccountTypes"]);
	await kony.automation.playback.waitFor(["frmPayBusinessTaxHistory","flxShowingResults"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxHistory","flxShowingResults"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxHistory","customheadernew","flxAccounts"]);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);*/
},90000);