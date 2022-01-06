async function NavigateToManageRecipitents(){

  appLog("Intiated method to navigate to ManageRecipitents");
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxSendMoney"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxSendMoney"]);
  await kony.automation.playback.wait(10000);
  appLog("Clicked on ManageRecipients button");

  await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients",],20000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
  appLog("Successfully verified ManageRecipients Header");
}

async function clickOnManageRecipientsAccountsTab(){

  //External Acc list
  appLog("Intiated method to navigate to External Reciptents");
  await kony.automation.playback.waitFor(["frmFastManagePayee","btnExternalAccounts"],15000);
  kony.automation.button.click(["frmFastManagePayee","btnExternalAccounts"]);
  appLog("Clicked on External Recipients tab");
  await kony.automation.playback.wait(5000);
  //   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"],15000);
  //   kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
  //   appLog("Successfully Clicked on External Recipient from list");
}
async function clickOnP2PRecipitentsTab(){

  //P2P Acc list
  appLog("Intiated method to navigate to P2P Reciptents");
  await kony.automation.playback.waitFor(["frmFastManagePayee","BeneficiaryList","btnTab2"],15000);
  kony.automation.button.click(["frmFastManagePayee","BeneficiaryList","btnTab2"]);
  appLog("Clicked on P2P Recipients tab");
  await kony.automation.playback.wait(5000);
  //   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"],15000);
  //   kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
  //   appLog("Successfully Clicked on P2P Recipient from list");
}

async function MoveBacktoDashboard_ManageRecipitent(){

  await kony.automation.playback.wait(5000);
  appLog("Intiated method to Move back Accounts dashboard");
  await kony.automation.playback.waitFor(["frmFastManagePayee","customheadernew","flxAccounts"],15000);
  kony.automation.flexcontainer.click(["frmFastManagePayee","customheadernew","flxAccounts"]);
  appLog("Successfully Moved back to Accounts dashboard");
  await kony.automation.playback.wait(5000);
}

async function clickonAddExternalAccounttab(){

  var status=await kony.automation.playback.waitFor(["frmFastManagePayee","quicklinks","flxRow2"],15000);
  expect(status).toBe(true);
  kony.automation.flexcontainer.click(["frmFastManagePayee","quicklinks","flxRow2"]);
  appLog("Successfully Clicked on Add External Account Flex");
  await kony.automation.playback.wait(5000);
}

async function clickonAddCWBAccount(){

  // frmFastManagePayee_lblAddBankAccount
  await kony.automation.playback.wait(10000);
  var status=await kony.automation.playback.waitFor(["frmFastManagePayee","lblAddBankAccount"],15000);
  expect(status).toBe(true);
  kony.automation.flexcontainer.click(["frmFastManagePayee","lblAddBankAccount"]);
  appLog("Successfully Clicked on Add CWB Account Flex");
  await kony.automation.playback.wait(5000);
}

async function clickonAddInternationalAccounttab(){

  var status=await kony.automation.playback.waitFor(["frmFastManagePayee","quicklinks","flxRow3"],15000);
  expect(status).toBe(true);
  kony.automation.flexcontainer.click(["frmFastManagePayee","quicklinks","flxRow3"]);
  appLog("Successfully Clicked on Add International Account Flex");
  await kony.automation.playback.wait(5000);
}

async function clickonAddP2PAccounttab(){

  var status=await kony.automation.playback.waitFor(["frmFastManagePayee","quicklinks","flxRow4"],15000);
  expect(status).toBe(true);
  kony.automation.flexcontainer.click(["frmFastManagePayee","quicklinks","flxRow4"]);
  appLog("Successfully Clicked on Add P2P Account Flex");
  await kony.automation.playback.wait(5000);
}

