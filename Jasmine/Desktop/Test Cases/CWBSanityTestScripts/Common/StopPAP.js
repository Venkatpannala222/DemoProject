async function VerifyStopPAP_Links(){
       
         await kony.automation.playback.wait(50000);
    expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","btnScheduledTransfer"],"text")).toEqual("Pay Bill");
    expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","btnMakeTransfer"],"text")).toEqual("Move Money");
    expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","btnPayABill"],"text")).toEqual("Stop Pre-Authorized Payment Requests");
   appLog("Successfully verified Stop PAP quick links");
  
   await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxMenu"],5000);
  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxMenu"]);
  appLog("Successfully clicked on Menu");
await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","customhamburger","ACCOUNTSERVICEflxAccountsMenu"],5000);
  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","customhamburger","ACCOUNTSERVICEflxAccountsMenu"]);
  appLog("Successfully expanded Account services menu");
  await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","customhamburger","ACCOUNTSERVICE1lblMyAccounts"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","customheader","customhamburger","ACCOUNTSERVICE1lblMyAccounts"],"text")).toEqual("Stop Pre-Authorized Payment");
  appLog("Successfully verified Stop PAP link under account services");
    await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","customhamburger","flxClose"],5000);
	kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","customhamburger","flxClose"]);

}

async function VerifyStopPAPDetails()
{           
       await kony.automation.playback.wait(50000);
        kony.automation.flexcontainer.click(["frmAccountsDetails","btnPayABill"]);
  appLog("Successfuly clicked on Stop PAP requests");
           await kony.automation.playback.wait(35000);
      expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","btnStopPAPRequests"],"text")).toEqual("Stop Pre-Authorized Payment Requests");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","lblDatePAP"],"text")).toEqual("Date of Request");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","imgSortDatePAP"],"text")).not.toBe('');
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxStopPAPUnSelectedWrapper","flxDate"],"text")).not.toBe('');
  appLog("Date Of Request is displayed");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","lblPayeePAP"],"text")).toEqual("Payee Name");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","imgSortPayeePAP"],"text")).not.toBe('');
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxStopPAPUnSelectedWrapper","flxPayee"],"text")).not.toBe('');
  appLog("Payee name is displayed");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","lblAmountPAP"],"text")).toEqual("Amount");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","imgSortAmountPAP"],"text")).not.toBe('');
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxStopPAPUnSelectedWrapper","flxAmount"],"text")).not.toBe('');
  appLog("Amount is displayed");
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","lblStatusPAP"],"text")).toEqual("Status");
  var StatusPAP = kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","segTransactions[0]","flxStopPAPUnSelectedWrapper","flxStatus"],"text");
if(StatusPAP==="Complete")
  {
    appLog("Status is Complete");
  }
  else
    {
      appLog("Status is Active");
    }
      kony.automation.flexcontainer.click(["frmStopPayments","lblAccountTypes"]);
 var OtherAccounts = kony.automation.widget.getWidgetProperty(["frmStopPayments","accountTypes","segAccountTypes"],"data");
  var OtherAccCount = OtherAccounts.length;
  appLog(OtherAccCount);
  if(OtherAccCount>1){
     var OtherAcc = kony.automation.widget.getWidgetProperty(["frmStopPayments","accountTypes","segAccountTypes[0,1]","flxAccountTypes","lblUsers"],"text");
        kony.automation.flexcontainer.click(["frmStopPayments","accountTypes","segAccountTypes[0,1]","flxAccountTypes","lblUsers"]);
    appLog("Successfully clicked on the other account");
        await kony.automation.playback.wait(15000);
    var SelectedAccount = kony.automation.widget.getWidgetProperty(["frmStopPayments","lblAccountTypes"],"text");
      expect(OtherAcc).toEqual(SelectedAccount);
      appLog("Successfully the other account is shown as selected account");  
  }
  else
    {
      appLog("Only one account is present");
    }
  
}

