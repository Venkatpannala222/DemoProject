it("PreLogin_ContactUs", async function() {
  
  await PreLogin_NavigateToContactUs();
  await MoveBacktoLogin_ContactUsScreen();
  
// 	await kony.automation.playback.waitFor(["frmLogin","btnContactUs"]);
// 	kony.automation.button.click(["frmLogin","btnContactUs"]);
//     await kony.automation.playback.wait(5000);
// 	await kony.automation.playback.waitFor(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"]);
// 	kony.automation.button.click(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"]);
  
},30000);