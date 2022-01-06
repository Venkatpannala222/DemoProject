it("Validate Cheque status", async function() {
  //write your automation code here
  await ClickOnStopCheque();
  await ClickOnNewStopCheque();
  await ValidateSingleStopCheque();
  //await ValidateCancelInConfirm();
 // await ClickOnConfirm_SingleCheque();
  await ValidateChequeStatus();
  await MoveBackToAccLandingScreen_StopCheq();
},1100000);