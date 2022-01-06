
async function NaviagtetoPayBusinessTaxes_CRATab() {

 // await kony.automation.playback.wait(5000);
   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMyBills"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
	await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"]);
  await kony.automation.playback.wait(10000);  
	
}

async function SelectTaxandPaymenttype(Businessnumber) {
//  frmPayBusinessTaxes_lblAddCRAFrom
  await kony.automation.playback.wait(30000);
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblAddCRAFrom"],15000);
  kony.automation.flexcontainer.click(["frmPayBusinessTaxes","lblAddCRAFrom"]);
  await kony.automation.playback.wait(8000);
  if (Businessnumber === CRATaxes.BusinessNo.Template1)
  {
    appLog("Initiated adding CRA Form Tamplate 1");
    await kony.automation.playback.waitFor(["frmAddCRAForm","lbxTaxType"],15000);
	kony.automation.listbox.selectItem(["frmAddCRAForm","lbxTaxType"], "Excise Duty");
    //await kony.automation.playback.waitFor(["frmAddCRAForm","lbxPaymentType"],15000);
	kony.automation.listbox.selectItem(["frmAddCRAForm","lbxPaymentType"], "Amount Owing");
  }
  else if (Businessnumber === CRATaxes.BusinessNo.Template2)  {
     appLog("Initiated adding CRA Form Tamplate 2");
       await kony.automation.playback.waitFor(["frmAddCRAForm","lbxTaxType"],15000);
	kony.automation.listbox.selectItem(["frmAddCRAForm","lbxTaxType"], "Excise Duty");
   // await kony.automation.playback.waitFor(["frmAddCRAForm","lbxPaymentType"],15000);
	kony.automation.listbox.selectItem(["frmAddCRAForm","lbxPaymentType"], "Balance Due");
  }
 else if (Businessnumber === CRATaxes.BusinessNo.Template3 ) {
   // appLog("Initiated adding CRA Form Tamplate 3");
       await kony.automation.playback.waitFor(["frmAddCRAForm","lbxTaxType"],15000);
	kony.automation.listbox.selectItem(["frmAddCRAForm","lbxTaxType"], "GST/HST");
   // await kony.automation.playback.waitFor(["frmAddCRAForm","lbxPaymentType"],15000);
	kony.automation.listbox.selectItem(["frmAddCRAForm","lbxPaymentType"], "Filing & Remittance");
  }
  else if (Businessnumber === CRATaxes.BusinessNo.Template4 ) {
    appLog("Initiated adding CRA Form Tamplate 4");
       await kony.automation.playback.waitFor(["frmAddCRAForm","lbxTaxType"],15000);
	kony.automation.listbox.selectItem(["frmAddCRAForm","lbxTaxType"], "Workers Comp Board - Nova Scotia");
   // await kony.automation.playback.waitFor(["frmAddCRAForm","lbxPaymentType"],15000);
	//kony.automation.listbox.selectItem(["frmAddCRAForm","lbxPaymentType"], "Filing & Remittance");
  }
  else {
   appLog("Please check the business number test data entered");
  }
}

async function AddCRATaxesForm(Businessnumber) {
	//kony.automation.widget.touch(["frmAddCRAForm","txtBusinessName"], null,null,[146,13]);
	//kony.automation.widget.touch(["frmAddCRAForm"], null,null,[246,449]);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmAddCRAForm","txtBusinessName"],15000);
	kony.automation.textbox.enterText(["frmAddCRAForm","txtBusinessName"],Businessnumber);
  await kony.automation.playback.wait(2000);
   await kony.automation.playback.waitFor(["frmAddCRAForm","btnConfirm"],15000);
	kony.automation.button.click(["frmAddCRAForm","btnConfirm"]);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmSelectCRAForms","segTaxFormsList"],15000);
  //kony.automation.widget.touch(["frmSelectCRAForms","segTaxFormsList[0]","flxCheckBox"], null,null,[8,22]);
  kony.automation.flexcontainer.click(["frmSelectCRAForms","segTaxFormsList[0]","flxCheckBox"]);
  await kony.automation.playback.waitFor(["frmSelectCRAForms","btnContinue"],15000);
  kony.automation.button.click(["frmSelectCRAForms","btnContinue"]);
  appLog ("Added the CRA TAx form successfully");
     }
async function VerifytheAddedCRAform(Template_BusinessNumber) {
  var a = 0;
  await kony.automation.playback.wait(10000);
   for(var i=0; i<50; i++){
  var lable = "lblBusniessNumber" + i ;
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxBusniessMain"],15000);
  var businessnumber = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes",lable],"text");
    if (businessnumber === Template_BusinessNumber){
      appLog("The CRA tax is successfully added");
      a++;
      break;
    }    
    }
  if (a===0)
    fail("Failed as the added CRA form is not listed");
}
  
