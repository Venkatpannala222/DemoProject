async function navigateToOneTimePayment(){

  //await kony.automation.playback.waitFor(["frmBulkPayees","flxMakeOneTimePayment"],15000);
  //kony.automation.flexcontainer.click(["frmBulkPayees","flxMakeOneTimePayment"]);

  //Navigating using Menu
  appLog("Intiated method to navigate to OneTimePayment");
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
  appLog("Successfully clicked on Menu on Dashboard");
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","BillPayflxAccountsMenu"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","BillPayflxAccountsMenu"]);
  appLog("Successfully clicked on Billpay option");
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","BillPay4flxMyAccounts"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","BillPay4flxMyAccounts"]);
  appLog("Successfully clicked on OneTimePayment option");
  await kony.automation.playback.wait(20000);

}

async function enterOneTimePayeeInformation(payeeName,zipcode,accno,accnoAgain,mobileno){

  appLog("Intiated method to enter OneTime Payee Information");

  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","tbxName"],15000);
  kony.automation.textbox.enterText(["frmMakeOneTimePayee","tbxName"],payeeName);
  appLog("Successfully entered payee name to auto select : <b>"+payeeName+"</b>");
  await kony.automation.playback.wait(5000);

  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","segPayeesName"],15000);
  kony.automation.flexcontainer.click(["frmMakeOneTimePayee","segPayeesName[3]","flxNewPayees"]);
  //  appLog("Successfully selected payee name from list");

  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","txtZipCode"],15000);
  kony.automation.textbox.enterText(["frmMakeOneTimePayee","txtZipCode"],zipcode);
  // appLog("Successfully entered zipcode : <b>"+zipcode+"</b>");

  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","txtAccountNumber"],15000);
  kony.automation.textbox.enterText(["frmMakeOneTimePayee","txtAccountNumber"],accno);
  appLog("Successfully entered acc number : <b>"+accno+"</b>");

  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","txtAccountNumberAgain"],15000);
  kony.automation.textbox.enterText(["frmMakeOneTimePayee","txtAccountNumberAgain"],accnoAgain);
  appLog("Successfully Re-entered account number : <b>"+accnoAgain+"</b>");

  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","txtmobilenumber"],15000);
  kony.automation.textbox.enterText(["frmMakeOneTimePayee","txtmobilenumber"],mobileno);
  appLog("Successfully entered mobile number : <b>"+mobileno+"</b>");

  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","btnNext"],15000);
  kony.automation.button.click(["frmMakeOneTimePayee","btnNext"]);
  //await kony.automation.playback.wait(5000);
  //appLog("Successfully clicked on Next button");
}


async function enterOneTimePaymentdetails(amount,amount1)
{
  appLog("Intiated method to enter details for OneTime payment");
  await kony.automation.scrollToWidget(["frmBulkPayees","segmentBillpay"]);
  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","flxDropdown"],15000);
  kony.automation.button.click(["frmBulkPayees","segmentBillpay[0]","flxDropdown"]);
  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","txtAmount"],15000);
  kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[0]","txtAmount"],amount);
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[1]","txtAmount"],15000);
  kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[1]","txtAmount"],amount1);
  await kony.automation.playback.wait(10000);
  //appLog("Successfully entered amount : <b>"+amount+"</b>");
  //kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[0]","txtAmount"],"1");
  // await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","calSendOn"],15000);
  //kony.automation.calendar.selectDate(["frmBulkPayees","segmentBillpay[0]","calSendOn"], [8,18,2022]);
  // appLog("Intiated method to Select Payee From Acc for OneTime payment");

}

async function enterOneTimePaymentdetailsScheduled()
{
  appLog("Intiated method to enter details for OneTime payment");
  await kony.automation.scrollToWidget(["frmBulkPayees","segmentBillpay"]);
  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","flxDropdown"],15000);
  kony.automation.button.click(["frmBulkPayees","segmentBillpay[0]","flxDropdown"]);
  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","txtAmount"],15000);
  kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[0]","txtAmount"],"1.81");
  //appLog("Successfully entered amount : <b>"+amount+"</b>");
  //kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[0]","txtAmount"],"1");
  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","calSendOn"],15000);
  kony.automation.calendar.selectDate(["frmBulkPayees","segmentBillpay[0]","calSendOn"], [2,18,2022]);
  // appLog("Intiated method to Select Payee From Acc for OneTime payment");

}

async function confirmOneTimePaymnet(){

  appLog("Initiated method to confirm OneTimePayment");
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmBulkPayees","btnBulkConfirm"],15000);
  // await kony.automation.scrollToWidget(["frmBulkPayees","btnBulkConfirm"]);
  kony.automation.flexcontainer.click(["frmBulkPayees","btnBulkConfirm"]);
  await kony.automation.playback.wait(10000);
  appLog("Successfully clicked on confirm button after filling onetime payment details");
  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnConfirm"],15000);
  kony.automation.flexcontainer.click(["frmBulkBillPayConfirm","btnConfirm"]);
  appLog("Successfully clicked on confirm button in Bill payment confirmation screen");
  await kony.automation.playback.wait(10000);
}
//updated the function by Tapasya removed waitFor and added as wait
async function verifyOneTimePaymentSuccessMsg(){

  appLog("Intiated method to verify OneTimePayment SuccessMsg");
  await kony.automation.playback.wait(15000);

  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","flxHeader","lblPaymentStatus"],10000);
  var success=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","flxHeader","lblPaymentStatus"],"text");
  appLog("success message is:<b>"+success+"</b>");
  if(success === "Payment successful")
  {
    await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"],15000);
    await kony.automation.playback.wait(5000);
    kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"]);
    appLog("Successfully Moved back to Accounts Dashboard");
    await kony.automation.playback.wait(5000);
  }
  else if (success==="Payment submitted")
  {
    await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"],15000);
    await kony.automation.playback.wait(5000);
    kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"]);
    appLog("Successfully Moved back to Accounts Dashboard");   
    await kony.automation.playback.wait(5000);
  }
}



async function VerifyOneTimePaymentFailureMessage(){

  appLog("Intiated method to verify OneTimePayment FailureMessage");
  await kony.automation.playback.wait(15000);

  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","flxHeader","lblPaymentStatus"],10000);
  var Status=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","flxHeader","lblPaymentStatus"],"text");
  appLog("Message is:<b>"+Status+"</b>");

  if (Status==="Payment failed")
  {
    await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","lblRefernceNumber"],15000);

    expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblRefernceNumber"],"text")).toContain("Attention");
    appLog("ReferenceNumber is Validated");
    //appLog("msg is:<b>"+failure+"</b>");
    expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblPaymentStatus"], "text")).toContain("Payment failed");
    appLog("Status is Validated");
    expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","lblAmountValue"], "text")).toContain("$0.00");
    appLog("Amount is Validated");
    await kony.automation.playback.wait(5000);
    await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"],15000);
    await kony.automation.playback.wait(5000);
    kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"]);
    appLog("Successfully Moved back to Accounts Dashboard");  
    await kony.automation.playback.wait(5000);
  }
  else if(await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","rtxDowntimeWarning"],5000)){
    //appLog("Logged in User is not authorized to perform this action");
    //fail('Logged in User is not authorized to perform this action');
    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","rtxDowntimeWarning"],"text"));
    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","rtxDowntimeWarning"],"text"));
    await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"],15000);
    kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"]);
    appLog("Successfully Moved back to Accounts Dashboard");
  }else{
    appLog("Unable to perform OneTimePayment so return to accounts dashboard");
    //     await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"],15000);
    //     kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"]);
    //     appLog("Successfully Moved back to Accounts Dashboard");
    await kony.automation.playback.wait(5000);

  }
}
async function NavigateandcancelSchduledPayment()
{

  kony.automation.flexcontainer.click(["frmBulkPayees","btnManagePayee"]);
  await kony.automation.playback.wait(10000);
  kony.automation.flexcontainer.click(["frmManagePayees","btnPaymentDue"]); 
  await kony.automation.playback.wait(10000);
  kony.automation.flexcontainer.click(["frmBillPaymentDue","btnAllPayees"]); 
  await kony.automation.playback.wait(10000);
  appLog("Intiated method to cancel scheduled payment");
  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],15000);
  kony.automation.button.click(["frmBulkPayees","btnScheduled"]); 
  await kony.automation.playback.wait(15000);
  await kony.automation.playback.waitFor(["frmBillPayScheduled","segmentBillpay[0]","flxDropdown"],15000);
  kony.automation.flexcontainer.click(["frmBillPayScheduled","segmentBillpay[0]","flxDropdown"]);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmBillPayScheduled","segmentBillpay[0]","btnEdit"],15000);
  kony.automation.button.click(["frmBillPayScheduled","segmentBillpay[0]","btnEdit"]);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmBillPayScheduled","CustomPopupCancel","btnYes"],15000);
  kony.automation.button.click(["frmBillPayScheduled","CustomPopupCancel","btnYes"]);
  await kony.automation.playback.wait(10000);

}


async function navigateToManagePayee(){

  await NavigateToBillPay();
  appLog("Intiated method to navigate to Manage Payee list");
  await kony.automation.playback.waitFor(["frmBulkPayees","btnManagePayee"],15000);
  kony.automation.button.click(["frmBulkPayees","btnManagePayee"]);
  appLog("Successfully clicked on Manage payee Button");
  await kony.automation.playback.wait(10000);
}

