it("PayBills_MakeOneTimePaymentScheduled", async function() {

  //Payee="102977-00002";
  await NavigateToBillPay();
  // await enterOneTimePayeeInformation(BillPay.oneTimePay.payeeName,BillPay.oneTimePay.zipcode,BillPay.oneTimePay.accno,BillPay.oneTimePay.accnoAgain,BillPay.oneTimePay.mobileno);
  await EnterOneTimePaymentdetails_Bulk(BillPay.oneTimePay.Payee,BillPay.oneTimePay.amountValue7,BillPay.oneTimePay.amountValue8);
  await confirmOneTimePaymnet();
  await verifyOneTimePaymentSuccessMsg();
  await verifyAccountsLandingScreen();
},300000);