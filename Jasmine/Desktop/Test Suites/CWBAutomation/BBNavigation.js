describe("BBNavigation", function() {
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
	  
	   await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxMenu"],20000);
		kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
		await kony.automation.playback.waitFor(["frmBBAccountsLanding"],20000);
		//kony.automation.widget.touch(["frmBBAccountsLanding"], null,null,[444,134]);
		kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlowflxRichTextAccountsMenu"]);
	    await kony.automation.playback.wait(2000);
	  //verifying hamburger menu
	//    await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","imgMenu"],10000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","imgMenu"],"text")).toEqual();
	//   //and click on My CashFlow
	//   kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheadernew","topmenu","imgMenu"]);
	//   kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheadernew","customhamburger","CashFlowlblcashflow"]);
	  
	//    await kony.automation.playback.waitFor(["frmAccountSetupStatus","customheadernew","CashFlow0lblMyAccounts"],10000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountSetupStatus","customheadernew","CashFlow0lblMyAccounts"],"text")).toEqual("Prediction and Balance");
	//     appLog("Successfully Clicked on My Cashflow");
	}
	
	async function selectCashFlow(CashFlow){
	  switch(CashFlow){
	    case "Prediction and Balance":
	      await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","CashFlow0flxMyAccounts"],10000);
	      //expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","customhamburger","CashFlow0flxMyAccounts"],"text")).toEqual("Prediction and Balance");
	      kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlow0flxMyAccounts"]);
	      await kony.automation.playback.wait(2000);
		 //appLog("Selected Prediction and Balance");
	      break;
	    case "Receivables":
	      //appLog("Selecting receivables");
	      await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","CashFlow1flxMyAccounts"],10000);
	      kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlow1flxMyAccounts"]);
	      await kony.automation.playback.wait(2000);
	      //appLog("Selected Receivables");
	      break;
	    case "Payables":
	      await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","CashFlow2flxMyAccounts"],10000);
	      //expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","customhamburger","CashFlow2flxMyAccounts"],"text")).toEqual("Payables");
	      kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlow2flxMyAccounts"]);
	      await kony.automation.playback.wait(2000);
		  //appLog("Selected Payables");
	      break;
	  }
	}
	//Method for Validate AveragePayments Tab
	async function ClickAvaragePayments_Receivable(){
	  await kony.automation.playback.waitFor(["frmReceivableSummary","heading","btnReceivableAveragePaymentDays"],30000);
	  kony.automation.button.click(["frmReceivableSummary","heading","btnReceivableAveragePaymentDays"]);
	}
	//Method for Validate  Title lable
	async function VerifyTitle_Receivables(){
	  
	  await kony.automation.playback.waitFor(["frmReceivableSummary","lblManageRecipients"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReceivableSummary","lblManageRecipients"],"text")).toEqual("My Business");
	}
	
	//Method for Validate Summary tab in Receivables
	async function VerifySummaryTab_Receivables(){
	  await kony.automation.playback.waitFor(["frmReceivablesAveragePaymentDays","heading","btnReceivableSummary"],25000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReceivablesAveragePaymentDays","heading","btnReceivableSummary"],"text")).toEqual("Summary");
	}
	//Method for Validate OverDue tab in Receivables
	async function VerifyOverdueTab_Receivables(){
	   await kony.automation.playback.waitFor(["frmReceivablesAveragePaymentDays","heading","btnReceivableCashPosition"],25000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReceivablesAveragePaymentDays","heading","btnReceivableCashPosition"],"text")).toEqual("Overdue");
	}
	//Method for Validate Upcoming tab in Receivables
	async function VerifyUpcomingTab_Receivables(){
	  await kony.automation.playback.waitFor(["frmReceivablesAveragePaymentDays","heading","btnReceivableUpcoming"],25000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReceivablesAveragePaymentDays","heading","btnReceivableUpcoming"],"text")).toEqual("Upcoming");
	}
	//Method for Validate By Customer tab in Receivables
	async  function VerifyByCustomerTab_Receivables(){
	  
	  await kony.automation.playback.waitFor(["frmReceivablesAveragePaymentDays","heading","btnReceivableCustomer"],25000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReceivablesAveragePaymentDays","heading","btnReceivableCustomer"],"text")).toEqual("By Customer");
	}
	//Method for Validate  Header
	async function ValidateSubTitle_Receivable(){
	   //Validate by top 5 payments by customer label
	  await kony.automation.playback.waitFor(["frmReceivablesAveragePaymentDays","lblPaymentsBySupplier"],25000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReceivablesAveragePaymentDays","lblPaymentsBySupplier"],"text")).toEqual("Top 5 Payments by Customer"); 
	
	}
	//Method to Validate Downloadicon
	async function ValidateDownloadIcon_Receivables(){
	  
	  await kony.automation.playback.waitFor(["frmReceivablesAveragePaymentDays","imgDownload"],25000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReceivablesAveragePaymentDays","imgDownload"],"text")).not.toBe(''); 
	}
	async function BackToAccountLandingscreen(){
	  await kony.automation.playback.waitFor(["frmReceivableSummary"],30000);
		kony.automation.widget.touch(["frmReceivableSummary"], null,null,[192,79]);
		kony.automation.flexcontainer.click(["frmReceivableSummary","customheadernew","flxAccounts"]);
		await kony.automation.playback.waitFor(["frmBBAccountsLanding"],30000);
	}
	async function ClickDownloadIcon_Receivables(){
	  
	  await kony.automation.playback.waitFor(["frmReceivablesAveragePaymentDays","imgDownload"],25000);
	   kony.automation.flexcontainer.click(["frmReceivablesAveragePaymentDays","imgDownload"]);
	  //expect(kony.automation.widget.getWidgetProperty(["frmReceivablesAveragePaymentDays","imgDownload"],"text")).not.toBe(''); 
	}
	
	async function selectFlow(Tab){
	  switch(Tab){
	    case "Summary":
	      await kony.automation.playback.waitFor(["frmReceivablesAveragePaymentDays","heading","btnReceivableSummary"],25000);
	      expect(kony.automation.widget.getWidgetProperty(["frmReceivablesAveragePaymentDays","heading","btnReceivableSummary"],"text")).toEqual("Summary");
	      kony.automation.flexcontainer.click(["frmReceivablesAveragePaymentDays","heading","btnReceivableSummary"]);
	      await kony.automation.playback.wait(2000);
		 //appLog("Selected Summary");
	      break;
	    case "Overdue":
	      //appLog("Selecting receivables");
	      await kony.automation.playback.waitFor(["frmReceivablesAveragePaymentDays","heading","btnReceivableCashPosition"],10000);
	      kony.automation.flexcontainer.click(["frmReceivablesAveragePaymentDays","heading","btnReceivableCashPosition	"]);
	      await kony.automation.playback.wait(2000);
	      //appLog("Selected Overdue");
	      break;
	    case "UpComing":
	      await kony.automation.playback.waitFor(["frmReceivablesAveragePaymentDays","heading","btnReceivableUpcoming"],10000);
	      //expect(kony.automation.widget.getWidgetProperty(["frmReceivablesAveragePaymentDays","heading","btnReceivableUpcoming"],"text")).toEqual("UpComing");
	      kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlow2flxMyAccounts"]);
	      await kony.automation.playback.wait(2000);
		  //appLog("Selected UpComing");
	      break;
		  
	    case "By Customer":
	      await kony.automation.playback.waitFor(["frmReceivablesAveragePaymentDays","heading","btnReceivableCustomer"],10000);
	      //expect(kony.automation.widget.getWidgetProperty(["frmReceivablesAveragePaymentDays","heading","btnReceivableCustomer"],"text")).toEqual("By Customer");
	      kony.automation.flexcontainer.click(["frmReceivablesAveragePaymentDays","heading","btnReceivableCustomer"]);
	      await kony.automation.playback.wait(2000);
		  //appLog("Selected By Customer");
	      break;
		  
		case "Average Payment Days":
	     await kony.automation.playback.waitFor(["frmReceivableSummary","heading","btnReceivableAveragePaymentDays"],30000);
	     kony.automation.button.click(["frmReceivableSummary","heading","btnReceivableAveragePaymentDays"]);
	      await kony.automation.playback.wait(2000);
		  //appLog("Selected Average Payment Days");
	      break;
		  
	  }
	
	it("VerifyUIMycashflow", async function() {
	   ClickOnMyCashFlow();
	   selectCashFlow("Receivables");
	},30000);
});