async function selectPayee_ManagePayeeList(payeename){

  appLog("Intiated method to select Payee from Manage Payee list : <b>"+payeename+"</b>");
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","txtSearch"],15000);
  kony.automation.textbox.enterText(["frmManagePayees","manageBiller","txtSearch"],payeename);
  appLog("Successfully entered Payee "+payeename);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","btnConfirm"],15000);
  kony.automation.flexcontainer.click(["frmManagePayees","manageBiller","btnConfirm"]);
  appLog("Successfully clicked on Search button");
  await kony.automation.playback.wait(5000);

  //   await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","txtSearch"],15000);
  //   kony.automation.textbox.enterText(["frmManagePayees","manageBiller","txtSearch"], [ { modifierCapsLock:true, key : 'A' },
  //                                                             { modifierCapsLock:true, key : 'B' },
  // 															{ modifierCapsLock:true, key : 'C' },
  //                                                             { modifierCapsLock:false, keyCode : 13 }
  // 														]);

  appLog("Intiated Method to verify Payee <b>"+payeename+"</b>");

  var PayeeList=await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","segmentBillPay"],15000);
  if(PayeeList){
    //expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","segmentBillPay[0]","lblColumn1"],"text")).toEqual(payeename);
    expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","segmentBillPay[0]","lblColumn1"],"text")).not.toBe('');
  }else if(await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","rtxNoPaymentMessage"],5000)){
    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","rtxNoPaymentMessage"],"text"));
    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","rtxNoPaymentMessage"],"text"));

  }else{
    appLog("Unable to find Payee in ManagePayees List");
  }

}

async function clickOnBillPayBtn_ManagePayees(){


  // BillPay and Active ebill has same locator hence verifying text and doing operation accordingly, Instead of directly failing.

  appLog("Intiated method to click on Billpay button from Manage Payee list");

  await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","segmentBillPay"],15000);

  var ButtonName=kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"], "text");

  //appLog('Button Name is : '+ButtonName);

  if(ButtonName==='Activate ebill'){

    appLog("Info : <b>"+ButtonName+"</b>"+" is Available instead of BillPay button");
    //Activate e Bill to convert button to PayaBill. instead of failing we can proceed execution
    kony.automation.button.click(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"]);
    await kony.automation.playback.waitFor(["frmManagePayees","btnProceedIC"],15000);
    kony.automation.button.click(["frmManagePayees","btnProceedIC"]);
    appLog('Successfully clicked on YES button');
    await kony.automation.playback.wait(10000);
    kony.automation.button.click(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"]);
    appLog("Successfully clicked on BillPay button");

  }else{

    // We can directly click on BillPay button
    kony.automation.button.click(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"]);
    appLog("Successfully clicked on BillPay button");
    await kony.automation.playback.wait(5000);
  }
}

async function SelectPayee_Reccurringpayment(){

  //await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmBulkPayees","btnPayementDue"],15000);
  kony.automation.button.click(["frmBulkPayees","btnPayementDue"]);
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxpayee"], "0-000005701-123456782NW6739",15000);
  kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxpayee"], "0-000005701-123456782NW6739");
  appLog("Selected the Payee while Reccurring Payment");

}



// async function enterAmount_SheduleBillPay(amount){

//   appLog("Intiated method to enter amount : <b>"+amount+"</b>");
//   await kony.automation.playback.wait(5000);
//   await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","txtSearch"],15000);
//   kony.automation.textbox.enterText(["frmBillPaymentDue","payABill","txtSearch"],amount);
//   appLog("Successfully entered amount : <b>"+amount+"</b>");

//   // await SelectPayFromAcc_SheduleBillPay();
// }

async function SelectPayFromAcc_SheduleBillPay(){

  appLog("Intiated method to Select Payee From");

  await kony.automation.playback.waitFor(["frmPayABill","txtTransferFrom"],15000);
  kony.automation.widget.touch(["frmPayABill","txtTransferFrom"], [600,17],null,null);
  kony.automation.flexcontainer.click(["frmPayABill","segTransferFrom[0,0]","flxAccountListItem"]);

  appLog("Successfully selected Payee from the list");
}

// async function selectfrequency_SheduledBillPay(freq){

//   appLog("Intiated method to select freq : <b>"+freq+"</b>");
//   await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxFrequency"],15000);
//   kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxFrequency"],freq);
//   appLog("Successfully selected freq : "+freq);
// }

async function SelectDateRange_SheduledBillpay() {

  //new chnage in 202010
  //await kony.automation.playback.wait(5000);
  appLog("Intiated method to select DateRange");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxForHowLong"],15000);
  kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxForHowLong"], "ON_SPECIFIC_DATE");

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","calSendOn"],15000);
  kony.automation.calendar.selectDate(["frmBillPaymentDue","payABill","calSendOn"], [29,11,2021]);
  appLog("Successfully selected sendOn Date");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","CalDeliverBy"],15000);
  kony.automation.calendar.selectDate(["frmBillPaymentDue","payABill","CalDeliverBy"], [12,21,2021]);
  appLog("Successfully selected EndOn Date");
}

async function SelectSendOnDate_SheduledBillpay() {

  await kony.automation.playback.waitFor(["frmPayABill","calSendOn"],15000);
  kony.automation.calendar.selectDate(["frmPayABill","calSendOn"], [1,11,2022]);
  appLog("Successfully selected sendOn Date");
}

async function SelectOccurences_SheduledBillPay(occurences) {
  //new chnage in 202010
  appLog("Intiated method to select N.of Occurences");
  await kony.automation.playback.waitFor(["frmPayABill","lbxForHowLong"],15000);
  kony.automation.listbox.selectItem(["frmPayABill","lbxForHowLong"], "NO_OF_RECURRENCES");
  await kony.automation.playback.waitFor(["frmPayABill","txtEndingOn"],15000);
  kony.automation.textbox.enterText(["frmPayABill","txtEndingOn"],occurences);
  appLog("Successfully selected Occurences : <b>"+occurences+"</b>");
}

async function EnterNoteValue_SheduledBillPay(notes) {

  appLog("Intiated method to enter note value");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","txtNotes"],15000);
  kony.automation.textbox.enterText(["frmBillPaymentDue","payABill","txtNotes"],notes);
  appLog("Successfully entered Note value : <b>"+notes+"</b>");

  appLog("Intiated method to click on Confirm button");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","btnConfirm"],15000);
  kony.automation.button.click(["frmBillPaymentDue","payABill","btnConfirm"]);
  appLog("Successfully clicked on Confirm button");
}

// async function confirmSheduledBillpay(){

//   appLog("Intiated method to Confirm Sheduled BillPayment");

//   await kony.automation.playback.waitFor(["frmPayBillConfirm","flxImgCheckBox"],15000);
//   kony.automation.flexcontainer.click(["frmPayBillConfirm","flxImgCheckBox"]);
//   appLog("Successfully accepted terms check box");

//   await kony.automation.playback.waitFor(["frmPayBillConfirm","btnConfirm"],15000);
//   kony.automation.button.click(["frmPayBillConfirm","btnConfirm"]);
//   appLog("Successfully clicked on Confirm button");
// }

async function CancelSheduledBillPay(){

  appLog("Intiated method to CANCEL Sheduled BillPayment");
  await kony.automation.playback.waitFor(["frmPaymentDueConfirm","btnCancelBill"],15000);
  kony.automation.flexcontainer.click(["frmPaymentDueConfirm","btnCancelBill"]);
  appLog("Successfully clicked on Cancel button");
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmPaymentDueConfirm","CustomPopupCancel","lblPopupMessage"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmPaymentDueConfirm","CustomPopupCancel","lblPopupMessage"],"text")).toEqual("Are you sure you want to cancel this bill payment?");

  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmPaymentDueConfirm","CustomPopupCancel","btnYes"],15000);
  kony.automation.flexcontainer.click(["frmPaymentDueConfirm","CustomPopupCancel","btnYes"]);
  appLog("Successfully clicked on YES button");

  await kony.automation.playback.wait(15000);
  appLog("Moving back to Accounts Dashboard");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","customheadernew","flxAccounts"],15000);
  kony.automation.flexcontainer.click(["frmBillPaymentDue","customheadernew","flxAccounts"]);
  appLog("Successfully MovedBack to Account DashBoard");
}

async function verifySheduledBillpaySuccessMsg(){

  appLog("Intiated method to verify Sheduled BillPay SuccessMsg");

  await kony.automation.playback.wait(5000);
  var Success= await kony.automation.playback.waitFor(["frmPayBillAcknowledgement"],30000);

  if(Success){
    //expect(kony.automation.widget.getWidgetProperty(["frmPayBillAcknowledgement","lblSuccessMessage"],"text")).not.toBe('');
    await kony.automation.playback.waitFor(["frmPayBillAcknowledgement","customheadernew","flxAccounts"],15000);
    kony.automation.flexcontainer.click(["frmPayBillAcknowledgement","customheadernew","flxAccounts"]);
    appLog("Successfully MovedBack to Account DashBoard");
  }else if(await kony.automation.playback.waitFor(["frmPayABill","rtxDowntimeWarning"],15000)){
    //Checking for exception message
    //Move back to dashboard again there is an exception message
    appLog("Exception while performing a Sheduled BillPay");
    await kony.automation.playback.waitFor(["frmPayABill","customheadernew","flxAccounts"],15000);
    kony.automation.flexcontainer.click(["frmPayABill","customheadernew","flxAccounts"]);
    await kony.automation.playback.waitFor(["frmAccountsLanding","lblShowing"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","lblShowing"], "text")).toContain("Show");

    //appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));
    //fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));
    appLog("Failed : Unable to Perform Successfull Transcation. Failed with rtxDowntimeWarning");
    fail("Failed : Unable to Perform Successfull Transcation. Failed with rtxDowntimeWarning");
  }else{
    appLog("Unable to verify Success Message");
  }

}

async function navigateToSheduledBillPay(){

  await NavigateToBillPay();
  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],15000);
  kony.automation.button.click(["frmBulkPayees","btnScheduled"]);
  appLog("Successfully clicked on Sheduled tab");
  await kony.automation.playback.wait(5000);
}

