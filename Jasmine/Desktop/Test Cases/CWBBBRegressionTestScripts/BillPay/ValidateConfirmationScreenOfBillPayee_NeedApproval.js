it("ValidateConfirmationScreenOfBillPayee_NeedApproval", async function() {

  await NavigateToBillPay();
  await EnterOneTimePaymentdetails_Bulk(BillPay.oneTimePay.Payee);
  await OnetimePaymentConfirmationScreenDetails();
  appLog("Successfully clicked on confirm button after filling onetime payment details");
  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnConfirm"],15000);
  kony.automation.flexcontainer.click(["frmBulkBillPayConfirm","btnConfirm"]);
  appLog("Successfully clicked on confirm button in Bill payment confirmation screen");
  await kony.automation.playback.wait(10000);
  await VerifyOneTimePaymentAcknowledgementScreenDetails();
  await verifyOneTimePaymentSuccessMsg();
  await verifyBBAccountsLandingScreen();
},350000);