it("CRATemplate1FieldValidation", async function() {
  var Template1BusinessNumber = CRATaxes.BusinessNo.Template1;
  var TemplateFormName = File_RemitFormNames.FormName.Template1 ;
  await  NaviagtetoPayBusinessTaxes_CRATab();
  await SelectTaxandPaymenttype(Template1BusinessNumber);
  await AddCRATaxesForm(Template1BusinessNumber);
  await SelectAddedCRATemplate(Template1BusinessNumber);
  await FileandRemitCRATax(Template1BusinessNumber,TemplateFormName);
  await Cancel_FileandRemit();
  await RemoveAddedCRATax(Template1BusinessNumber);
},250000);