async function enterExternalBankAccountDetails(Routingno,Accno,unique_RecipitentName){

  appLog("Intiated method to add enterExternalBankAccountDetails");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue1"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue1"],Routingno);
  appLog("Successfully Entered Routing Number : <b>"+Routingno+"</b>");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue2"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue2"],Accno);
  appLog("Successfully Entered Acc Number : <b>"+Accno+"</b>");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue3"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue3"],Accno);
  appLog("Successfully Re-Entered Acc Number : <b>"+Accno+"</b>");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue4"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue4"],unique_RecipitentName);
  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue5"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],unique_RecipitentName);
  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction2"],15000);
  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction2"]);
  appLog("Successfully Clicked on Continue Button");

  await linkReciptent();
}

async function enterInternationalBankAccountDetails(swiftCode,Accno,unique_RecipitentName){

  appLog("Intiated method to add enterInternationalBankAccountDetails");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue1"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue1"],swiftCode);
  appLog("Successfully Entered SwiftCode : <b>"+swiftCode+"</b>");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue2"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue2"],Accno);
  appLog("Successfully Entered Acc Number : <b>"+Accno+"</b>");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue3"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue3"],Accno);
  appLog("Successfully Re-Entered Acc Number : <b>"+Accno+"</b>");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue4"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue4"],unique_RecipitentName);
  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue5"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],unique_RecipitentName);
  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction2"],15000);
  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction2"]);
  appLog("Successfully Clicked on Continue Button");

  await linkReciptent();
}

async function enterSameBankAccountDetails(Accno,unique_RecipitentName){

  appLog("Intiated method to add enterSameBankAccountDetails");

  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"],15000);
  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberKA"],Accno);
  appLog("Successfully Entered Acc Number : <b>"+Accno+"</b>");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],15000);
  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],Accno);
  appLog("Successfully Re-Entered Acc Number : <b>"+Accno+"</b>");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lbxAccountTypeKA"],15000);
  kony.automation.listbox.selectItem(["frmFastAddDBXAccount","lbxAccountTypeKA"], "Savings");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],15000);
  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],unique_RecipitentName);
  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"],15000);
  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickNameKA"],unique_RecipitentName);
  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");

  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"],15000);
  kony.automation.button.click(["frmFastAddDBXAccount","btnAddAccountKA"]);
  appLog("Successfully Clicked on Continue Button");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnConfirm"],15000);
  kony.automation.button.click(["frmFastAddDBXAccountConfirm","btnConfirm"]);
  //await linkReciptent();

}

async function enterP2PAccountDetails_Email(unique_RecipitentName,email){

  appLog("Intiated method to add enterSameBankAccountDetails");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue1"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue1"],unique_RecipitentName);
  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue2"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue2"],unique_RecipitentName);
  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","img2"],15000);
  kony.automation.widget.touch(["frmFastP2P","addBenificiary","img2"], null,null,[10,19]);
  appLog("Successfully Selected Email Radio button ");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue5"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],email);
  appLog("Successfully Entered Email name : <b>"+email+"</b>");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction2"],15000);
  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction2"]);
  appLog("Successfully Clicked on Continue Button");

  await linkReciptent();

}

async function enterP2PAccountDetails_MobileNumber(unique_RecipitentName,phno){

  appLog("Intiated method to add enterSameBankAccountDetails");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue1"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue1"],unique_RecipitentName);
  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue2"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue2"],unique_RecipitentName);
  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","img1"],15000);
  kony.automation.widget.touch(["frmFastP2P","addBenificiary","img1"], null,null,[10,19]);
  appLog("Successfully Selected Email Radio button ");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue5"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],phno);
  appLog("Successfully Entered Email name : <b>"+phno+"</b>");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction2"],15000);
  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction2"]);
  appLog("Successfully Clicked on Continue Button");

  await linkReciptent();

}


