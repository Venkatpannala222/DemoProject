describe("SelectTabs_Receivable", function() {
	async function ClickOnMyCashFlow(){
	  
	    await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxMenu"],20000);
		kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
		await kony.automation.playback.waitFor(["frmBBAccountsLanding"],20000);
		//kony.automation.widget.touch(["frmBBAccountsLanding"], null,null,[444,134]);
		kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","CashFlowflxRichTextAccountsMenu"]);
	    await kony.automation.playback.wait(2000);
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
	
	it("ValidatingtheUIfortheUpcomingReceivables", async function() {
	  ClickOnMyCashFlow();
	  selectCashFlow("Receivables");
	  
	});
});