it("ForeginExchangeCash", async function() {
  
  await NavigateToTransferExchangeCalculator();
  await CalculateCADtoUSDCashExchangeRate();

},240000);