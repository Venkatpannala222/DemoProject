it("InteracETransferSearchHistory", async function() {
	kony.automation.widget.touch(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"], [166,25],null,null);
	kony.automation.widget.touch(["frmAccountsLanding"], null,null,[452,95]);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
	kony.automation.widget.touch(["frmAccountsLanding"], null,null,[372,183]);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxeTransfer"]);
	kony.automation.widget.touch(["frmeTransferSendMoney"], null,null,[880,407]);
	kony.automation.flexcontainer.click(["frmeTransferSendMoney","flxTransferHistory"]);
	kony.automation.widget.touch(["frmeTransferHistory"], null,null,[410,244]);
	kony.automation.calendar.selectDate(["frmeTransferHistory","calFrom"], [7,16,2021]);
	kony.automation.widget.touch(["frmeTransferHistory"], null,null,[788,245]);
	kony.automation.calendar.selectDate(["frmeTransferHistory","calTo"], [7,30,2021]);
	kony.automation.widget.touch(["frmeTransferHistory"], null,null,[912,247]);
	kony.automation.widget.touch(["frmeTransferHistory"], null,null,[0,0]);
	kony.automation.widget.touch(["frmeTransferHistory"], null,null,[1068,327]);
	kony.automation.button.click(["frmeTransferHistory","btnSearch"]);
	kony.automation.widget.touch(["frmeTransferHistory"], null,null,[96,448]);
	kony.automation.flexcontainer.click(["frmeTransferHistory","segmenteTransfers[0]","flxDropdown"]);
	kony.automation.widget.touch(["frmeTransferHistory"], null,null,[100,443]);
	kony.automation.flexcontainer.click(["frmeTransferHistory","segmenteTransfers[0]","flxDropdown"]);
	kony.automation.widget.touch(["frmeTransferHistory"], null,null,[99,399]);
	kony.automation.flexcontainer.click(["frmeTransferHistory","segmenteTransfers[0]","flxDropdown"]);
});