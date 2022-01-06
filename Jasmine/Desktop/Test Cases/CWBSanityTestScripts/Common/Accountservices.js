
 async function navigatetoaccountservices_CRADirectDeposit(){
   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
   kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICEflxAccountsMenu"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICEflxAccountsMenu"]);
   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICE3flxMyAccounts"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICE3flxMyAccounts"]);
 }

async function CRADirectDeposit_ToaIndividual()
{
   await kony.automation.playback.waitFor(["frmCRADirectDeposit","btnConfirm"],15000);
    kony.automation.button.click(["frmCRADirectDeposit","btnConfirm"]);
	//kony.automation.listbox.selectItem(["frmCRADirectDepositRegister","lsbAccountSelection"], "102368-00001");
  await kony.automation.playback.waitFor(["frmCRADirectDepositRegister","txtSinNumber"],15000);
	kony.automation.textbox.enterText(["frmCRADirectDepositRegister","txtSinNumber"],"611538422");
  await kony.automation.playback.waitFor(["frmCRADirectDepositRegister","flxCheckBox"],15000);
	kony.automation.flexcontainer.click(["frmCRADirectDepositRegister","flxCheckBox"]);
    await kony.automation.playback.waitFor(["frmCRADirectDepositRegister","btnConfirm"],15000);
	kony.automation.button.click(["frmCRADirectDepositRegister","btnConfirm"]);
}

async function VerifyCRADirectdeposit_AcknowledgementScreen()
{
  //frmCRADDAcknowledgement_lblSuccessMessage
  await kony.automation.playback.waitFor(["frmCRADDAcknowledgement","lblSuccessMessage"],15000);
   expect(kony.automation.widget.getWidgetProperty(["frmCRADDAcknowledgement","lblSuccessMessage"], "text")).toEqual("Thank you for enrolling for CRA direct deposit.");
  appLog("Successfully verified the CRA direct deposit acknowledgement screen");
  }
async function NavigateBacktoDashboard_CRADirectdepositacknowledgement(){
   await kony.automation.playback.waitFor(["frmCRADDAcknowledgement","customheadernew","flxAccounts"],15000);
 // frmCRADDAcknowledgement_customheadernew_flxAccounts
   kony.automation.flexcontainer.click(["frmCRADDAcknowledgement","customheadernew","flxAccounts"]);
}