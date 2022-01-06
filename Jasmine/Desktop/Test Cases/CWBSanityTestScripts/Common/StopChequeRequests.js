async function VerifyStopChequeRequestTabs()
{
    await kony.automation.playback.wait(50000);
     await kony.automation.playback.waitFor(["frmStopPayments","MyRequestsTabs","btnDisputedTrnsactions"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","btnDisputedTrnsactions"],"text")).toEqual("Stop Cheque Requests");
  appLog("Successfully verified Stop Cheque Requests tab");
  
await kony.automation.playback.waitFor(["frmStopPayments","MyRequestsTabs","btnStopPAPRequests"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","btnStopPAPRequests"],"text")).toEqual("Stop Pre-Authorized Payment Requests");
  appLog("Successfully verified Stop PAP Requests tab");
    
  await kony.automation.playback.waitFor(["frmStopPayments","lblStopPayments"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblStopPayments"],"text")).toEqual("Cheque Management");
  appLog("Successfully verified Cheque Management Text");
  
  await kony.automation.playback.waitFor(["frmStopPayments","MyRequestsTabs","btnAddNewStopCheckPayments"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","btnAddNewStopCheckPayments"],"text")).toEqual("New Stop Cheque Request");
  appLog("Successfully verified Link to New Stop Cheque Request");
  
  await kony.automation.playback.waitFor(["frmStopPayments","lblAccountTypes"],5000);
   var DefaultAcc = kony.automation.widget.getWidgetProperty(["frmStopPayments","lblAccountTypes"],"text");
    kony.automation.flexcontainer.click(["frmStopPayments","lblAccountTypes"]);
  var FirstAcc = kony.automation.widget.getWidgetProperty(["frmStopPayments","accountTypes","segAccountTypes[0,0]","flxAccountTypes","lblUsers"],"text");
  if(DefaultAcc===FirstAcc)
    {
      appLog("First account is shown as Default");
    }
 var OtherAccs = kony.automation.widget.getWidgetProperty(["frmStopPayments","accountTypes","segAccountTypes"],"data");
  var OtherAccsCount = OtherAccs.length;
  if(OtherAccsCount>1){
     var SecondAcc = kony.automation.widget.getWidgetProperty(["frmStopPayments","accountTypes","segAccountTypes[0,1]","flxAccountTypes","lblUsers"],"text");
        kony.automation.flexcontainer.click(["frmStopPayments","accountTypes","segAccountTypes[0,1]","flxAccountTypes","lblUsers"]);
    appLog("Successfully clicked on the second account");
        await kony.automation.playback.wait(15000);
    var SelectedAcc = kony.automation.widget.getWidgetProperty(["frmStopPayments","lblAccountTypes"],"text");
      expect(SecondAcc).toEqual(SelectedAcc);
      appLog("Successfully the second account is shown as selected account");  
  }
  else
    {
      appLog("Only one account is present");
    }
 
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","lblSortDate"],"text")).toEqual("Date of Request");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","imgSortDate"],"text")).not.toBe('');
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementUnSelectedWrapper","lblDate"],"text")).not.toBe('');
  appLog("Date Of Request is displayed");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","lblSortDescription"],"text")).toEqual("Cheque Number");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","CopyimgSortAmount0b5f259cf43a64f"],"text")).not.toBe('');
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementUnSelectedWrapper","lblDescription"],"text")).not.toBe('');
  appLog("Cheque number is displayed");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","lblReferenceNumber"],"text")).toEqual("Reason");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","imgSortAmount"],"text")).not.toBe('');
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementUnSelectedWrapper","lblReferenceNo"],"text")).not.toBe('');
  appLog("Reason is displayed");
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","lblStatus"],"text")).toEqual("Status");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","imgStatus"],"text")).not.toBe('');
  var Status = kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementUnSelectedWrapper","lblStatus"],"text");
if(Status==="Complete")
  {
    appLog("Status is Complete");
  }
  else
    {
      appLog("Status is Active");
    }
  
  
  }


