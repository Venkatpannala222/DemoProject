it("ValidateViewPaymentActivityButton", async function() {

  await NavigateToBillPay();
  await enterOneTimePaymentdetails(BillPay.schedulePay.amountValue8,BillPay.schedulePay.amountValue9);
  await confirmOneTimePaymnet();
  await VerifyOneTimePaymentAcknowledgementScreenDetails();
  appLog("Clicking on ViewPayment Button");
  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","btnViewPaymentActivity"],10000);
  kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","btnViewPaymentActivity"]);
  appLog("Clicked on ViewPayment Button");
  await HistoryTabValidation();
  await MoveBackToDashBoard_HistoryTab();
},400000);