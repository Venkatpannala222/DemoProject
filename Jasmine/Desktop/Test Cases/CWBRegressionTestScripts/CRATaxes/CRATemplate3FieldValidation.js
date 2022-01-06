it("CRATemplate3FieldValidation", async function() {
  var Template3BusinessNumber = CRATaxes.BusinessNo.Template3;
  var TemplateFormName = File_RemitFormNames.FormName.Template3 ;
  await  NaviagtetoPayBusinessTaxes_CRATab();
  await SelectTaxandPaymenttype(Template3BusinessNumber);
  await AddCRATaxesForm(Template3BusinessNumber);
  await SelectAddedCRATemplate(Template3BusinessNumber);
  await FileandRemitCRATax(Template3BusinessNumber,TemplateFormName);
  await Cancel_FileandRemit();
  await RemoveAddedCRATax(Template3BusinessNumber);
},250000);