async function ValidateStopChequeDetails()
{
    await kony.automation.playback.wait(50000);
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxDropdown"],"text")).not.toBe('');
  kony.automation.flexcontainer.click(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxDropdown"]);
    await kony.automation.playback.wait(50000);
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementSelectedWrapper","lblPayeeName"],"text")).toEqual("Cheque Date:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementSelectedWrapper","lblToAccountData"],"text")).not.toBe('');
  appLog("Cheque date is displayed");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementSelectedWrapper","lblExpiresOnKey"],"text")).toEqual("Payee Name:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementSelectedWrapper","lblExpiresOnData"],"text")).not.toBe('');
  appLog("Payee name is displayed");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementSelectedWrapper","lblExpiresOnKey0"],"text")).toEqual("Amount:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementSelectedWrapper","lblExpiresOnData0"],"text")).not.toBe('');
  appLog("Amount is displayed");
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementSelectedWrapper","lblDateOfDescriptionKey"],"text")).toEqual("Cheques:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementSelectedWrapper","lblDateOfDescriptionValue"],"text")).not.toBe('');
  appLog("Cheques is displayed");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementSelectedWrapper","lblChequeManagementNotes"],"text")).toEqual("Notes:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxChequeManagementSelectedWrapper","lblTransactionTypeValue"],"text")).not.toBe('');
  appLog("Notes is displayed");
  
}
async function ClickOnStopCheque()
{   
  await kony.automation.playback.wait(40000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],5000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
  appLog("Successfully clicked on Menu");
await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICEflxAccountsMenu"],5000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICEflxAccountsMenu"]);
  appLog("Successfully expanded Account services menu");
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICE0flxMyAccounts"],5000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICE0flxMyAccounts"]);
  appLog("Successfully clicked on Stop Cheque");
  
}

async function MoveBackToLandingScreen_StopCheque(){
  await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"],5000);
  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
  appLog("Successfully clicked on Accounts");
  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"], "text")).toContain("Accounts");
  appLog("Successfully Moved back to Account Dashboard");
}


async function MoveBackToAccLandingScreen_StopCheq(){
  await kony.automation.playback.waitFor(["frmStopPayments","customheadernew","flxAccounts"],5000);
  kony.automation.flexcontainer.click(["frmStopPayments","customheadernew","flxAccounts"]);
  appLog("Successfully clicked on Accounts");
  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"], "text")).toContain("Accounts");
  appLog("Successfully Moved back to Account Dashboard");
}

async function ClickOnNewStopCheque()
{
    await kony.automation.playback.wait(50000);
    kony.automation.flexcontainer.click(["frmStopPayments","MyRequestsTabs","btnAddNewStopCheckPayments"]);
  appLog("Successfully Clicked on New Stop Cheque Request");
}

