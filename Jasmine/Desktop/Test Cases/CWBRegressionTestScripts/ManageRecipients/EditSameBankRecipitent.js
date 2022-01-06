it("EditSameBankRecipitent", async function() {

  // Add Recipitent and edit it
  
  // Add a recipitent and Then delete the same recipitent
 //var Accno="0"+new Date().getTime();
 var Accno= getRandomNumber(12);
 var unique_RecipitentName=ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);
  
  //var AccType="SameBank";
  var unique_EditRecipitentName=ManageRecipients.sameBankAccount.unique_EditRecipitentName+getRandomString(5);
  var unique_EditNickName=ManageRecipients.sameBankAccount.unique_EditNickName+getRandomString(5);
  
  await NavigateToManageRecipitents();
  await clickonAddCWBAccount();
  await enterSameBankAccountDetails(Accno,unique_RecipitentName);
  await verifyAddingNewReciptientSuccessMsg();
  await verifyAccountsLandingScreen(); 
  
  //Edit Added Recipitent
  await NavigateToManageRecipitents();
  await clickOnManageRecipientsAccountsTab();
  await SearchforPayee_RecipientList(unique_RecipitentName);
  await EditReciptent(unique_EditRecipitentName,unique_EditNickName);
  await verifyAddingNewReciptientSuccessMsg();
  await verifyAccountsLandingScreen();


},350000);