async function clickOnEditButton_SheduledBillPayment(){

  appLog("Intiated method to click on Edit button");
  await kony.automation.playback.waitFor(["frmBillPayScheduled","segmentBillpay"],15000);
  kony.automation.button.click(["frmBillPayScheduled","segmentBillpay[0]","btnEdit"]);
  appLog("Successfully clicked on Edit button");
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmPayABill","lblPayABill"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmPayABill","lblPayABill"],"text")).toEqual("Pay a Bill");

}

async function UpdatedSheduledBillPayment(notes){

  await SelectPayFromAcc_SheduleBillPay();
  await selectfrequency_SheduledBillPay("Once");
  await EnterNoteValue_SheduledBillPay(notes);
  await confirmSheduledBillpay();

}
async function EditSheduledBillPay(notes){

  var nopayments=await kony.automation.playback.waitFor(["frmBillPayScheduled","rtxNoPaymentMessage"],15000);
  if(nopayments){
    appLog("There are no sheduled payments");
    //Move back to accounts
    await kony.automation.playback.waitFor(["frmBillPayScheduled","customheadernew","flxAccounts"],15000);
    kony.automation.button.click(["frmBillPayScheduled","customheadernew","flxAccounts"]);
    appLog("Successfully MovedBack to Account DashBoard");
  }else{

    appLog("There are few sheduled payments");
    await clickOnEditButton_SheduledBillPayment();
    await UpdatedSheduledBillPayment(notes);
    var warning=await kony.automation.playback.waitFor(["frmPayABill","rtxDowntimeWarning"],15000);
    if(warning){
      await kony.automation.playback.waitFor(["frmPayABill","customheadernew","flxAccounts"],15000);
      kony.automation.flexcontainer.click(["frmPayABill","customheadernew","flxAccounts"]);
      await verifyAccountsLandingScreen();
      appLog("Successfully MovedBack to Account DashBoard");
      //fail("Custom Message :: Amount Greater than Allowed Maximum Deposit");
      appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));
      fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));

    }else{
      await verifySheduledBillpaySuccessMsg();
      await verifyAccountsLandingScreen();
    }  

  }
}

async function clickOnAddPayeeLink(){

  appLog("Intiated method to click on Add payee link");
  await kony.automation.playback.waitFor(["frmBulkPayees","flxAddPayee"],15000);
  kony.automation.flexcontainer.click(["frmBulkPayees","flxAddPayee"]);
  await kony.automation.playback.wait(10000);
  appLog("Successfully Clicked on addPayee link");
}

async function enterPayeeDetails_UsingPayeeinfo(name,number){

  appLog("Intiated method to Add Payee Details");
  await kony.automation.playback.wait(5000);
  appLog("Enter New Payee");

  kony.automation.textbox.enterText(["frmAddPayee1","tbxCustomerName"],name);
  
  await kony.automation.playback.wait(10000);
  kony.automation.flexcontainer.click(["frmAddPayee1","segPayeesName[0]","flxNewPayees"]);

  await kony.automation.playback.waitFor(["frmAddPayee1","segPayeesName[0]","flxNewPayees"],1000);
  appLog("Selecting Payee");
  kony.automation.flexcontainer.click(["frmAddPayee1","segPayeesName[0]","flxNewPayees"]);
  appLog("Successfully Entered Payee name as : <b>"+name+"</b>");

  await kony.automation.playback.waitFor(["frmAddPayee1","tbxAccountNumber"],15000);
  kony.automation.textbox.enterText(["frmAddPayee1","tbxAccountNumber"],number);
  appLog("Successfully Entered account number as : <b>"+number+"</b>");
  await kony.automation.playback.waitFor(["frmAddPayee1","tbxConfirmAccountNumber"],15000);
  kony.automation.textbox.enterText(["frmAddPayee1","tbxConfirmAccountNumber"],number);
  appLog("Successfully Re-Entered account number as : <b>"+number+"</b>");
  await kony.automation.playback.waitFor(["frmAddPayee1","btnNext"],25000);
  await kony.automation.playback.wait(10000);
  kony.automation.button.click(["frmAddPayee1","btnNext"]);
  appLog("Successfully Clicked on Continue button ");
  await kony.automation.playback.wait(10000);
}

async function clickOnNextButton_payeeDetails(){

  appLog("Intiated method verify Payee Details");
  await kony.automation.playback.waitFor(["frmPayeeDetails","btnDetailsConfirm"],15000);
  await kony.automation.playback.wait(10000);
  kony.automation.button.click(["frmPayeeDetails","btnDetailsConfirm"]);
  appLog("Successfully Clicked on Next button ");

  // await linkPayee();
}

async function SelectPayeeBankingType_payeeDetails(BankingType){

  appLog("Intiated method to click on AddRecepientContinue");
  var btnAddRecepient=await kony.automation.playback.waitFor(["frmPayeeDetails","btnAddRecepientContinue"],15000);
  if(btnAddRecepient){
    kony.automation.button.click(["frmPayeeDetails","btnAddRecepientContinue"]);
    appLog("Successfully Clicked on AddRecepientContinue button ");
    await kony.automation.playback.wait(5000);
  }else{
    appLog("Selecting Banking type screen is not available");
  }

}

async function linkPayee(){

  var linkreciptent=await kony.automation.playback.waitFor(["frmPayeeDetails","contractList","lblHeader"],15000);

  if(linkreciptent){
    kony.automation.widget.touch(["frmPayeeDetails","contractList","lblCheckBoxSelectAll"], [8,6],null,null);
    appLog("Successfully selected select All CheckBox");
    await kony.automation.playback.waitFor(["frmPayeeDetails","contractList","flxCol4"],15000);
    kony.automation.flexcontainer.click(["frmPayeeDetails","contractList","flxCol4"]);
    await kony.automation.playback.waitFor(["frmPayeeDetails","contractList","btnAction6"],15000);
    kony.automation.button.click(["frmPayeeDetails","contractList","btnAction6"]);
    appLog("Successfully Clicked on Link Reciptent Continue Button");

  }
}


async function clickOnConfirmButton_verifyPayee(){


  appLog("Intiated method to confirm Payee Details");
  await kony.automation.playback.waitFor(["frmVerifyPayee","btnConfirm"],15000);
  await kony.automation.playback.wait(10000);
  kony.automation.button.click(["frmVerifyPayee","btnConfirm"]);
  appLog("Successfully Clicked on Confirm button");
}

async function verifyAddPayeeSuccessMsg(){
  
  appLog("Intiated method to verify Add payee SuccessMsg");
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],30000);
  var msg=kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text");
  appLog("Success message is:<b>"+msg+"</b>");
  // var name1=(RecipientName+msg);
  //expect(kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text")).not.toBe(''))
  if(msg==="‘TERRY'S TEST AND TUNE’ has been added!")
  {
    //     await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],15000);
    //     var message1=kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text");
    //     appLog("message is:<b>"+message1+"</b>");
    await kony.automation.playback.wait(10000);
    await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","customheadernew","flxAccounts"],15000);
    kony.automation.flexcontainer.click(["frmPayeeAcknowledgement","customheadernew","flxAccounts"]);
    appLog("Successfully Moved back to Accounts dashboard");

  }else if(await kony.automation.playback.waitFor(["frmAddPayeeInformation","rtxDowntimeWarning"],5000)){

    appLog("Intiated method to verify DowntimeWarning");
    await kony.automation.playback.waitFor(["frmAddPayeeInformation","customheadernew","flxAccounts"],15000);
    kony.automation.flexcontainer.click(["frmAddPayeeInformation","customheadernew","flxAccounts"]);

    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmAddPayeeInformation","rtxDowntimeWarning"],"text"));
    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmAddPayeeInformation","rtxDowntimeWarning"],"text"));

  }else{
    appLog("Unable to add Payee");
  }

}


async function expandPayee_ManagePayee(){

  appLog("Intiated method to Expand payee from Manage payee");
  //   await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","segmentBillPay"],15000);
  //   kony.automation.flexcontainer.click(["frmManagePayees","manageBiller","segmentBillPay[0]","flxDropdown"]);
  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillPay","flxDropdown"],15000);
  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillPay[0]","flxDropdown"]);
  appLog("Successfully clicked on Manage Payees dropdown arrow");
  await kony.automation.playback.wait(10000);
}

async function MoveBackToDashBoard_ManagePayees(){

  await kony.automation.playback.waitFor(["frmManagePayees","customheadernew","lblAccounts"],15000);
  await kony.automation.playback.wait(10000);
  kony.automation.flexcontainer.click(["frmManagePayees","customheadernew","lblAccounts"]);
  await kony.automation.playback.wait(5000);
  appLog("Successfully Moved back to Accounts dashboard");
}
async function clickOnEditBtn_ManagePayees(){

  await expandPayee_ManagePayee();
  appLog("Intiated method to Edit Biller");
  await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","segmentBillPay"],15000);
  kony.automation.button.click(["frmManagePayees","manageBiller","segmentBillPay[0]","btn3"]);
  appLog("Successfully clicked on Editbutton under manage payee");
}

async function deletePayee_ManagePayee(){

  appLog("Intiated method to Delete Payee");
  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[0]","flxDropdown"],15000);
  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxDropdown"]);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[0]","btnDeleteBiller"],15000);
  kony.automation.button.click(["frmManagePayees","segmentBillpay[0]","btnDeleteBiller"]);
  appLog("Successfully clicked on Delete button under manage payee");
  await kony.automation.playback.waitFor(["frmManagePayees","DeletePopup","btnYes"],15000);
  kony.automation.button.click(["frmManagePayees","DeletePopup","btnYes"]);
  await kony.automation.playback.wait(10000);
  appLog("Successfully clicked on YES button on delete biller");
  await kony.automation.playback.wait(10000);
  await MoveBackToDashBoard_ManagePayees();
}