async function ValidateSingleStopCheque()
{
      await kony.automation.playback.wait(25000);
   var unique_Accnumber=getRandomNumber(7);
	//kony.automation.widget.touch(["frmStopPayments"], null,null,[294,258]);

//  var acc = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lbxFrom"].value,"text");
// //     kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lbxFrom"]).selectedIndex.text;
//   appLog(acc);
//   var result= acc.option[1].text;
  
//   appLog(result);
    await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPayee"],15000);
    kony.automation.textbox.enterText(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPayee"],"Test Sample");
   var Payee = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPayee"], "text");
  appLog("Successfully entered Payee Name");
  await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxCheckNumber"],15000);
    kony.automation.textbox.enterText(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxCheckNumber"],unique_Accnumber);
   var SingleCheque = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxCheckNumber"], "text");
  appLog("Successfully entered Check number");
  await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxAmount"],15000);
    kony.automation.textbox.enterText(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxAmount"],"1");
  var Amount = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxAmount"], "text");
  appLog("Successfully entered Amount");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblDateOfIssue"],"text")).toEqual("Date Of Issue:");
  appLog("Sucessfully verified date of issue text");
   await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","lbxSelectReasonNew"],15000);
  kony.automation.listbox.selectItem(["frmStopPayments","StopCheckPaymentSeriesMultiple","lbxSelectReasonNew"], "CHEQUE_LOST_STOLEN");
  appLog("Successfully selected Reason");
   await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxDescriptionNew"],15000);
    kony.automation.textbox.enterText(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxDescriptionNew"],"SampleStopCheque");
    var Notes = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxDescriptionNew"], "text");
  appLog("Successfully entered Notes");
  kony.automation.widget.touch(["frmStopPayments","StopCheckPaymentSeriesMultiple","flxTCContentsCheckbox"], [13,14],null,null);
  //kony.automation.flexcontainer.click(["frmStopPayments","StopCheckPaymentSeriesMultiple","imgTCContentsCheckbox"]);
  appLog("Successfully Clicked on Terms & Conditions");
          await kony.automation.playback.wait(10000);
   kony.automation.flexcontainer.click(["frmStopPayments","StopCheckPaymentSeriesMultiple","btnProceed"]);
  appLog("Successfully Clicked on Continue button");
  
   await kony.automation.playback.waitFor(["frmStopPayments","lblHeader"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblHeader"],"text")).toEqual("Confirm Stop Cheque Payment Request");
  appLog("Successfully verified Confirmation screen haeder");
   await kony.automation.playback.waitFor(["frmStopPayments","ConfirmPage","flxChequeBookConfirmHeader","lblHeading"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","flxChequeBookConfirmHeader","lblHeading"],"text")).toEqual("Stop Cheque Details");
  appLog("Successfully verified Stop Cheque details header");
  await kony.automation.playback.waitFor(["frmStopPayments","ConfirmPage","lblAccount",],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblAccount"],"text")).toEqual("From Account:");
  appLog("From account is displayed in confirmation screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblChequeBooks1"],"text")).toEqual("Payee:");
  appLog("Payee text is shown in confirmation screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblFee"],"text")).toEqual("Cheque No: ");
  appLog("Cheque Number text is shown in confirmation screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblDeliveryType"],"text")).toEqual("Amount ($):");
  appLog("Amount text is shown in confirmation screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblNewField1"],"text")).toEqual("Reason:");
  appLog("Reason text is shown in confirmation screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblNewField2"],"text")).toEqual("Notes:");
  appLog("Notes text is shown in confirmation screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","Buttons","btnModify"],"text")).toEqual("Modify");
  appLog("Modify is shown in confirmation screen");

//   var ConfirmFromAcc =  kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblAccountValue"],"text");
//   if(FromAcc===ConfirmFromAcc)
//     {
//       appLog("Verified From account in confirmation screen");
//     }
if(Payee!==""){
  
  var PayeeConfirm = kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","rtxChequeBookValue1"],"text");
   expect(Payee).toEqual(PayeeConfirm);  
      appLog("Same Payee is shown in confirmation screen");   
}
  else
    {
       var PayeeBlank = kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","rtxChequeBookValue1"],"text");
      expect(PayeeBlank).toEqual("-");
  appLog("Payee is blank");    
    }
  var ConfirmSingleChequeNo =  kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblFeeValue"],"text");
if(SingleCheque===ConfirmSingleChequeNo)
  {
    appLog("Same cheque number is shown in confirmation screen");
  }
  else
    {
      appLog("Incorrect cheque number is shown");
    }
if(Amount!=="")
  {
     expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblDeliveryTypeValue"],"text")).not.toBe('');
    appLog("Same amount is shown in confirmation screen");
  }
  else
    {
      var AmountBlank = kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblDeliveryTypeValue"],"text");
  expect(AmountBlank).toEqual("-");
   
      appLog("Amount is blank");
    
    }
if(Notes!==""){
  
  var NotesConfirm = kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","rtxNewField2Value"],"text");
  expect(Notes).toEqual(NotesConfirm);
 
      appLog("Same Notes is shown in confirmation screen");
    
}
  else
    {
        var NotesBlank = kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","rtxNewField2Value"],"text");
      expect(NotesBlank).toEqual("-");
  
  appLog("Notes is blank");
}
      
    
    kony.automation.flexcontainer.click(["frmStopPayments","ConfirmPage","Buttons","btnModify"]);
