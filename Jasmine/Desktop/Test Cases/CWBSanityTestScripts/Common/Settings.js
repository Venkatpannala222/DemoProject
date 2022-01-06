async function NavigateToProfileSettings(){

  appLog("Intiated method to Navigate to Personal Details");

  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);

  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"]);

  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","Settings0flxMyAccounts"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","Settings0flxMyAccounts"]);
  await kony.automation.playback.wait(15000);

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblPersonalDetailsHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblPersonalDetailsHeading"], "text")).toEqual("Personal Details");

  appLog("Successfully Navigated to Personal Details");
}

async function selectProfileSettings_PhoneNumber(){

  appLog("Intiated method to Navigate to PhoneNumber Flex");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxPhone"],15000);
  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxPhone"]);
  //await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblPhoneNumbersHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblPhoneNumbersHeading"], "text")).toEqual("Phone Number");

  appLog("Successfully Navigated to PhoneNumber Flex");
}

async function selectProfileSettings_EmailAddress(){

  appLog("Intiated method to Navigate to EmailID Flex");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxEmail"],15000);
  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxEmail"]);
  //await kony.automation.playback.wait(5000);

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEmailHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblEmailHeading"], "text")).toEqual("Email");

  appLog("Successfully Navigated to EmailID Flex");
}

async function selectProfileSettings_Address(){

  appLog("Intiated method to Navigate to Address Flex");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxAddress"],15000);
  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxAddress"]);
  //await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddressHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAddressHeading"], "text")).toEqual("Address");

  appLog("Successfully Navigated to Address Flex");
}

async function ProfileSettings_addNewPhoneNumberDetails(phoneNumber,isPrimary){

  appLog("Intiated method to addNewPhoneNumberDetails");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddPhoneNumberHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAddPhoneNumberHeading"], "text")).toEqual("Add Phone Number");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxAddPhoneNumberType"],15000);
  kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxAddPhoneNumberType"], "Other");
  appLog("Successfully Selected PhoneNumber Type");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAddPhoneNumberCountryCode"],15000);
  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAddPhoneNumberCountryCode"],"91");
  appLog("Successfully Entered CountryCode");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAddPhoneNumber"],15000);
  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAddPhoneNumber"],phoneNumber);
  appLog("Successfully Entered Phone Number as : <b>"+phoneNumber+"</b>");

  if(isPrimary==='YES'){

    await selectMakePrimayPhoneNumbercheckBox();
  }
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddPhoneNumberSave"],15000);
  kony.automation.button.click(["frmProfileManagement","settings","btnAddPhoneNumberSave"]);
  appLog("Successfully clicked on SAVE button");
  await kony.automation.playback.wait(5000);

  var isAddHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddPhoneNumberHeading"],15000);

  if(isAddHeader){

    appLog("Custom Message :: Update Customer Details Failed");
    fail("Custom Message :: Update Customer Details Failed");
  }else{
    appLog("Successfully Added Mobile Number");
  }

}

async function selectMakePrimayPhoneNumbercheckBox(){

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxAddCheckBox3"],15000);
  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxAddCheckBox3"]);
  appLog("Successfully Selected Entered Phone Number as Primary");
}

async function ProfileSettings_UpdatePhoneNumber(updatedPhonenum){

  // Update Number
  appLog("Intiated method to Update PhoneNumberDetails");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers"],15000);
  var accounts_Size1=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segPhoneNumbers"],"data");

  var segLength1=accounts_Size1.length;
  kony.print("Segment length is :"+segLength1);

  var isEditble=await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers[0]","btnViewDetail"],15000);
  if(isEditble){

    kony.automation.button.click(["frmProfileManagement","settings","segPhoneNumbers[0]","btnViewDetail"]);
    appLog("Successfully clicked on ViewDetails button");
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxPhoneNumber"]);
    kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxPhoneNumber"],updatedPhonenum);
    appLog("Successfully Updated Phone number as : <b>"+updatedPhonenum+"</b>");
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditPhoneNumberSave"]);
    kony.automation.button.click(["frmProfileManagement","settings","btnEditPhoneNumberSave"]);
    appLog("Successfully clicked on SAVE button");
    await kony.automation.playback.wait(5000);

    var isEditHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditPhoneNumberHeading"],15000);

    if(isEditHeader){

      appLog("Custom Message :: Update Customer Details Failed");
      fail("Custom Message :: Update Customer Details Failed");
    }else{
      appLog("Successfully Updated Mobile Number");
    }
  }else{
    appLog("Unable to Update PhoneNumberDetails");
  }
}

