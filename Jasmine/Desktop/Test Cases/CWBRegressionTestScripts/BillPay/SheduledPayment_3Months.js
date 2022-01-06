it("SheduledPayment_3Months", async function() {

  //var PayeeName="0-000011128-123456";
  //var amount=getRandomNumber(1);
  //var amount="1.14";
  await NavigateToBillPay();
  await SelectRecurringPaymentsTab();
  await EnterAmount_ScheduleBillPay(BillPay.schedulePay.amountValue5);
  // await SelectPayFromAcc(Pay);
  await SelectFrequency_ScheduleBillPay("Every 3 Months");
  await SelectDateRange_ScheduleBillPay();
  await SelectPayee_ManagePayeeList(BillPay.schedulePay.PayeeName1);
  await ConfirmScheduleBillPay();
  await ClickOnConfirm();
  await VerifyScheduleBillPaySuccessMsg();
  await verifyAccountsLandingScreen();

},200000);