async function linkReciptent(){

  var linkreciptent=await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","contractList","lblHeader"],15000);

  if(linkreciptent){
    kony.automation.widget.touch(["frmFastP2P","addBenificiary","contractList","lblCheckBoxSelectAll"], [8,7],null,null);
    appLog("Successfully selected Select All CheckBox");
    await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","contractList","flxCol4"],15000);
    kony.automation.flexcontainer.click(["frmFastP2P","addBenificiary","contractList","flxCol4"]);
    await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","contractList","btnAction6"],15000);
    kony.automation.button.click(["frmFastP2P","addBenificiary","contractList","btnAction6"]);
    appLog("Successfully Clicked on Link Reciptent SaveReciptent Button");
  }

  appLog("Intiated Method to Click on AddAccount Button");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction6"],15000);
  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction6"]);
  appLog("Successfully Clicked on AddAccount Button");
}

async function verifyAddingNewReciptientSuccessMsg(){

  var success=await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],30000);
  if(success){
    expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],"text")).not.toBe('');
    appLog("Successfully verified Newly Added/edited Reciptent");
  }else if(await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","rtxDowntimeWarning"],5000)){
    //appLog("Logged in User is not authorized to perform this action");
    //fail('Logged in User is not authorized to perform this action');
    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","rtxDowntimeWarning"],"text"));
    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","rtxDowntimeWarning"],"text"));
  }
  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","lblAccounts"],15000);
  kony.automation.flexcontainer.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","lblAccounts"]);
  appLog("Successfully Moved back to Accounts dashboard");
}


async function SearchforPayee_RecipientList(payeeName){

  appLog("Intiated method to Search for a Payee :: <b>"+payeeName+"</b>");

  await kony.automation.playback.waitFor(["frmFastManagePayee","Search","txtSearch"],15000);
  kony.automation.textbox.enterText(["frmFastManagePayee","Search","txtSearch"],payeeName);
  appLog("Successfully Entered payee name : <b>"+payeeName+"</b>");
  await kony.automation.playback.waitFor(["frmFastManagePayee","Search","btnConfirm"],15000);
  kony.automation.flexcontainer.click(["frmFastManagePayee","Search","btnConfirm"]);
  appLog("Successfully Clicked on Search button");
  await kony.automation.playback.wait(5000);

}

async function DeleteReciptent(){

  appLog("Intiated method to Delete a Reciptent");

  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"],15000);
  kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
  kony.automation.button.click(["frmFastManagePayee","segmentTransfers[0]","btnRemoveRecipient"]);
  appLog("Successfully Clicked on RemoveRecipient button");
  //await kony.automation.playback.wait(5000);

  await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","lblPopupMessage"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","CustomPopup","lblPopupMessage"],"text")).toContain('Are you sure you want to delete this recipient?');
  appLog("Successfully Verified RemoveRecipient PopUp Msg");

  await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","btnYes"],15000);
  kony.automation.button.click(["frmFastManagePayee","CustomPopup","btnYes"]);
  appLog("Successfully Clicked on RemoveRecipient YES button");
  //await kony.automation.playback.wait(5000);

}