async function ProfileSettings_DeletePhoneNumber(phoneNumber){

  //Delete already added Mobile Number
  appLog("Intiated method to Delete PhoneNumberDetails");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers"],15000);
  var seg_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segPhoneNumbers"],"data");
  var segLength=seg_Size.length;
  //appLog("Length is :: "+segLength);
  for(var x = 0; x <segLength; x++){
    var seg="segPhoneNumbers["+x+"]";
    //appLog("Segment is :: "+seg);
    await kony.automation.playback.waitFor(["frmProfileManagement","settings",seg,"lblPhoneNumber"],15000);
    var phonenum=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings",seg,"lblPhoneNumber"], "text");
    //appLog("Text is :: "+phonenum);
    if(phonenum===phoneNumber){

      await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers"],15000);
      kony.automation.button.click(["frmProfileManagement","settings",seg,"btnDelete"]);
      appLog("Successfully Clicked on Delete Button");

      await kony.automation.playback.waitFor(["frmProfileManagement","btnDeleteYes"],15000);
      kony.automation.button.click(["frmProfileManagement","btnDeleteYes"]);
      appLog("Successfully Clicked on YES Button");
      await kony.automation.playback.wait(5000);
      break;
    }
  } 
}

async function ProfileSettings_VerifyaddNewPhoneNumberFunctionality(phoneNumber,isPrimary){

  appLog("Intiated method to VerifyaddNewPhoneNumberFunctionality");

  var isAddNewNumber=await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddNewNumber"],15000);
  //appLog("Button status is :"+isAddNewNumber);
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers"],15000);
  var seg_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segPhoneNumbers"],"data");
  var segLength=seg_Size.length;
  //appLog("PhoneNumbers size is :: "+segLength);

  if(segLength<3&&isAddNewNumber){
    kony.automation.button.click(["frmProfileManagement","settings","btnAddNewNumber"]);
    appLog("Successfully Clicked on Add New Phone Number Button");
    await ProfileSettings_addNewPhoneNumberDetails(phoneNumber,isPrimary);

    var Header=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblPhoneNumbersHeading"],15000);
    if(Header&&isPrimary==='NO'){
      await ProfileSettings_DeletePhoneNumber(phoneNumber);
    }else{
      appLog("Custom Message :: Update Customer Details Failed");
      fail("Custom Message :: Custom Message :: Update Customer Details Failed");
    }

  }else{
    appLog("Maximum phone numbers already added");
  }
}

async function ProfileSettings_addNewAddressDetails(addressLine1,addressLine2,zipcode,isPrimary){

  appLog("Intiated method to addNewAddressDetails");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAddressLine1"],15000);
  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAddressLine1"],addressLine1);
  appLog("Successfully Entered AddressLine1 : <b>"+addressLine1+"</b>");
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAddressLine2"],15000);
  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAddressLine2"],addressLine2);
  appLog("Successfully Entered AddressLine2 : <b>"+addressLine2+"</b>");
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxCountry"],15000);
  kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxCountry"], "IN");
  appLog("Successfully Selected Country Code");
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxState"],15000);
  kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxState"], "IN-TG");
  appLog("Successfully Selected State Code");
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","txtCity"],15000);
  kony.automation.textbox.enterText(["frmProfileManagement","settings","txtCity"],"HYD");
  appLog("Successfully Selected City Code");
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxZipcode"],15000);
  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxZipcode"],zipcode);
  appLog("Successfully Entered Zipcode : <b>"+zipcode+"</b>");

  if(isPrimary==='YES'){

    await selectMakeDefaultAddresscheckBox();
  }
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddNewAddressAdd"],15000);
  kony.automation.button.click(["frmProfileManagement","settings","btnAddNewAddressAdd"]);
  appLog("Successfully Clicked on Add Address Button");
  await kony.automation.playback.wait(5000);

  var isAddHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddNewAddressHeader"],15000);

  if(isAddHeader){
    appLog("Custom Message :: Update Customer Details Failed");
    fail("Custom Message :: Update Customer Details Failed");

  }else{
    appLog("Successfully Added new Address details");
  }
}


