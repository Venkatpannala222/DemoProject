it("Settings_EditNickname", async function() {
    await NavigateToAccountSettings();
  await EditFavAccountPreferences();
  await MoveBackToDashBoard_ProfileManagement();
  await verifyAccountsLandingScreen();
},75000);