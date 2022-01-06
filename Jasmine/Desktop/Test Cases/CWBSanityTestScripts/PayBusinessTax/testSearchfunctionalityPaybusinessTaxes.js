it("SearchfunctionalityPaybusinessTaxes", async function() {
  
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"]);
	kony.automation.button.click(["frmPayBusinessTaxes","btnHistory"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxHistory","flxscrollTabs"]);
	kony.automation.calendar.selectDate(["frmPayBusinessTaxHistory","calStartDate"], [7,1,2021]);
	kony.automation.calendar.selectDate(["frmPayBusinessTaxHistory","calUntil"], [7,5,2021]);
	kony.automation.button.click(["frmPayBusinessTaxHistory","btnSearch"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxHistory","segmentTaxHistory[0]","flxRow"]);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxHistory","segmentTaxHistory[49]","flxRow"]);
  
});