async function selectMakeDefaultAddresscheckBox(){

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxSetAsPreferredCheckBox"],15000);
  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxSetAsPreferredCheckBox"]);
  appLog("Successfully Selected Entered Address as Primary");
}

// async function ProfileSettings_UpdateAddress(UpdatedZip){

//   // Update Address
//   appLog("Intiated method to update Address Details");

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses"]);
//   var accounts_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAddresses"],"data");

//   var segLength=accounts_Size.length;
//   kony.print("Segment length is : "+segLength);

//   var isEditble=await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses[0]","btnEdit"],15000);
//   if(isEditble){
//     kony.automation.button.click(["frmProfileManagement","settings","segAddresses[0]","btnEdit"]);
//     appLog("Successfully clicked on Edit button");
//     await kony.automation.playback.wait(5000);
//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxEditZipcode"],15000);
//     kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxEditZipcode"],UpdatedZip);
//     appLog("Successfully Entered Updated Zipcode as : <b>"+UpdatedZip+"</b>");
//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditAddressSave"],15000);
//     kony.automation.button.click(["frmProfileManagement","settings","btnEditAddressSave"]);
//     appLog("Successfully clicked on SAVE button");
//     await kony.automation.playback.wait(5000);

//     var isEditHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditAddressHeader"],15000);

//     if(isEditHeader){
//       appLog("Custom Message :: Update Customer Details Failed");
//       fail("Custom Message :: Update Customer Details Failed");

//     }else{
//       appLog("Successfully Updated Address Details");
//     }
//   }



// }

async function ProfileSettings_DeleteAddress(addressLine1){

  // Delete Address
  appLog("Intiated method to Delete Address Details");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses"],15000);
  var accounts_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAddresses"],"data");

  var segLength=accounts_Size.length;
  for(var x = 0; x <segLength; x++) {
    var seg="segAddresses["+x+"]";
    await kony.automation.playback.waitFor(["frmProfileManagement","settings",seg,"flxRow","lblAddressLine1"],15000);
    var address1=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings",seg,"flxRow","lblAddressLine1"], "text");
    //appLog("Text is :: "+address1);
    if(address1===addressLine1){
      kony.automation.button.click(["frmProfileManagement","settings",seg,"btnDelete"]);
      appLog("Successfully clicked on DELETE button");
      await kony.automation.playback.waitFor(["frmProfileManagement","btnDeleteYes"],15000);
      kony.automation.button.click(["frmProfileManagement","btnDeleteYes"]);
      appLog("Successfully clicked on YES button");
      await kony.automation.playback.wait(5000);
      break;
    }
  }

}

async function ProfileSettings_VerifyaddNewAddressFunctionality(addressLine1,addressLine2,zipcode,isPrimary){


  appLog("Intiated method to VerifyaddNewAddressFunctionality");

  var isAddNewAddress=await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddNewAddress"],15000);
  //appLog("Button status is :"+isAddNewAddress);
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses"],15000);
  var seg_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAddresses"],"data");
  var segLength=seg_Size.length;
  //appLog("Address size is :: "+segLength);

  if(segLength<3&&isAddNewAddress){
    kony.automation.button.click(["frmProfileManagement","settings","btnAddNewAddress"]);
    appLog("Successfully clicked on AddNewAddress button");
    await ProfileSettings_addNewAddressDetails(addressLine1,addressLine2,zipcode,isPrimary);

    var Header=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddressHeading"],15000);
    if(Header&&isPrimary==='NO'){
      await ProfileSettings_DeleteAddress(addressLine1);
    }else{
      appLog("Custom Message :: Update Customer Details Failed");
      fail("Custom Message :: Custom Message :: Update Customer Details Failed");
    }

  }else{
    appLog("Maximum Address already added");
  }

}

