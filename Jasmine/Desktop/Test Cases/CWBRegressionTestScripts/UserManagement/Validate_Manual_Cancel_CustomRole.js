it("Validate Manual cancel custom role", async function() {
  //write your automation code here
  await NavigatetoCustomRole_Usermanagement();
  await CreateCustomRole_Manual();
  await ClickonCancel_CustomRole();
  await MoveBacktoAccountDashboard();
  
},800000);