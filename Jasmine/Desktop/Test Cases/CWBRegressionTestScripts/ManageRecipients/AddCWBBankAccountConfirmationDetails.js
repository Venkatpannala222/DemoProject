it("AddCWBBankAccountConfirmationDetails", async function() {

  var Accno= getRandomNumber(12);
  var unique_RecipitentName=getRandomString(5);
      //ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);

  await NavigateToManageRecipitents();
  await clickonAddCWBAccount();
  await ContinueButton(Accno,unique_RecipitentName);
  await AddAccountConfirmationValidation();
  await verifyAccountsLandingScreen(); 
},350000);