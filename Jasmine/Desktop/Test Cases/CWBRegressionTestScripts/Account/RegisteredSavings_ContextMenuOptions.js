it("Registered Savings Context Menu Options", async function() {
  //write your automation code here
  await clickOnRegisteredSavingsContextMenu();
  await verifyContextMenuOpts();
  await MoveBackToLandingScreen_Accounts();
},90000);