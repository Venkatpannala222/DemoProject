it("ValidateTop5CutoermersByAmount", async function() {
  ClickOnMyCashFlow();
  selectCashFlow("Receivables");
  ClickAvaragePayments_Receivable();
  VerifyTitle_Receivables();
  VerifySummaryTab_Receivables();
  VerifyOverdueTab_Receivables();
  VerifyUpcomingTab_Receivables();
  VerifyByCustomerTab_Receivables();
  ValidateSubTitle_Receivable();
  ClickDownloadIcon_Receivables();
  BackToAccountLandingscreen();
});