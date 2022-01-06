it("PayBills_MakeOneTimePayment", async function() {

  await NavigateToBillPay();
  // await enterOneTimePayeeInformation(BillPay.oneTimePay.payeeName,BillPay.oneTimePay.zipcode,BillPay.oneTimePay.accno,BillPay.oneTimePay.accnoAgain,BillPay.oneTimePay.mobileno);
  await enterOneTimePaymentdetails(BillPay.schedulePay.amountValue6,BillPay.schedulePay.amountValue7);
  await confirmOneTimePaymnet();
  await verifyOneTimePaymentSuccessMsg();
  await verifyAccountsLandingScreen();
},300000);