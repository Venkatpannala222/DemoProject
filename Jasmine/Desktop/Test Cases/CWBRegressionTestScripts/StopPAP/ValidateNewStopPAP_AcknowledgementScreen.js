it("Validate New Stop PAP button in Acknowledgment screen", async function() {
  //write your automation code here
  await ClickOnFirstAccountInDashboard();
  await VerifyStopPAPDetails();
  await ClickOnNewStopPAP();
  await ValidateStopPAP();
  await ClickOnNewStopPAP_Acknowledgment();
  await MoveBacktoDashboard_StopPAP();
},800000);