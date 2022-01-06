it("RemoveFormofProvincialTaxes", async function() {
   await  NaviagtetoPayBusinessTaxes_CRATab();
  await AddProvincialTaxesForm();
  await RemoveProvincialTaxesForm();
  await kony.automation.playback.wait(7000);
  await Naviagatebacktodashboard_PayBusinessTaxes();
}, 60000);