appLog("Successfully clicked on Modify in confirmation screen");
      await kony.automation.playback.wait(25000);
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblChequeBookRequests"],"text")).toEqual("Stop Cheque Payment Request");
  appLog("Successfully landed back to the previous screen");
        await kony.automation.playback.wait(15000);
     kony.automation.flexcontainer.click(["frmStopPayments","StopCheckPaymentSeriesMultiple","btnProceed"]);
expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","Buttons","btnConfirm"],"text")).toEqual("Confirm");
  appLog("Successfully verified confirm button");
  

  
}

async function ValidateSeriesOfCheque()
{
  await kony.automation.playback.wait(25000);
     var unique_AccNo =getRandomNumber(1);

	//kony.automation.widget.touch(["frmStopPayments"], null,null,[294,258]);

//  var acc = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lbxFrom"].value,"text");
// //     kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lbxFrom"]).selectedIndex.text;
//   appLog(acc);
//   var result= acc.option[1].text;
  
//   appLog(result);
    await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPayee"],15000);
    kony.automation.textbox.enterText(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPayee"],"Test Sample");
   var Payee = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPayee"], "text");
  appLog("Successfully entered Payee Name");
kony.automation.widget.touch(["frmStopPayments","StopCheckPaymentSeriesMultiple","flxRadioBtn2"], [10,10],null,null);
	//kony.automation.widget.touch(["frmStopPayments"], null,null,[536,302]);
 // await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","imgRadioBtn2"],15000);
     //kony.automation.radiobutton.click(["frmStopPayments","StopCheckPaymentSeriesMultiple","imgRadioBtn2"]);
    await kony.automation.playback.wait(10000);
    kony.automation.textbox.enterText(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxFirstCheckNo"],unique_AccNo);
      kony.automation.textbox.enterText(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxLastCheckNo"],"45");
  appLog("Successfully entered Check numbers");
   await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","lstBoxSelectReasonForDispute"],15000);
  kony.automation.listbox.selectItem(["frmStopPayments","StopCheckPaymentSeriesMultiple","lstBoxSelectReasonForDispute"], "CHEQUE_LOST_STOLEN");
  appLog("Successfully selected Reason");
   await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxDescription"],15000);
    kony.automation.textbox.enterText(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxDescription"],"SampleStopCheque");
    var Notes = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxDescription"], "text");
  appLog("Successfully entered Notes");
  kony.automation.widget.touch(["frmStopPayments","StopCheckPaymentSeriesMultiple","flxTCContentsCheckbox"], [13,14],null,null);
  //kony.automation.flexcontainer.click(["frmStopPayments","StopCheckPaymentSeriesMultiple","imgTCContentsCheckbox"]);
  appLog("Successfully Clicked on Terms & Conditions");
          await kony.automation.playback.wait(10000);
   kony.automation.flexcontainer.click(["frmStopPayments","StopCheckPaymentSeriesMultiple","btnProceed"]);
  appLog("Successfully Clicked on Continue button");
  
   await kony.automation.playback.waitFor(["frmStopPayments","lblHeader"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblHeader"],"text")).toEqual("Confirm Stop Cheque Payment Request");
  appLog("Successfully verified Confirmation screen haeder");
   await kony.automation.playback.waitFor(["frmStopPayments","ConfirmPage","flxChequeBookConfirmHeader","lblHeading"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","flxChequeBookConfirmHeader","lblHeading"],"text")).toEqual("Stop Cheque Details");
  appLog("Successfully verified Stop Cheque details header");
  await kony.automation.playback.waitFor(["frmStopPayments","ConfirmPage","lblAccount",],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblAccount"],"text")).toEqual("From Account:");
  appLog("From account is displayed in confirmation screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblChequeBooks1"],"text")).toEqual("Payee:");
  appLog("Payee text is shown in confirmation screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblFee"],"text")).toEqual("Cheque No: ");
  appLog("Cheque Number text is shown in confirmation screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblNewField1"],"text")).toEqual("Reason:");
  appLog("Reason text is shown in confirmation screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblNewField2"],"text")).toEqual("Notes:");
  appLog("Notes text is shown in confirmation screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","Buttons","btnModify"],"text")).toEqual("Modify");
  appLog("Modify is shown in confirmation screen");

