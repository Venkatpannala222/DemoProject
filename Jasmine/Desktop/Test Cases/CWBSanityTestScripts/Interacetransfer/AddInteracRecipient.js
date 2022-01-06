it("AddInteracRecipient", async function() {
  var RecipitentName =ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);
  await NavigatetoInteracEtransferManagerecipient();
 await AddInteracEtransferRecipient(RecipitentName);
  await EnterSecurityQuestionandAnswer();
  await NavigateBacktoDashboard_AddEtransferrecipient();
  
},75000);