it("AddCRATemplate3", async function() {

   var Template3BusinessNumber = CRATaxes.BusinessNo.Template3;
   await  NaviagtetoPayBusinessTaxes_CRATab();
  await SelectTaxandPaymenttype(Template3BusinessNumber);
  await AddCRATaxesForm(Template3BusinessNumber);
  await VerifytheAddedCRAform(Template3BusinessNumber);
  await Naviagatebacktodashboard_PayBusinessTaxes();
},350000);