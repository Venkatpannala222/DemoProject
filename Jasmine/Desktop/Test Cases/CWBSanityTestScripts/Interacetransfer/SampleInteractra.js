it("SampleInteractra", async function() {
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxeTransfer"]);
	kony.automation.flexcontainer.click(["frmeTransferSendMoney","flxTransferHistory"]);
	kony.automation.calendar.selectDate(["frmeTransferHistory","calFrom"], [7,15,2021]);
	kony.automation.calendar.selectDate(["frmeTransferHistory","calTo"], [7,22,2021]);
	kony.automation.button.click(["frmeTransferHistory","btnSearch"]);
	kony.automation.flexcontainer.click(["frmeTransferHistory","segmenteTransfers[0]","flxSendFrom"]);
	kony.automation.flexcontainer.click(["frmeTransferHistory","flxSearchNoResults"]);
});