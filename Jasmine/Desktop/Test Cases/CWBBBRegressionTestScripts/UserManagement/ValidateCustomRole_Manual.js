it("Validate Custom role manual", async function() {
  //write your automation code here
  await NavigatetoCustomRole_Usermanagement();
  await CreateCustomRole_Manual();
  await ValidateCustomRole_Manual();
  await MoveBacktoDashboard_CustomRole();
},800000);