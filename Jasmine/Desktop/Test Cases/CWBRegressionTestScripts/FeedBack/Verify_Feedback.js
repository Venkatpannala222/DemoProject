it("Verify_Feedback", async function() {
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxFeedbackimg"]);
	kony.automation.flexcontainer.click(["frmCustomerFeedback","Feedback","flxRating"]);
	kony.automation.flexcontainer.click(["frmCustomerFeedback","Feedback","flxRating5"]);
	kony.automation.flexcontainer.click(["frmCustomerFeedback","Feedback","flxRating5"]);
	kony.automation.flexcontainer.click(["frmCustomerFeedback","Feedback","flxaddress"]);
	kony.automation.flexcontainer.click(["frmCustomerFeedback","Feedback","flxAddFeatureRequestandimg"]);
	kony.automation.flexcontainer.click(["frmCustomerFeedback","Feedback","flxUserFeedback"]);
	kony.automation.textarea.enterText(["frmCustomerFeedback","Feedback","txtareaUserAdditionalComments"],"test");
	kony.automation.button.click(["frmCustomerFeedback","Feedback","confirmButtons","btnModify"]);
});