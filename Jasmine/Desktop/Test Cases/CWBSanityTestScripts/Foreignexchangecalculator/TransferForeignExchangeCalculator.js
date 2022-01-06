it("TransferForeignExchangeCalculator", async function() {
  await NavigateToTransferExchangeCalculator();
  await CalculateCADtoUSDExchangeRate();
  
  //kony.automation.button.click(["frmAccountsLanding","btnFXRate"]);
  //await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnTransfer"],15000);
	//kony.automation.button.click(["frmAccountsLanding","fxWidget","btnTransfer"]);
	//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDown"]);
	//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDown[0]","flxGroupContainer"]);
	//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDownBottom"]);
	//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDownBottom[1]","flxGroupContainer"]);
	//kony.automation.textbox.enterText(["frmAccountsLanding","fxWidget","txtLeftAmount"],"12");
	//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxMiddleContainer"]);
  //await kony.automation.playback.wait(5000);
	//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxBottomContainer"]);
},450000);