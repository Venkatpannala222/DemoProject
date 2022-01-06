it("PostLoginFooterMenu", async function() {
  await kony.automation.playback.waitFor(["frmAccountsLanding","customfooter","btnLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customfooter","btnLocateUs"], "text")).toContain("Locate Us");
	//kony.automation.button.click(["frmAccountsLanding","customfooter","btnLocateUs"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customfooter","btnContactUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customfooter","btnContactUs"], "text")).toContain("Contact Us");
	//kony.automation.button.click(["frmAccountsLanding","customfooter","btnContactUs"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customfooter","btnPrivacy"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customfooter","btnPrivacy"], "text")).toContain("Privacy Policy");
	//kony.automation.button.click(["frmAccountsLanding","customfooter","btnPrivacy"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customfooter","btnTermsAndConditions"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customfooter","btnTermsAndConditions"], "text")).toContain("Terms & Conditions");
	//kony.automation.button.click(["frmAccountsLanding","customfooter","btnTermsAndConditions"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customfooter","btnFaqs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customfooter","btnFaqs"], "text")).toContain("FAQs");
  await kony.automation.playback.waitFor(["frmAccountsLanding","customfooter","lblCopyright"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customfooter","lblCopyright"], "text")).toContain("© 2020 CWB Financial Group");
	//kony.automation.button.click(["frmAccountsLanding","customfooter","btnFaqs"]);
},75000);