async function ProfileSettings_addEmailAddressDetails(emailAddress,isPrimary){

  // Add new email ID
  appLog("Intiated method to add new Emai Address Details");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddNewEmailHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAddNewEmailHeading"], "text")).toEqual("Add New Email");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxEmailId"],15000);
  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxEmailId"],emailAddress);
  appLog("Successfully Entered new Email Address : <b>"+emailAddress+"</b>");

  if(isPrimary==='YES'){

    await selectMakePrimayEmailIDcheckBox();
  }

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddEmailIdAdd"],15000);
  kony.automation.button.click(["frmProfileManagement","settings","btnAddEmailIdAdd"]);
  appLog("Successfully clicked on Add Button");
  await kony.automation.playback.wait(5000);

  var isAddHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddNewEmailHeading"],15000);

  if(isAddHeader){
    appLog("Custom Message :: Update Customer Details Failed");
    fail("Custom Message :: Update Customer Details Failed");
  }else{
    appLog("Successfully added new Email Address");
  }
}

async function selectMakePrimayEmailIDcheckBox(){

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxMarkAsPrimaryEmailCheckBox"],15000);
  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxMarkAsPrimaryEmailCheckBox"]);
  appLog("Successfully Selected Entered EmailID as Primary");
}

async function ProfileSettings_UpdateEmailAddress(updatedemailid){

  // Update email ID
  appLog("Intiated method to Update Email address");
  
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEmailIds"],15000);
  var accounts_Size1=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segEmailIds"],"data");

  var segLength1=accounts_Size1.length;
  appLog("Length is :"+segLength1);

  var isEditble=await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEmailIds[0]","btnEdit"],15000);
  if(isEditble){
    kony.automation.button.click(["frmProfileManagement","settings","segEmailIds[0]","btnEdit"]);
    appLog("Successfully clicked on Edit Button");
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxEditEmailId"],15000);
    kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxEditEmailId"],updatedemailid);
    appLog("Successfully Entered Updated Email ID : <b>"+updatedemailid+"</b>");
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditEmailIdSave"],15000);
    kony.automation.button.click(["frmProfileManagement","settings","btnEditEmailIdSave"]);
    appLog("Successfully Clicked on SAVE button");
    await kony.automation.playback.wait(5000);

    var isEditHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditEmailHeading"],15000);

    if(isEditHeader){
      appLog("Custom Message :: Update Customer Details Failed");
      fail("Custom Message :: Update Customer Details Failed");
    }else{
      appLog("Successfully Updated email Address");
    }
  }

}

async function ProfileSettings_deleteEmailAddressDetails(emailAddress){

  // Delete Address
  appLog("Intiated method to Delete Email Details");
  
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEmailIds"],15000);
  var accounts_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segEmailIds"],"data");

  var segLength=accounts_Size.length;
  for(var x = 0; x <segLength; x++) {
    var seg="segEmailIds["+x+"]";
    await kony.automation.playback.waitFor(["frmProfileManagement","settings",seg,"flxRow","lblEmail"],15000);
    var address1=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings",seg,"flxRow","lblEmail"], "text");
    //appLog("Text is :: "+address1);
    if(address1===emailAddress){
      kony.automation.button.click(["frmProfileManagement","settings",seg,"btnDelete"]);
      appLog("Successfully Clicked on Delete Button");
      await kony.automation.playback.waitFor(["frmProfileManagement","btnDeleteYes"],15000);
      kony.automation.button.click(["frmProfileManagement","btnDeleteYes"]);
      appLog("Successfully Clicked on YES Button");
      await kony.automation.playback.wait(5000);
      break;
    }
  }
}

