it("CRAFileandRemitTemplate2", async function() {
  
  var Template2BusinessNumber = CRATaxes.BusinessNo.Template2;
  var TemplateFormName = File_RemitFormNames.FormName.Template2 ;
  await  NaviagtetoPayBusinessTaxes_CRATab();
  await SelectTaxandPaymenttype(Template2BusinessNumber);
  await AddCRATaxesForm(Template2BusinessNumber);
  await SelectAddedCRATemplate(Template2BusinessNumber);
//   await VerifytheAddedCRAform();
 // await Naviagatebacktodashboard_PayBusinessTaxes();
//   await  NaviagtetoPayBusinessTaxes_CRATab();
  await FileandRemitCRATax(Template2BusinessNumber,TemplateFormName);
  await Confirm_FileandRemite();
  await VerifyFileandRemit_SuccessScreen();
  await RemoveAddedCRATax(Template2BusinessNumber);
},250000);