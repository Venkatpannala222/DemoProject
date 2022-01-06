async function NavigatetoCreateCustomeRole(){
  appLog("Naviagting to CreateCustome role Usermanagement");
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxMenu"],15000);
  kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
	await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"],15000);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"]);
	await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagement3flxMyAccounts"],15000);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagement3flxMyAccounts"]);
}

async function CreateaCustomeRole(rolename){
  appLog("Initiated creation of custome role");
 // var Time=Math.floor(Date.now()/1000);
 // var rolename = "Jasmine"+Time; 
  //var rolename = "Jasmine";
  await kony.automation.playback.waitFor(["frmPermissionsTemplate","tbxRoleName"],15000);
  kony.automation.textbox.enterText(["frmPermissionsTemplate","tbxRoleName"],rolename);
  await kony.automation.playback.waitFor(["frmPermissionsTemplate","btnCheckAvailability"],15000);
	kony.automation.button.click(["frmPermissionsTemplate","btnCheckAvailability"]);
   await kony.automation.playback.waitFor(["frmPermissionsTemplate","flxManual"],15000);
	kony.automation.flexcontainer.click(["frmPermissionsTemplate","flxManual"]);
await kony.automation.playback.wait(10000);
 // await kony.automation.scrollToBottom ;
 //  await kony.automation.scrollToWidget(["frmPermissionsTemplate","btnProceedRoles"]);
  await kony.automation.playback.waitFor(["frmPermissionsTemplate","btnProceedRoles"],15000);
	kony.automation.button.click(["frmPermissionsTemplate","btnProceedRoles"]);
  await kony.automation.playback.wait(3000);
}
async function selectCustomAccounts(){
  appLog("Initiated the select listed accounts for custom role/user creation");
  //await kony.automation.playback.wait(5000);
   await kony.automation.playback.waitFor(["frmPermissionsTemplate","segAccounts[0]","flxMainContainer","lblCheckAccount"],15000);
  //flxMainContainer_lblCheckAccount
	kony.automation.flexcontainer.click(["frmPermissionsTemplate","segAccounts[0]","flxMainContainer","lblCheckAccount"]);
  await kony.automation.playback.waitFor(["frmPermissionsTemplate","segAccounts[1]","flxMainContainer","lblCheckAccount"],15000);
	kony.automation.flexcontainer.click(["frmPermissionsTemplate","segAccounts[1]","flxMainContainer","lblCheckAccount"]);
  await kony.automation.playback.waitFor(["frmPermissionsTemplate","segAccounts[2]","flxMainContainer","lblCheckAccount"],15000);
	kony.automation.flexcontainer.click(["frmPermissionsTemplate","segAccounts[2]","flxMainContainer","lblCheckAccount"]);
  await kony.automation.playback.wait(5000);
    await kony.automation.playback.waitFor(["frmPermissionsTemplate","btnProceedAccess"],15000);
  kony.automation.button.click(["frmPermissionsTemplate","btnProceedAccess"]);
   await kony.automation.playback.wait(8000);
    await kony.automation.playback.waitFor(["frmPermissionsTemplate","btnSaveAndProceed"],15000);
	kony.automation.button.click(["frmPermissionsTemplate","btnSaveAndProceed"]);
  await kony.automation.playback.wait(8000);
  await kony.automation.playback.waitFor(["frmPermissionsTemplate","lblSuccessMessage"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","lblSuccessMessage"], "text")).toEqual("Custom Role Template Created Successfully");
  appLog("Successfully created a custome role");
  }

async function NavigateBactoDasboard_Usermanagement()
{
   await kony.automation.playback.waitFor(["frmPermissionsTemplate","customheader","topmenu","flxaccounts"],15000);
  kony.automation.flexcontainer.click(["frmPermissionsTemplate","customheader","topmenu","flxaccounts"]);
}

async function NavigatetoUserRoles_Usermanagement(){
  
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxMenu"],15000);                                                   
    kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"],15000); 
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"]);
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagement1flxMyAccounts"],15000); 
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagement1flxMyAccounts"]);
  appLog("Successfully navigated to User Roles screen");
}

async function VerifyUserRolesTab()
{
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRoleName"],15000); 
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRoleName"], "text")).toEqual("Role Name");
  //kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRoleName"]);
   await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedOn"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedOn"], "text")).toEqual("Created On");
	//kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedOn"]);
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedBy"],15000); 
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedBy"], "text")).toEqual("Created By");
	//kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedBy"]);
   await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","lblRoleAction"],15000); 
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","lblRoleAction"], "text")).toEqual("Description");
 // kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","lblRoleAction"]);
  appLog("Successfully verified UserRoles tab");
 
}
async function NavigateBactoDasboard_UserRoles(){
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","customheader","topmenu","flxaccounts"],15000);
 // frmBBUsersDashboard_customheader_topmenu_flxaccounts
  kony.automation.flexcontainer.click(["frmBBUsersDashboard","customheader","topmenu","flxaccounts"]);
}

async function NavigatetoAllUsers_Usermanagement(){
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxMenu"],15000);
  kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
   await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"],15000);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"]);
    await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagement0flxMyAccounts"],15000);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagement0flxMyAccounts"]);
}

async function VerifyAllUsersTab_Usermanagement()
{
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnName"],15000);
 //kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","btnName"]);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnName"], "text")).toEqual("Name");
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRole"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRole"], "text")).toEqual("Role");
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnUsername"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnUsername"], "text")).toEqual("Username");
  //"frmBBUsersDashboard","TabPane","TabBodyNew","btnStatus"
   await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnStatus"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnStatus"], "text")).toEqual("Status");
 // frmBBUsersDashboard_TabPane_TabBodyNew_lblActions
    await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","lblActions"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","lblActions"], "text")).toEqual("Action");
}
async function VerifyManageUser_Usermanagement(){
   await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","segTemplates[0]","flxDropDown"],15000);
  kony.automation.flexcontainer.click(["frmBBUsersDashboard","TabPane","TabBodyNew","segTemplates[0]","flxDropDown"]);
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","segTemplates[0]","btnManageUsers"],15000);
	kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","segTemplates[0]","btnManageUsers"]);
   await kony.automation.playback.waitFor(["frmUserManagement","btnEdit"],15000);
  kony.automation.button.click(["frmUserManagement","btnEdit"]);
   await kony.automation.playback.waitFor(["frmUserManagement","tbxEmail"],15000);
  kony.automation.textbox.enterText(["frmUserManagement","tbxEmail"],"Jasmin@gmail.com");
  await kony.automation.playback.waitFor(["frmUserManagement","btnProceedCreate"],15000);
	kony.automation.button.click(["frmUserManagement","btnProceedCreate"]);
  appLog("Successfully edited the User email ID");
  }