//   var ConfirmFromAcc =  kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","lblAccountValue"],"text");
//   if(FromAcc===ConfirmFromAcc)
//     {
//       appLog("Verified From account in confirmation screen");
//     }
if(Payee!==""){
  
  var PayeeConfirm = kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","rtxChequeBookValue1"],"text");
  expect(Payee).toEqual(PayeeConfirm);
      appLog("Same Payee is shown in confirmation screen");
    
}
  else
    {
        var PayeeBlank = kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","rtxChequeBookValue1"],"text");
   expect(PayeeBlank).toEqual("-");
  appLog("Payee is blank");
}
      
if(Notes!==""){
  
  var NotesConfirm = kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","rtxNewField2Value"],"text");
  expect(Notes).toEqual(NotesConfirm);
      appLog("Same Notes is shown in confirmation screen");   
}
  else
    {
        var NotesBlank = kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","rtxNewField2Value"],"text");
      expect(NotesBlank).toEqual("-");
  appLog("Notes is blank");
}
    
    kony.automation.flexcontainer.click(["frmStopPayments","ConfirmPage","Buttons","btnModify"]);
appLog("Successfully clicked on Modify in confirmation screen");
      await kony.automation.playback.wait(25000);
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblChequeBookRequests"],"text")).toEqual("Stop Cheque Payment Request");
  appLog("Successfully landed back to the previous screen");
        await kony.automation.playback.wait(15000);
     kony.automation.flexcontainer.click(["frmStopPayments","StopCheckPaymentSeriesMultiple","btnProceed"]);
expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","ConfirmPage","Buttons","btnConfirm"],"text")).toEqual("Confirm");
  appLog("Successfully verified confirm button");
   
}

async function ClickOnConfirm_SingleCheque()
{
  
  kony.automation.flexcontainer.click(["frmStopPayments","ConfirmPage","Buttons","btnConfirm"]);
  appLog("Successfully clicked on confirm button");
    await kony.automation.playback.wait(25000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblBillPayAcknowledgement"],"text")).toEqual("Stop Cheque Payment - Acknowledgement");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","acknowledgmentMyRequests","confirmHeaders","lblHeading"],"text")).toEqual("Acknowledgement");
  appLog("Sucessfully verified Acknowledgement screen headers");
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","acknowledgmentMyRequests","lblTransactionMessage"],"text")).toEqual("You have successfully requested to stop this cheque payment.");
appLog("Successfully verified Acknowledgement message");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","acknowledgmentMyRequests","ImgAcknowledged"],"text")).not.toBe('');
  appLog("Successfully verified Tick Icon");
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","confirmHeaders","lblHeading"],"text")).toEqual("Stop Cheque Details");
appLog("Successfully verified Stop cheque details header");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblAccount"],"text")).toEqual("From Account:");
   // var AccInAck = kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblAccountValue"],"text");
  appLog("From account is displayed in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblChequeBooks"],"text")).toEqual("Payee:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblChequeBooksValue"],"text")).not.toBe('');
  appLog("Payee  is shown in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblFee"],"text")).toEqual("Cheque No: ");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblFeeValue"],"text")).not.toBe('');
  appLog("Cheque number is shown in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblDeliveryType"],"text")).toEqual("Amount ($):");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblDeliveryTypeValue"],"text")).not.toBe('');
  appLog("Amount is shown in Acknowledgement screen");
  
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblNotes"],"text")).toEqual("Date:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblNotesValue"],"text")).not.toBe('');
  appLog("Date is shown in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblExtra1"],"text")).toEqual("Reason:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblExtra1Value"],"text")).not.toBe('');
  appLog("Reason is shown in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblExtra2"],"text")).toEqual("Notes:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblExtra2Value"],"text")).not.toBe('');
  appLog("Notes is shown in Acknowledgement screen");
    //ValidateAcc_Details(AccInAck);
  
}
async function ValidateAcc_Details(){
   kony.automation.flexcontainer.click(["frmStopPayments","ConfirmPage","Buttons","btnConfirm"]);
  appLog("Successfully clicked on confirm button");
   await kony.automation.playback.wait(25000);
         expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","btnMakeTransfer"],"text")).toEqual("Go to Account Detail");
       kony.automation.flexcontainer.click(["frmStopPayments","btnMakeTransfer"]);
  appLog("Successfully clicked on Account details");
     await kony.automation.playback.wait(30000);
       expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","btnAccountSummary"],"text")).toEqual("Account Summary");
  appLog("Successfully landed to Account detail summary");
  
}