async function ProfileSettings_VerifyaddEmailAddressFunctionality(emailAddress,isPrimary){

  appLog("Intiated method to VerifyaddEmailAddressFunctionality");
  
  var isAddEmailAddress=await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddNewEmail"],15000);
  //appLog("Button status is :"+isAddEmailAddress);

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEmailIds"],15000);
  var seg_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segEmailIds"],"data");
  var segLength=seg_Size.length;
  //appLog("email size is :: "+segLength);

  if(segLength<3&&isAddEmailAddress){
    
    kony.automation.button.click(["frmProfileManagement","settings","btnAddNewEmail"]);
    appLog("Successfully clicked on NewEmail Button");
    await ProfileSettings_addEmailAddressDetails(emailAddress,isPrimary);

    // if there is an error after saving phone number
    var Header= await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEmailHeading"],15000);
    if(Header&&isPrimary==='NO'){
      await ProfileSettings_deleteEmailAddressDetails(emailAddress);
    }else{

      appLog("Custom Message :: Update Customer Details Failed");
      fail("Custom Message :: Custom Message :: Update Customer Details Failed");
      //await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddPhoneNumberCancel"]);
      //kony.automation.button.click(["frmProfileManagement","settings","btnAddPhoneNumberCancel"]);
    }

  }else{
    appLog("Maximum Email Address already added");
  }

}


async function MoveBackToDashBoard_ProfileManagement(){

  // Move back to base state
  await kony.automation.playback.waitFor(["frmProfileManagement","customheader","topmenu","flxaccounts"],15000);
  kony.automation.flexcontainer.click(["frmProfileManagement","customheader","topmenu","flxaccounts"]);
  appLog("Successfully Moved back to Accounts dashboard");
  await kony.automation.playback.wait(20000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"], "text")).toContain("Accounts");
  appLog("Successfully Moved back to Account Dashboard");
}

async function NavigateToAccountSettings(){

  appLog("Intiated method to navigate to Account Settings");
  
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);

  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"]);

  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","Settings2flxMyAccounts"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","Settings2flxMyAccounts"]);
  await kony.automation.playback.wait(5000);

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountsHeader"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountsHeader"], "text")).toEqual("Accounts");

  appLog("Successfully Navigated to AccountSettings");
}


async function clickonDefaultAccountstab(){

  appLog("Intiated method to click on DefaultAccountstab");
    await kony.automation.playback.wait(20000);
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxSetDefaultAccount"],15000);
  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxSetDefaultAccount"]);

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblDefaultTransactionAccounttHeading"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblDefaultTransactionAccounttHeading"], "text")).toEqual("Default Transaction Accounts");

  appLog("Successfully clicked on DefaultAccountstab");
  
  await kony.automation.playback.wait(20000);
}
async function clickonAccountPreferencetab(){

  appLog("Intiated method to click on AccountPreferencetab");
  
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxAccountPreferences"],15000);
  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxAccountPreferences"]);
  
  appLog("Successfully clicked on AccountPreferencetab");
  
  await kony.automation.playback.wait(5000);
}


async function EditFavAccountPreferences(){

  appLog("Intiated method to Edit FavAccountPreferences");
  
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"],15000);
  kony.automation.button.click(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"]);
  appLog("Successfully Clicked on Edit button");
  await kony.automation.playback.wait(20000);

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditAccountsHeader"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblEditAccountsHeader"], "text")).toEqual("Edit Account");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountNickNameKey"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountNickNameKey"],"text")).toEqual("Account Name:");
   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","tbxAccountNickNameValue"], "text")).not.toBe('');
  appLog("Successfully verified Account Name");
  
 await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountTypeKey"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountTypeKey"],"text")).toEqual("Account Type:");
   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountTypeValue"], "text")).not.toBe('');
  appLog("Successfully verified Account Type");
  
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountNumberKey"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountNumberKey"],"text")).toEqual("Account Number:");
   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountNumberValue"], "text")).not.toBe('');
  appLog("Successfully verified Account Number");
  
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblFavoriteAccount"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblFavoriteAccount"],"text")).toEqual("Preferred Account");
   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblFavoriteEmailCheckBox"], "text")).not.toBe('');
  appLog("Successfully verified Preferred account check box and text");
}

