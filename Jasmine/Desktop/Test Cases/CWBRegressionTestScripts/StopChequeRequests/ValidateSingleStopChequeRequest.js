it("Validate Single Stop Cheque Request Functionality", async function() {
  //write your automation code here
    await ClickOnStopCheque();
  await ClickOnNewStopCheque();
  await ValidateSingleStopCheque();
  await ValidateCancelInConfirm();
  await ClickOnConfirm_SingleCheque();
  await MoveBackToAccLandingScreen_StopCheq();

},1100000);