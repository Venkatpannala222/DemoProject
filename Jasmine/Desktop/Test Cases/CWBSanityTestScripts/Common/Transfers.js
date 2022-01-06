async function navigateToMoveMoney(){

  appLog("Intiated method to Navigate Move Money Screen");

  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","Label0dcf00103bdba46"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","Label0dcf00103bdba46"]);
  await kony.automation.playback.wait(15000);
  await kony.automation.playback.waitFor(["frmFastTransfers","lblTransfers"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblTransfers"], "text")).toEqual("Transfer Between Accounts");
  await kony.automation.playback.waitFor(["frmFastTransfers","lblAddBankAccount"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblAddBankAccount"],"text")).toContain("Add CWB Recipient");
  await kony.automation.playback.waitFor(["frmFastTransfers","lblAddKonyAccount"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblAddKonyAccount"],"text")).toContain("Manage Recipients");
  appLog("Successfully Navigated to FastTransfers Screen and verified the UI");
  }
async function NavigatetoAddCWBAccount_TransferLanding(){
  await kony.automation.playback.waitFor(["frmFastTransfers","lblAddBankAccount"],15000);
  kony.automation.flexcontainer.click(["frmFastTransfers","lblAddBankAccount"]);
  await kony.automation.playback.wait(5000);  
}
async function navigateToInteracEtransfer(){

  appLog("Intiated method to Navigate to Interac e-Transfer Screen");
  
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxeTransfer"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxeTransfer"]);
  await kony.automation.playback.wait(20000);
  await kony.automation.playback.waitFor(["frmeTransferSendMoney","rtxeTransferSendMoney"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","rtxeTransferSendMoney"], "text")).toContain("Send an ");
  await kony.automation.playback.waitFor(["frmeTransferSendMoney","lblManageRecipients"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","lblManageRecipients"], "text")).toContain("Manage Recipients");
  await kony.automation.playback.waitFor(["frmeTransferSendMoney","lblSenderProfileSettings"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","lblSenderProfileSettings"], "text")).toContain("Sender Profile Settings");
  //  await kony.automation.playback.waitFor(["frmeTransferSendMoney","lbleTransferAutodeposit"],15000);
//  expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","lbleTransferAutodeposit"], "text")).toContain("Autodeposit");
//  await kony.automation.playback.waitFor(["frmeTransferSendMoney","lbleTransferRequestMoney"],15000);
  //frmeTransferSendMoney_lbleTransferRequestMoney
  //expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","lbleTransferRequestMoney"], "text")).toContain("Request Money");
 await kony.automation.playback.waitFor(["frmeTransferSendMoney","lblTransferHistory"],15000);
 expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","lblTransferHistory"], "text")).toContain("Transfer History");
  
  appLog("Successfully Navigated to Interac e-Transfer Screen");
}

async function SelectFromAccount(fromAcc){

   appLog("Intiated method to Select From Account");
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmFastTransfers","lbTransferFrom"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lbTransferFrom"], "text")).toEqual("Transfer From");
  await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferFrom"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","txtTransferFrom"], "placeholder")).toEqual("Search by account name or number");
  kony.automation.widget.touch(["frmFastTransfers","txtTransferFrom"], [230,25],null,null);
  kony.automation.textbox.enterText(["frmFastTransfers","txtTransferFrom"],fromAcc);
   appLog("Successfully Entered From Account");
  await kony.automation.playback.wait(3000);
  kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAmount"]);
   appLog("Successfully Selected From Account from List");
}

async function SelectToAccount(ToAccReciptent){

  appLog("Intiated method to Select To Account :: <b>"+ToAccReciptent+"</b>");
  await kony.automation.playback.wait(15000);
  await kony.automation.playback.waitFor(["frmFastTransfers","lbTransferTo"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lbTransferTo"], "text")).toEqual("Transfer To");
  await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferTo"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","txtTransferTo"], "placeholder")).toEqual("Search by account name, account number or recipient name");
	kony.automation.widget.touch(["frmFastTransfers","txtTransferTo"], [128,19],null,null);
	kony.automation.widget.touch(["frmFastTransfers"], null,null,[232,333]);
	kony.automation.widget.touch(["frmFastTransfers","flxToSegment"], null,null,[132,86]);
	kony.automation.widget.touch(["frmFastTransfers"], null,null,[239,444]);
    await kony.automation.playback.wait(15000);
	kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxTransfersFrom","flxAccountListItemWrapper","lblAccountName"]);
  
}

//   await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferTo"],15000);
//   kony.automation.widget.touch(["frmFastTransfers","txtTransferTo"], [72,9],null,null);

  //   if(ToAccReciptent==='OwnAcc'){
  //     kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],"Saving");
  //      appLog("Successfully Entered Default To Account : ");
  //     await kony.automation.playback.wait(5000);
  //     expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","segTransferTo[0,0]","lblAccountName"], "text")).not.toBe('');
  //   }else{
  //     kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],ToAccReciptent);
  //      appLog("Successfully Entered To Account : <b>"+ToAccReciptent+"</b>");
  //     await kony.automation.playback.wait(5000);
  //     expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","segTransferTo[0,0]","lblAccountName"], "text")).not.toBe('');
  //   }

 // kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],ToAccReciptent);
  // appLog("Successfully Entered To Account : <b>"+ToAccReciptent+"</b>");
//   await kony.automation.playback.wait(20000);
//  // expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","segTransferTo[0,0]","lblAccountName"], "text")).not.toBe('');

//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxTransfersFrom","flxAccountListItemWrapper"]);
//    appLog("Successfully Selected To Account from List");



async function EnterAmount(amountValue) {
  await kony.automation.playback.waitFor(["frmFastTransfers","lblAmount"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblAmount"], "text")).toEqual("Amount");
  await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","tbxAmount"], "placeholder")).toEqual("0.00");
  kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],amountValue);
  var placeholder = kony.automation.widget.getWidgetProperty(["frmFastTransfers","tbxAmount"], "placeholder");
  appLog("Successfully Entered Amount as : <b>"+amountValue+"</b>");
  appLog("<b>"+placeholder+"</b>");
  await kony.automation.scrollToWidget(["frmFastTransfers","customfooternew","btnFaqs"]);
}
async function verifyFrequencyList(){
  await kony.automation.playback.waitFor(["frmFastTransfers","lbxFrequency"],15000);
  var List = kony.automation.widget.getWidgetProperty(["frmFastTransfers","lbxFrequency"], "masterData");
  var expectedlist = Transfers.p2pAccount.frequencylist;
  for (var i= 0;i<List.Length;i++){
    expect(List(i)===expectedlist(i));
  }
   appLog("<b>"+List+"</b>");
  
}

async function SelectFrequency(freqValue) {

  kony.automation.flexcontainer.click(["frmFastTransfers","flxContainer4"]);
  kony.automation.listbox.selectItem(["frmFastTransfers","lbxFrequency"], freqValue);
  // appLog("Successfully Selected Freq as : <b>"+freqValue+"</b>");
}

async function SelectDateRange() {

  kony.automation.calendar.selectDate(["frmFastTransfers","calSendOnNew"], [11,28,2022]);
  kony.automation.calendar.selectDate(["frmFastTransfers","calEndingOnNew"], [11,28,2023]);
 //  appLog("Successfully Selected DateRange");
}

async function SelectSendOnDate() {

  kony.automation.calendar.selectDate(["frmFastTransfers","calSendOnNew"], [11,29,2022]);
   appLog("Successfully Selected SendOn Date");
}

async function SelectOccurences(occurences) {

  kony.automation.listbox.selectItem(["frmFastTransfers","lbxForHowLong"], "NO_OF_RECURRENCES");
  kony.automation.textbox.enterText(["frmFastTransfers","tbxNoOfRecurrences"],occurences);
   appLog("Successfully Selected Occurences as <b>"+occurences+"</b>");
  kony.automation.calendar.selectDate(["frmFastTransfers","calSendOnNew"], [11,29,2022]);
   appLog("Successfully Selected SendOn Date");
}
async function EnterNoteValue(notes) {

  await kony.automation.scrollToWidget(["frmFastTransfers","lblNotes"]);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblNotes"], "text")).toEqual("Note (Optional)");
  await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"],10000);
  kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],notes);
 //  appLog("Successfully entered Note value as : <b>"+notes+"</b>");
  await kony.automation.playback.waitFor(["frmFastTransfers","btnConfirm"],10000);
  await kony.automation.scrollToWidget(["frmFastTransfers","btnConfirm"]);
  kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
  await kony.automation.playback.wait(4000);
  // appLog("Successfully Clicked on Continue Button");
}

