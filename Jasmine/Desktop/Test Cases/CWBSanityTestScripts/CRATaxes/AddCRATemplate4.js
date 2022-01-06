it("AddCRATemplate4", async function() {
 
   var Template4BusinessNumber = CRATaxes.BusinessNo.Template4;
   await  NaviagtetoPayBusinessTaxes_CRATab();
  await SelectTaxandPaymenttype(Template4BusinessNumber);
  await AddCRATaxesForm(Template4BusinessNumber);
  await VerifytheAddedCRAform(Template4BusinessNumber);
  await Naviagatebacktodashboard_PayBusinessTaxes();
},350000);
