async function TransactionHeadersValidation(){
  await kony.automation.playback.wait(10000);
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lblTransactions"],5000);
  appLog("To Verify Transactions header");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnAllChecking"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","btnAllChecking"], "text")).toContain("All");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnTransfersChecking"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","btnTransfersChecking"], "text")).toContain("Transfers");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnDepositsChecking"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","btnDepositsChecking"], "text")).toContain("Deposits");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnChecksChecking"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","btnChecksChecking"], "text")).toContain("Cheques");  
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnWithdrawsChecking"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","btnWithdrawsChecking"], "text")).toContain("Withdrawals");

  appLog("To Verify Transactions sub header columns");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lblSortDate"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","lblSortDate"], "text")).toContain("Date");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","imgSortDate"],5000);
  // expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","imgSortDate"],"")).toEqual();
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lblSortDescription"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","lblSortDescription"], "text")).toContain("Description");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lblSortType"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","lblSortType"], "text")).toContain("Type");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lblSortAmount"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","lblSortAmount"], "text")).toContain("Amount"); 
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","imgSortAmount"],5000);
  //expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","imgSortAmount"],"")).toEqual(); 
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lblSortBalance"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","lblSortBalance"], "text")).toContain("Balance");
  appLog("verified headers successfully");

  appLog("To Verify Icons");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","imgSearchIcon"],5000);                                       
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","imgPrintIcon"],5000);
  // expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","imgPrintIcon"],"")).toEqual();
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","imgDownloadIcon"],5000);
  // expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","imgDownloadIcon"],"")).toEqual();
  await kony.automation.playback.wait(10000);
}

async function TransactionDetailsValidation(){
  await kony.automation.playback.wait(20000);
  appLog("To verify Transactions Details");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions[0]","flxDropdown"],5000);
  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0]","flxDropdown"]);
  appLog("dropdown open");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","lblBalance"],5000);
  var balance=kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","lblBalance"], "text"); 
  appLog("Balance value is :<b>"+balance+"</b>");
  //   await kony.automation.playback.waitFor(["flxSegTransactionRowSelected","lblToTitle"],5000);
  //   expect(kony.automation.widget.getWidgetProperty(["flxSegTransactionRowSelected","lblToTitle"], "text")).toContain("Confirmation Number  :");
  //     await kony.automation.playback.waitFor(["flxSegTransactionRowSelected","lblToValue"],5000);
  //     var number=kony.automation.widget.getWidgetProperty(["flxSegTransactionRowSelected","lblToValue"], "text");
  //     appLog("confirmation number is :<b>"+number+"</b>");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","lblTypeTitle"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","lblTypeTitle"], "text")).toContain("Posted Date :");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","lblTypeValue"],5000);
  var date=kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","lblTypeValue"], "text");
  appLog("Posted date is :<b>"+date+"</b>");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","btnDownload"],5000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","btnDownload"], "text")).toContain("Download");
  appLog("Download button is verified");
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions[0]","flxDropdown"],5000);
  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0]","flxDropdown"]);
  await kony.automation.playback.wait(10000);
}


async function DateSortValidation(){
  await kony.automation.playback.wait(15000);
  appLog("To verify Balance amount before clicking on sort icon");
  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0]","flxDropdown"]);
  await kony.automation.playback.wait(5000);
  var a=kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","lblTypeValue"], "text");
  appLog("Before sorting Posted Date is :<b>"+a+"</b>");
  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0]","flxDropdown"]);
  appLog("to verify afterclicking on date sorting");
  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxSortDate"]);
  appLog("clicked on date sorter");
  await kony.automation.playback.wait(10000);
  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0]","flxDropdown"]);
  //var b=kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","lblBalance"], "text");
  var b=kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","lblTypeValue"], "text");
  appLog("After sorting Posted Date is :<b>"+b+"</b>");
  expect(a).not.toBe(b);
  appLog("Posted Date value is not same");
  await kony.automation.playback.wait(5000);
}


async function AmountSortValidation(){
await kony.automation.playback.wait(15000);
  appLog("To verify Balance amount before clicking on amount sort icon");
  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0]","flxDropdown"]);
  await kony.automation.playback.wait(5000);
  var a=kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","lblBalance"], "text");
  appLog("Before sorting balance amount is :<b>"+a+"</b>");
  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0]","flxDropdown"]);
  appLog("to verify afterclicking on amount sorting");
  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxSortAmount"]);
  appLog("clicked on amount sorter");
  await kony.automation.playback.wait(10000);
  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0]","flxDropdown"]);
  var b=kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","segTransactions[0]","flxSegTransactionRowSelected","lblBalance"], "text");
  appLog("After sorting balance amount is :<b>"+b+"</b>");
  expect(a).not.toBe(b);
  appLog("balance amount value is not same");
  await kony.automation.playback.wait(5000);
}


async function VerifyTransactionsPagination()
{
  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lblPagination"]);
//   await kony.automation.scrollToWidget(["frmAccountsDetails","transactions","flxPaginationNext"]);
//   kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxPaginationNext"]);
  await kony.automation.playback.wait(5000);
  var count = kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","lblPagination"],"text"); 
  // frmAccountsDetails_transactions_lblPagination
  if (count === "1 - 50 Transactions")
  {
    appLog("50 Transaction details are displayed");	
  }
  else{
    appLog("More than 50 are present or less than 50 are present and count is:<b>"+count+"</b>");
  }
}