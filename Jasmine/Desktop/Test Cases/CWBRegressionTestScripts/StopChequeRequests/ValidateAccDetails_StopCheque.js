it("Validate Account details ", async function() {
  //write your automation code here
   await ClickOnStopCheque();
  await ClickOnNewStopCheque();
  await ValidateSingleStopCheque();
  //await ValidateCancelInConfirm();
 // await ClickOnConfirm_SingleCheque();
  await ValidateAcc_Details();
  await MoveBackToLandingScreen_StopCheque();
},1100000);