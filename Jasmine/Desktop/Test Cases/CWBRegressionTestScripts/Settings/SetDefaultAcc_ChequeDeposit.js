it("Set Default Account _Cheque Deposit", async function() {
  //write your automation code here
  await NavigateToAccountSettings();
  await clickonDefaultAccountstab();
  await ValidateSetDefaultAcc_ChequeDeposit();
  await MoveBackToDashBoard_ProfileManagement();
},500000);