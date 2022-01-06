async function NavigatetoAllUsers_Usermanagement(){
  
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxMenu"],15000);
  kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
   await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"],15000);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"]);
    await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagement0flxMyAccounts"],15000);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagement0flxMyAccounts"]);
}

async function NavigatetoCustomRole_Usermanagement(){
  
  appLog("Naviagting to CreateCustome role Usermanagement");
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxMenu"],15000);
  kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
	await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"],15000);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"]);
	await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagement3flxMyAccounts"],15000);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagement3flxMyAccounts"]);
}
async function VerifyAllUsersTab_Usermanagement()
{
  await kony.automation.playback.wait(40000);
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","lblContentHeader"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","lblContentHeader"], "text")).toEqual("User Management");
  appLog("Successfully verified User Management header");
 //kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","btnName"]);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabsHeaderNew","btnTab1"], "text")).toEqual("All Users");
  appLog("Sucessfully verified All users text");
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnName"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnName"], "text")).toEqual("Name");
  appLog("Successfully verified Name");
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRole"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRole"], "text")).toEqual("Role");
  appLog("Successfully verified Role");
  //"frmBBUsersDashboard","TabPane","TabBodyNew","btnStatus"
   await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnUsername"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnUsername"], "text")).toEqual("Username");
  appLog("Successfully verified Username");
 // frmBBUsersDashboard_TabPane_TabBodyNew_lblActions
    await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnStatus"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnStatus"], "text")).toEqual("Status");
  appLog("Successfully verified Status");
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","lblActions"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","lblActions"], "text")).toEqual("Action");
  appLog("Successfully verified Action");
  
}
async function CreateUser()
{
   var unique_Username=getRandomString(8);
  var firstName = getRandomString(5);
  var lastName = getRandomString(5);
  var phoneNum = getRandomNumber(10);
  await kony.automation.playback.waitFor(["frmBBUsersDashboard","dbRightContainerNew","btnAction1"],5000);
  kony.automation.flexcontainer.click(["frmBBUsersDashboard","dbRightContainerNew","btnAction1"]);
  appLog("Successfully clicked on Create a User");
    await kony.automation.playback.wait(25000);
	kony.automation.textbox.enterText(["frmUserManagement","tbxName"],firstName);
  appLog("Successfully entered First Name");
	kony.automation.textbox.enterText(["frmUserManagement","tbLastName"],lastName);
  appLog("Successfully entered Last Name");
	kony.automation.textbox.enterText(["frmUserManagement","tbxEmail"],"xyz@gmail.com");
  appLog("Successfully entered Email");
	kony.automation.textbox.enterText(["frmUserManagement","tbxPhoneNum"],phoneNum);
  appLog("Successfully entered Phone Number");
	kony.automation.textbox.enterText(["frmUserManagement","tbxUsername"],unique_Username);
  appLog("Successfully entered User Name");
	kony.automation.flexcontainer.click(["frmUserManagement","btnCheckAvailability"]);
  appLog("Successfully checked availablity");
      await kony.automation.playback.wait(20000);
	kony.automation.flexcontainer.click(["frmUserManagement","btnProceedCreate"]);
  appLog("Successfully clicked on continue button");
        await kony.automation.playback.wait(30000);
	kony.automation.flexcontainer.click(["frmUserManagement","flxUsers"]);
	kony.automation.flexcontainer.click(["frmUserManagement","flxExistingUsersExpand"]);
	kony.automation.flexcontainer.click(["frmUserManagement","segUserNames[0]","flxSelectRole"]);
  appLog("Successfully selected one existing user");
	
  await kony.automation.playback.wait(25000);
	kony.automation.flexcontainer.click(["frmUserManagement","btnProceedRoles"]);
  await kony.automation.playback.wait(50000);
 
  kony.automation.flexcontainer.click(["frmUserManagement","btnSaveAndProceed"]);
  await kony.automation.playback.wait(50000);
    appLog("Successfully clicked on continue button");
	kony.automation.flexcontainer.click(["frmUserManagement","btnProceedAddServices"]);
	appLog("Successfully clicked on All users button in success screen");
    await kony.automation.playback.wait(25000);
}

async function CreateCustomRole_CopyPermission()
{
  appLog("Initiated creation of custome role");
 // var Time=Math.floor(Date.now()/1000);
 // var rolename = "Jasmine"+Time; 
  //var rolename = "Jasmine";
  var roleName = getRandomString(10);
      await kony.automation.playback.wait(25000);
  await kony.automation.playback.waitFor(["frmPermissionsTemplate","tbxRoleName"],15000);
  kony.automation.textbox.enterText(["frmPermissionsTemplate","tbxRoleName"],roleName);
    appLog("Successfully entered Role name");
  await kony.automation.playback.waitFor(["frmPermissionsTemplate","btnCheckAvailability"],15000);
	kony.automation.flexcontainer.click(["frmPermissionsTemplate","btnCheckAvailability"]);
    appLog("Successfully checked availablity");
await kony.automation.playback.wait(15000);
 // await kony.automation.scrollToBottom ;
 //  await kony.automation.scrollToWidget(["frmPermissionsTemplate","btnProceedRoles"]);
	kony.automation.flexcontainer.click(["frmPermissionsTemplate","flxCustomRoleExpand"]);
	kony.automation.flexcontainer.click(["frmPermissionsTemplate","segRoleNames[0]","flxSelectRole"]);
  appLog("Successfully selected user role");
  await kony.automation.playback.wait(20000);
}

