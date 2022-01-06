it("Validate Messages On Dashboard", async function() {
  //write your automation code here
  await ValidateMessagesOnDashboard();
  await VerifyMyMessagesDetails();
  await  ClickOnComposeButtonDasboard();
  await MoveBackToDashBoard_Messages();
  await  ClickOnMessage_Dashboard();
  await MoveBackToDashBoard_Messages();

},500000);