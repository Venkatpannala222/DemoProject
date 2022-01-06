it("PayBills_DeletePayee", async function() {

  // Add payee and Then Delete same payee

  //   var delete_RecipitentName=BillPay.deletePayee.delete_RecipitentName+getRandomString(5);
  //   var unique_Accnumber=getRandomNumber(5);
  //   var zipcode=getRandomNumber(6);

  //var RecipientName=BillPay.addPayee.RecipientName;
  // var RecipientName="TERRY'S TEST AND TUNE";
  var unique_Accnumber=getRandomNumber(12);
 var data=(RecipientName+"-"+unique_Accnumber);
  
  await NavigateToBillPay();
  await clickOnAddPayeeLink();
  await enterPayeeDetails_UsingPayeeinfo(BillPay.addPayee.RecipitentName,unique_Accnumber);
  //await enterPayeeDetails_UsingPayeeinfo(delete_RecipitentName,BillPay.deletePayee.address1,BillPay.deletePayee.address2,BillPay.deletePayee.city,zipcode,unique_Accnumber,"PayBills_DeletePayee");
  await clickOnConfirmButton_verifyPayee();
  await verifyAddPayeeSuccessMsg();
  await verifyAccountsLandingScreen();

  //Delete same payee
 // await navigateToManagePayee();
  await navigateToManagePayees();
  await validateNewlyAddedPayee(data);
 // await selectPayee_ManagePayeeList(RecipientName);
  await deletePayee_ManagePayee();


},400000);