async function ConfirmTransfer() {

 //  appLog("Intiated method to Confirm Transfer Details");

  await kony.automation.playback.waitFor(["frmReview","btnConfirm"],30000);
  kony.automation.button.click(["frmReview","btnConfirm"]);
  // appLog("Successfully Clicked on Confirm Button");

}
async function ConfmTransfer() {

 //  appLog("Intiated method to Confirm Transfer Details");

  await kony.automation.playback.waitFor(["frmFastTransfers","btnConfirm"],30000);
  kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
  // appLog("Successfully Clicked on Confirm Button");

}

async function VerifyTransferSuccessMessage() {

  // appLog("Intiated method to Verify Transfer SuccessMessage ");

  await kony.automation.playback.wait(5000);
  var success=await kony.automation.playback.waitFor(["frmConfirmTransfer"],60000);

  if(success){
    //expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully");
    //   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).not.toBe('');
    //   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"],15000);
    //   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);
    await kony.automation.playback.waitFor(["frmConfirmTransfer","customheadernew","flxAccounts"],15000);
    kony.automation.flexcontainer.click(["frmConfirmTransfer","customheadernew","flxAccounts"]);
    // appLog("Successfully Clicked on Accounts Button");
  }else if(await kony.automation.playback.waitFor(["frmFastTransfers","rtxMakeTransferError"],5000)){
    //expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","rtxMakeTransferError"], "text")).toEqual("Transaction cannot be executed. Update your organization's approval matrix and re-submit the transaction.");
 //    appLog("Failed with : rtxMakeTransferError");
    fail("Failed with : rtxMakeTransferError");

    await MoveBackToLandingScreen_Transfers();

  }else{

    // This is the condition for use cases where it won't throw error on UI but struck at same screen
     appLog("Unable to perform Successfull Transcation");
    fail("Unable to perform Successfull Transcation");
  }

}

