it("SheduledPayment_6Months", async function() {

  //var PayeeName="0-000011128-123456";
  //var amount="1.32";
  await NavigateToBillPay();
  await SelectRecurringPaymentsTab();
  await EnterAmount_ScheduleBillPay(BillPay.schedulePay.amountValue6);
  // await SelectPayFromAcc(Pay);
  await SelectFrequency_ScheduleBillPay("Every 6 Months");
  await SelectDateRange_ScheduleBillPay();
  await SelectPayee_ManagePayeeList(BillPay.schedulePay.PayeeName2);
  await ConfirmScheduleBillPay();
  await ClickOnConfirm();
  await VerifyScheduleBillPaySuccessMsg();
  await verifyAccountsLandingScreen();

},300000);