async function EditPayee_ManagePayee(){


  appLog("Intiated method to updated biller Zipcode");
  await kony.automation.playback.waitFor(["frmManagePayees","tbxZipCode"],15000);
  kony.automation.textbox.enterText(["frmManagePayees","tbxZipCode"],getRandomNumber(6));
  appLog("Successfully Updated biller zipcode");

  appLog("Intiated method to click on Continue button");
  await kony.automation.playback.waitFor(["frmManagePayees","btnContinue"],15000);
  kony.automation.button.click(["frmManagePayees","btnContinue"]);
  appLog("Successfully Clicked on Continue button");

  appLog("Intiated method to click on Savelink Continue button");
  await kony.automation.playback.waitFor(["frmManagePayees","contractList","btnAction6"],15000);
  kony.automation.button.click(["frmManagePayees","contractList","btnAction6"]);
  await kony.automation.playback.wait(5000);
  appLog("Successfully Clicked on Savelink Continue button");

  await verifyUpdatePayeeSuccessMsg();

}


async function verifyUpdatePayeeSuccessMsg(){

  appLog("Intiated method to verify Update payee SuccessMsg");
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],30000);
  expect(kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","customheadernew","flxAccounts"],15000);
  kony.automation.flexcontainer.click(["frmPayeeAcknowledgement","customheadernew","flxAccounts"]);
  appLog("Successfully Moved back to Accounts dashboard");

}


async function navigateToPastBillPay(){

  appLog("Intiated method to navigate to Billpay History");
  await NavigateToBillPay();
  await kony.automation.playback.waitFor(["frmBulkPayees","btnHistory"],15000);
  kony.automation.button.click(["frmBulkPayees","btnHistory"]);
  appLog("Successfully clicked on History tab");
  await kony.automation.playback.wait(5000);
}

async function clickonRepeatButton_PastBillpay(){

  appLog("Intiated method to click on Repeat button");
  await kony.automation.playback.waitFor(["frmBillPayHistory","segmentBillpay"],15000);
  kony.automation.button.click(["frmBillPayHistory","segmentBillpay[0]","btnRepeat"]);
  appLog("Successfully clicked on Repeat tab");
  await kony.automation.playback.wait(5000);
}

async function repeatPastBillPayment(note){

  appLog("Intiated method to Repeat a BillPay");

  var nopayments=await kony.automation.playback.waitFor(["frmBillPayHistory","rtxNoPaymentMessage"],15000);

  if(nopayments){
    appLog("There are no History payments");
    //Move back to accounts
    await kony.automation.playback.waitFor(["frmBillPayHistory","customheadernew","flxAccounts"],15000);
    kony.automation.button.click(["frmBillPayHistory","customheadernew","flxAccounts"]);
    appLog("Successfully Moved back to Accounts dashboard");
  }else{

    await clickonRepeatButton_PastBillpay();
    await SelectPayFromAcc_SheduleBillPay();
    await EnterNoteValue_SheduledBillPay(note);
    await confirmSheduledBillpay();

    var warning=await kony.automation.playback.waitFor(["frmPayABill","rtxDowntimeWarning"],15000);
    if(warning){
      await kony.automation.playback.waitFor(["frmPayABill","customheadernew","flxAccounts"],15000);
      kony.automation.flexcontainer.click(["frmPayABill","customheadernew","flxAccounts"]);
      await verifyAccountsLandingScreen();
      appLog("Successfully Moved back to Accounts dashboard");
      //fail("Custom Message :: Amount Greater than Allowed Maximum Deposit");
      appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));
      fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));


    }else{
      await verifySheduledBillpaySuccessMsg();
      await verifyAccountsLandingScreen();
      appLog("Successfully Moved back to Accounts dashboard");
    }

  }
}

async function clickOnAllpayeesTab(){

  appLog("Intiated method to click on Allpayees tab");
  await kony.automation.playback.waitFor(["frmBulkPayees","btnAllPayees"],15000);
  await kony.automation.playback.wait(5000);
  kony.automation.button.click(["frmBulkPayees","btnAllPayees"]);
  appLog("Successfully clicked on Allpayees tab");
  await kony.automation.playback.wait(5000);
}

async function verifyAllPayeesList(){

  appLog("Intiated method to verify Allpayees List");

  var PayeeList=await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay"],15000);

  if(PayeeList){
    await kony.automation.playback.wait(5000);
    kony.automation.flexcontainer.click(["frmBulkPayees","segmentBillpay[0]","flxDropdown"]);
    appLog("Successfully verified on Allpayees List");
  }else if(await kony.automation.playback.waitFor(["frmBulkPayees","rtxNoPaymentMessage"],5000)){

    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmBulkPayees","rtxNoPaymentMessage"],"text"));
    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmBulkPayees","rtxNoPaymentMessage"],"text"));

  }else {
    appLog("Unable to verify Allpayees List");
  }

}
async function verifyManagePayeeList(){

  appLog("Intiated method to verify Manage Payee List");

  var PayeeList=await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay"],15000);

  if(PayeeList){
    await kony.automation.playback.wait(5000);
    kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxDropdown"]);
    appLog("Successfully verified on Manage Payee List");
  }else if(await kony.automation.playback.waitFor(["frmManagePayees","rtxNoPaymentMessage"],5000)){

    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmManagePayees","rtxNoPaymentMessage"],"text"));
    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmManagePayees","rtxNoPaymentMessage"],"text"));

  }else {
    appLog("Unable to verify ManagePayee List");
  }

}


async function MoveBackToDashBoard_AllPayees(){

  await kony.automation.playback.waitFor(["frmBulkPayees","customheadernew","flxAccounts"],15000);
  kony.automation.flexcontainer.click(["frmBulkPayees","customheadernew","flxAccounts"]);
}

async function clickOnSavePayeeButton_OneTimePay(){

  appLog("Intiated method to Save Payee from OneTime Payment");

  await kony.automation.playback.waitFor(["frmOneTimePaymentAcknowledgement","btnSavePayee"],15000);
  kony.automation.button.click(["frmOneTimePaymentAcknowledgement","btnSavePayee"]);
  appLog("Successfully Clicked on Save button");

  //Continue Button
  await kony.automation.playback.waitFor(["frmPayeeDetails","btnDetailsConfirm"],15000);
  kony.automation.button.click(["frmPayeeDetails","btnDetailsConfirm"]);
  appLog("Successfully Clicked on Continue button");

  //Confirm Button
  await kony.automation.playback.waitFor(["frmVerifyPayee","btnConfirm"],15000);
  kony.automation.button.click(["frmVerifyPayee","btnConfirm"]);
  appLog("Successfully Clicked on Confirm button");

  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAddPayee"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAddPayee"],"text")).toEqual("Add Payee");


  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text")).toContain("has been added.");
  appLog("Successfully verified Added payee");

  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","btnViewAllPayees"],15000);
  kony.automation.button.click(["frmPayeeAcknowledgement","btnViewAllPayees"]);
  appLog("Successfully clicked on ViewAll payees button");

}

async function activateBillPayTermsconditions(){

  appLog("Intiated method to Activate Billpay TC's");

  var warning=await kony.automation.playback.waitFor(["frmBillPayActivation","lblWarning"],15000);
  if(warning){
    //expect(kony.automation.widget.getWidgetProperty(["frmBillPayActivation","lblWarning"], "text")).toEqual("Please activate My Bills.");
    await kony.automation.playback.waitFor(["frmBillPayActivation","listbxAccountType"],15000);
    kony.automation.listbox.selectItem(["frmBillPayActivation","listbxAccountType"], "160128223241511");
    appLog("Successfully Selected Default BillPay Acc");
    await kony.automation.playback.waitFor(["frmBillPayActivation","lblFavoriteEmailCheckBox"],15000);
    kony.automation.widget.touch(["frmBillPayActivation","lblFavoriteEmailCheckBox"], null,null,[14,13]);
    appLog("Successfully accepted checkbox");
    await kony.automation.playback.waitFor(["frmBillPayActivation","flxAgree"],15000);
    kony.automation.flexcontainer.click(["frmBillPayActivation","flxAgree"]);
    appLog("Successfully clicked on AgreeFlex");
    await kony.automation.playback.waitFor(["frmBillPayActivation","btnProceed"],15000);
    kony.automation.button.click(["frmBillPayActivation","btnProceed"]);
    appLog("Successfully clicked on Proceed button");
    var error=await kony.automation.playback.waitFor(["frmBillPayActivation","rtxErrorMessage"],15000);
    if(error){
      //expect(kony.automation.widget.getWidgetProperty(["frmBillPayActivation","rtxErrorMessage"], "text")).toEqual("Update operation failed on  customerpreference:No value specified for parameter 2");
      await kony.automation.playback.waitFor(["frmBillPayActivation","customheadernew","flxAccounts"],15000);
      kony.automation.flexcontainer.click(["frmBillPayActivation","customheadernew","flxAccounts"]);
    }
  }else{
    appLog("Already accepted billpay activation..Moveback to dashboard");
    await MoveBackToDashBoard_AllPayees();
  }
}

