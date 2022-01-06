it("Validate Stop PAP request", async function() {
  //write your automation code here
    await ClickOnFirstAccountInDashboard();
   await VerifyStopPAPDetails();
  await ClickOnNewStopPAP();
  await VerifyLinksInStopPAPScreen();
  await ValidateCancelInStopPAP();
  await ValidateStopPAP();
  await MovetoAccountDashboard();

},800000);