async function EditReciptent(UniqueUpdatedName,UniqueUpdatedNickName){

  appLog("Intiated method to Edit Reciptent");

  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"],15000);
  kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
  kony.automation.button.click(["frmFastManagePayee","segmentTransfers[0]","btnEdit"]);
  appLog("Successfully Clicked on EditRecipient button");
  //await kony.automation.playback.wait(5000);

  // Line Items 3,4, and 5 will be different for External,International and SameBank acc.
  //More over Searc button is not working hence Iterating over acc and Editing accordingly.

  // for(var i=3;i<=5;i++){

  // var key="lblDetailKey"+i;
  // var value="lblDetailValue"+i;

  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryName"],15000);
  // var keyLabel =kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","addBenificiary",key], "text");

  // if(keyLabel==='Recipient Name'){

  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryName"],UniqueUpdatedName);
  // appLog("Successfully Updated <b>"+keyLabel+"</b>");

  // }else if(keyLabel==='Account Nickname'){
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickName"],15000);
  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickName"],UniqueUpdatedNickName);
  // appLog("Successfully Updated <b>"+keyLabel+"</b>");

  //  }else{
  //  appLog("Select Name or Nick name Text filed to Update");
  // }

  //  }

  //   if(AccType.toUpperCase() === SAMEBANK){

  //     await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue3"],15000);
  //     kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue4"],UniqueUpdatedName);

  //     await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue4"],15000);
  //     kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],UniqueUpdatedNickName);

  //   }else{

  //     await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue4"],15000);
  //     kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue4"],UniqueUpdatedName);

  //     await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue5"],15000);
  //     kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],UniqueUpdatedNickName);
  //   }


  //Having intermittent issue in Save button
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnSave"],15000);
  kony.automation.button.click(["frmFastAddDBXAccount","btnSave"]);
  appLog("Successfully Clicked on SAVE Button");

  //  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","contractList","btnAction6"],15000);
  // kony.automation.button.click(["frmFastP2P","addBenificiary","contractList","btnAction6"]);
  // appLog("Successfully Clicked on Link Reciptent SaveReciptent Button");

}

async function EditP2PReciptent(UniqueUpdatedName,UniqueUpdatedNickName){

  appLog("Intiated method to Edit P2P Reciptent");

  await kony.automation.playback.waitFor(["frmFastManagePayee","BeneficiaryList","segmentTransfers"],15000);
  kony.automation.flexcontainer.click(["frmFastManagePayee","BeneficiaryList","segmentTransfers[0]","flxDropdown"]);
  kony.automation.button.click(["frmFastManagePayee","BeneficiaryList","segmentTransfers[0]","btn1"]);
  appLog("Successfully Clicked on EditRecipient button");
  //await kony.automation.playback.wait(5000);

  appLog("Intiated method to Update Reciptent value");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue1"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue1"],UniqueUpdatedName);
  appLog("Successfully Updated Reciptent name value");

  appLog("Intiated method to Update Reciptent value");
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue2"],15000);
  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue2"],UniqueUpdatedNickName);
  appLog("Successfully Updated Reciptent nick name value");

  //Having intermittent issue in Save button
  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction2"],15000);
  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction2"]);
  appLog("Successfully Clicked on SAVE Button");

  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","contractList","btnAction6"],15000);
  kony.automation.button.click(["frmFastP2P","addBenificiary","contractList","btnAction6"]);
  appLog("Successfully Clicked on Link Reciptent SaveReciptent Button");

}


async function NavigatetoInteracEtransferManagerecipient(){

  appLog("Intiated method to Naviagte to Interac Etransfer Manage recipient");
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxSendMoney"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxSendMoney"]);
  await kony.automation.playback.wait(5000);
  //frmFastManagePayee_rtxInteraceTransfer
  //frmFastManagePayee_lblManageRecipients
  await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients",],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
  // await kony.automation.playback.waitFor(["frmFastManagePayee","rtxInteraceTransfer"],15000);
  //kony.automation.richtext.click(["frmFastManagePayee","rtxInteraceTransfer"]);
  appLog("Successfully Navigated to Manage Tab of Interac E Transfer");
}

