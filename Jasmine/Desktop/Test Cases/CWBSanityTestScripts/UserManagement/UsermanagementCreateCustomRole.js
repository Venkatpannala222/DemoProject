it("UsermanagementCreateCustomRole", async function() {
  
   var Time=Math.floor(Date.now()/1000);
  var rolename = "Jasmine"+Time;
	
  await NavigatetoCreateCustomeRole();
  await CreateaCustomeRole(rolename);
  await selectCustomAccounts(); 
  await NavigateBactoDasboard_Usermanagement(); 
	//kony.automation.flexcontainer.click(["frmPermissionsTemplate","flxLeftHeader"]);
	//kony.automation.flexcontainer.click(["frmPermissionsTemplate","flxViewMoreDetailsAck"]);
	//kony.automation.flexcontainer.click(["frmPermissionsTemplate","customheader","topmenu","flxaccounts"]);
}, 150000);