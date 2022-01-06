it("Lease Context Menu Options", async function() {
  //write your automation code here
  await clickOnLeaseContextMenu();
  await verifyContextMenuOpts();
  await MoveBackToLandingScreen_BBAccounts();
},90000);