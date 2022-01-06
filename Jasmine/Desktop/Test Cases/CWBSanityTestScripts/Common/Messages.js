async function NavigateToMessages(){

  appLog("Intiated method to Navigate to NotficationsAndMessages");
  
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
  appLog("Successfully Navigated to NotficationsAndMessages");
  await kony.automation.playback.wait(5000);

}
async function NavigateToMessages_ViaHeaderFlag(){
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","headermenu","flxMessages"]);
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","lblHeader"],15000);

 expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","lblHeader"],"text")).toEqual("Alerts & Messages");
//  frmNotificationsAndMessages_lblHeader  
}

async function VerifyDismissAlert()
{
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblDateAndTime"],15000);
  var time_date = kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblDateAndTime"], "text");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnDismiss"],15000);
  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnDismiss"]);
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1","btnNo"],15000);
	kony.automation.button.click(["frmNotificationsAndMessages","CustomPopup1","btnNo"]);
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnDismiss"],15000);
	kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnDismiss"]);
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","CustomPopup1","lblPopupMessage"],"text")).toEqual("Are you sure you want to dismiss this alert?");
	//kony.automation.flexcontainer.click(["frmNotificationsAndMessages","CustomPopup1"]);
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1","btnYes"],15000);
	kony.automation.button.click(["frmNotificationsAndMessages","CustomPopup1","btnYes"]);
  await kony.automation.playback.wait(5000);
	//kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","flxNotificationHeader"]);
	expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblDateAndTime"],"text")).not.toBe(time_date);
}
  
async function ClickOnComposeButtonDasboard()
{
       await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","btnWriteNewMessage"],15000);
     kony.automation.flexcontainer.click(["frmAccountsLanding","myMessages","btnWriteNewMessage"]);
  appLog("Successfully clicked on Compose button");
  await VerifyAlertsTab();
 // await VerifyMyMessagesTab();
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblNewMessage"],15000);

 expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblNewMessage"],"text")).toEqual("New Message");
  appLog("Verified New Message Text");

}

async function VerifyMyMessagesTab()
{  
  
   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"],15000);
 // await kony.automation.playback.wait(15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"],"text")).toContain("My Messages ");
  appLog("Successfuly verified My Messages tab");

}
async function VerifyMyMessagesTabLeftPanel()
{  
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"],15000);
  kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"]);
  await kony.automation.playback.wait(5000);
  appLog("Initiated to verify the left panel of My Messages tab");
  // await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"],15000);
   expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"],"text")).toContain("My Messages ");
   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","txtSearch"],15000);
 // frmNotificationsAndMessages_NotficationsAndMessages_txtSearch
  //flxNotificationsAndMessages_lblRequestIdValue
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblRequestIdValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblRequestIdValue"],"text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblCategoryValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblCategoryValue"],"text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblSegHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblSegHeading"],"text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblSegDescription"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblSegDescription"],"text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblDateAndTime"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblDateAndTime"],"text")).not.toBe('');
  appLog("Successfuly verified My Messages tab left panel");
}
  
  async function VerifyMyMessagesTabRightPanel(){
    
  appLog("Initiated to verify My Messages Right Panel");
    await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblRequestId"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblRequestId"],"text")).toEqual("Request ID:");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblRequestIdValue"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblRequestIdValue"],"text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblCategoryKey2"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblCategoryKey2"],"text")).toEqual("Category:");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblCategoryValue2"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblCategoryValue2"],"text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblAccountRenewal"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblAccountRenewal"],"text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","lblUser"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","lblUser"],"text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","lblDate"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","lblDate"],"text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","rtxMessage"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","rtxMessage"],"text")).not.toBe('');
  }

async function VerifyDeletedMessagesTab()
{
 // frmNotificationsAndMessages_NotficationsAndMessages_btnDeletedMessages
     await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"],15000);
   expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"],"text")).toContain("Deleted Messages");
  appLog("Successfuly verified Deleted Messages tab");
  
  
}

async function ClickOnMessage_Dashboard(){
  await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","rtxDescription"],15000);
   var SubjectDashboard = kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","rtxDescription"],"text");
  appLog("Successfully verified Subject of a Message");
  await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages"]);
  appLog("Sucessfully clicked on message in dashboard");
  VerifyAlertsTab();
  //VerifyMyMessagesTab();
    await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblAccountRenewal"],15000);
      await kony.automation.playback.wait(20000);
  var SubjectMyMsgTab = kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblAccountRenewal"],"text");
if(SubjectDashboard===SubjectMyMsgTab){
  appLog("Same message details are displayed in My Messages tab");

}

}
async function ValidateMessagesOnDashboard(){
  await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","lblHeader"],5000);

    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","lblHeader"],"text")).toEqual("My Messages");
  appLog("Successfully verified My Messages text");
    await kony.automation.playback.wait(15000);
 // await kony.automation.scrollToWidget(["flxAccountLandingUpcomingTransactions","flxAccountLandingUpcomingTransactions"]);
  var Results= await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages"],15000);
  if (Results){

     expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages"],"text")).not.toBe('');
    appLog("Successfully verified My Messages list");
  }
 else  {
   await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","rtxNoMessage"],15000);
       await kony.automation.scrollToWidget(["frmAccountsLanding","myMessages","rtxNoMessage"]);
    appLog("No Results found ");
    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","rtxNoMessage"],"text")).toEqual("You have no messages at this time.");
  }
}
async function VerifyMyMessagesDetails(){
  var MessageSize = kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","segMessages"],"data");
  var MessageCount = MessageSize.length;
  if (MessageCount===3){
    appLog("Messages count is 3");
  }
  else{
    appLog("Messages count is not 3");
  }
     await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","btnWriteNewMessage"],15000);
   expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","btnWriteNewMessage"],"text")).toEqual("Compose New Message");
  appLog("Successfully verified Compose new message text");

await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","lblDate"],15000);
   expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","lblDate"],"text")).not.toBe('');
  appLog("Successfully verified Date and time of a Message");
  
await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","rtxDescription"],15000);
   expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","rtxDescription"],"text")).not.toBe('');
  appLog("Successfully verified Subject of a Message");
}