async function ClickOnNewStopPAP(){
   await kony.automation.playback.waitFor(["frmStopPayments","MyRequestsTabs","btnNewStopPaymentRequest"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","btnNewStopPaymentRequest"],"text")).toEqual("New Stop Payment Request");
        kony.automation.flexcontainer.click(["frmStopPayments","MyRequestsTabs","btnNewStopPaymentRequest"]);
  appLog("Successfully verified and clicked on New Stop Payment Request");
}

async function VerifyLinksInStopPAPScreen(){
             await kony.automation.playback.wait(50000);
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","btnViewMyStopPAPRequest"],"text")).toEqual("View Stop PAP Requests");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","btnViewAccounts"],"text")).toEqual("View Accounts");
appLog("Successfully verified links in Stop PAP request screen");
    
}
async function ValidateCancelInConfirm(){
                 await kony.automation.playback.waitFor(["frmStopPayments","btnPapCancel"],15000);
     kony.automation.flexcontainer.click(["frmStopPayments","btnPapCancel"]);
     expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","CancelStopCheckPayments","lblHeading"],"text")).toEqual("Cancel Stop Pre-Authorized Payment Request");
       expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","CancelStopCheckPayments","lblPopupMessage"],"text")).toEqual("Are you sure you want to cancel the stop pre-authorized payment request?");
     expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","CancelStopCheckPayments","btnYes"],"text")).toEqual("Yes, Cancel");
     expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","CancelStopCheckPayments","btnNo"],"text")).toEqual("No, Go Back");
     appLog("Successfully verified Cancel confirmation screen");
        await kony.automation.playback.wait(10000);
      kony.automation.flexcontainer.click(["frmStopPayments","CancelStopCheckPayments","btnNo"]);
  

}

async function ValidateCancelInStopPAP()
{
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","btnCancel"],"text")).toEqual("Cancel");
appLog("Successfully verified Cancel button");
          kony.automation.flexcontainer.click(["frmStopPayments","StopCheckPaymentSeriesMultiple","btnCancel"]);
  appLog("Successfully clicked on cancel button");
           await kony.automation.playback.wait(15000);
      expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","MyRequestsTabs","btnStopPAPRequests"],"text")).toEqual("Stop Pre-Authorized Payment Requests");
appLog("Successfully landed to Stop PAP previous screen");
          kony.automation.flexcontainer.click(["frmStopPayments","MyRequestsTabs","btnNewStopPaymentRequest"]);
appLog("Successfully clicked  on new stop request");
}
async function ValidateStopPAP(){
  
         await kony.automation.playback.wait(30000);
   var unique_Payeename=getRandomString(7);
    await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPayee"],15000);
     expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblPayee"],"text")).toEqual("Payee");
    kony.automation.textbox.enterText(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPayee"],unique_Payeename);
   var Payee_Name = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPayee"], "text");
  appLog("Successfully entered Payee Name");
   await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblReasonForm"],15000);
       expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblReason"],"text")).toEqual("Reason");
  
  var List = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblReasonForm"], "masterData");
var expectedlist = ["Make Selection","Membership Cancelled","Not Authorized","Duplicate Payment","Unsatisfactory Service","Dispute on Bill","Other"];
for (var i= 0;i<List.Length;i++){
expect(List(i)===expectedlist(i));
}
appLog(List);
  appLog("Successfully verified Reason drop down");
   kony.automation.listbox.selectItem(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblReasonForm"], "POLICY_MEMBERSHIP_CANCELLED");
  appLog("Successfully selected Reason");
  var options = { year: 'numeric', month: 'short', day: '2-digit' };
var today = new Date();
//appLog(today.toLocaleDateString("en-US"));
appLog(today.toLocaleDateString("en-US", options)); 
  var todayDate = today.toLocaleDateString("en-US", options);
      expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblNextPayment"],"text")).toEqual("Next Payment Date");
  appLog("Next payment date text is shown ");
//   var NextPaymentDate = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","calSendOnNew"],"text");
//   appLog(NextPaymentDate);
//   if(NextPaymentDate>todayDate)
//     {
//       appLog("Next Payment date is greater than today's date");
//     }
//   else
//     {
//       appLog("Next payment date is not greater than today's date");
//     }
  
  await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxAmountPAP"],15000);
        expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblAmountField"],"text")).toEqual("Amount of Payment");
     expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblAmountSuggetion"],"text")).toEqual("Must be exact payment amount");

    kony.automation.textbox.enterText(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxAmountPAP"],"1");
  
  appLog("Successfully entered Amount");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblStartDatePAP"],"text")).toEqual("Start Date");
  appLog("Start date text is shown ");

  var StartDate = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblStartDateDisable"],"text");
  if(todayDate===StartDate)
    {
      appLog("Today's Date is shown in Start Date");
    }
  else
    {
      appLog("Today's date is not shown in Start Date");
    }
  
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblPAPEndDate"],"text")).toEqual("End Date");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblEndDateSuggetion"],"text")).toEqual("Next payment date plus 25 days");
appLog("End date is shown ");
  
  var EndDate = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblEndDateDisabled"],"text");
  appLog(EndDate);
var targetDate = today.setDate(today.getDate() + 25);
  var date = new Date(targetDate).toLocaleDateString("en-US", options);
  appLog(date);
//appLog(targetDate.toLocaleDateString("en-US", options));
  if(EndDate===date)
    {
      appLog("End date shown is start date plus 25 days");
    }
  else
    {
      appLog("End date shown is not start date plus 25 days");
    }
  
   await kony.automation.playback.waitFor(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPAPDescription"],15000);
      expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblDescPAP"],"text")).toEqual("Notes (Optional)");

    kony.automation.textbox.enterText(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPAPDescription"],"SampleStopPAP");
    var NotesPAP = kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","tbxPAPDescription"], "text");
  appLog("Successfully entered Notes");
  
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblPleaseNoteTheFollowingPoints"],"text")).toEqual("Please note the following points:");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblThisServicesIsChargeble"],"text")).toEqual("For processing this request, the standard account fee applies. If you need to cancel this request, please contact your local Branch.");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","lblIAccept"],"text")).toEqual("I accept the");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","StopCheckPaymentSeriesMultiple","btnTermsAndConditions"],"text")).toEqual("Terms & Conditions ");
     kony.automation.flexcontainer.click(["frmStopPayments","StopCheckPaymentSeriesMultiple","btnTermsAndConditions"]);
  appLog("Successfully clicked on Terms & conditions");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblTermsAndConditions"],"text")).toEqual("Terms & Conditions ");