async function ValidateSetDefaultAcc_ChequeDeposit()
{
   await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"],15000);
  kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
  appLog("Successfully clicked on Edit Button");
    await kony.automation.playback.wait(15000);
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxCheckDeposit"],15000);
    var List = kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lbxCheckDeposit"], "masterData");
  var AccLength = List.length;
  appLog(AccLength);
  if(AccLength>1)
    {
  kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxCheckDeposit"], "102977-00002");
  appLog("Successfully selected the other account from cheque deposit");
}
  else
    {
      appLog("Only one account is present");
    }
 
    kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
appLog("Successfully clicked on save button");
      await kony.automation.playback.wait(20000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblCheckDeposit"], "text")).toEqual("Cheque Deposit:");
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblCheckDepositValue"], "text")).not.toBe('');
  

}

async function ValidateSetDefaultAcc_MyBills()
{
   await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"],15000);
  kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
  appLog("Successfully clicked on Edit Button");
    await kony.automation.playback.wait(15000);
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxBillPay"],15000);
    var List = kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lbxBillPay"], "masterData");
  var AccLength = List.length;
  appLog(AccLength);
  if(AccLength>1)
    {
  kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxBillPay"], "102977-00002");
  appLog("Successfully selected the other account from My Bills");
}
  else
    {
      appLog("Only one account is present");
    }
 
    kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
appLog("Successfully clicked on save button");
      await kony.automation.playback.wait(20000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblBillPayKey"], "text")).toEqual("Bill Pay:");
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblBillPayValue"], "text")).not.toBe('');
 

}

async function EditNickName_GreaterThan28char(){
  
  appLog("Intiated method to Edit account nickname");
  
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"],15000);
  kony.automation.button.click(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"]);
  appLog("Successfully Clicked on Edit button");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditAccountsHeader"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblEditAccountsHeader"], "text")).toEqual("Edit Account");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAccountNickNameValue"],15000);
  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAccountNickNameValue"],'abcdefghijklmnopqrstuvwxyzabc');
  appLog("Successfully Updated NickName value");
  
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditAccountsSave"],15000);
  kony.automation.button.click(["frmProfileManagement","settings","btnEditAccountsSave"]);
  appLog("Successfully Clicked on SAVE button");
//  flxAccountRow_lblAccountName
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAccounts[0,0]","lblAccountName"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblAccountName"],"text")).toEqual("abcdefghijklmnopqrstuvwxyzab");
  appLog("Successfully verified that the nickname is not greater than 28 characters");
}

async function SetDefaultAccountPreferences(){

  appLog("Intiated method to Set DefaultAccountPreferences Tab");
  
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"],15000);
  kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
  appLog("Successfully clicked on Edit Button");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblSelectedDefaultAccounts"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblSelectedDefaultAccounts"], "text")).not.toBe('');

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxBillPay"],15000);
//   kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxBillPay"], "190128223241502");
//   appLog("Successfully Selected Default BillPay acc");

//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxCheckDeposit"],15000);
//   kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxCheckDeposit"], "190128223242830");
//   appLog("Successfully Selected Default Deposit acc");


  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"],15000);
  await kony.automation.scrollToWidget(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
  kony.automation.flexcontainer.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
  appLog("Successfully Clicked on SAVE Button");

  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblSelectedDefaultAccounts"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblSelectedDefaultAccounts"], "text")).not.toBe('');
  appLog("Successfully Verified Default accounts");
}

