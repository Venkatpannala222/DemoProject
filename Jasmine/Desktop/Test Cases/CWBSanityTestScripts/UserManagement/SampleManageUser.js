it("SampleManageUser", async function() {
  await NavigatetoAllUsers_Usermanagement();
  await 
	kony.automation.flexcontainer.click(["frmBBUsersDashboard","TabPane","TabBodyNew","segTemplates[0]","flxDropDown"]);
	kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","segTemplates[0]","btnManageUsers"]);
	kony.automation.button.click(["frmUserManagement","btnEdit"]);
	kony.automation.flexcontainer.click(["frmUserManagement","flxContent"]);
	kony.automation.textbox.enterText(["frmUserManagement","tbxEmail"],"Jasmin@gmail.com");
	kony.automation.button.click(["frmUserManagement","btnProceedCreate"]);
	kony.automation.flexcontainer.click(["frmUserManagement","segUserDetails[1]","flxUserDetailsContainer"]);
	kony.automation.flexcontainer.click(["frmUserManagement","customheader","topmenu","flxaccounts"]);
});