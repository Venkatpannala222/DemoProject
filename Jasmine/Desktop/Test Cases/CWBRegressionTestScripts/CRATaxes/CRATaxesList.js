it("CRATaxesList", async function() {
  var Template2BusinessNumber = CRATaxes.BusinessNo.Template2;
  await  NaviagtetoPayBusinessTaxes_CRATab();
  await SelectTaxandPaymenttype(Template2BusinessNumber);
  await AddCRATaxesForm(Template2BusinessNumber);
  await kony.automation.playback.wait(8000);
  await VerifytheAddedCRAform(Template2BusinessNumber);
  await RemoveAddedCRATax(Template2BusinessNumber);
  //await VerifytheAddedCRAform();
 // frmPayBusinessTaxes_flxBusniessMain

  //var businessnum = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","flxBusniessMain"],"data");
//   for(var i=0; i<50; i++){
//  var lable = "lblBusniessNumber" + i ;
//   await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxBusniessMain"],15000);
//   var businessnumber = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes",lable],"text");
//     if (businessnumber === Template2BusinessNumber){
//       var dropdown = "flxDropdown" + i;
//       var file = "lblFile0" + i;
//        await kony.automation.playback.waitFor(["frmPayBusinessTaxes",dropdown],15000);
//   kony.automation.flexcontainer.click(["frmPayBusinessTaxes",dropdown]);
//   await kony.automation.playback.wait(7000);
//   await kony.automation.playback.waitFor(["frmPayBusinessTaxes",file],15000);
//   kony.automation.flexcontainer.click(["frmPayBusinessTaxes",file]);
//     break;
//   }
//   }
    
  //var businessnumberLeng = businessnumber_list.size;
 // appLog('The CRA taxes list length is '+businessnumberLeng);
// 	kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[202,267]);
// 	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxBusniessNumber0"]);
// 	kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[390,245]);
// 	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxBusniessNumber0"]);
// 	kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[206,92]);
// 	kony.automation.flexcontainer.click(["frmPayBusinessTaxes","customheadernew","flxAccounts"]);
},250000);