async function activateNewlyAddedpayee(){

  appLog('Intiated method to activate Newly Added Payee');

  await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","segmentBillPay"],15000);

  var ButtonName=kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"], "text");

  //appLog('Button Name is : '+ButtonName);

  if(ButtonName==='Activate ebill'){

    kony.automation.button.click(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"]);
    appLog('Successfully clicked on activate button');

    var activate=await kony.automation.playback.waitFor(["frmManagePayees","lblWarningOneIC"],15000);
    if(activate){
      await kony.automation.playback.waitFor(["frmManagePayees","btnProceedIC"],15000);
      kony.automation.button.click(["frmManagePayees","btnProceedIC"]);
      appLog('Successfully clicked on YES button');
      await kony.automation.playback.wait(10000);
      await MoveBackToDashBoard_ManagePayees();
    }else {
      appLog('Failed : Unable to Activate Added Payee');
      fail('Failed : Unable to Activate Added Payee');
    }
  }else {
    appLog('Payee Already activated');
  }

}

async function NavigateToBillPay(){

  appLog("Intiated method to navigate to BillPay");
  await kony.automation.playback.wait(20000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMyBills"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxPayBill"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayBill"]);
  appLog("Successfully clicked on BillPay tab");
  await kony.automation.playback.wait(5000);
}

async function SelectRecurringPaymentsTab()
{

  await kony.automation.playback.waitFor(["frmBulkPayees","btnPayementDue"],15000);
  kony.automation.button.click(["frmBulkPayees","btnPayementDue"]);
  appLog("Successfully selected recurringPayments");
  await kony.automation.playback.wait(15000);
}
async function SelectPayee_ManagePayeeList(PayeeName)
{
  await kony.automation.playback.wait(10000);
  appLog("Intiated method to select Payee from Manage Payee list : <b>"+PayeeName+"</b>");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxpayee"],15000);
  kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxpayee"],PayeeName);
  await kony.automation.playback.wait(15000);
}

async function SelectPayFromAcc(Pay){

  appLog("Intiated method to Select Payee From");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxpayFromValue"],15000);
  await kony.automation.playback.wait(5000);
  kony.automation.flexcontainer.click(["frmBillPaymentDue","payABill","lbxpayFromValue"],"Pay");
  appLog("Successfully selected Payee from the list");
}

async function EnterAmount_ScheduleBillPay(amount){

  await kony.automation.playback.wait(5000);
  appLog("Intiated method to enter amount : <b>"+amount+"</b>");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","txtSearch"],15000);
  kony.automation.textbox.enterText(["frmBillPaymentDue","payABill","txtSearch"],amount);
  appLog("Successfully entered amount : <b>"+amount+"</b>");
  //await SelectPayFromAcc_SheduleBillPay();
}

async function SelectFrequency_ScheduleBillPay(freq){

  await kony.automation.playback.wait(5000);
  appLog("Intiated method to select freq : <b>"+freq+"</b>");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxFrequency"],15000);
  kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxFrequency"],freq);
  appLog("Successfully selected freq : "+freq);
  await kony.automation.playback.wait(5000);
}

async function SelectDateRange_ScheduleBillPay()
{

  await kony.automation.playback.wait(5000);
  appLog("Intiated method to select DateRange");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxForHowLong"],15000);
  kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxForHowLong"], "ON_SPECIFIC_DATE");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","calSendOn"],15000);
  kony.automation.calendar.selectDate(["frmBillPaymentDue","payABill","calSendOn"], [12,20,2021]);
  appLog("Successfully selected sendOn Date");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","CalDeliverBy"],15000);
  kony.automation.calendar.selectDate(["frmBillPaymentDue","payABill","CalDeliverBy"], [1,10,2022]);
  appLog("Successfully selected EndOn Date");
  await kony.automation.playback.wait(5000);
}
async function ConfirmScheduleBillPay()
{

  await kony.automation.playback.wait(5000);
  appLog("Intiated method to Confirm Sheduled BillPayment");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","btnConfirm"],15000);
  kony.automation.button.click(["frmBillPaymentDue","payABill","btnConfirm"]);
  appLog("Successfully clicked on Confirm button");
  await kony.automation.playback.wait(5000);
}
async function ClickOnConfirm()
{
  await kony.automation.playback.wait(5000);
  appLog("Initiated method to confirm");
  await kony.automation.playback.waitFor(["frmPaymentDueConfirm","btnConfirmBill"],15000);
  kony.automation.button.click(["frmPaymentDueConfirm","btnConfirmBill"]);
  appLog("Successfully Clicked on Next button");
  await kony.automation.playback.wait(5000);
}

//Updated by Tapasya
async function VerifyScheduleBillPaySuccessMsg()
{

  appLog("Intiated method to verify Sheduled BillPay SuccessMsg");

  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmPaymentDueAcknowledgement","lblSuccessMessage"],30000);
  var Status= kony.automation.widget.getWidgetProperty(["frmPaymentDueAcknowledgement","lblSuccessMessage"],"text");
  appLog("Success message is:<b>"+Status+"</b>");
  if(Status==="Success! Your payment has been scheduled.")
  {
    appLog("Moving back to Account Dashboard as Payment is success");
    await kony.automation.playback.wait(5000);
    await kony.automation.playback.waitFor(["frmPaymentDueAcknowledgement","customheadernew","flxAccounts"],15000);
    kony.automation.flexcontainer.click(["frmPaymentDueAcknowledgement","customheadernew","flxAccounts"]);
    appLog("Successfully MovedBack to Account DashBoard");
  }
  else
    {
      appLog("Unable to perform payment and  Status is:<b>"+Status+"</b>");
      
    }
}
//   else if(await kony.automation.playback.waitFor(["frmPayABill","rtxDowntimeWarning"],15000)){
//     //Checking for exception message
//     //Move back to dashboard again there is an exception message
//     appLog("Exception while performing a Sheduled BillPay");
//     await kony.automation.playback.waitFor(["frmPayABill","customheadernew","flxAccounts"],15000);
//     kony.automation.flexcontainer.click(["frmPayABill","customheadernew","flxAccounts"]);
//     await kony.automation.playback.waitFor(["frmAccountsLanding","lblShowing"],15000);
//     expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","lblShowing"], "text")).toContain("Show");
//     appLog("Failed : Unable to Perform Successfull Transcation. Failed with rtxDowntimeWarning");
//     fail("Failed : Unable to Perform Successfull Transcation. Failed with rtxDowntimeWarning");
//   }else{
//     appLog("Unable to verify Success Message");
//   }



async function navigateToManagePayees(){

  await NavigateToBillPay();
  appLog("Intiated method to navigate to Manage Payee list");
  await kony.automation.playback.waitFor(["frmBulkPayees","btnManagePayee"],15000);
  kony.automation.button.click(["frmBulkPayees","btnManagePayee"]);
  appLog("Successfully clicked on Manage payee Button");
  await kony.automation.playback.wait(15000);
}


// async function MoveBackToDashBoard_ManagePayees(){

//   await kony.automation.playback.waitFor(["frmManagePayees","customheadernew","lblAccounts"],15000);
//   kony.automation.flexcontainer.click(["frmManagePayees","customheadernew","lblAccounts"]);
//   appLog("Successfully Moved back to Accounts dashboard");
// }

// async function clickOnAddPayeeLink(){

//   appLog("Intiated method to click on Add payee link");
//   await kony.automation.playback.waitFor(["frmBulkPayees","lblAddPayee"],15000);
//   kony.automation.flexcontainer.click(["frmBulkPayees","lblAddPayee"]);
//   appLog("Successfully Clicked on addPayee link");
// }
async function SearchPayeeName(Payeename){

  appLog("Intiated Method to verify Payee <b>"+Payeename+"</b>");
  var PayeeList=await kony.automation.playback.waitFor(["frmManagePayees","txtSearch"],15000);
  if(PayeeList){
    expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","segmentBillPay[0]"],"text")).toEqual(Payeename);
    //expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","segmentBillPay[0]","lblColumn1"],"text")).toEqual(payeename);
    // expect(kony.automation.widget.getWidgetProperty(["flxBillPaymentManagePayees","flxBillPayManagePayees","segmentBillPay[0]","lblPayee"],"text")).not.toBe('');
  }
  else if(await kony.automation.playback.waitFor(["frmManagePayees","rtxNoPaymentMessage"],5000)){
    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmManagePayees","rtxNoPaymentMessage"],"text"));
    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmManagePayees","rtxNoPaymentMessage"],"text"));

  }else{
    appLog("Unable to find Payee in ManagePayees List");
  }

}
// async function enterPayeeDetails_UsingPayeeinfo(payeeName,accno){

//   appLog("Intiated method to Add Payee Details");
//   await kony.automation.playback.wait(5000);
//   await kony.automation.playback.waitFor(["frmAddPayee1","tbxCustomerName"],5000);
//   kony.automation.textbox.enterText(["frmAddPayee1","tbxCustomerName"],payeeName);
//   await kony.automation.playback.wait(25000);
//   kony.automation.flexcontainer.click(["frmAddPayee1","segPayeesName[0]","flxNewPayees"]);

//   appLog("Successfully Entered Payee name as : <b>"+payeeName+"</b>");

//   await kony.automation.playback.waitFor(["frmAddPayee1","tbxAccountNumber"],15000);
//   kony.automation.textbox.enterText(["frmAddPayee1","tbxAccountNumber"],accno);
//   appLog("Successfully Entered account number as : <b>"+accno+"</b>");
//   await kony.automation.playback.waitFor(["frmAddPayee1","tbxConfirmAccountNumber"],15000);
//   kony.automation.textbox.enterText(["frmAddPayee1","tbxConfirmAccountNumber"],accno);
//   appLog("Successfully Re-Entered account number as : <b>"+accno+"</b>");
//   await kony.automation.playback.waitFor(["frmAddPayee1","btnNext"],25000);
//   kony.automation.button.click(["frmAddPayee1","btnNext"]);
//   appLog("Successfully Clicked on Continue button ");
// }
// async function clickOnConfirmButton_verifyPayee(){

//   appLog("Intiated method to confirm Payee Details");
//   await kony.automation.playback.waitFor(["frmVerifyPayee","btnConfirm"],15000);
//   kony.automation.button.click(["frmVerifyPayee","btnConfirm"]);
//   appLog("Successfully Clicked on Confirm button ");
// }
// async function verifyAddPayeeSuccessMsg(){

//   appLog("Intiated method to verify Add payee SuccessMsg");
//   await kony.automation.playback.wait(5000);
//   var success=await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],30000);

//   if(success){
//     await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],15000);
//     expect(kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text")).not.toBe('');
//     await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","customheadernew","flxAccounts"],15000);
//     kony.automation.flexcontainer.click(["frmPayeeAcknowledgement","customheadernew","flxAccounts"]);
//     appLog("Successfully Moved back to Accounts dashboard");
//     await kony.automation.playback.wait(5000);