async function CancelTransfer() {

  //await kony.automation.playback.wait(5000);

  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
  kony.automation.button.click(["frmReview","btnCancel"]);
   appLog("Successfully Clicked on CANCEL Button");
  await kony.automation.playback.waitFor(["frmReview","CustomPopup","lblHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","CustomPopup","lblHeading"], "text")).toEqual("Cancel Transfer");
  await kony.automation.playback.waitFor(["frmReview","CustomPopup","btnYes"],15000);
  kony.automation.button.click(["frmReview","CustomPopup","btnYes"]);
  //  frmFastTransfers_customheadernew_flxAccounts
   appLog("Successfully Clicked on YES Button");
  await kony.automation.playback.waitFor(["frmFastTransfers","customheadernew","flxAccounts"],15000);
  kony.automation.button.click(["frmFastTransfers","customheadernew","flxAccounts"]);
  await kony.automation.playback.wait(5000);
}
async function NoButton_CancelTransfer() {

  //await kony.automation.playback.wait(5000);

  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
  kony.automation.button.click(["frmReview","btnCancel"]);
   appLog("Successfully Clicked on CANCEL Button");
  await kony.automation.playback.waitFor(["frmReview","CustomPopup","lblHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","CustomPopup","lblHeading"], "text")).toEqual("Cancel Transfer");
  await kony.automation.playback.waitFor(["frmReview","CustomPopup","btnNo"],15000);
  kony.automation.button.click(["frmReview","CustomPopup","btnNo"]);
  //  frmFastTransfers_customheadernew_flxAccounts
   appLog("Successfully Clicked on NO Button");
  await kony.automation.playback.waitFor(["frmReview","customheadernew","flxAccounts"],15000);
  kony.automation.button.click(["frmReview","customheadernew","flxAccounts"]);
  await kony.automation.playback.wait(5000);
}
async function ModifyOnTimeTransfer() {
  await kony.automation.playback.waitFor(["frmReview","btnModify"],15000);
  kony.automation.button.click(["frmReview","btnModify"]);
  await kony.automation.playback.wait(2000);
//   await kony.automation.playback.waitFor(["frmFastTransfers","customheadernew","flxAccounts"],15000);
//   kony.automation.button.click(["frmFastTransfers","customheadernew","flxAccounts"]);
//   await kony.automation.playback.wait(5000);
  
}


async function navigateToManageTransfer(){

   appLog("Intiated method to navigate to Manage Transfers");

  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxPayBills"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayBills"]);
  await kony.automation.playback.wait(5000);
   appLog("Successfully Navigated to TransferActivities");
}

