async function NavigatetoFeedBack()
{
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","AboutUsflxAccountsMenu"]);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","AboutUsflxAccountsMenu"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","AboutUs3flxMyAccounts"]);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","AboutUs3flxMyAccounts"]);
  await kony.automation.playback.wait(5000);
}

async function NavigatetoFeedback_TopMenu()
{
   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxFeedbackimg"]);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxFeedbackimg"]);
  await kony.automation.playback.wait(5000);
}

async function VerifyFeedBackUI(){
   await kony.automation.playback.waitFor(["frmCustomerFeedback","Feedback","lblHeading"]);
  expect(kony.automation.widget.getWidgetProperty(["frmCustomerFeedback","Feedback","lblHeading"], "text")).toEqual("Feedback");
  await kony.automation.playback.waitFor(["frmCustomerFeedback","Feedback","flxRating5"]);
  kony.automation.flexcontainer.click(["frmCustomerFeedback","Feedback","flxRating5"]);
  await kony.automation.playback.waitFor(["frmCustomerFeedback","Feedback","txtareaUserComments"]);
  kony.automation.textarea.enterText(["frmCustomerFeedback","Feedback","txtareaUserComments"],"Test automation FeedBack");
  await kony.automation.playback.waitFor(["frmCustomerFeedback","Feedback","confirmButtons","btnConfirm"]);
  kony.automation.button.click(["frmCustomerFeedback","Feedback","confirmButtons","btnConfirm"]);
  }
  
 
  async function VerifyFeedBackAcknowledgement(){
    await kony.automation.playback.waitFor(["frmCustomerFeedback","acknowledgment","lblTransactionMessage"]);
  expect(kony.automation.widget.getWidgetProperty(["frmCustomerFeedback","acknowledgment","lblTransactionMessage"],"text")).toContain("Thank You!");
  await kony.automation.playback.waitFor(["frmCustomerFeedback","btnAddAnotherAccount"]);
  kony.automation.button.click(["frmCustomerFeedback","btnAddAnotherAccount"]);

  //await kony.automation.playback.waitFor(["frmAccountsLanding","lblShowing"]);
    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"], "text")).toContain("Accounts");
    
  }

async function CancelFeedback()
{
  await kony.automation.playback.waitFor(["frmCustomerFeedback","Feedback","confirmButtons","btnModify"]);
  kony.automation.button.click(["frmCustomerFeedback","Feedback","confirmButtons","btnModify"]);
  await kony.automation.playback.wait(5000);
    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"], "text")).toContain("Accounts");
 // expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","lblShowing"], "text")).toContain("Accounts");
}
  


