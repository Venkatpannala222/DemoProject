it("ValidateConfirmationScreenOfBillPayee_PaymentSubmitted", async function() {

  //Payee="102977-00002";
  await NavigateToBillPay();
  await EnterOneTimePaymentdetails_Bulk(BillPay.oneTimePay.Payee,BillPay.oneTimePay.amountValue2,BillPay.oneTimePay.amountValue3);
  await OnetimePaymentConfirmationScreenDetails();
  appLog("Successfully clicked on confirm button after filling onetime payment details");
  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnConfirm"],15000);
  kony.automation.flexcontainer.click(["frmBulkBillPayConfirm","btnConfirm"]);
  appLog("Successfully clicked on confirm button in Bill payment confirmation screen");
  await kony.automation.playback.wait(10000);
  await VerifyOneTimePaymentAcknowledgementScreenDetails();
  await verifyOneTimePaymentSuccessMsg();
  await verifyAccountsLandingScreen();
},350000);