async function CancelSetDefaultAccount(){
   appLog("Intiated method to Set DefaultAccountPreferences Tab");
  
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"],15000);
  kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
  appLog("Successfully clicked on Edit Button");
      await kony.automation.playback.wait(20000);
  //await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblSelectedDefaultAccounts"],15000);
 // expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblSelectedDefaultAccounts"], "text")).not.toBe('');
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransctionAccountsCancel"],15000);
  kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransctionAccountsCancel"]);
  appLog("Successfully clicked on Cancel button");
  
}
async function ProfileSettings_VerifyAddress(){
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxAddress"],15000); 
  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxAddress"]);
  await kony.automation.playback.wait(5000);    
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddressHeading"],15000); 
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddressHeading"],15000); 
    
}
  async function ProfileSettings_Updateaddress(){
    
     
	await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxAddress"],15000); 
	kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxAddress"]);
    await kony.automation.playback.wait(5000); 
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses[0]","btnEdit"],15000); 
	kony.automation.button.click(["frmProfileManagement","settings","segAddresses[0]","btnEdit"]);
	//kony.automation.widget.touch(["frmProfileManagement"], null,null,[634,105]);
	//kony.automation.widget.touch(["frmProfileManagement"], null,null,[456,91]);
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxEditAddressLine"],15000); 
	kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxEditAddressLine"],"T");
    await kony.automation.playback.wait(5000); 
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEditAddressList[0]","flxAddressSearchListWrapper"],15000); 
	kony.automation.flexcontainer.click(["frmProfileManagement","settings","segEditAddressList[0]","flxAddressSearchListWrapper"]);
    await kony.automation.playback.wait(5000);
	//kony.automation.widget.touch(["frmProfileManagement"], null,null,[1070,485]);
        await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditAddressSaveNew"],15000); 
	kony.automation.button.click(["frmProfileManagement","settings","btnEditAddressSaveNew"]);
	//kony.automation.widget.touch(["frmProfileManagement"], null,null,[475,189]);
   // flxRow_lblAddressLine1
   // "frmProfileManagement","settings","segAddresses[0]","flxAddress"]);
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses[0]","lblAddressLine1"],15000); 
   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAddresses[0]","lblAddressLine1"], "text")).toContain("T-190 Charlotte St");
  appLog("Successfully Updated the resides at address");
  }

async function VerifyAccountPreferences(){
  //await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAccounts"],15000);
  // await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEmailIds"],15000);
//   var Accountslist=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts"],"data");
//   var accountscount=Accountslist.length; 
//   appLog(+ Accountslist);
//  appLog("accountName:"+ accountscount);
      await kony.automation.playback.wait(20000); 
 expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"], "text")).toEqual("Edit");
 expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblMove"], "text")).toEqual("Move");
 expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblMarkAsFavouriteAccountCheckBoxIcon"], "text")).not.toBe('');
   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblMarkAsFavorite"], "text")).toEqual("Mark as Favourite Account");
 expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblMoveUpIcon"], "text")).not.toBe('');
 expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblMoveDownIcon"], "text")).not.toBe('');
  appLog("Successfully verified account preferences settings");
  }
//frmProfileManagement_settings_flxRight
async function Naviagteto_TransactionandAlerts()
{
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
  
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"]);
  
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","Settings4flxMyAccounts"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","Settings4flxMyAccounts"]);
  await kony.automation.playback.wait(5000);
  
  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxTransactionAndPaymentsAlerts"],15000);
  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxTransactionAndPaymentsAlerts"]);
   await kony.automation.playback.wait(5000);
  }


async function EditTransactionandAlerts() {
  var status = kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatus"],"text");
  
  if(status === "Alerts Enabled"){
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnModifyAlerts"],15000);
    kony.automation.button.click(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnModifyAlerts"]);
    
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatusCheckBox"],15000);
    kony.automation.button.click(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatusCheckBox"]);
    
    await kony.automation.playback.waitFor(["frmProfileManagement","btnAlertsDisableYes"],15000);
    kony.automation.button.click(["frmProfileManagement","btnAlertsDisableYes"]);
    await kony.automation.playback.wait(5000);
    
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatus"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatus"], "text")).toEqual("Alerts Disabled");
  }
  else if (status === "Alerts Disabled"){
     await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnModifyAlerts"],15000);
    kony.automation.button.click(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnModifyAlerts"]);
    
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatusCheckBox"],15000);
    kony.automation.button.click(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatusCheckBox"]);
    
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnSave"],15000);
	kony.automation.button.click(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnSave"]);
    await kony.automation.playback.wait(5000);
    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatus"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatus"], "text")).toEqual("Alerts Enabled");
         
    }
       
  }
  



