it("RecurringPaymentQuickLinksValidation", async function() {

  //var PayeeName="0-000011128-123456";
  //var amount="1.4";
  await NavigateToBillPay();
  await SelectRecurringPaymentsTab();
  //await RecurringPaymentsTabValidation();
  await EnterAmount_ScheduleBillPay(BillPay.schedulePay.amountValue);
  await SelectFrequency_ScheduleBillPay("Once");
  await SelectPayee_ManagePayeeList(BillPay.oneTimePay.PayeeName);
  await QuckLinkRecurringPayments();
  await PayBillHeadersValidation();
  await MoveBackToDashBoard_AllPayees();
  await verifyAccountsLandingScreen();
},400000);