async function navigateToTransferActivities(){

  appLog("Intiated method to navigate to Transfer Activities");

  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],30000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxPayBills"],30000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayBills"]);
  await kony.automation.playback.wait(25000);
  appLog("Successfully Navigated to TransferActivities");
}



async function navigateToPastTransfersTab(){

   appLog("Intiated method to navigate to PastTransfer Tab");
  await kony.automation.playback.waitFor(["frmFastTransfersActivites","btnRecent"],15000);
  kony.automation.button.click(["frmFastTransfersActivites","btnRecent"]);
  await kony.automation.playback.wait(5000);
   appLog("Successfully navigated to PastTransfer Tab");
}

async function verifyRepeatTransferFunctionality(note){

   appLog("Intiated method verify Repeat Transfer Functionality");
await kony.automation.playback.wait(25000);
 var RepeatBtn= await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers[0]","btnAction"],15000);

  if(RepeatBtn)
  {
   // flxFaastTransfersSelectedstP_flxDropdown
    await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers[0]","flxDropdown"],10000);
      kony.automation.button.click(["frmFastTransfersActivites","segmentTransfers[0]","flxDropdown"]);
      appLog('Intiating Repeat Transfer');
    await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers[0]","btnAction"],10000);
      kony.automation.button.click(["frmFastTransfersActivites","segmentTransfers[0]","btnAction"]);
     // await kony.automation.playback.wait(15000);
      appLog("Successfully Clicked on Repeat Button");
      await EnterNoteValue(note);
      await ConfmTransfer();
    await ConfirmTransfer();
      await VerifyTransferSuccessMessage();
    }else{
      
      appLog("No Completed transfers listed");
      await kony.automation.playback.waitFor(["frmFastTransfersActivites","customheadernew","flxAccounts"],15000);
      kony.automation.flexcontainer.click(["frmFastTransfersActivites","customheadernew","flxAccounts"]);

    //await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers"],15000);
//     var noReapeatBtn= await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers[0]","btnAction"],10000);

//     if(noReapeatBtn){
//        appLog('Intiating Repeat Transfer');
//       kony.automation.button.click(["frmFastTransfersActivites","segmentTransfers[0]","btnAction"]);
//       await kony.automation.playback.wait(5000);
//        appLog("Successfully Clicked on Repeat Button");
//       await EnterNoteValue(note);
//       await ConfirmTransfer();
//       await VerifyTransferSuccessMessage();
//     }else{
//        appLog('No Repeat Transfers available');
//       await kony.automation.playback.waitFor(["frmFastTransfersActivites","customheadernew","flxAccounts"],15000);
//       kony.automation.flexcontainer.click(["frmFastTransfersActivites","customheadernew","flxAccounts"]);
//       await kony.automation.playback.wait(5000); 
//       // appLog("Successfully Moved back to Accounts dashboard");
//     }
//   }
}
}

async function VerifyTranxUnderActivities(){

   appLog("Intiated method verify Transfer under Activities");

  var noTransfers=await kony.automation.playback.waitFor(["frmFastTransfersActivites","rtxNoPaymentMessage"],15000);

  if(noTransfers){
     appLog('There are No Transactions Found');
    await kony.automation.playback.waitFor(["frmFastTransfersActivites","customheadernew","flxAccounts"],15000);
    kony.automation.flexcontainer.click(["frmFastTransfersActivites","customheadernew","flxAccounts"]);
    await kony.automation.playback.wait(5000);
    await verifyAccountsLandingScreen();
     appLog("Successfully Moved back to Accounts dashboard");
  }else{

    //await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers"],15000);
    var noTranxBtn= await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers[0]","flxDropdown"],10000);
    if(noTranxBtn){

       appLog('Intiating to verify Transfer Activity');
      await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers"],15000);
      kony.automation.flexcontainer.click(["frmFastTransfersActivites","segmentTransfers[0]","flxDropdown"]);
       appLog("Successfully Clicked on first Sheduled Transfer");

          await kony.automation.playback.waitFor(["frmFastTransfersActivites","customheadernew","flxAccounts"],15000);
      kony.automation.flexcontainer.click(["frmFastTransfersActivites","customheadernew","flxAccounts"]);
      await verifyAccountsLandingScreen();
       appLog("Successfully Moved back to Accounts dashboard");
    }else{

       appLog('No Transfers activities available');
      await kony.automation.playback.waitFor(["frmFastTransfersActivites","customheadernew","flxAccounts"],15000);
      kony.automation.flexcontainer.click(["frmFastTransfersActivites","customheadernew","flxAccounts"]);
      await kony.automation.playback.wait(5000); 
       appLog("Successfully Moved back to Accounts dashboard");
    }

  }
}