//   await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"],15000);
//   kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
//   await kony.automation.playback.wait(3000);
//   await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxBusniessNumber0"],15000);
//   expect(kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblBusniessNumber0"], "text")).not.toBe('');
//   appLog("Successfully verified the added CRA business Tax form");


async function Naviagatebacktodashboard_PayBusinessTaxes() {
  
  await kony.automation.playback.wait(3000);
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","customheadernew","flxAccounts"],15000);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","customheadernew","flxAccounts"]);
  appLog("Navigated back to dashboard successfully");
  await kony.automation.playback.wait(2000);

}
// async function FileandRemitCRATax() {
//   if (await await kony.automation.playback.waitFor(["frmTemplate4","tbxEnterEmployees"]))
//   {
//     appLog("Initiated File and remit of CRA Template 4");
    
//   }
  
// }
 async function RemoveCRATaxesBusinessNumber() {
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"],15000);
    kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
    await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblRemoveBusinessNumber0"],15000);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","lblRemoveBusinessNumber0"]);
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","RemovePopup","btnYes"],15000);
	kony.automation.button.click(["frmPayBusinessTaxes","RemovePopup","btnYes"]);
  await kony.automation.playback.wait(3000);
}
async function RemoveCRATaxesForm(){
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"],15000);
 kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
  
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblBusniessNumber0"],15000);
 // "frmPayBusinessTaxes","lblBusniessNumber0"
  var Businessno = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblBusniessNumber0"],"text"); 
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxMenu00"],15000);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxMenu00"]);
    await kony.automation.playback.waitFor(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[1]","flxAccountTypes"],15000);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[1]","flxAccountTypes"]);
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","CancelPopup","btnYes"],15000);
	kony.automation.button.click(["frmPayBusinessTaxes","CancelPopup","btnYes"]);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"],15000);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
    await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblBusniessNumber0"],15000);
	var Business2 = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblBusniessNumber0"],"text");
  if (Businessno === Business2){
    appLog("The form is not deleted successfully");
  }
     
  else{
    appLog("Successfully deleted the form");
  }
                
}


