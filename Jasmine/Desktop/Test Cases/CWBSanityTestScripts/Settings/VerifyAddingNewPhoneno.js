it("VerifyAddingNewPhoneno", async function() {

  
  var phoneNumber=Settings.phone.phoneNumber;
  var isPrimary='NO';
  
  await NavigateToProfileSettings();
  await selectProfileSettings_PhoneNumber();
  await ProfileSettings_VerifyaddNewPhoneNumberFunctionality(phoneNumber,isPrimary);
  await MoveBackToDashBoard_ProfileManagement();
  await verifyAccountsLandingScreen();
  
  
  
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxMenu"]);

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","Settings0flxMyAccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","Settings0flxMyAccounts"]);
//   await kony.automation.playback.wait(5000);

//   kony.automation.flexcontainer.click(["frmProfileManagement","settings","lblPersonalDetailsHeading"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblPersonalDetailsHeading"], "text")).toEqual("Personal Details");

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxPhone"]);
//   kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxPhone"]);

//   var isAddNewNumber=await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddNewNumber"],15000);
//   if(isAddNewNumber){

//     kony.automation.button.click(["frmProfileManagement","settings","btnAddNewNumber"]);

//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddPhoneNumberHeading"]);
//     expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAddPhoneNumberHeading"], "text")).toEqual("Add Phone Number");
//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxAddPhoneNumberType"]);
//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAddPhoneNumber"]);
//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddCheckBox3"]);

//     kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxAddPhoneNumberType"], "Work");
//     kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxAddPhoneNumberType"], "Home");
//     kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxAddPhoneNumberType"], "Other");

//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAddPhoneNumberCountryCode"]);
//     kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAddPhoneNumberCountryCode"],"91");

//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAddPhoneNumber"]);
//     kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAddPhoneNumber"],phonenumber);

//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddPhoneNumberSave"]);
//     kony.automation.button.click(["frmProfileManagement","settings","btnAddPhoneNumberSave"]);
//     await kony.automation.playback.wait(5000);

//     //await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers"]);
//     //kony.automation.button.click(["frmProfileManagement","settings","segPhoneNumbers[0]","btnViewDetail"]);

//     //Delete already added Mobile Number
//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers"]);
//     var seg_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segPhoneNumbers"],"data");
//     var segLength=seg_Size.length;
//     kony.print("Length is :: "+segLength);
//     for(var x = 0; x <segLength; x++){
//       var seg="segPhoneNumbers["+x+"]";
//       kony.print("Segment is :: "+seg);
//       await kony.automation.playback.waitFor(["frmProfileManagement","settings",seg,"lblPhoneNumber"]);
//       var phonenum=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings",seg,"lblPhoneNumber"], "text");
//       kony.print("Text is :: "+phonenum);
//       if(phonenum===phonenumber){

//         await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers"]);
//         kony.automation.button.click(["frmProfileManagement","settings",seg,"btnDelete"]);

//         await kony.automation.playback.waitFor(["frmProfileManagement","btnDeleteYes"]);
//         kony.automation.button.click(["frmProfileManagement","btnDeleteYes"]);
//         await kony.automation.playback.wait(5000);
//         break;
//       }
//     } 
//   }else{
//     kony.print("Maximum phone numbers already added");
//   }

//   // Move back to base state
//   await kony.automation.playback.waitFor(["frmProfileManagement","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmProfileManagement","customheader","topmenu","flxaccounts"]);

//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

},120000);