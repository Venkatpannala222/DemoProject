async function PreLogin_NavigateToFAQ(){

  appLog("Intiated method to Navigate to About US");
  
  await kony.automation.playback.waitFor(["frmLogin","btnFaqs"],10000);
  kony.automation.button.click(["frmLogin","btnFaqs"]);
  await kony.automation.playback.wait(5000);
  appLog("Successfully Navigated to FAQs");
}
async function MoveBacktoLogin_FAQ(){

  await kony.automation.playback.waitFor(["frmOnlineHelp","customheader","headermenu","btnLogout"],10000);
  kony.automation.button.click(["frmOnlineHelp","customheader","headermenu","btnLogout"]);
  appLog("Successfully Moved back to Login Screen");
}

async function PreLogin_NavigateToPrivacyPolicy(){

  appLog("Intiated method to Navigate to PrivacyPolicy");
  
  await kony.automation.playback.waitFor(["frmLogin","btnPrivacy"],10000);
  kony.automation.button.click(["frmLogin","btnPrivacy"]);
  await kony.automation.playback.wait(5000);
  appLog("Successfully Navigated to PrivacyPolicy");
}
async function MoveBacktoLogin_PrivacyPolicyScreen(){
  
  await kony.automation.playback.waitFor(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"],10000);
  kony.automation.button.click(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"]);
  appLog("Successfully Moved back to Login Screen");
}
async function PreLogin_NavigateToTermsConditions(){

  //appLog("Intiated method to Navigate to TC's");
  
  await kony.automation.playback.waitFor(["frmLogin","btnTermsAndConditions"],10000);
  kony.automation.button.click(["frmLogin","btnTermsAndConditions"]);
  await kony.automation.playback.wait(5000);
  //appLog("Successfully Navigated to TC's");
}
async function MoveBacktoLogin_TermsConditions(){
  
  await kony.automation.playback.waitFor(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"],10000);
  kony.automation.button.click(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"]);
  //appLog("Successfully Moved back to Login Screen");
}
async function PreLogin_NavigateToContactUs(){

  //appLog("Intiated method to Navigate to ContactUs");
  
  await kony.automation.playback.waitFor(["frmLogin","btnContactUs"],10000);
  kony.automation.button.click(["frmLogin","btnContactUs"]);
  await kony.automation.playback.wait(5000);
 // appLog("Successfully Navigated to Contact US");
}
async function MoveBacktoLogin_ContactUsScreen(){
  
  await kony.automation.playback.waitFor(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"],10000);
  kony.automation.button.click(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"]);
 // appLog("Successfully Moved back to Login Screen");
}
