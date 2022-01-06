it("RestoreMessage", async function() {

     // Create a message and Delete to it
  
  await NavigateToMessages();
  await ComposeNewMessage();
  await deleteNewMessage();
  await restoreNewMessage();
  await MoveBackToDashBoard_Messages();
  await verifyAccountsLandingScreen();
  
//    await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxMenu"]);
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
//   await kony.automation.playback.wait(5000);
  
//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
//   await kony.automation.playback.wait(5000);
//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"]);
//   kony.automation.listbox.selectItem(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"], "RCID_ONLINEBANKING");
//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"]);
//   kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"First Test Message");
//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"]);
//   kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],"Test Message");
 
//   //Send Button is not enabling after details. Hence clickinga nd entering same subject again
//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"]);
//   kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"Test Message");
  
//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
//   await kony.automation.playback.wait(5000);



//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"]);
//   kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"]);
//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1","btnYes"]);
//   kony.automation.button.click(["frmNotificationsAndMessages","CustomPopup1","btnYes"]);
//   await kony.automation.playback.wait(5000);



//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"]);
//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"]);
//   await kony.automation.playback.wait(5000);
//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnRestore"]);
//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnRestore"]);
//   await kony.automation.playback.wait(5000);
//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);

},120000);