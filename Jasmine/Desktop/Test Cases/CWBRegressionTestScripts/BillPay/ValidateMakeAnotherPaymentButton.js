it("ValidateMakeAnotherPaymentButton", async function() {

  await NavigateToBillPay();
  await enterOneTimePaymentdetails(BillPay.oneTimePay.amountValue6,BillPay.oneTimePay.amountValue7);
  await confirmOneTimePaymnet();
  await VerifyOneTimePaymentAcknowledgementScreenDetails();
  appLog("Clicking on MakeAnother Payment");
  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","btnMakeAnotherPayment"],10000);
  kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","btnMakeAnotherPayment"]);
  appLog("Clicked on MakeAnother Payment");
  await PayBillHeadersValidation();
  await MoveBackToDashBoard_AllPayees();
},350000);