//   }else if(await kony.automation.playback.waitFor(["frmAddPayeeInformation","rtxDowntimeWarning"],5000)){

//     appLog("Intiated method to verify DowntimeWarning");
//     await kony.automation.playback.waitFor(["frmAddPayeeInformation","customheadernew","flxAccounts"],15000);
//     kony.automation.flexcontainer.click(["frmAddPayeeInformation","customheadernew","flxAccounts"]);

//     appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmAddPayeeInformation","rtxDowntimeWarning"],"text"));
//     fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmAddPayeeInformation","rtxDowntimeWarning"],"text"));
//     await kony.automation.playback.wait(5000);
//   }else{

//     appLog("Unable to add Payee");
//     await kony.automation.playback.wait(5000);

//   }

// }
// async function navigateToManagePayee(){
//   await kony.automation.playback.wait(15000);
//   await NavigateToBillPay();
//   await kony.automation.playback.wait(10000);
//   appLog("Intiated method to navigate to Manage Payee list");
//   await kony.automation.playback.waitFor(["frmBulkPayees","btnManagePayee"],15000);
//   kony.automation.button.click(["frmBulkPayees","btnManagePayee"]);
//   appLog("Successfully clicked on Manage payees tab");
//   await kony.automation.playback.wait(25000);
// }
async function validateNewlyAddedPayee(data){

  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmManagePayees","txtSearch"],10000);
  kony.automation.textbox.enterText(["frmManagePayees","txtSearch"],data);
  kony.automation.flexcontainer.click(["frmManagePayees","btnConfirm"]);
  await kony.automation.playback.wait(20000);
  //kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxPayee"]);
  //await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[0]","flxDropdown"],5000);
  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[0]","flxDropdown"],10000);
  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxDropdown"]);
  await kony.automation.playback.wait(2000);
  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxDropdown"]);
  await kony.automation.playback.wait(10000);
  //expect(kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxBankAddress"],"text")).toContain(unique_Accnumber);
}

