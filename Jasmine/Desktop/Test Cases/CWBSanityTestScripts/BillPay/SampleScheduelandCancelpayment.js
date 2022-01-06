it("SampleScheduelandCancelpayment", async function() {
  await NavigateToBillPay();
  await enterOneTimePaymentdetailsScheduled();
  await confirmOneTimePaymnet();
  await kony.automation.playback.wait(10000);
  kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxMyBills"]);
   await kony.automation.playback.wait(5000);
  kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxPayBill"]);
  await NavigateandcancelSchduledPayment();
  await kony.automation.playback.wait(10000);
  kony.automation.flexcontainer.click(["frmBillPayScheduled","customheadernew","flxAccounts"]);
}, 300000);