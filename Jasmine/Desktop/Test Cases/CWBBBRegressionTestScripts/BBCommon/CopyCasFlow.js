async function CashFlowPredictionPage(){
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","lblCashFlowPrediction"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","lblCashFlowPrediction"],"text")).toEqual("Cash Flow Prediction");
}
async function VerifyCashInflow(){
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","lblCashInflow"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","lblCashInflow"],"text")).toEqual("Cash Inflow");

  await kony.automation.playback.waitFor(["frmBBAccountsLanding","flxCashInflowIndicator"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","flxCashInflowIndicator"],"text")).toEqual();
  appLog("Successfully verified CashInflow");
}

async function VerifyCashOutFlow(){
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","lblCashOutflow"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","lblCashOutflow"],"text")).toEqual("Cash Outflow"); 

  await kony.automation.playback.waitFor(["frmBBAccountsLanding","flxCashOutflowIndicator"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","flxCashOutflowIndicator"],"text")).toEqual(); 
    appLog("Successfully verified Cash Outflow");
}

async function VerifyCashOnHand(){
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","lblCashOnHand"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","lblCashOnHand"],"text")).toEqual("Cash On Hand"); 
  
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","flxCashOnHeadIndicator"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","flxCashOnHeadIndicator"],"text")).toEqual(); 
  appLog("Successfully verified Cash OnHand");
}

async function VerifyNetDisposableIncome(){
   await kony.automation.playback.waitFor(["frmBBAccountsLanding","lblNetDisposableIncome"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","lblNetDisposableIncome"],"text")).toEqual("Net Disposable Income");
 
  await kony.automation.playback.waitFor(["frmBBAccountsLanding","flxNetDisposableIncomeIndicator"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","flxNetDisposableIncomeIndicator"],"text")).toEqual();
  appLog("Successfully verified Net Disposable Income");
  await kony.automation.playback.wait(5000);
}

async function VerifyPredictionAndBalance(){
  kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlowflxRichTextAccountsMenu"]);
	kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlow0flxMyAccounts"]);
}

async function ClickOnMyCashFlow(){
  //verifying hamburger menu
   await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","imgMenu"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","imgMenu"],"text")).toEqual();
  //and click on My CashFlow
  kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheadernew","topmenu","imgMenu"]);
  kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheadernew","customhamburger","CashFlowlblcashflow"]);
  
   await kony.automation.playback.waitFor(["frmAccountSetupStatus","customheadernew","CashFlow0lblMyAccounts"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountSetupStatus","customheadernew","CashFlow0lblMyAccounts"],"text")).toEqual("Prediction and Balance");
    appLog("Successfully Clicked on My Cashflow");
}

async function selectCashFlow(CashFlow){
  switch(CashFlow){
    case "PredictionAndBalance":
      await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","CashFlow0lblMyAccounts"],10000);
      expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","customhamburger","CashFlow0lblMyAccounts"],"text")).toEqual("Prediction and Balance");
      kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlow0lblMyAccounts"]);
      appLog("Selected Prediction and Balance");
      break;
    case "Receivables":
      appLog("Selecting receivables");
      await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","CashFlow1lblMyAccounts"],10000);
      kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlow1lblMyAccounts"]);
      await kony.automation.playback.wait(5000);
      appLog("Selected Receivables");
      break;
    case "Payables":
      await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","CashFlow2lblMyAccounts"],10000);
      expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","customhamburger","CashFlow2lblMyAccounts"],"text")).toEqual("Payables");
      kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlow2lblMyAccounts"]);
      appLog("Selected Payables");
      break;
  }
}

