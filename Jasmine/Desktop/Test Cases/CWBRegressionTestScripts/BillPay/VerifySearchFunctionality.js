it("VerifySearchFunctionality", async function() {

  // Add payee 
  var RecipientName=BillPay.addPayee.RecipitentName;
  //var RecipientName="TERRY'S TEST AND TUNE";
  var unique_Accnumber=getRandomNumber(12);
  var data=(RecipientName+"-"+unique_Accnumber);
  

  // var zipcode=getRandomNumber(6);

  //Search_unique_Payee=unique_RecipientName;

  await NavigateToBillPay();
  await clickOnAddPayeeLink();
  await enterPayeeDetails_UsingPayeeinfo(BillPay.addPayee.RecipitentName,unique_Accnumber);
  await clickOnConfirmButton_verifyPayee();
  await verifyAddPayeeSuccessMsg();
  await verifyAccountsLandingScreen();
  await navigateToManagePayees();
  await validateNewlyAddedPayee(data);
  await MoveBackToDashBoard_ManagePayees();
  //await verifyAccountsLandingScreen();
  //await selectPayee_ManagePayeeList(RecipientName);
  //await SelectPayee_ManagePayeeList(PayeeName);
  //await activateNewlyAddedpayee();


},400000);