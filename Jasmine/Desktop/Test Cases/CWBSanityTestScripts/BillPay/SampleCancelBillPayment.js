it("SampleCancelBillPayment", async function() {
 
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayBill"]);
	kony.automation.button.click(["frmBulkPayees","btnPayementDue"]);
	kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxpayee"], "0-000005701-123456782NW6739");
	kony.automation.calendar.selectDate(["frmBillPaymentDue","payABill","calSendOn"], [7,22,2021]);
	kony.automation.calendar.selectDate(["frmBillPaymentDue","payABill","CalDeliverBy"], [8,22,2021]);
	kony.automation.textbox.enterText(["frmBillPaymentDue","payABill","txtSearch"],"1");
	kony.automation.button.click(["frmBillPaymentDue","payABill","btnConfirm"]);
	kony.automation.button.click(["frmPaymentDueConfirm","btnCancelBill"]);
	kony.automation.button.click(["frmPaymentDueConfirm","CustomPopupCancel","btnYes"]);
	kony.automation.flexcontainer.click(["frmBillPaymentDue","customheadernew","flxAccounts"]);
});