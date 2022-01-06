it("NavigatetoAddCWBAccount_TransferLanding", async function() {
  await navigateToMoveMoney();
  await NavigatetoAddCWBAccount_TransferLanding();
  await MoveToAccountsPageFromAddCWBaccount();
},TimeOuts.Transfers.transfer);