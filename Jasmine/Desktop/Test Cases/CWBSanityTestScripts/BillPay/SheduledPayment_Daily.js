it("SheduledPayment_Daily", async function() {

  //var PayeeName="0-000011128-123456";
  //var amount="1.45";
  await NavigateToBillPay();
  await SelectRecurringPaymentsTab();
  await RecurringPaymentsTabValidation();
  await EnterAmount_ScheduleBillPay(BillPay.schedulePay.amountValue1);
  // await SelectPayFromAcc(Pay);
  await SelectFrequency_ScheduleBillPay("Daily");
  await SelectDateRange_ScheduleBillPay();
  await SelectPayee_ManagePayeeList(BillPay.schedulePay.PayeeName1);
  await ConfirmScheduleBillPay();
  await ClickOnConfirm();
  await VerifyScheduleBillPaySuccessMsg();
  await verifyAccountsLandingScreen();
  
  
  //   var PayeeName="0-000006090-520";
  //   //var Pay="102368-00005";
  //   await NavigateToBillPay();
  //   await SelectRecurringPaymentsTab();
  //    await EnterAmount_ScheduleBillPay(BillPay.schedulePay.amountValue);
  //  // await SelectPayFromAcc(Pay);
  //   await SelectFrequency_ScheduleBillPay("Daily");
  //   await SelectDateRange_ScheduleBillPay();
  //    await SelectPayee_ManagePayeeList(PayeeName);
  //   await ConfirmScheduleBillPay();
  //   await ClickOnConfirm();
  //   await VerifyScheduleBillpaySuccessMsg();
  //   await verifyAccountsLandingScreen();

},300000);