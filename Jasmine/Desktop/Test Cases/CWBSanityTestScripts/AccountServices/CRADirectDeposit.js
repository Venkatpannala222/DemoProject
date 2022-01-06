it("CRADirectDeposit", async function() {
  await navigatetoaccountservices_CRADirectDeposit();
  await CRADirectDeposit_ToaIndividual();
  await VerifyCRADirectdeposit_AcknowledgementScreen();
  await NavigateBacktoDashboard_CRADirectdepositacknowledgement();
  await kony.automation.playback.wait(10000);
	//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
//	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICEflxAccountsMenu"]);
	//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICE4flxMyAccounts"]);
	//kony.automation.button.click(["frmCRADirectDeposit","btnConfirm"]);
	//kony.automation.listbox.selectItem(["frmCRADirectDepositRegister","lsbAccountSelection"], "102368-00001");
	//kony.automation.textbox.enterText(["frmCRADirectDepositRegister","txtSinNumber"],"611538422");
	//kony.automation.flexcontainer.click(["frmCRADirectDepositRegister","flxCheckBox"]);
	//kony.automation.button.click(["frmCRADirectDepositRegister","btnConfirm"]);
},90000);