appLog("Successfully verified Terms & Conditions");
       kony.automation.flexcontainer.click(["frmStopPayments","imgClose"]);
     
  kony.automation.widget.touch(["frmStopPayments","StopCheckPaymentSeriesMultiple","flxTCContentsCheckbox"], [13,14],null,null);
  //kony.automation.flexcontainer.click(["frmStopPayments","StopCheckPaymentSeriesMultiple","imgTCContentsCheckbox"]);
  appLog("Successfully checked Terms & Conditions");
  
          await kony.automation.playback.wait(10000);
   kony.automation.flexcontainer.click(["frmStopPayments","StopCheckPaymentSeriesMultiple","btnProceed"]);
  appLog("Successfully Clicked on Continue button");
            await kony.automation.playback.wait(15000);
  ValidateCancelInConfirm();
     kony.automation.flexcontainer.click(["frmStopPayments","btnConfirm"]);
              await kony.automation.playback.wait(20000);
expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblBillPayAcknowledgement"],"text")).toEqual("Stop Pre-Authorized Payment - Acknowledgement");
  appLog("Successfully verified Stop PAP Acknowledgement header");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","acknowledgmentMyRequests","confirmHeaders","lblHeading"],"text")).toEqual("Acknowledgement");
  appLog("Successfully verified  Acknowledgement header");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","acknowledgmentMyRequests","lblTransactionMessage"],"text")).toEqual("You have successfully requested to stop this pre-authorized payment.");
appLog("Successfully verified Acknowledgement message");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","acknowledgmentMyRequests","ImgAcknowledged"],"text")).not.toBe('');
  appLog("Successfully verified Tick Icon");
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","confirmHeaders","lblHeading"],"text")).toEqual("Stop Pre-Authorized Details");
appLog("Successfully verified Stop Pre-Authorized Details header");
    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValueFromAccount","lblKey"],"text")).toEqual("From Account");
  appLog("From account is displayed in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValuePayeeName","lblKey"],"text")).toEqual("Payee Name");
  var PayeeNameinAck =  kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValuePayeeName","lblValue"],"text");