async function ValidateChequeStatus(){
  
  kony.automation.flexcontainer.click(["frmStopPayments","ConfirmPage","Buttons","btnConfirm"]);
  appLog("Successfully clicked on confirm button");
   await kony.automation.playback.wait(25000);
         expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","btnAddAnotherAccount"],"text")).toEqual("View Cheque Status");
       kony.automation.flexcontainer.click(["frmStopPayments","btnAddAnotherAccount"]);
  appLog("Successfully clicked on Cheque Status");
     await kony.automation.playback.wait(30000);
       expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblStopPayments"],"text")).toEqual("Cheque Management");
  appLog("Successfully verified cheque management landing page");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","btnDisputedTrnsactions"],"text")).toEqual("Stop Cheque Requests");
  appLog("Successfully verified stop cheque requests tab");
 
}
async function ClickOnConfirm_SeriesOfCheque()
{
  kony.automation.flexcontainer.click(["frmStopPayments","ConfirmPage","Buttons","btnConfirm"]);
  appLog("Successfully clicked on confirm button");
    await kony.automation.playback.wait(25000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblBillPayAcknowledgement"],"text")).toEqual("Stop Cheque Payment - Acknowledgement");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","acknowledgmentMyRequests","confirmHeaders","lblHeading"],"text")).toEqual("Acknowledgement");
  appLog("Sucessfully verified Acknowledgement screen headers");
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","acknowledgmentMyRequests","lblTransactionMessage"],"text")).toEqual("You have successfully requested to stop this cheque payment.");
appLog("Successfully verified Acknowledgement message");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","acknowledgmentMyRequests","ImgAcknowledged"],"text")).not.toBe('');
  appLog("Successfully verified Tick Icon");
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","confirmHeaders","lblHeading"],"text")).toEqual("Stop Cheque Details");
appLog("Successfully verified Stop cheque details header");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblAccount"],"text")).toEqual("From Account:");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblAccountValue"],"text")).not.toBe('');
  appLog("From account is displayed in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblChequeBooks"],"text")).toEqual("Payee:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblChequeBooksValue"],"text")).not.toBe('');
  appLog("Payee  is shown in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblFee"],"text")).toEqual("Cheque No: ");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblFeeValue"],"text")).not.toBe('');
  appLog("Cheque number is shown in Acknowledgement screen");
  
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblExtra1"],"text")).toEqual("Reason:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblExtra1Value"],"text")).not.toBe('');
  appLog("Reason is shown in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblExtra2"],"text")).toEqual("Notes:");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","AcknowledgementDetails","lblExtra2Value"],"text")).not.toBe('');
  appLog("Notes is shown in Acknowledgement screen");
   await kony.automation.playback.wait(10000);
         
 
}
async function ValidateCancelInConfirm()
{
      await kony.automation.playback.waitFor(["frmStopPayments","ConfirmPage","Buttons","btnCancel"],15000);
     kony.automation.flexcontainer.click(["frmStopPayments","ConfirmPage","Buttons","btnCancel"]);
     expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","CancelStopCheckPayments","lblHeading"],"text")).toEqual("Cancel Stop Cheque Payment  Request");
     expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","CancelStopCheckPayments","btnYes"],"text")).toEqual("Yes, Cancel");
     expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","CancelStopCheckPayments","btnNo"],"text")).toEqual("No, Go Back");
     appLog("Successfully verified Cancel confirmation screen");
        await kony.automation.playback.wait(10000);
      kony.automation.flexcontainer.click(["frmStopPayments","CancelStopCheckPayments","btnNo"]);
  
}