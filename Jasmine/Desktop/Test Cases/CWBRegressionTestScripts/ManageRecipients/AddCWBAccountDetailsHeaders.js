it("AddCWBAccountDetailsHeaders", async function() {
  
  await NavigateToManageRecipitents();
  await clickonAddCWBAccount();
  await AddCWBAccountFieldsValidation();
  await MoveToAccountsPageFromAddCWBaccount();
  await verifyAccountsLandingScreen();
},350000);