if(Payee_Name===PayeeNameinAck)
  {
    appLog("Same payee name is shown in acknowledgment screen");
  }
  else
    {
      appLog("Incorrect payee name is shown");
    }
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValueAmount","lblKey"],"text")).toEqual("Amount of Payment");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValueAmount","lblValue"],"text")).not.toBe('');
  appLog("Amount is shown in Acknowledgement screen");
  
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValueNxtPayDate","lblKey"],"text")).toEqual("Next Payment Date");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValueNxtPayDate","lblValue"],"text")).not.toBe('');
  appLog(" Next Payment Date is shown in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValueStartDate","lblKey"],"text")).toEqual("Start Date");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValueStartDate","lblValue"],"text")).not.toBe('');
  appLog(" Start Date is shown in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValueEndDate","lblKey"],"text")).toEqual("End Date");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValueEndDate","lblValue"],"text")).not.toBe('');
  appLog("End Date is shown in Acknowledgement screen");
  
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValueReason","lblKey"],"text")).toEqual("Reason");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","keyValueReason","lblValue"],"text")).not.toBe('');
  appLog("Reason is shown in Acknowledgement screen");
  expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","flxNote","lblKey"],"text")).toEqual("Note (Optional)");
  if(NotesPAP!==""){
  
  var NotesinAck = kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","flxNote","lblValue"],"text");
  expect(NotesPAP).toEqual(NotesinAck);
 
      appLog("Same Notes is shown in acknowledgement screen");
    
}
  else
    {
        var NotesBlnk = kony.automation.widget.getWidgetProperty(["frmStopPayments","confirmDialogStopPayments","flxNote","lblValue"],"text");
      expect(NotesBlnk).toEqual("_");
  
  appLog("Notes is blank");
}
}

async function ClickOnNewStopPAP_Acknowledgment() {
   expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","btnAddAnotherAccount"],"text")).toEqual("New Stop Payment Request");
appLog("Sucessfully verified new stop payment request button in acknowledgement screen");
   kony.automation.flexcontainer.click(["frmStopPayments","btnAddAnotherAccount"]);
                 await kony.automation.playback.wait(30000);
 expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblChequeBookRequests"],"text")).toEqual("Stop Pre-Authorized Payment Request");
appLog("Sucessfully landed to Stop PAP Screen");

   
}
async function MoveBacktoDashboard_StopPAP(){
  
          kony.automation.flexcontainer.click(["frmStopPayments","customheadernew","flxAccounts"]);
  appLog("Successfully clicked on accounts");
               await kony.automation.playback.wait(15000);
  
  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","lblAccountsHeader"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"],"text")).toEqual("Accounts");
appLog("Sucessfully moved back to accounts dashboard");

}

async function MoveBacktoAccountDashboard_StopPAP(){
  
          kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
  appLog("Successfully clicked on accounts");
               await kony.automation.playback.wait(15000);
  
  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","lblAccountsHeader"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"],"text")).toEqual("Accounts");
appLog("Sucessfully moved back to accounts dashboard");

}

async function MovetoAccountDashboard(){
  
          kony.automation.flexcontainer.click(["frmStopPayments","btnMakeTransfer"]);
  appLog("Successfully clicked on View accounts in acknowledgement screen");
               await kony.automation.playback.wait(30000);
  
  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","lblAccountsHeader"],5000);
    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"],"text")).toEqual("Accounts");
appLog("Sucessfully moved back to accounts dashboard");

}

async function ClickOnFirstAccountInDashboard(){

await kony.automation.playback.wait(25000);
   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
  //   kony.automation.widget.touch(["frmDashboard","accountList","segAccounts[0,0]","flxContent"], null,null,[303,1]);
    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[0,0]","flxAccountNameWrapper"]);
  appLog("Successfully clicked on first chequing account");
}
