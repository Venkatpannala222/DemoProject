it("DeleteSameBankRecipitent", async function() {

  // Add a recipitent and Then delete the same recipitent
  
// var Accno="0"+new Date().getTime();
 var Accno= Math.floor(new Date().getTime()/1000) + "12";
 var unique_RecipitentName=ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);
  
  await NavigateToManageRecipitents();
  await clickonAddCWBAccount();
  await enterSameBankAccountDetails(Accno,unique_RecipitentName);
  await verifyAddingNewReciptientSuccessMsg();
  await verifyAccountsLandingScreen(); 
  
   //Delete Added Recipitent
  
  await NavigateToManageRecipitents();
  await clickOnManageRecipientsAccountsTab();
  await SearchforPayee_RecipientList(unique_RecipitentName);
  await DeleteReciptent();
   await kony.automation.playback.wait(5000);
  await MoveBacktoDashboard_ManageRecipitent();
  
  
//   var unique_RecipitentName="TestSameBankRecipitent_"+new Date().getTime();
  
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");

//   await kony.automation.playback.waitFor(["frmFastManagePayee","flxAddBankAccount"]);
//   kony.automation.flexcontainer.click(["frmFastManagePayee","flxAddBankAccount"]);
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add Infinity Bank Account");

//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"]);
//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberKA"],"1234567890");
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"]);
//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],"1234567890");
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"]);
//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],unique_RecipitentName);
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"]);
//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickNameKA"],unique_RecipitentName);
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
//   kony.automation.button.click(["frmFastAddDBXAccount","btnAddAccountKA"]);
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnConfirm"]);
//   kony.automation.button.click(["frmFastAddDBXAccountConfirm","btnConfirm"]);

//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],"text")).toContain("has been added.");

//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
//   kony.automation.flexcontainer.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
  
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");

//   await kony.automation.playback.waitFor(["frmFastManagePayee","flxAddBankAccount"]);
//   kony.automation.flexcontainer.click(["frmFastManagePayee","flxAddBankAccount"]);
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add Infinity Bank Account");

//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"]);
//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberKA"],"1234567890");
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"]);
//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],"1234567890");
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"]);
//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],unique_RecipitentName);
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"]);
//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickNameKA"],unique_RecipitentName);
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
//   kony.automation.button.click(["frmFastAddDBXAccount","btnAddAccountKA"]);
//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnConfirm"]);
//   kony.automation.button.click(["frmFastAddDBXAccountConfirm","btnConfirm"]);

//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],"text")).toContain("has been added.");

//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
//   kony.automation.flexcontainer.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

//   //Delete Same Bank Recipitent
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
//   await kony.automation.playback.waitFor(["frmFastManagePayee","btnExternalAccounts"]);
//   kony.automation.button.click(["frmFastManagePayee","btnExternalAccounts"]);
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmFastManagePayee","Search","txtSearch"]);
//   kony.automation.textbox.enterText(["frmFastManagePayee","Search","txtSearch"],unique_RecipitentName);
//   await kony.automation.playback.waitFor(["frmFastManagePayee","Search","btnConfirm"]);
//   kony.automation.flexcontainer.click(["frmFastManagePayee","Search","btnConfirm"]);
//   await kony.automation.playback.wait(5000);

//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
//   kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
//   kony.automation.button.click(["frmFastManagePayee","segmentTransfers[0]","btnRemoveRecipient"]);

//   await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","lblPopupMessage"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","CustomPopup","lblPopupMessage"],"text")).toEqual("Are you sure you want to delete this account?");

//   await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","btnYes"]);
//   kony.automation.button.click(["frmFastManagePayee","CustomPopup","btnYes"]);
//   await kony.automation.playback.wait(5000);
  
//   var error= await kony.automation.playback.waitFor(["frmFastManagePayee","rtxMakeTransferErro"],5000);
  
//   if(error){
//     fail("There was a technical delay. Please try again.");
//   }

//   await kony.automation.playback.waitFor(["frmFastManagePayee","customheadernew","flxAccounts"]);
//   kony.automation.flexcontainer.click(["frmFastManagePayee","customheadernew","flxAccounts"]);
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

},120000);