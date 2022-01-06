async function NavigateToTransferExchangeCalculator(){
  await kony.automation.playback.waitFor(["frmAccountsLanding","btnFXRate"],15000);
kony.automation.button.click(["frmAccountsLanding","btnFXRate"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnTransfer"],15000);
	kony.automation.button.click(["frmAccountsLanding","fxWidget","btnTransfer"]);
}

async function CalculateCADtoUSDExchangeRate(){
    await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxAmountDropDown"],15000);
kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDown"]);
   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","segAmountCurrDropDown[0]","flxGroupContainer"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDown[0]","flxGroupContainer"]);
   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxAmountDropDownBottom"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDownBottom"]);
   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","segAmountCurrDropDownBottom[1]","flxGroupContainer"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDownBottom[1]","flxGroupContainer"]);
     await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","txtLeftAmount"],15000);
	kony.automation.textbox.enterText(["frmAccountsLanding","fxWidget","txtLeftAmount"],"12");
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxMiddleContainer"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxMiddleContainer"]);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblcross"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","lblcross"]);
  
 // frmAccountsLanding_fxWidget_lblcross
}
async function CalculateCADtoUSDCashExchangeRate(){
 // frmAccountsLanding_fxWidget_btnCash
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnCash"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","btnCash"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxAmountDropDown"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDown"]);
   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","segAmountCurrDropDown[0]","flxGroupContainer"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDown[0]","flxGroupContainer"]);
   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxAmountDropDownBottom"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDownBottom"]);
   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","segAmountCurrDropDownBottom[1]","flxGroupContainer"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDownBottom[1]","flxGroupContainer"]);
     await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","txtLeftAmount"],15000);
	kony.automation.textbox.enterText(["frmAccountsLanding","fxWidget","txtLeftAmount"],"12");
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxMiddleContainer"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxMiddleContainer"]);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblcross"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","lblcross"]);
}
async function VerifyFXCalculatorPopup(){
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnTransfer"],15000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnCash"],15000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblInfo"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","fxWidget","lblInfo"], "text")).toEqual("Foreign Exchange Calculator");
  //frmAccountsLanding_fxWidget_lblIHave
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblIHave"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","fxWidget","lblIHave"], "text")).toEqual("I have");
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblINeed"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","fxWidget","lblINeed"], "text")).toEqual("I need");
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","txtLeftAmount"],15000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","txtRightAmount"],15000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","imgMiddle"],15000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","txtLeftAmount"],15000);
  kony.automation.textbox.enterText(["frmAccountsLanding","fxWidget","txtLeftAmount"],"12");
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxMiddleContainer"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxMiddleContainer"]);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnReset"],15000);
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblBottomTitle"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","fxWidget","lblBottomTitle"], "text")).toEqual("1 CAD = 0.7901 USD");
  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblcross"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","lblcross"]);
  appLog("Successfully verified the Fx Calculator in Dashboard");
  }

async function VerifyFXCalculatorInTransfer(){
  appLog("Navigating to transfer landing screen");
   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","Label0dcf00103bdba46"],15000);
  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","Label0dcf00103bdba46"]);
  await kony.automation.playback.wait(15000);
  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","flxMainWidgetContainer"],15000);
  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","lblInfo"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","fxWidget","lblInfo"], "text")).toEqual("Foreign Exchange Calculator");
  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","lblIHave"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","fxWidget","lblIHave"], "text")).toEqual("I have");
  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","lblINeed"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","fxWidget","lblINeed"], "text")).toEqual("I need");
  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","txtLeftAmount"],15000);
  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","txtRightAmount"],15000);
  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","imgMiddle"],15000);
  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","txtLeftAmount"],15000);
  kony.automation.textbox.enterText(["frmFastTransfers","fxWidget","txtLeftAmount"],"12");
  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","flxMiddleContainer"],15000);
  kony.automation.flexcontainer.click(["frmFastTransfers","fxWidget","flxMiddleContainer"]);
  await kony.automation.playback.wait(5000);
  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","btnReset"],15000);
  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","lblBottomTitle"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","fxWidget","lblBottomTitle"], "text")).toEqual("1 CAD = 0.7901 USD");
  appLog("Successfully verified the FX calculator in transfer screen");
  //frmFastTransfers_fxWidget_flxMainWidgetContainer
}