it("Validate Custom Role Copy Permissions", async function() {
  //write your automation code here
   await NavigatetoCustomRole_Usermanagement();
  await CreateCustomRole_CopyPermission();
  await ValidateCustomRole_CopyPermissions();
  await MoveBacktoDashboard_CustomRole();
},800000);