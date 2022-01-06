it("Validate Series Of Cheque Request", async function() {
  //write your automation code here
   await ClickOnStopCheque();
  await ClickOnNewStopCheque();
  await ValidateSeriesOfCheque();
  await ValidateCancelInConfirm();
  //await ClickOnConfirm_SeriesOfCheque();
  await MoveBackToAccLandingScreen_StopCheq();
},1100000);