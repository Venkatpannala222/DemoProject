it("RemoveCRABusinessNumber", async function() {
var Template1BusinessNumber = CRATaxes.BusinessNo.Template1;
   await  NaviagtetoPayBusinessTaxes_CRATab();
  await SelectTaxandPaymenttype(Template1BusinessNumber);
  await AddCRATaxesForm(Template1BusinessNumber);
  await VerifytheAddedCRAform(Template1BusinessNumber);
  await Naviagatebacktodashboard_PayBusinessTaxes();
   await  NaviagtetoPayBusinessTaxes_CRATab();
   await RemoveCRATaxesBusinessNumber();
  await kony.automation.playback.wait(5000);
  await Naviagatebacktodashboard_PayBusinessTaxes();
},350000);
	
	
