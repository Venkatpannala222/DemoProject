it("Settings_EditnickGreaterthan28char", async function() {
  await NavigateToAccountSettings();
  await EditNickName_GreaterThan28char();
  await MoveBackToDashBoard_ProfileManagement();
  await verifyAccountsLandingScreen();
},75000);