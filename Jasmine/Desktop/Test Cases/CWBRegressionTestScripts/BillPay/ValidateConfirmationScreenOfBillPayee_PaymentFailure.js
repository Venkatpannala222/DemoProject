it("ValidateConfirmationScreenOfBillPayee_PaymentFailure", async function() {

  await kony.automation.playback.wait(20000);
  await NavigateToBillPay();
  await enterOneTimePaymentdetails(BillPay.oneTimePay.amountValue4,BillPay.oneTimePay.amountValue5);
  await OnetimePaymentConfirmationScreenDetails();
  appLog("Successfully clicked on confirm button after filling onetime payment details");
  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnConfirm"],15000);
  kony.automation.flexcontainer.click(["frmBulkBillPayConfirm","btnConfirm"]);
  appLog("Successfully clicked on confirm button in Bill payment confirmation screen");
  await kony.automation.playback.wait(10000);
  await VerifyOneTimePaymentAcknowledgementScreenDetails();
  await VerifyOneTimePaymentFailureMessage();
  await verifyAccountsLandingScreen();
},350000);