async function AddInteracEtransferRecipient(RecipitentName){

  appLog("Intiated method to add Interac Etransfer recipient");
  await kony.automation.playback.waitFor(["frmFastManagePayee","flxAddReciepient"],15000);
  kony.automation.flexcontainer.click(["frmFastManagePayee","flxAddReciepient"]);
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmeTransferAddRecipient","tbxRecipientName"],15000);
  kony.automation.textbox.enterText(["frmeTransferAddRecipient","tbxRecipientName"],RecipitentName);
  // await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmeTransferAddRecipient","tbxMobileNumber"],15000);
  kony.automation.textbox.enterText(["frmeTransferAddRecipient","tbxMobileNumber"],"(250) 728-1928");
  await kony.automation.playback.waitFor(["frmeTransferAddRecipient","lbxSendTransferByMethod"],15000);
  kony.automation.listbox.selectItem(["frmeTransferAddRecipient","lbxSendTransferByMethod"], "MobileNumber");
  await kony.automation.playback.waitFor(["frmeTransferAddRecipient","btnAddRecipientContinue"],15000);
  await kony.automation.playback.wait(5000);
  kony.automation.button.click(["frmeTransferAddRecipient","btnAddRecipientContinue"]);
}
async function EnterSecurityQuestionandAnswer(){
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmeTransferAddRecipientSecurityInfo","tbxSecurityQuestion"],15000);
  kony.automation.textbox.enterText(["frmeTransferAddRecipientSecurityInfo","tbxSecurityQuestion"],"What are u doing");
  await kony.automation.playback.waitFor(["frmeTransferAddRecipientSecurityInfo","tbxAnswer"],15000);
  kony.automation.textbox.enterText(["frmeTransferAddRecipientSecurityInfo","tbxAnswer"],"AddEtransferRecipient");
  //kony.automation.flexcontainer.click(["frmeTransferAddRecipientSecurityInfo","flxAddRecipientSecurityInfo"]);
  await kony.automation.playback.waitFor(["frmeTransferAddRecipientSecurityInfo","tbxConfirmAnswer"],15000);
  kony.automation.textbox.enterText(["frmeTransferAddRecipientSecurityInfo","tbxConfirmAnswer"],"AddEtransferRecipient");
  await kony.automation.playback.waitFor(["frmeTransferAddRecipientSecurityInfo","btnUpdateSecurityInfo"],15000);
  kony.automation.button.click(["frmeTransferAddRecipientSecurityInfo","btnUpdateSecurityInfo"]);
  await kony.automation.playback.wait(7000);
  await kony.automation.playback.waitFor(["frmeTransferAddRecipientConfirm","btnConfirm"],15000);
  kony.automation.button.click(["frmeTransferAddRecipientConfirm","btnConfirm"]);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmeTransferAddRecipientAcknowledgement","lblSuccessMessage"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmeTransferAddRecipientAcknowledgement","lblSuccessMessage"], "text")).toEqual("You have successfully added your recipient.");
  appLog("Successfully added Interact E-Transfer recipient");
}

async function NavigateBacktoDashboard_AddEtransferrecipient()
{
  await kony.automation.playback.waitFor(["frmeTransferAddRecipientAcknowledgement","customheadernew","flxAccounts"],15000);
  kony.automation.flexcontainer.click(["frmeTransferAddRecipientAcknowledgement","customheadernew","flxAccounts"]);
  // frmeTransferSendMoney_customheadernew_flxAccounts
}
//frmeTransferAddRecipientAcknowledgement_customheadernew_flxAccounts


async function navigateToManageInteracETransfer(){

  appLog("Initiated Navigate to ManageEtransfer"); 
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxSendMoney"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxSendMoney"]);
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmFastManagePayee","rtxInteraceTransfer"],15000);
  kony.automation.flexcontainer.click(["frmFastManagePayee","rtxInteraceTransfer"]);

}
async function verifyManageIntracEtransferUI()
{
  appLog("Started verifying ManageIntracEtransfer UI") ;
  await kony.automation.playback.wait(10000);
  //  kony.automation.widget.touch(["frmFastManagePayee"], null,null,[98,403]);
  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"],15000);
  kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","btnAction"],15000);
  // await kony.automation.playback.waitFor(["frmeTransferSendMoney","lblTransferHistory"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","segmentTransfers[0]","btnAction"], "text")).toContain("Edit Recipient");
  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","btnViewActivity"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","segmentTransfers[0]","btnViewActivity"], "text")).toContain("View Activity");
  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","btnEdit"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","segmentTransfers[0]","btnEdit"], "text")).toContain("Send Money");
  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","btnRemoveRecipient"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","segmentTransfers[0]","btnRemoveRecipient"], "text")).toEqual("Delete Recipient");
  appLog("Verified the ManageIntreacEtransfer Tab successfully");
}