async function CreateCustomRole_Manual()
{
   appLog("Initiated creation of custome role");
 // var Time=Math.floor(Date.now()/1000);
 // var rolename = "Jasmine"+Time; 
  //var rolename = "Jasmine";
    var role = getRandomString(10);
      await kony.automation.playback.wait(25000);
  await kony.automation.playback.waitFor(["frmPermissionsTemplate","tbxRoleName"],15000);
  kony.automation.textbox.enterText(["frmPermissionsTemplate","tbxRoleName"],role);
  appLog("Successfully entered Role name");
  await kony.automation.playback.waitFor(["frmPermissionsTemplate","btnCheckAvailability"],15000);
	kony.automation.flexcontainer.click(["frmPermissionsTemplate","btnCheckAvailability"]);
    appLog("Successfully checked availablity");
await kony.automation.playback.wait(15000);
 // await kony.automation.scrollToBottom ;
 //  await kony.automation.scrollToWidget(["frmPermissionsTemplate","btnProceedRoles"]);
  kony.automation.flexcontainer.click(["frmPermissionsTemplate","flxManual"]);
    appLog("Successfully clicked on Manual Option");
  await kony.automation.playback.wait(15000);
	
}

async function ValidateCustomRole_CopyPermissions()
{
  kony.automation.flexcontainer.click(["frmPermissionsTemplate","btnProceedRoles"]);
  await kony.automation.playback.wait(20000);
  kony.automation.flexcontainer.click(["frmPermissionsTemplate","btnSaveAndProceed"]);
  await kony.automation.playback.wait(30000);
  appLog("Successfully clicked on confirm button");
 expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","lblContentHeader"], "text")).toEqual("Custom Role- Acknowledgement");
  appLog("Custom Role acknowledgement header is verified");
expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","btnViewMoreDetails"], "text")).toEqual(" View More Details");
  appLog("View more details header is verified");
  expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","btnCancelAddServices"], "text")).toEqual("Create New Custom Role");
  appLog("Create New Custom role button is verified");
  expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","btnProceedAddServices"], "text")).toEqual("View All Custom Roles");
  appLog("View all custom roles button is verified");
  expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","lblReferenceHeader"], "text")).toEqual("Reference Number");
  appLog("Reference number is verified");
    expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","lblReferenceNumber"], "text")).not.toBe('');
   
}
async function ValidateCustomRole_Manual()
{
  kony.automation.flexcontainer.click(["frmPermissionsTemplate","btnProceedRoles"]);
  await kony.automation.playback.wait(20000);
  kony.automation.widget.touch(["frmPermissionsTemplate"], null,null,[125,98]);
  kony.automation.flexcontainer.click(["frmPermissionsTemplate","segAccounts[0]","flxAccountRow","lblCheckAccount"]);
    await kony.automation.playback.wait(20000);
  kony.automation.flexcontainer.click(["frmPermissionsTemplate","btnProceedAccess"]);
  await kony.automation.playback.wait(20000);
  kony.automation.flexcontainer.click(["frmPermissionsTemplate","btnSaveAndProceed"]);
  await kony.automation.playback.wait(30000);
  appLog("Successfully clicked on confirm button");
 expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","lblContentHeader"], "text")).toEqual("Custom Role- Acknowledgement");
  appLog("Custom Role acknowledgement header is verified");
expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","btnViewMoreDetails"], "text")).toEqual(" View More Details");
  appLog("View more details header is verified");
  expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","btnCancelAddServices"], "text")).toEqual("Create New Custom Role");
  appLog("Create New Custom role button is verified");
  expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","btnProceedAddServices"], "text")).toEqual("View All Custom Roles");
  appLog("View all custom roles button is verified");
  expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","lblReferenceHeader"], "text")).toEqual("Reference Number");
  appLog("Reference number is verified");
    expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","lblReferenceNumber"], "text")).not.toBe('');
   
}
async function MoveBacktoDashboard_CustomRole()
{
  
  kony.automation.flexcontainer.click(["frmPermissionsTemplate","customheader","topmenu","flxaccounts"]);
  await kony.automation.playback.wait(20000);
    expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","lblAccounts"], "text")).toEqual("Accounts");
	appLog("Successfully landed to account dashboard");
}
async function ClickonCancel_CustomRole(){
	kony.automation.flexcontainer.click(["frmPermissionsTemplate","btnCancelRoles"]);
  appLog("Successfully clicked on cancel button");
  await kony.automation.playback.wait(15000);
	kony.automation.flexcontainer.click(["frmPermissionsTemplate","PopupHeaderUM","btnYes"]);
	appLog("Successfully clicked on Yes cancel button");
}
 async function MoveBacktoAccountDashboard()
{
  
  await kony.automation.playback.wait(20000);
    expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","lblAccounts"], "text")).toEqual("Accounts");
	appLog("Successfully landed to account dashboard");
  
}


 async function MoveBacktoAccountDashboard_AllUsers()
{
  kony.automation.flexcontainer.click(["frmBBUsersDashboard","customheader","topmenu","flxaccounts"]);
  await kony.automation.playback.wait(20000);
    expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","lblAccounts"], "text")).toEqual("Accounts");
	appLog("Successfully landed to account dashboard");
  
}
