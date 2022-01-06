it("NavigatetoTaxHistoryViaProvincialTaxes", async function() {
await NaviagtetoPayBusinessTaxes_ProvincialTaxesTab();
  await kony.automation.playback.wait(3000);
  await AddProvincialTaxesForm();
  await NaviagatetoTaxHistoryViaCRATaxes();
  await kony.automation.playback.wait(5000);
  await Naviagatebacktodashboard_TaxHistoryPayBusinessTaxes();
  
},75000);