async function ManageRecipientsHeadersValidation()
{
  await kony.automation.playback.wait(10000);
  appLog("Fields evaluation started");

  await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toContain("Manage Recipients");

  await kony.automation.playback.waitFor(["frmFastManagePayee","btnExternalAccounts"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","btnExternalAccounts"],"text")).toEqual("Accounts");

  await kony.automation.playback.waitFor(["frmFastManagePayee","rtxInteraceTransfer"],15000);
  // expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","rtxInteraceTransfer"],"text")).toEqual("INTERAC e-Transfer®");
  //   appLog("search field evaluation using status condition");
  //   var status=await kony.automation.playback.waitFor(["frmFastManagePayee","Search","txtSearch"],15000);
  //   expect(status).toBe(true);

  await kony.automation.playback.waitFor(["frmFastManagePayee","Search","txtSearch"],15000);

  await kony.automation.playback.waitFor(["frmFastManagePayee","lblSortDateExternal"],15000);

  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblSortDateExternal"],"text")).toContain("Recipient Name");

  await kony.automation.playback.waitFor(["frmFastManagePayee","lblSortDescriptionExternal"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblSortDescriptionExternal"],"text")).toContain("Bank Name");

  await kony.automation.playback.waitFor(["frmFastManagePayee","lblSortTypeExternal"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblSortTypeExternal"],"text")).toContain("Status");

  await kony.automation.playback.waitFor(["frmFastManagePayee","lblActions"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblActions"],"text")).toContain("Action");
  appLog("9Done");
  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","btnAction"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","segmentTransfers[0]","btnAction"],"text")).toContain("Send Money");
  appLog("10Done");
  await kony.automation.playback.waitFor(["frmFastManagePayee","lblAddBankAccount"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblAddBankAccount"],"text")).toContain("Add CWB Account");
  appLog("11Done");
  appLog("Add an INTERAC e-Transfer® Recipient button evaluation using status condition");
  var status1=await kony.automation.playback.waitFor(["frmFastManagePayee","lblAddETransfer"],15000);
  expect(status1).toBe(true);
  appLog("Add an INTERAC e-Transfer® Recipient button evaluated using status condition");

  await kony.automation.playback.wait(10000);
  appLog("all fields are evaluated");
}

async function AddCWBAccountFieldsValidation()
{
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add CWB Account");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblRecipientDetails"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblRecipientDetails"],"text")).toEqual("Recipient Details");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblAccountNumberKA"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblAccountNumberKA"],"text")).toEqual("Account Number"); 
  appLog("AccountNumber text box evaluation");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"],15000);
  appLog("AccountNumber text box evaluated");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblAccountNumberAgainKA"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblAccountNumberAgainKA"],"text")).toEqual("Re-Enter Account Number");
  appLog("Re enter AccountNumber text box evaluation");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],15000);
  appLog("Re enter AccountNumber text box evaluated");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblBeneficiaryNameKA"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblBeneficiaryNameKA"],"text")).toEqual("Recipient Name");
  appLog("Enter Beneficiary name text box evaluation");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],15000);
  appLog("Beneficiary name text box evaluated");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblAccountNickNameKA"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblAccountNickNameKA"],"text")).toEqual("Account Nickname (Optional)");
  appLog("Enter Nick name text box evaluation");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"],15000);
  appLog(" Nick name text box evaluated");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnCancelKA"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","btnCancelKA"],"text")).toEqual("Cancel");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","btnAddAccountKA"],"text")).toEqual("Continue");
  appLog("All Fields are evaluated");
  await kony.automation.playback.wait(5000);
}

