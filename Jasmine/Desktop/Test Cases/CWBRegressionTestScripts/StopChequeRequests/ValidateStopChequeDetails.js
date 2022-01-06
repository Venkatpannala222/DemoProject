it("Validate Stop Cheque details", async function() {
  //write your automation code here
      await ClickOnStopCheque();
     await ValidateStopChequeDetails();
  await MoveBackToAccLandingScreen_StopCheq();
},1100000);