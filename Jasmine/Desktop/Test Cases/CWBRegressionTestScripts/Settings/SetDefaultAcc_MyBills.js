it("Set Default account _ My Bills", async function() {
  //write your automation code here
   await NavigateToAccountSettings();
  await clickonDefaultAccountstab();
  await ValidateSetDefaultAcc_MyBills();
  await MoveBackToDashBoard_ProfileManagement();
},500000);