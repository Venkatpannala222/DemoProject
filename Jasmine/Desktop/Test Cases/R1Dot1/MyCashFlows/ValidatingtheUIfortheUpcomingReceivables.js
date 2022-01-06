it("ValidatingtheUIfortheUpcomingReceivables", async function() {
  ClickOnMyCashFlow();
  selectCashFlow("Receivables");
  ClickUpcomingReceivables();
  VerifyTitle_UpcomingReceivables();
  VerifySummary_UpcomingReceivables();
  VerifyOverdue_UpcomingReceivables();
  VerifyByCustomer_UpcomingReceivables();
  VerifyAvaragePaymentDays_UpcomingReceivables();
  VerifyUpcomingTitle_UpcomingReceivables();
  await kony.automation.playback.waitFor(["frmRecievableUpcoming"]);
  kony.automation.widget.touch(["frmRecievableUpcoming"], null,null,[184,102]);
  kony.automation.flexcontainer.click(["frmRecievableUpcoming","customheadernew","flxAccounts"]);
  await kony.automation.playback.waitFor(["frmBBAccountsLanding"],30000);
  //BackToAccountLandingscreen();
  
//   await kony.automation.playback.waitFor(["frmReceivableSummary","heading","btnReceivableUpcoming"],30000);
//   //expect(kony.automation.widget.getWidgetProperty(["frmReceivablesAveragePaymentDays","heading","btnReceivableUpcoming"],"text")).toEqual("UpComing");
//   kony.automation.flexcontainer.click(["frmReceivableSummary","heading","btnReceivableUpcoming"]);
//   await kony.automation.playback.wait(3000);
  
  //BackToAccountLandingscreen();

},12000);