//Added by Tapasya
async function PayBillHeadersValidation()
{
  appLog("Navigated to PayBills Screen");
  await kony.automation.playback.wait(10000);

  await kony.automation.playback.waitFor(["frmBulkPayees","lblTransactions"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","lblTransactions"],"text")).toContain("Pay Bills");
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmBulkPayees","btnAllPayees"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnAllPayees"],"text")).toContain("One-Time Payment");
  await kony.automation.playback.waitFor(["frmBulkPayees","btnPayementDue"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnPayementDue"],"text")).toContain("Recurring Payments");
  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnScheduled"],"text")).toContain("Scheduled");
  await kony.automation.playback.waitFor(["frmBulkPayees","btnHistory"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnHistory"],"text")).toContain("History");
  await kony.automation.playback.waitFor(["frmBulkPayees","btnManagePayee"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnManagePayee"],"text")).toContain("Manage Payees");
  await kony.automation.playback.waitFor(["frmBulkPayees","lblAddPayee"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","lblAddPayee"],"text")).toContain("Add Payee");
  appLog("Headers Validated");

  appLog("SubHeaders Validation");
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmBulkPayees","lblPayee"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","lblPayee"],"text")).toContain("Payee");
  await kony.automation.playback.waitFor(["frmBulkPayees","imgSortPayee"],5000);
  await kony.automation.playback.waitFor(["frmBulkPayees","lblAmount"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","lblAmount"],"text")).toContain("Amount");
  appLog("SubHeaders Validated");

  appLog("Footers validation");
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmBulkPayees","btnBulkCancel"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnBulkCancel"],"text")).toContain("Cancel");
  await kony.automation.playback.waitFor(["flxBillPaymentAllPayeesSelected","lblDropdown"],5000);
  await kony.automation.playback.waitFor(["frmBulkPayees","btnBulkConfirm"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnBulkConfirm"],"text")).toContain("Continue");
  appLog("Footers validated");
}

//Added by Tapasya
async function MoveBackToDashBoard_ScheduledTab(){

  await kony.automation.playback.waitFor(["frmBillPayScheduled","customheadernew","flxAccounts"],15000);
  await kony.automation.playback.wait(10000);
  kony.automation.flexcontainer.click(["frmBillPayScheduled","customheadernew","flxAccounts"]);
  await kony.automation.playback.wait(5000);
  appLog("Successfully Moved back to Accounts dashboard");
}

//Added by Tapasya
async function VerifyScheduledTabPagination()
{

  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmBillPayScheduled","lblPagination"],15000);
  var Count=kony.automation.widget.getWidgetProperty(["frmBillPayScheduled","lblPagination"], "text");
  appLog("count is:<b>"+Count+"</b>");
  if(Count=="1 - 50 Payees")
  {
    appLog("50 Transactions are present");
  }
  else
  {
    appLog("less than 50 Transactions are present");
  }
}

//Added by Tapasya
async function HistoryTabValidation()
{
  appLog("Validate all details in History tab");
  await kony.automation.playback.wait(15000);
  await kony.automation.playback.waitFor(["frmBillPayHistory","segmentBillpay[0]","flxDropdown"],10000);
  kony.automation.flexcontainer.click(["frmBillPayHistory","segmentBillpay[0]","flxDropdown"]);
  await kony.automation.playback.waitFor(["flxBillPaymentHistorySelected","btnRepeat"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","btnRepeat"],"text")).toContain("Repeat"); 
  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxDate"],"text")).not.toBe('');
  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxSendTo"],"text")).not.toBe('');
  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxAmount"],"text")).not.toBe('');
  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxStatus"],"text")).not.toBe('');
  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","btnEdit"],"text")).toContain("Download Report");
  //expect(kony.automation.widget.getWidgetProperty(["flxBillPaymentHistorySelected","lblSentFrom"],"text")).toContain("From"); 

  appLog("Checking Pagination");
  var Count=kony.automation.widget.getWidgetProperty(["frmBillPayHistory","lblPagination"], "text");
  appLog("count is:<b>"+Count+"</b>");
  if(Count=="1 - 50 Payees")
  {
    appLog("50 Transactions are present");
  }
  else
  {
    appLog("less than 50 Transactions are present");
  }
}


//Added by Tapasya
async function MoveBackToDashBoard_HistoryTab()
{
  appLog("Moving back to account Dashboard");
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmBillPayHistory","customheadernew","lblAccounts"],10000);
  kony.automation.flexcontainer.click(["frmBillPayHistory","customheadernew","lblAccounts"]);
  appLog("Moved back to account Dashboard");
  await kony.automation.playback.wait(5000);
}

//Added By Tapasya
async function NavigateToManagePayeesFromPayments()
{
  await kony.automation.playback.wait(10000);

  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxManagePayee"],10000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxManagePayee"]);

  await kony.automation.playback.waitFor(["frmManagePayees","btnAllPayees"],10000);
  kony.automation.flexcontainer.click(["frmManagePayees","btnAllPayees"]); 
  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],10000);
  kony.automation.flexcontainer.click(["frmBulkPayees","btnScheduled"]); 
  await kony.automation.playback.wait(10000);
  kony.automation.flexcontainer.click(["frmBillPayScheduled","customheadernew","lblAccounts"]);
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxManagePayee"],10000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxManagePayee"]);
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[2]","flxDropdown"],10000);
  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[2]","flxDropdown"]); 
  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[2]","btnPayBill"],10000);
  appLog("clicking on View activity");
  kony.automation.button.click(["frmManagePayees","segmentBillpay[2]","btnPayBill"]);
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmPaymentActivity","btnbacktopayeelist"],10000);
  appLog("Moving back to list");
  kony.automation.button.click(["frmPaymentActivity","btnbacktopayeelist"]);
  await kony.automation.playback.wait(10000);
  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[2]","flxDropdown"]);
  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[2]","btnDeleteBiller"],10000);
  appLog("clicking on Delete");
  kony.automation.button.click(["frmManagePayees","segmentBillpay[2]","btnDeleteBiller"]); 
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmManagePayees","DeletePopup","btnYes"],10000);
  appLog("click on Yes cancel");
  kony.automation.button.click(["frmManagePayees","DeletePopup","btnYes"]);
  await kony.automation.playback.wait(10000);
  appLog("Clicked on YES");
  await kony.automation.playback.wait(10000);
}

//Added by Tapasya
async function ManagePayeesViewActivityDetailsValidation()
{
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[1]","flxDropdown"],10000);
  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[1]","flxDropdown"]); 
  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[1]","btnPayBill"],10000);
  appLog("clicking on View activity");
  kony.automation.button.click(["frmManagePayees","segmentBillpay[1]","btnPayBill"]);
  await kony.automation.playback.wait(10000);

  await kony.automation.playback.waitFor(["frmPaymentActivity","lblPayABill"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblPayABill"],"text")).toContain("Pay Bills");

  await kony.automation.playback.waitFor(["frmPaymentActivity","lblActivityHeader"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblActivityHeader"],"text")).toContain("Payment Activity");

  await kony.automation.playback.waitFor(["frmPaymentActivity","lblActivityHeaderlbl"],10000);
  var text=kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblActivityHeaderlbl"],"text");
  appLog("data is:</b>"+text+"</b>");

  await kony.automation.playback.waitFor(["frmPaymentActivity","lblFromTitle"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblFromTitle"],"text")).toContain("From");
  var From=kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblFromTitle"],"text");
  appLog("data is:</b>"+From+"</b>");

  await kony.automation.playback.waitFor(["frmPaymentActivity","lblAmountDeductedTitle"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblAmountDeductedTitle"],"text")).toContain("Total Amount Paid");
  var Deducted=kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblAmountDeducted"],"text");
  appLog("data is:</b>"+Deducted+"</b>");  
  if(Deducted=="N/A")
  {
    await kony.automation.playback.waitFor(["frmPaymentActivity","rtxNoRecords"],10000);
    expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","rtxNoRecords"],"text")).toContain("No Records found so far.");
    appLog("No Records");
  }

  await kony.automation.playback.waitFor(["frmPaymentActivity","lblDate"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblDate"],"text")).toContain("Paid Date");

  await kony.automation.playback.waitFor(["frmPaymentActivity","imgSortDate"],10000);

  await kony.automation.playback.waitFor(["frmPaymentActivity","CopylblFrom0id1c1a27969541"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","CopylblFrom0id1c1a27969541"],"text")).toContain("From Account");
  await kony.automation.playback.waitFor(["frmPaymentActivity","CopyimgSortDate0b28c91ef371c48"],10000);

  await kony.automation.playback.waitFor(["frmPaymentActivity","lblAmount"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblAmount"],"text")).toContain("Amount");
  await kony.automation.playback.waitFor(["frmPaymentActivity","imgSortAmount"],10000);

  await kony.automation.playback.waitFor(["frmPaymentActivity","lblStatus"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblStatus"],"text")).toContain("Confirmation #");	

  await kony.automation.playback.waitFor(["frmPaymentActivity","lblAddPayee"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblAddPayee"],"text")).toContain("Add Payee");	
  await kony.automation.playback.wait(5000);
  kony.automation.button.click(["frmPaymentActivity","lblAddPayee"]);
  await kony.automation.playback.wait(5000);

  await kony.automation.playback.waitFor(["frmAddPayee1","lblAddPayee"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmAddPayee1","lblAddPayee"],"text")).toContain("Add Payee");	

  await kony.automation.playback.waitFor(["frmAddPayee1","customheadernew","lblManagepayee"],10000);
  kony.automation.button.click(["frmAddPayee1","customheadernew","lblManagepayee"]);
  await kony.automation.playback.wait(5000);

  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[1]","btnPayBill"],10000);
  kony.automation.button.click(["frmManagePayees","segmentBillpay[1]","btnPayBill"]);

  await kony.automation.playback.wait(10000);

  await kony.automation.playback.waitFor(["frmPaymentActivity","btnbacktopayeelist"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","btnbacktopayeelist"],"text")).toContain("Back to Payee List");	

  await kony.automation.playback.waitFor(["frmPaymentActivity","btnbacktopayeelist"],10000);
  appLog("Moving back to list");
  kony.automation.button.click(["frmPaymentActivity","btnbacktopayeelist"]);
  await kony.automation.playback.wait(1000);
}
//Added By Tapasya
async function PayeeSortIconOneTimePaymentValidation()
{

  await kony.automation.playback.wait(15000); 
  appLog("Verifying Payee name before sorting");
  var name=kony.automation.widget.getWidgetProperty(["frmBulkPayees","segmentBillpay[0]","flxBillPaymentAllPayeesSelected","lblPayee"],"text"); 
  appLog("name is:<b>"+name+"</b>");
  await kony.automation.playback.wait(10000);
  appLog("Clicking on sort icon");
  await kony.automation.playback.waitFor(["frmBulkPayees","lblPayee"],10000);
  kony.automation.flexcontainer.click(["frmBulkPayees","lblPayee"]);
  await kony.automation.playback.wait(10000);
  var name1=kony.automation.widget.getWidgetProperty(["frmBulkPayees","segmentBillpay[0]","flxBillPaymentAllPayeesSelected","lblPayee"],"text"); 
  appLog("name is:<b>"+name1+"</b>");
  if(name===name1)
  {
    appLog("data is not sorted");
  }
  else
  {
    appLog("Sorted");
  }
}
async function PayeeSortIconScheduledTabValidation()
{

  await kony.automation.playback.wait(10000);
  appLog("Move to Scheduled Tab and Validate Payee sorting");
  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],10000);
  kony.automation.flexcontainer.click(["frmBulkPayees","btnScheduled"]);
  await kony.automation.playback.wait(15000); 
  var Scheduled=kony.automation.widget.getWidgetProperty(["frmBillPayScheduled","segmentBillpay[0]","flxBillPaymentScheduledSelected","lblPayeeName"],"text"); 
  appLog("name is:<b>"+Scheduled+"</b>");
  await kony.automation.playback.wait(10000); 
  appLog("Clicking on sort icon");
  await kony.automation.playback.waitFor(["frmBillPayScheduled","lblPayee"],10000);
  kony.automation.flexcontainer.click(["frmBillPayScheduled","lblPayee"]);
  //   await kony.automation.playback.waitFor(["frmBulkPayees","lblPayee"],10000);
  //   kony.automation.flexcontainer.click(["frmBulkPayees","lblPayee"]); 
  await kony.automation.playback.wait(15000);
  appLog("Clicked on sort icon");
  var Scheduled1=kony.automation.widget.getWidgetProperty(["frmBillPayScheduled","segmentBillpay[0]","flxBillPaymentScheduledSelected","lblPayeeName"],"text"); 
  appLog("name is:<b>"+Scheduled1+"</b>");
  if(Scheduled===Scheduled1)
  {
    appLog("data is not sorted");
  }
  else
  {
    appLog("Sorted");
  }
}
async function PayeeSortIconScheduledTabValidation()
{

  await kony.automation.playback.wait(10000);
  appLog("Move to Scheduled Tab and Validate Payee sorting");
  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],10000);
  kony.automation.flexcontainer.click(["frmBulkPayees","btnScheduled"]);
  await kony.automation.playback.wait(15000); 
  var Scheduled=kony.automation.widget.getWidgetProperty(["frmBillPayScheduled","segmentBillpay[0]","flxBillPaymentScheduledSelected","lblPayeeName"],"text"); 
  appLog("name is:<b>"+Scheduled+"</b>");
  await kony.automation.playback.wait(10000); 
  appLog("Clicking on sort icon");
  await kony.automation.playback.waitFor(["frmBillPayScheduled","lblPayee"],10000);
  kony.automation.flexcontainer.click(["frmBillPayScheduled","lblPayee"]);
  //   await kony.automation.playback.waitFor(["frmBulkPayees","lblPayee"],10000);
  //   kony.automation.flexcontainer.click(["frmBulkPayees","lblPayee"]); 
  await kony.automation.playback.wait(15000);
  appLog("Clicked on sort icon");
  var Scheduled1=kony.automation.widget.getWidgetProperty(["frmBillPayScheduled","segmentBillpay[0]","flxBillPaymentScheduledSelected","lblPayeeName"],"text"); 
  appLog("name is:<b>"+Scheduled1+"</b>");
  if(Scheduled===Scheduled1)
  {
    appLog("data is not sorted");
  }
  else
  {
    appLog("Sorted");
  }
}
async function PayeeSortIconHistoryTabValidation()
{

  await kony.automation.playback.wait(10000);
  appLog("Move to History Tab and Validate Payee sorting");
  await kony.automation.playback.waitFor(["frmBillPayScheduled","btnHistory"],10000);
  kony.automation.flexcontainer.click(["frmBillPayScheduled","btnHistory"]);
  await kony.automation.playback.wait(15000); 
  var History=kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxBillPaymentHistorySelected","lblSendTo"],"text"); 
  appLog("name is:<b>"+History+"</b>");
  await kony.automation.playback.wait(10000); 
  appLog("Clicking on sort icon");
  await kony.automation.playback.waitFor(["frmBillPayHistory","lblSortDescription"],10000);
  kony.automation.flexcontainer.click(["frmBillPayHistory","lblSortDescription"]);
  await kony.automation.playback.wait(15000);
  appLog("Clicked on sort icon");
  var History1=kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxBillPaymentHistorySelected","lblSendTo"],"text"); 
  appLog("name is:<b>"+History1+"</b>");
  if(History===History1)
  {
    appLog("data is not sorted");
  }
  else
  {
    appLog("Sorted");
  }
}
async function PayeeSortIconMangeePayeeTabValidation()
{

  await kony.automation.playback.wait(10000);
  appLog("Move to ManagePayees Tab and Validate Payee sorting");
  await kony.automation.playback.waitFor(["frmBillPayHistory","btnManagePayee"],10000);
  kony.automation.flexcontainer.click(["frmBillPayHistory","btnManagePayee"]);
  await kony.automation.playback.wait(15000); 
  var ManagePayee=kony.automation.widget.getWidgetProperty(["frmManagePayees","segmentBillpay[0]","flxBillPaymentManagePayeesSelected","lblPayee"],"text"); 
  appLog("name is:<b>"+ManagePayee+"</b>");
  await kony.automation.playback.wait(10000); 
  appLog("Clicking on sort icon");
  await kony.automation.playback.waitFor(["frmManagePayees","flxBillerName"],10000);
  kony.automation.flexcontainer.click(["frmManagePayees","flxBillerName"]);
  await kony.automation.playback.wait(15000);
  appLog("Clicked on sort icon");
  var ManagePayee1=kony.automation.widget.getWidgetProperty(["frmManagePayees","segmentBillpay[0]","flxBillPaymentManagePayeesSelected","lblPayee"],"text"); 
  appLog("name is:<b>"+ManagePayee1+"</b>");
  if(ManagePayee===ManagePayee1)
  {
    appLog("data is not sorted");
  }
  else
  {
    appLog("Sorted");
  }
  await kony.automation.playback.wait(10000);
}
//added by Tapasya 
async function EnterOneTimePaymentdetails_Bulk(Payee,amount,amount2)
{
  appLog("Intiated method to enter details for OneTime payment");
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[1]","lblDropdown"],10000);
  appLog("Clicking on Dropdown");
  kony.automation.flexcontainer.click(["frmBulkPayees","segmentBillpay[1]","lblDropdown"]);
  appLog("Clicked on Dropdown");
  await kony.automation.playback.wait(10000);
  appLog("Selecting Payee from dropdown list");
  kony.automation.listbox.selectItem(["frmBulkPayees","segmentBillpay[1]","lstPayFrom"],Payee);
  appLog("Selected Payee from dropdown list");
  await kony.automation.playback.wait(10000);
  appLog("Intiated method to enter amount details for OneTime payment");
  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[1]","txtAmount"],10000);
  kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[1]","txtAmount"],amount);
  appLog("entered amount details for OneTime payment");
  await kony.automation.playback.wait(10000); 

  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[1]","lblPayee"],10000);
  var Payee=kony.automation.widget.getWidgetProperty(["frmBulkPayees","segmentBillpay[1]","lblPayee"],"text"); 
  appLog("name is:<b>"+Payee+"</b>");
  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[1]","calSendOn"],10000);
  kony.automation.calendar.selectDate(["frmBulkPayees","segmentBillpay[1]","calSendOn"], [12,14,2021]);
  await kony.automation.playback.wait(10000);
  appLog("date is selected and populated");
  appLog("Intiated method to enter details for OneTime payment for another Payee");
  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[2]","txtAmount"],10000);
  kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[2]","txtAmount"],amount2);
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[2]","lblPayee"],10000);
  var Payees=kony.automation.widget.getWidgetProperty(["frmBulkPayees","segmentBillpay[2]","lblPayee"],"text"); 
  appLog("name is:<b>"+Payees+"</b>");
  // await kony.automation.playback.wait(5000);
  //      await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[2]","lblDropdown"],10000);
  //     appLog("Clicking on Dropdown");
  //     kony.automation.flexcontainer.click(["frmBulkPayees","segmentBillpay[2]","lblDropdown"]);
  //     appLog("Clicked on Dropdown");
  //     await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[2]","calSendOn"],10000);
  //     kony.automation.calendar.selectDate(["frmBulkPayees","segmentBillpay[2]","calSendOn"], [1,14,2022]);
  await kony.automation.playback.wait(10000);
  if(Payee=== Payees)
  {
    appLog("Same Payees");
  }
  else
  {
    appLog("Different Payees");
  }
}
async function OnetimePaymentConfirmationScreenDetails()
{
  appLog("Initiated method to confirm OneTimePayment");
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmBulkPayees","btnBulkConfirm"],15000);
  kony.automation.flexcontainer.click(["frmBulkPayees","btnBulkConfirm"]);
  await kony.automation.playback.wait(10000);

  appLog("Validate BillPayee screen Header and sub headers");
  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblAddPayee"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblAddPayee"], "text")).toEqual("Pay Bills");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblPayee"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblPayee"], "text")).toEqual("Payee");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblPaymentAccount"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblPaymentAccount"], "text")).toEqual("Pay From");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblSendOn"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblSendOn"], "text")).toEqual("Send On");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblAmount"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblAmount"], "text")).toEqual("Amount");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblTotalAMountPaid"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblTotalAMountPaid"], "text")).toEqual("Total Amount");

  var value=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblAmountValue"],"text");
  appLog("value is:<b>"+value+"</b>");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblDisclaimerText"],10000);
  var data=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblDisclaimerText"], "text");
  appLog("Text is:<b>"+data+"</b>");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","segBill[0]","lblPayee"],10000);
  var Payee=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","segBill[0]","lblPayee"], "text");
  appLog("Details are:<b>"+Payee+"</b>");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","segBill[0]","lblPaymentAccount"],10000);
  var PayFrom=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","segBill[0]","lblPaymentAccount"], "text");
  appLog("Details are:<b>"+PayFrom+"</b>");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","segBill[0]","lblSendOn"],10000);
  var SendOn=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","segBill[0]","lblSendOn"], "text");
  appLog("Details are:<b>"+SendOn+"</b>");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","segBill[0]","lblAmount"],10000);
  var Amount=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","segBill[0]","lblAmount"], "text");
  appLog("Details are:<b>"+Amount+"</b>");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnCancel"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","btnCancel"], "text")).toEqual("Cancel");


  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnCancel"],10000);
  kony.automation.flexcontainer.click(["frmBulkBillPayConfirm","btnCancel"]);
  await kony.automation.playback.wait(5000);

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","CustomPopupCancel","lblHeading"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","CustomPopupCancel","lblHeading"], "text")).toEqual("Cancel Bill Payment(s)");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","CustomPopupCancel","lblPopupMessage"],10000);

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","CustomPopupCancel","btnYes"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","CustomPopupCancel","btnYes"], "text")).toEqual("Yes, Cancel");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","CustomPopupCancel","btnNo"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","CustomPopupCancel","btnNo"], "text")).toEqual("No, Go Back");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","CustomPopupCancel","lblcross"],10000);
  kony.automation.flexcontainer.click(["frmBulkBillPayConfirm","CustomPopupCancel","btnNo"]);
  await kony.automation.playback.wait(5000);

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnModify"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","btnModify"], "text")).toEqual("Modify");

  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnConfirm"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","btnConfirm"], "text")).toEqual("Confirm");
  await kony.automation.playback.wait(10000);
}

