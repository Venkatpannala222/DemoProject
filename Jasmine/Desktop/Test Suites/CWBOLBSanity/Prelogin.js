describe("Prelogin", function() {
	it("PreLogin_ContactUs", async function() {
	  
	  await PreLogin_NavigateToContactUs();
	  await MoveBacktoLogin_ContactUsScreen();
	  
	// 	await kony.automation.playback.waitFor(["frmLogin","btnContactUs"]);
	// 	kony.automation.button.click(["frmLogin","btnContactUs"]);
	//     await kony.automation.playback.wait(5000);
	// 	await kony.automation.playback.waitFor(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"]);
	// 	kony.automation.button.click(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"]);
	  
	},30000);
	
	it("AboutUS-TermsConditions_TS03-TC01", async function() {
	  
	  await PreLogin_NavigateToTermsConditions();
	  await MoveBacktoLogin_TermsConditions();
	//   await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
	//   kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
	
	//   await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","AboutUsflxAccountsMenu"]);
	//   kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","AboutUsflxAccountsMenu"]);
	
	//   await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","AboutUs0flxMyAccounts"]);
	//   kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","AboutUs0flxMyAccounts"]);
	
	//   await kony.automation.playback.waitFor(["frmContactUsPrivacyTandC","lblContentHeader"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmContactUsPrivacyTandC","lblContentHeader"], "text")).toEqual("Terms & Conditions");
	
	//   await kony.automation.playback.waitFor(["frmContactUsPrivacyTandC","customheader","topmenu","flxaccounts"]);
	//   kony.automation.flexcontainer.click(["frmContactUsPrivacyTandC","customheader","topmenu","flxaccounts"]);
	  
	},30000);
	
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
	
});