it("SearchFunctionality", async function() {

  
  // Create a new Message and then se bbarch for it
  
  await NavigateToMessages();
  await ComposeNewMessage();
  await searchNewMessage();
  await MoveBackToDashBoard_Messages();
  await verifyAccountsLandingScreen();
  //   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
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


//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","txtSearch"]);
//   kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","txtSearch"],"Test");
//   await kony.automation.playback.wait(5000);
//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnSearch"]);
//   kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnSearch"]);
//   await kony.automation.playback.wait(5000);
//  // await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification"]);
//   //expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblSegHeading"],"text")).toContain("Test");


//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

},120000);