async function MoveBackToLandingScreen_Transfers(){

  //Move back to landing Screen
  await kony.automation.playback.wait(5000); 
   appLog("Intiated method to move from frmFastTransfers screen");
  await kony.automation.playback.waitFor(["frmFastTransfers","customheadernew","flxAccounts"],15000);
  kony.automation.flexcontainer.click(["frmFastTransfers","customheadernew","flxAccounts"]);
   appLog("Successfully Moved back to Accounts dashboard");
}

async function MoveBackToLandingScreen_TransfersReviewScreen(){

  //Move back to landing Screen
   appLog("Intiated method to move from transfer review screen");
  await kony.automation.playback.waitFor(["frmReview","customheadernew","flxAccounts"],15000);
  kony.automation.flexcontainer.click(["frmReview","customheadernew","flxAccounts"]);
   appLog("Successfully Moved back to Accounts dashboard");
}
async function NavigateBacktoDashboard_InteracEtransferlandingscreen()
{
  await kony.automation.playback.waitFor(["frmeTransferSendMoney","customheadernew","flxAccounts"],15000);
  //frmeTransferSendMoney_customheadernew_flxAccounts
  kony.automation.flexcontainer.click(["frmeTransferSendMoney","customheadernew","flxAccounts"]);
}

async function VerifyTransferConfirmationscreen_OneTimeTransfer(){
  
  await kony.automation.playback.waitFor(["frmReview","lblKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblKey"], "text")).toEqual("Transfer From"); 
  await kony.automation.playback.waitFor(["frmReview","lblValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","lblToKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToKey"], "text")).toEqual("Transfer To"); 
  await kony.automation.playback.waitFor(["frmReview","lblToValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","lblToAmountKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountKey"], "text")).toEqual("Amount"); 
  await kony.automation.playback.waitFor(["frmReview","lblToAmountValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountValue"], "text")).toEqual("$ 1.00 CAD"); 
  await kony.automation.playback.waitFor(["frmReview","lblFrequencyKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyKey"], "text")).toEqual("Frequency"); 
  await kony.automation.playback.waitFor(["frmReview","lblFrequencyValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyValue"], "text")).toEqual("Daily"); 
  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("Start Date");
  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","lblNoteKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteKey"], "text")).toEqual("Note (Optional)");
  await kony.automation.playback.waitFor(["frmReview","lblNoteValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteValue"], "text")).toEqual("OwnAcc-ModifyTransfer");
  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
  await kony.automation.playback.waitFor(["frmReview","btnModify"],15000);
  await kony.automation.playback.waitFor(["frmReview","btnConfirm"],15000);
}

