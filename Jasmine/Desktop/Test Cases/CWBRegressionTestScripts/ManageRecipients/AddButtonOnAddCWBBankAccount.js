it("AddButtonOnAddCWBBankAccount", async function() {

  var Accno= getRandomNumber(12);
  var unique_RecipitentName=getRandomString(5);
      //ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);

  await NavigateToManageRecipitents();
  await clickonAddCWBAccount();
  await enterSameBankAccountDetails(Accno,unique_RecipitentName);
  await AddAnotherRecipientNavigationValidation();
  await MoveToAccountsPageFromAddCWBaccount();
  await verifyAccountsLandingScreen(); 
},350000);