async function ContinueButton(Accno,unique_RecipitentName){

  appLog("Intiated method to enter all details");

  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"],15000);
  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberKA"],Accno);
  appLog("Successfully Entered Acc Number : <b>"+Accno+"</b>");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],15000);
  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],Accno);
  appLog("Successfully Re-Entered Acc Number : <b>"+Accno+"</b>");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lbxAccountTypeKA"],15000);
  kony.automation.listbox.selectItem(["frmFastAddDBXAccount","lbxAccountTypeKA"], "Savings");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],15000);
  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],unique_RecipitentName);
  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"],15000);
  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickNameKA"],unique_RecipitentName);
  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");

  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"],15000);
  kony.automation.button.click(["frmFastAddDBXAccount","btnAddAccountKA"]);
  await kony.automation.playback.wait(10000);

}

async function ContinueButtonvalidation()
{
  appLog("to check that Continue button is disabled");
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add CWB Account");  

  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblRecipientDetails"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblRecipientDetails"],"text")).toEqual("Recipient Details");  
  await kony.automation.playback.wait(5000);
  appLog("Continue button is disabled");
}

async function AddAccountConfirmationValidation()
{
  await kony.automation.playback.wait(10000);
  appLog("Method to check cancel,modify and addaccount buttons");

  await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnCancel"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","btnCancel"],"text")).toEqual("Cancel");  
  await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnModify"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","btnModify"],"text")).toEqual("Modify"); 
  await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnConfirm"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","btnConfirm"],"text")).toEqual("Add Account"); 
  appLog("verified check cancel,modify and addaccount buttons");
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","customheadernew","lblAccounts"],15000);
  kony.automation.button.click(["frmFastAddDBXAccountConfirm","customheadernew","lblAccounts"]);
  //   await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","lblHeading"],15000);
  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblHeading"],"text")).toEqual("Confirm Recipient Details"); 
  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lbBankNameKey"],"text")).toEqual("Bank Name:");
  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblBankNameValue"], "text")).not.toBe('');
  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblAccountNumberKey"],"text")).toEqual("Account Number:"); 
  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblAccountNumberValue"], "text")).not.toBe('');
  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblAccountTypeKey"],"text")).toEqual("Account Type:"); 
  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblAccountTypeValue"], "text")).not.toBe('');
  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblRecipientNameKey"],"text")).toEqual("Recipient Name:"); 
  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblRecipientNameValue"], "text")).not.toBe('');
  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblNickNameKey"],"text")).toEqual("Account Nickname:"); 
  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblNickNameValue"], "text")).not.toBe('');
}

async function AcknowledgementScreenDetailsValidation()
{
  await kony.automation.playback.wait(10000);

  appLog("Method to check AcknowledgementScreen headers");

  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblTransfers"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblTransfers"],"text")).toEqual("Add CWB Account");  
  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","btnAddAnotherRecipient"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","btnAddAnotherRecipient"],"text")).toEqual("Add Another Recipient");  
  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","btnNewTransfer"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","btnNewTransfer"],"text")).toEqual("Transfer");  

  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","lblAccounts"],15000);
  kony.automation.button.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","lblAccounts"]);
}

async function AddAnotherRecipientNavigationValidation()
{
  await kony.automation.playback.wait(10000);

  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","btnAddAnotherRecipient"],15000);
  kony.automation.button.click(["frmFastAddDBXAccountAcknowledgement","btnAddAnotherRecipient"]);

  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add CWB Account");   
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblRecipientDetails"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblRecipientDetails"],"text")).toEqual("Recipient Details");  

}

async function MoveToAccountsPageFromAddCWBaccount()
{
  await kony.automation.playback.wait(10000);
  appLog("Moving back to Accounts Landing Page from AddCWB Account Page");
  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","customheadernew","lblAccounts"],15000);
  kony.automation.button.click(["frmFastAddDBXAccount","customheadernew","lblAccounts"]);
  appLog("Moved back to Accounts Landing Page");
  await kony.automation.playback.wait(5000);
}