async function VerifyTransfer_OneTimeTransfer(){
  
  await kony.automation.playback.waitFor(["frmReview","lblKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblKey"], "text")).toEqual("Transfer From"); 
  await kony.automation.playback.waitFor(["frmReview","lblValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","lblToKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToKey"], "text")).toEqual("Transfer To"); 
  await kony.automation.playback.waitFor(["frmReview","lblToValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","lblToAmountKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountKey"], "text")).toEqual("Amount"); 
  await kony.automation.playback.waitFor(["frmReview","lblToAmountValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountValue"], "text")).toEqual("$ 1.00 CAD"); 
  await kony.automation.playback.waitFor(["frmReview","lblFrequencyKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyKey"], "text")).toEqual("Frequency"); 
  await kony.automation.playback.waitFor(["frmReview","lblFrequencyValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyValue"], "text")).toEqual("Once"); 
  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("When");
  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","lblNoteKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteKey"], "text")).toEqual("Note (Optional)");
  await kony.automation.playback.waitFor(["frmReview","lblNoteValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteValue"], "text")).toEqual("OwnAcc-OneTimeTransfer");
  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
  await kony.automation.playback.waitFor(["frmReview","btnModify"],15000);
  await kony.automation.playback.waitFor(["frmReview","btnConfirm"],15000);
}
async function VerifyTransferConfirmationscreen_ReccurringTransfer(frequency,Range){
  await kony.automation.playback.waitFor(["frmReview","lblKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblKey"], "text")).toEqual("Transfer From"); 
  await kony.automation.playback.waitFor(["frmReview","lblValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblValue"], "text")).not.toBe('');
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToKey"], "text")).toEqual("Transfer To"); 
  await kony.automation.playback.waitFor(["frmReview","lblToValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","lblToAmountKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountKey"], "text")).toEqual("Amount"); 
  await kony.automation.playback.waitFor(["frmReview","lblToAmountValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountValue"], "text")).toEqual("$ 1.00 CAD"); 
  await kony.automation.playback.waitFor(["frmReview","lblFrequencyKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyKey"], "text")).toEqual("Frequency"); 
  await kony.automation.playback.waitFor(["frmReview","lblFrequencyValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyValue"], "text")).toEqual(frequency);
   if (Range === "DateRange"){
  await kony.automation.playback.waitFor(["frmReview","lblDurationKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDurationKey"], "text")).toEqual("For How Long?");
  await kony.automation.playback.waitFor(["frmReview","lblDurationValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDurationValue"], "text")).toEqual("Date range");
  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("Start Date");
  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","lblEndDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateKey"], "text")).toEqual("End Date");
  await kony.automation.playback.waitFor(["frmReview","lblEndDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateValue"], "text")).not.toBe('');
  appLog("Successfully verified fields specific to Date Range Transfer in confirmation screen");
  }
  else if (Range === "No. of reccurrences"){
  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("Start On");
  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","lblEndDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateKey"], "text")).toEqual("Number of Recurrences");
  await kony.automation.playback.waitFor(["frmReview","lblEndDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateValue"], "text")).not.toBe('');
   appLog("Successfully verified fields specific to number of reccurrences transfer");
    }
  await kony.automation.playback.waitFor(["frmReview","lblNoteKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteKey"], "text")).toEqual("Note (Optional)");
  await kony.automation.playback.waitFor(["frmReview","lblNoteValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
  await kony.automation.playback.waitFor(["frmReview","btnModify"],15000);
  await kony.automation.playback.waitFor(["frmReview","btnConfirm"],15000);
  }

async function VerifyTransferConfirmationscreen_Occurrences(frequency,Range){
  await kony.automation.playback.waitFor(["frmReview","lblKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblKey"], "text")).toEqual("Transfer From"); 
  await kony.automation.playback.waitFor(["frmReview","lblValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblValue"], "text")).not.toBe('');
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToKey"], "text")).toEqual("Transfer To"); 
  await kony.automation.playback.waitFor(["frmReview","lblToValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","lblToAmountKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountKey"], "text")).toEqual("Amount"); 
  await kony.automation.playback.waitFor(["frmReview","lblToAmountValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountValue"], "text")).toEqual("$ 1.00 CAD"); 
  await kony.automation.playback.waitFor(["frmReview","lblFrequencyKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyKey"], "text")).toEqual("Frequency"); 
  await kony.automation.playback.waitFor(["frmReview","lblFrequencyValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyValue"], "text")).toEqual(frequency);
   if (Range === "DateRange"){
  await kony.automation.playback.waitFor(["frmReview","lblDurationKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDurationKey"], "text")).toEqual("For How Long?");
  //await kony.automation.playback.waitFor(["frmReview","lblDurationValue"],15000);
//   expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDurationValue"], "text")).toEqual("Date range");
  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("Start On");
  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
  //await kony.automation.playback.waitFor(["frmReview","lblEndDateKey"],15000);
//   expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateKey"], "text")).toEqual("End Date");
//   await kony.automation.playback.waitFor(["frmReview","lblEndDateValue"],15000);
  //expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateValue"], "text")).not.toBe('');
  appLog("Successfully verified fields specific to Date Range Transfer in confirmation screen");
  }
  else if (Range === "No. of reccurrences"){
  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("Start On");
  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","lblEndDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateKey"], "text")).toEqual("Number of Recurrences");
  await kony.automation.playback.waitFor(["frmReview","lblEndDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateValue"], "text")).not.toBe('');
   appLog("Successfully verified fields specific to number of reccurrences transfer");
    }
  await kony.automation.playback.waitFor(["frmReview","lblNoteKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteKey"], "text")).toEqual("Note (Optional)");
  await kony.automation.playback.waitFor(["frmReview","lblNoteValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
  await kony.automation.playback.waitFor(["frmReview","btnModify"],15000);
  await kony.automation.playback.waitFor(["frmReview","btnConfirm"],15000);
  }

async function VerifyTransferSuccessScreenRightPanel_OneTime(){
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblHeading"], "text")).toEqual("Your Transfer Details");
    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblKey"], "text")).toEqual("Transfer From");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToKey"], "text")).toEqual("Transfer To");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
 expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToValue"], "text")).not.toBe('');
    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountKey"], "text")).toEqual("Amount ");
   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyKey"], "text")).toEqual("Frequency");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyValue"], "text")).toEqual("Daily");
   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateKey"], "text")).toEqual("Start Date"); 
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateValue"], "text")).not.toBe('');
   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesKey"], "text")).toEqual("Note (Optional)"); 
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"],15000);
  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnAddAnotherAccount"],15000);
  
   }