async function FileandRemitCRATax(TemplateType,TemplateFormName){
   appLog("Initiated File and remit of CRA");
//    await kony.automation.playback.wait(5000);
//   await SelectAddedCRATemplate(TemplateType);
  await kony.automation.playback.wait(10000);
  if(TemplateType === CRATaxes.BusinessNo.Template2){
   await kony.automation.playback.waitFor([TemplateFormName,"tbxBusinessName"],15000);
  kony.automation.textbox.enterText([TemplateFormName,"tbxBusinessName"],"abcdefghijklmnopqrstuvwxy");
    
  await kony.automation.playback.waitFor([TemplateFormName,"calEffectiveDate"],15000);
  kony.automation.calendar.selectDate([TemplateFormName,"calEffectiveDate"], [11,5,2022]);
  await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
  kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"2000000");
  await kony.automation.playback.waitFor([TemplateFormName,"calPaymentDate"],15000);
  kony.automation.calendar.selectDate([TemplateFormName,"calPaymentDate"], [10,10,2022]);
      await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
  kony.automation.button.click([TemplateFormName,"btnContinue"]);
    kony.automation.widget.touch([TemplateFormName,"flxFromSegment"], null,null,[135,68]);
     await kony.automation.playback.waitFor([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"],15000);
  kony.automation.flexcontainer.click([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"]);
    await kony.automation.playback.wait(2000);
    await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
  kony.automation.button.click([TemplateFormName,"btnContinue"]);
  await kony.automation.playback.waitFor([TemplateFormName,"lblAmountError"],15000);
     expect(kony.automation.widget.getWidgetProperty([TemplateFormName,"lblAmountError"], "text")).toEqual("The amount must be more than $0 and less than $1,000.00");
      await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
  kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"2.1");
      await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
  kony.automation.button.click([TemplateFormName,"btnContinue"]);
    await kony.automation.playback.wait(5000);
//     await kony.automation.playback.waitFor(["frmCRAVerification","flxCRAVerifyPaymentDetails","lblValue"],15000);
//      expect(kony.automation.widget.getWidgetProperty(["frmCRAVerification","flxCRAVerifyPaymentDetails","lblValue"], "text")).toEqual("The amount must be more than $0 and less than $200,000.00.");
//   kony.automation.button.click([TemplateFormName,"btnContinue"]);
  }
  else if (TemplateType === CRATaxes.BusinessNo.Template1){
    await kony.automation.playback.waitFor([TemplateFormName,"tbxBusinessName"],15000);
  kony.automation.textbox.enterText([TemplateFormName,"tbxBusinessName"],"abcdefghijklmnopqrstuvwxy");
//   await kony.automation.playback.waitFor([TemplateFormName,"calEffectiveDate"],15000);
//   kony.automation.calendar.selectDate([TemplateFormName,"calEffectiveDate"], [10,30,2022]);
  await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
  kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"2000000");
  await kony.automation.playback.waitFor([TemplateFormName,"calPaymentDate"],15000);
  kony.automation.calendar.selectDate([TemplateFormName,"calPaymentDate"], [11,10,2022]);
      await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor([TemplateFormName,"btnConfirm"],15000);
  kony.automation.button.click([TemplateFormName,"btnConfirm"]);
    kony.automation.widget.touch([TemplateFormName,"flxFromSegment"], null,null,[135,68]);
     await kony.automation.playback.waitFor([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"],15000);
  kony.automation.flexcontainer.click([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"]);
    await kony.automation.playback.wait(2000);
    await kony.automation.playback.waitFor([TemplateFormName,"btnConfirm"],15000);
  kony.automation.button.click([TemplateFormName,"btnConfirm"]);
  await kony.automation.playback.waitFor([TemplateFormName,"lblAmountError"],15000);
     expect(kony.automation.widget.getWidgetProperty([TemplateFormName,"lblAmountError"], "text")).toEqual("The amount must be more than $0 and less than $1,000.00");
      await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
  kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"2.1");
      await kony.automation.playback.waitFor([TemplateFormName,"btnConfirm"],15000);
  kony.automation.button.click([TemplateFormName,"btnConfirm"]);
    await kony.automation.playback.wait(5000);
  }
  else if(TemplateType === CRATaxes.BusinessNo.Template3){
       await kony.automation.playback.waitFor([TemplateFormName,"tbxBusinessName"],15000);
  kony.automation.textbox.enterText([TemplateFormName,"tbxBusinessName"],"abcdefghijklmnopqrstuvwxy");
    
  await kony.automation.playback.waitFor([TemplateFormName,"calStartDate"],15000);
  kony.automation.calendar.selectDate([TemplateFormName,"calStartDate"], [11,5,2022]);
  await kony.automation.playback.waitFor([TemplateFormName,"calEndDate"],15000);
  kony.automation.calendar.selectDate([TemplateFormName,"calEndDate"], [11,29,2022]);
  }
}
  async function Confirm_FileandRemite(){

  await kony.automation.playback.wait(15000);
  await kony.automation.playback.waitFor(["frmCRAVerification","btnContinue"],15000);
  kony.automation.button.click(["frmCRAVerification","btnConfirm"]);
   await kony.automation.playback.wait(15000);
//   await kony.automation.playback.waitFor(["frmCRAnABAcknowledgement","flxSuccess"],15000);
//    expect(kony.automation.widget.getWidgetProperty(["frmCRAnABAcknowledgement","flxSuccess"], "text")).toEqual("We successfully scheduled your payment.");
// kony.automation.flexcontainer.click(["frmCRAnABAcknowledgement","flxSuccess"]);
}
async function Cancel_FileandRemit(){
  await kony.automation.playback.wait(10000);
   await kony.automation.playback.waitFor(["frmCRAVerification","btnCancel"],15000);
  kony.automation.button.click(["frmCRAVerification","btnCancel"]);  
  await kony.automation.playback.waitFor(["frmCRAVerification","CancelPopup","btnYes"],15000);
  kony.automation.button.click(["frmCRAVerification","CancelPopup","btnYes"]);  
   await kony.automation.playback.wait(5000);
//   await Naviagatebacktodashboard_PayBusinessTaxes();
}
 
async function SelectAddedCRATemplate(Template_BusinessNumber){
 //var Template2BusinessNumber = CRATaxes.BusinessNo.Template2;
//   await  NaviagtetoPayBusinessTaxes_CRATab();
//   await SelectTaxandPaymenttype(Template2BusinessNumber);
//   await AddCRATaxesForm(Template2BusinessNumber);
  await kony.automation.playback.wait(10000);
  //await VerifytheAddedCRAform();
 // frmPayBusinessTaxes_flxBusniessMain

  //var businessnum = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","flxBusniessMain"],"data");
  for(var i=0; i<50; i++){
 var lable = "lblBusniessNumber" + i ;
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxBusniessMain"],15000);
  var businessnumber = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes",lable],"text");
    if (businessnumber === Template_BusinessNumber){
      var dropdown = "flxDropdown" + i;
      var file = "lblFile0" + i;
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes",dropdown],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes",lable], "text")).toEqual(Template_BusinessNumber);
  kony.automation.flexcontainer.click(["frmPayBusinessTaxes",dropdown]);
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes",file],15000);
  kony.automation.flexcontainer.click(["frmPayBusinessTaxes",file]);
    break;
    }
  }
}

async function RemoveAddedCRATax(BusinessNumber_Added)
{
  await kony.automation.playback.wait(10000);
  for(var i=0; i<50; i++){
 var lable = "lblBusniessNumber" + i ;
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxBusniessMain"],15000);
  var businessnumber = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes",lable],"text");
    if (businessnumber === BusinessNumber_Added){
      var dropdown = "flxDropdown" + i;
      var Remove = "lblRemoveBusinessNumber" + i;
       await kony.automation.playback.waitFor(["frmPayBusinessTaxes",dropdown],15000);
    kony.automation.flexcontainer.click(["frmPayBusinessTaxes",dropdown]);
    await kony.automation.playback.waitFor(["frmPayBusinessTaxes",Remove],15000);
	kony.automation.flexcontainer.click(["frmPayBusinessTaxes",Remove]);
  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","RemovePopup","btnYes"],15000);
	kony.automation.button.click(["frmPayBusinessTaxes","RemovePopup","btnYes"]);
  await kony.automation.playback.wait(3000);
  await Naviagatebacktodashboard_PayBusinessTaxes(); 
   break;
}
  }
}
async function VerifyFileandRemit_SuccessScreen()
{
    await kony.automation.playback.waitFor(["frmCRAnABAcknowledgement","lblSuccessMessage"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmCRAnABAcknowledgement","lblSuccessMessage"], "text")).toEqual("We successfully scheduled your payment.");
  await kony.automation.playback.waitFor(["frmCRAnABAcknowledgement","lblConfirmationNumberValue"],15000);
  var confirmation_number = kony.automation.widget.getWidgetProperty(["frmCRAnABAcknowledgement","lblConfirmationNumberValue"], "text");
   appLog("The FileandRemit Confirmaton number is :: <b>"+confirmation_number+"</b>");
    await kony.automation.playback.waitFor(["frmCRAnABAcknowledgement","btnViewTaxes"],15000);
  kony.automation.button.click(["frmCRAnABAcknowledgement","btnViewTaxes"]);
    await kony.automation.playback.wait(10000);
}

// async function File_RemitVerifyErrorMessages(TemplateType,TemplateFormName){
//    appLog("Initiated File and remit of CRA");
//    await kony.automation.playback.wait(5000);
//   await SelectAddedCRATemplate(TemplateType);
//   await kony.automation.playback.wait(10000);
//   if(TemplateType === CRATaxes.BusinessNo.Template2){
  
//   await kony.automation.playback.waitFor([TemplateFormName,"tbxBusinessName"],15000);
//   kony.automation.textbox.enterText([TemplateFormName,"tbxBusinessName"],"abcdefghijklmnopqrstuvwxyz");
//   await kony.automation.playback.waitFor([TemplateFormName,"calEffectiveDate"],15000);
//   kony.automation.calendar.selectDate([TemplateFormName,"calEffectiveDate"], [10,5,2022]);
//   await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
//   kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"2000000");
//   await kony.automation.playback.waitFor([TemplateFormName,"calPaymentDate"],15000);
//   kony.automation.calendar.selectDate([TemplateFormName,"calPaymentDate"], [10,10,2021]);
//         await kony.automation.playback.wait(3000);
//      await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
//   kony.automation.button.click([TemplateFormName,"btnContinue"]);
//     kony.automation.widget.touch([TemplateFormName,"flxFromSegment"], null,null,[135,68]);
//   await kony.automation.playback.waitFor([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"],15000);
//   kony.automation.flexcontainer.click([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"]);
//       await kony.automation.playback.wait(5000);
//   await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
//   kony.automation.button.click([TemplateFormName,"btnContinue"]);
//    await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
//   }
//   else if (TemplateType === CRATaxes.BusinessNo.Template1){
//     kony.automation.widget.touch([TemplateFormName,"flxFromSegment"], null,null,[135,68]);
//   await kony.automation.playback.waitFor([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"],15000);
//   kony.automation.flexcontainer.click([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"]);
//   await kony.automation.playback.waitFor([TemplateFormName,"tbxBusinessName"],15000);
//   kony.automation.textbox.enterText([TemplateFormName,"tbxBusinessName"],"abcdefghijklmnopqrstuvwxyz");
// //   await kony.automation.playback.waitFor([TemplateFormName,"calEffectiveDate"],15000);
// //   kony.automation.calendar.selectDate([TemplateFormName,"calEffectiveDate"], [10,5,2022]);
//   await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
//   kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"1.4");
//   await kony.automation.playback.waitFor([TemplateFormName,"calPaymentDate"],15000);
//   kony.automation.calendar.selectDate([TemplateFormName,"calPaymentDate"], [10,10,2021]);
//       await kony.automation.playback.wait(5000);
//  await kony.automation.playback.waitFor([TemplateFormName,"btnConfirm-hint"],15000);
//   kony.automation.button.click([TemplateFormName,"btnConfirm-hint"]);
  
// }