async function ComposeNewMessage(){

  appLog("Intiated method to Compose a newMessage");
  
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"],15000);
  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
  appLog("Successfully Clicked on NewMessage Button");
  await kony.automation.playback.wait(5000);
  
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"],15000);
  kony.automation.listbox.selectItem(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"], "RCID_ONLINEBANKING");
  appLog("Successfully Selected Category");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],15000);
  kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"First Test Message");
  appLog("Successfully Entered Message subject");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],15000);
  kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],"Test Message");
  appLog("Successfully Entered Message content");
  
  //await kony.automation.scrollToWidget(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"],15000);
  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
  appLog("Successfully Clicked on SEND button");
  await kony.automation.playback.wait(5000);
}

async function CancelComposeMessage(){
  appLog("Intiated method to Compose a newMessage");
  
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"],15000);
  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
  appLog("Successfully Clicked on NewMessage Button");
  await kony.automation.playback.wait(5000);
  
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"],15000);
  kony.automation.listbox.selectItem(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"], "RCID_ONLINEBANKING");
  appLog("Successfully Selected Category");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],15000);
  kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"First Test Message");
  appLog("Successfully Entered Message subject");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],15000);
  kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],"Test Message");
  appLog("Successfully Entered Message content");
  //await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],15000);
  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnCancel"]);
  appLog("Successfully cancelled the composed message");
   await kony.automation.playback.wait(5000);
   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblRequestId"],15000);
  //frmNotificationsAndMessages_NotficationsAndMessages_lblRequestId  
  //"frmNotificationsAndMessages","NotficationsAndMessages","lblRequestId"
}

async function deleteNewMessage(){

  appLog("Intiated method to Delete a newMessage");
  
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"],15000);
  kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"]);
  appLog("Successfully Clicked on Delete button");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1","btnYes"],15000);
  kony.automation.button.click(["frmNotificationsAndMessages","CustomPopup1","btnYes"]);
  appLog("Successfully Clicked on YES button");
  await kony.automation.playback.wait(5000);
}

async function CancelDeleteMessageFlow()
{
   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","flxRequestId"],15000);
  var requestId = kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","flxRequestId"],"text");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"],15000);
  kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"]);
  appLog("Successfully Clicked on Delete button");
   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1","btnNo"],15000);
  kony.automation.button.click(["frmNotificationsAndMessages","CustomPopup1","btnNo"]);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","flxRequestId"],"text")).toEqual(requestId);
  appLog("Successfully Clicked on NO button and cancelled the delete flow");
}

async function replyNewMessage(){

  appLog("Intiated method to Reply a newMessage");
  
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"],15000);
  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"]);
  appLog("Successfully Clicked on REPLY button");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","txtAreaReply"],15000);
  kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","txtAreaReply"],"Reply to Message");
  appLog("Successfully Entered Message content");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"],15000);
  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"]);
  appLog("Successfully Clicked on Send REPLY button");
  await kony.automation.playback.wait(15000);
}

async function restoreNewMessage(){

  appLog("Intiated method to Restore a newMessage");
  
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"],15000);
  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"]);
  appLog("Successfully Clicked on DELETE button");
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnRestore"],15000);
  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnRestore"]);
  appLog("Successfully Clicked on RESTORE button");
  await kony.automation.playback.wait(5000);
}

async function searchNewMessage(){

  appLog("Intiated method to Search a newMessage");
  
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","txtSearch"],15000);
  kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","txtSearch"],"Test");
  appLog("Successfully Entered Text to Search");
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblSearch"],15000);
  kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","lblSearch"]);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblSegHeading"],"text")).toContain("Test");
  //flxNotificationsAndMessages_lblSegHeading
  appLog("Successfully Clicked on SEARCH button");
  await kony.automation.playback.wait(5000);
}

async function verifyRequestID(){

  appLog("Intiated method to Verify Request ID");
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblRequestIdValue"],"text")).not.toBe('');
}

async function MoveBackToDashBoard_Messages(){

  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"],15000);
  kony.automation.flexcontainer.click(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
  await kony.automation.playback.wait(5000);
    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"], "text")).toContain("Accounts");  
  appLog("Successfully Moved back to Accounts dashboard");
}
async function VerifyAlertsTab(){
  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","lblHeader"],15000);
     // await kony.automation.playback.wait(10000);
  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","lblHeader"],"text")).toContain("Alerts & Messages");
  appLog("Verify the Alerts Tab successfully");
}