async function VerifyOneTimePaymentAcknowledgementScreenDetails()
{
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","lblBulkBillPayAcknowledgement"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","lblBulkBillPayAcknowledgement"], "text")).toEqual("Pay Bills");


  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","lblHeading"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","lblHeading"], "text")).toEqual("Acknowledgement");
  //appLog("Display1 passed");

  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","lblPaymentStatus"],10000);
  //expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","flxHeader","lblPaymentStatus"], "text")).toEqual("Payment successful" ||"Payment submitted");
  var Status=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblPaymentStatus"], "text");
  appLog("PaymentStatus is:<b>"+Status+"</b>");
  //appLog("Display2 passed");
  //await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","flxHeader","lblPaymentStatus"],10000);
  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","lblRefernceNumber"],10000);
  var reference=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblRefernceNumber"], "text");
  appLog("number is:<b>"+reference+"</b>");
  //appLog("Display3 passed");

  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","imgAcknowledgement"],10000);

  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","segBill[0]","lblPayee"],10000);
  var Payee=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblPayee"], "text");
  appLog("Payee is:<b>"+Payee+"</b>");
  // appLog("Display4 passed");

  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","lblSendOn"],10000);
  var SendOnDate=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblSendOn"], "text");
  appLog("Date is:<b>"+SendOnDate+"</b>");
  //appLog("Display5 passed");

  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","lblAmount"],10000);
  var Amount=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblAmount"], "text");
  appLog("Amount is:<b>"+Amount+"</b>");
  //appLog("Display6 passed");

  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","lblDisclaimerText"],10000);
  var disclaimer=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","lblDisclaimerText"], "text");
  appLog("text is:<b>"+disclaimer+"</b>");


  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","btnMakeAnotherPayment"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","btnMakeAnotherPayment"], "text")).toEqual("Make Another Payment");


  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","btnViewPaymentActivity"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","btnViewPaymentActivity"], "text")).toEqual("View Payment Activity");


  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","lblTotalAmountPaid"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","lblTotalAmountPaid"], "text")).toEqual("Total  Paid");


  await kony.automation.playback.wait(10000);

}

async function ClickModifyButton()
{
  await kony.automation.playback.wait(10000);
  appLog("Clicking on ModifyButton");
  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnModify"],10000);
  kony.automation.flexcontainer.click(["frmBulkBillPayConfirm","btnModify"]);
  appLog("Clicked on ModifyButton");
}


async function RecurringPaymentsTabValidation()
{
  await kony.automation.playback.wait(10000);

  await kony.automation.playback.waitFor(["frmBillPaymentDue","lblTransactions"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","lblTransactions"], "text")).toEqual("Pay Bills");   

  await kony.automation.playback.waitFor(["frmBillPaymentDue","btnPayementDue"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","btnPayementDue"], "text")).toEqual("Recurring Payments"); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblPayee"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblPayee"], "text")).toEqual("Payee"); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblPaymentAccount"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblPaymentAccount"], "text")).toEqual("Payment Amount"); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblPayFrom"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblPayFrom"], "text")).toEqual("Pay From"); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblFrequency"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblFrequency"], "text")).toEqual("Frequency"); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblForHowLong"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblForHowLong"], "text")).toEqual("For How Long?"); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblSendOn"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblSendOn"], "text")).toEqual("Start Date"); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblDelieverBy"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblDelieverBy"], "text")).toEqual("End Date"); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","btnCancel"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","btnCancel"], "text")).toEqual("Cancel"); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","btnConfirm"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","btnConfirm"], "text")).toEqual("Continue"); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","lblAddPayee"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","lblAddPayee"], "text")).toEqual("Add Payee"); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","txtSearch"],1000);
  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxpayFromValue"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lbxpayFromValue"], "text")).not.toBe(''); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxFrequency"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lbxFrequency"], "text")).not.toBe(''); 

  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxForHowLong"],1000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lbxForHowLong"], "text")).not.toBe('');
  await kony.automation.playback.wait(10000);

}
async function QuckLinkRecurringPayments()
{
  await kony.automation.playback.wait(10000);
  appLog("Moving to AddPayee screen and validate header");
  await kony.automation.playback.waitFor(["frmBillPaymentDue","lblAddPayee"],15000);
  kony.automation.button.click(["frmBillPaymentDue","lblAddPayee"]);
  await kony.automation.playback.waitFor(["frmAddPayee1","lblAddPayee"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAddPayee1","lblAddPayee"],"text")).toContain("Add Payee");
  await kony.automation.playback.waitFor(["frmAddPayee1","lblMyRegisteredPayees"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAddPayee1","lblMyRegisteredPayees"],"text")).toContain("My Registered Payees");
  appLog("Click on Cancel button");
  await kony.automation.playback.waitFor(["frmAddPayee1","btnResetPayeeInfo"],15000);
  kony.automation.button.click(["frmAddPayee1","btnResetPayeeInfo"]); 
  appLog("Clicked on Cancel button");
  await kony.automation.playback.wait(10000);
  appLog("Moving back to Onetime Payment Tab and validate headers");

}