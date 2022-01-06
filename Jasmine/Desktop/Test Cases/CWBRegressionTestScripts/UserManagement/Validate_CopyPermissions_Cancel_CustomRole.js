it("Validate Copy Permission Cancel In Custom Role", async function() {
  //write your automation code here
  await NavigatetoCustomRole_Usermanagement();
  await CreateCustomRole_CopyPermission();
  await ClickonCancel_CustomRole();
  await MoveBacktoAccountDashboard();
  
},900000);