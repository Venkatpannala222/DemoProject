it("VerifyAddPayee_BillPayFlow", async function() {

  // Add payee and Then Delete same payee
  //var RecipientName=BillPay.addPayee.RecipientName;
  var unique_Accnumber=getRandomNumber(12);

  await NavigateToBillPay();
  await clickOnAddPayeeLink();
  await enterPayeeDetails_UsingPayeeinfo(BillPay.addPayee.RecipitentName,unique_Accnumber);
  await clickOnConfirmButton_verifyPayee();
  await verifyAddPayeeSuccessMsg();
  await verifyAccountsLandingScreen();


},300000);