async function VerifyTransferSuccesscreenRightPanel_ReccurringTransfer(frequency,Range)
{
   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblHeading"], "text")).toEqual("Your Transfer Details");
    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblKey"], "text")).toEqual("Transfer From");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToKey"], "text")).toEqual("Transfer To");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
 expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToValue"], "text")).not.toBe('');
    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountKey"], "text")).toEqual("Amount ");
   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyKey"], "text")).toEqual("Frequency");
   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyValue"], "text")).toEqual(frequency);
  if (Range === "DateRange"){
    appLog("Initiated validating fields specific to date range transfer");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationKey"], "text")).toEqual("For How Long?");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationValue"], "text")).toEqual("Date range");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateKey"], "text")).toEqual("Start Date");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateKey"], "text")).toEqual("End Date");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateValue"], "text")).not.toBe('');
  appLog("Successfully verified fields specific to Date Range Transfer in Acknowledgement screen");
  }
  else if (Range === "No. of reccurrences"){
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateKey"], "text")).toEqual("Start Date");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationKey"], "text")).toEqual("Duration"); 
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationValue"], "text")).toEqual("Recurrences");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateKey"], "text")).toEqual("Number of Recurrences");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateValue"], "text")).not.toBe('');
   appLog("Successfully verified fields specific to number of reccurrences transfer in success screen");
    }
   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesKey"], "text")).toEqual("Note (Optional)"); 
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"],15000);
  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnAddAnotherAccount"],15000);
  }

async function VerifyTransferSuccesscreenRightPanel_Occurences(frequency,Range)
{
   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblHeading"], "text")).toEqual("Your Transfer Details");
    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblKey"], "text")).toEqual("Transfer From");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToKey"], "text")).toEqual("Transfer To");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
 expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToValue"], "text")).not.toBe('');
    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountKey"], "text")).toEqual("Amount ");
   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyKey"], "text")).toEqual("Frequency");
   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyValue"], "text")).toEqual(frequency);
  if (Range === "DateRange"){
    appLog("Initiated validating fields specific to date range transfer");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationKey"], "text")).toEqual("Duration");
 // await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationValue"],15000);
  //expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationValue"], "text")).toEqual("Date range");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateKey"], "text")).toEqual("Start Date");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateValue"], "text")).not.toBe('');
  //await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateKey"],15000);
  //expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateKey"], "text")).toEqual("End Date");
  //await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateValue"],15000);
  //expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateValue"], "text")).not.toBe('');
  appLog("Successfully verified fields specific to Date Range Transfer in Acknowledgement screen");
  }
  else if (Range === "No. of reccurrences"){
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateKey"], "text")).toEqual("Start Date");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationKey"], "text")).toEqual("Duration"); 
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationValue"], "text")).toEqual("Recurrences");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateKey"], "text")).toEqual("Number of Recurrences");
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateValue"], "text")).not.toBe('');
   appLog("Successfully verified fields specific to number of reccurrences transfer in success screen");
    }
   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesKey"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesKey"], "text")).toEqual("Note (Optional)"); 
  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesValue"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"],15000);
  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnAddAnotherAccount"],15000);
  }
async function ClickOnAccountsButton_TransferAcknowledgemntScreen(){
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"],15000);
  kony.automation.flexcontainer.click(["frmConfirmTransfer","btnSavePayee"]);   
}

async function ClickOnNewTransfer_TransferAcknowledgemntScreen(){
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnAddAnotherAccount"],15000);
  kony.automation.flexcontainer.click(["frmConfirmTransfer","btnAddAnotherAccount"]);
}
  
