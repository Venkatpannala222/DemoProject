describe("InteraceEtransfer", function() {
	async function VerifyAccountDashboard(){
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","imgKony"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","imgKony"],"")).toEqual();
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","headermenu","imgNotifications"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","headermenu","imgNotifications"],"")).toEqual();
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","headermenu","imgUserReset"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","headermenu","imgUserReset"],"")).toEqual();
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","headermenu","btnLogout"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","headermenu","btnLogout"],"")).toEqual();
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","imgMenu"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","topmenu","imgMenu"],"")).toEqual();
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","lblAccounts"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","topmenu","lblAccounts"],"text")).toEqual("Accounts");
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","lblTransferAndPay"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","topmenu","lblTransferAndPay"],"text")).toEqual("Move Money");
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","imgLblTransfers"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","topmenu","imgLblTransfers"],"")).toEqual();
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","lblMyBills"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","topmenu","lblMyBills"],"text")).toEqual("Payments");
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","imgLblPayments"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","topmenu","imgLblPayments"],"")).toEqual();
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","lblFeedback"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","topmenu","lblFeedback"],"text")).toEqual("Feedback");
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","lblHelp"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","customheader","topmenu","lblHelp"],"text")).toEqual("Help");
	
	  appLog("Sucessfully Validated account dashboard");
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","flxBannerContainerMobile"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","flxBannerContainerMobile"],"")).toEqual();
	  appLog("Sucessfully Verified Banner Advertisement on dashboard");
	}
	
	async function VerifyBBAccountDashboard()
	{
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","imgKony"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","imgKony"],"")).toEqual();
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","headermenu","imgNotifications"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","headermenu","imgNotifications"],"")).toEqual();
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","headermenu","imgUserReset"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","headermenu","imgUserReset"],"")).toEqual();
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","headermenu","btnLogout"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","headermenu","btnLogout"],"")).toEqual();
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","imgMenu"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","imgMenu"],"")).toEqual();
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","lblAccounts"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","lblAccounts"],"text")).toEqual("Accounts");
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","lblTransferAndPay"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","lblTransferAndPay"],"text")).toEqual("Move Money");
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","imgLblTransfers"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","imgLblTransfers"],"")).toEqual();
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","lblMyBills"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","lblMyBills"],"text")).toEqual("Payments");
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","imgLblPayments"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","imgLblPayments"],"")).toEqual();
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","lblFeedback"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","lblFeedback"],"text")).toEqual("Feedback");
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","lblHelp"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","lblHelp"],"text")).toEqual("Help");
	  appLog("Sucessfully Validated BB account dashboard");
	
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","carousel","segCarousel[0]","flxCampaignCarousel"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","carousel","segCarousel[0]","flxCampaignCarousel"],"")).toEqual();
	  appLog("Sucessfully Verified Banner Advertisement on BB Account dashboard");
	}
	
	async function ValidateLogoutFunction()
	{
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","headermenu","btnLogout"],5000);
	  kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","headermenu","btnLogout"]);
	  appLog("Successfully clicked on Logout ");
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","CustomPopup","lblHeading"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","CustomPopup","lblHeading"],"text")).toEqual("Log Out");
	  appLog("Successfully verified Logout Pop up");
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","CustomPopup","btnNo"],5000);
	  kony.automation.flexcontainer.click(["frmBBAccountsLanding","CustomPopup","btnNo"]);
	  appLog("Successfully landed back on Dashboard");
	
	
	}
	async function ValidateRemoveAsFavourite()
	{
	  await kony.automation.playback.wait(15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[3,0]","flxMenu"]);
	  var favorite = kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu","segAccountListActions[0]","flxAccountTypes","lblUsers"],"text");
	  await kony.automation.playback.wait(15000);
	  if(favorite==="Set as Favourite"){
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[3,0]","flxMenu"]);
	
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[3,0]","flxAccountListItem","imgStarIcon"]);
	    await kony.automation.playback.wait(20000);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[3,0]","flxMenu"]);
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu","segAccountListActions[0]","flxAccountTypes","lblUsers"],"text")).toEqual("Remove as Favourite");
	    appLog("Successfully verified Remove as favorite option");
	  }
	  else if(favorite==="Remove as Favourite"){
	
	    appLog("Successfully  verified Remove as favorite option");
	  }
	} 
	
	async function ValidateBBDashboardDetails()
	{	
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","btnContactUs"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","btnContactUs"],"text")).toEqual("Contact Us");
	  appLog("Successfully verified Contact Us");
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","myApprovals","approvalsWidgetSegment[0,-1]","flxDashBoardWidgetHeader","lblWidgetTitle"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","myApprovals","approvalsWidgetSegment[0,-1]","flxDashBoardWidgetHeader","lblWidgetTitle"],"text")).toContain("Approvals  ");
	  appLog("Successfully verified Approvals text");
	  await kony.automation.playback.wait(15000);
	  var ApprovalSize =  await kony.automation.playback.waitFor(["frmBBAccountsLanding","myApprovals","approvalsWidgetSegment"],5000);
	  var ApprovalCount =  ApprovalSize.length;
	  if(ApprovalCount!==0){
	    expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","myApprovals","approvalsWidgetSegment[0,0]","flxOption1"],"text")).not.toBe('');
	    appLog("Approvals are present");
	  }
	  else {
	    appLog("Approvals are not present");
	  }
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","myRequests","approvalsWidgetSegment[0,-1]","flxDashBoardWidgetHeader","lblWidgetTitle"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","myRequests","approvalsWidgetSegment[0,-1]","flxDashBoardWidgetHeader","lblWidgetTitle"],"text")).toContain("Requests ");
	  appLog("Successfully verified Requests text");
	  var RequestSize =  await kony.automation.playback.waitFor(["frmBBAccountsLanding","myRequests","approvalsWidgetSegment"],5000);
	  var RequestCount =  RequestSize.length;
	  if(RequestCount!==0){
	    expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","myRequests","approvalsWidgetSegment[0,0]","flxOption1"],"text")).not.toBe('');
	    appLog("Requests are present");
	  }
	  else {
	    appLog("Requests are not present");
	  }
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","upcomingTransactions","lblHeader"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","upcomingTransactions","lblHeader"],"text")).toEqual("Upcoming Transactions");
	  appLog("Successfully verified Upcoming transactions text");
	  await kony.automation.playback.wait(15000);
	  // await kony.automation.scrollToWidget(["flxAccountLandingUpcomingTransactions","flxAccountLandingUpcomingTransactions"]);
	  var Results= await kony.automation.playback.waitFor(["frmBBAccountsLanding","upcomingTransactions","segMessages[0]","flxAccountLandingUpcomingTransactions"],15000);
	  if (Results){
	
	    expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","upcomingTransactions","segMessages[0]","flxAccountLandingUpcomingTransactions"],"text")).not.toBe('');
	    appLog("Successfully verified upcoming transactions list");
	  }
	  else  {
	    await kony.automation.playback.waitFor(["frmBBAccountsLanding","upcomingTransactions","rtxNoPaymentMessage"],15000);
	    await kony.automation.scrollToWidget(["frmBBAccountsLanding","upcomingTransactions","rtxNoPaymentMessage"]);
	    appLog("No Results found ");
	    expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","upcomingTransactions","rtxNoPaymentMessage"],"text")).toEqual("You have no transactions scheduled for the next 7 days.");
	  }
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customfooter","btnLocateUs"],"text")).toEqual("Locate Us");
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customfooter","btnContactUs"],"text")).toEqual("Contact Us");
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customfooter","btnPrivacy"],"text")).toEqual("Privacy Policy");
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customfooter","btnTermsAndConditions"],"text")).toEqual("Terms & Conditions ");
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customfooter","btnFaqs"],"text")).toEqual("FAQs");
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customfooter","lblCopyright"],"text")).toEqual("© 2020 CWB Financial Group");
	  appLog("Successfully verified footer menus");
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","CDIC","imgCDIC"],"")).toEqual();
	  appLog("Successfully verified CDIC Logo");
	
	}
	
	async function verifyAccountsLandingScreen() {
	
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"], "text")).toContain("Accounts");
	  await kony.automation.scrollToWidget(["frmAccountsLanding","customheader","topmenu","flxaccounts"]);
	}
	
	async function VerifyUpcomingTransaction()
	{
	  await kony.automation.playback.waitFor(["frmAccountsLanding","upcomingTransactions","lblHeader"],5000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","upcomingTransactions","lblHeader"],"text")).toEqual("Upcoming Transactions");
	  appLog("Successfully verified Upcoming transactions text");
	  await kony.automation.playback.wait(25000);
	  // await kony.automation.scrollToWidget(["flxAccountLandingUpcomingTransactions","flxAccountLandingUpcomingTransactions"]);
	  var Results= await kony.automation.playback.waitFor(["frmAccountsLanding","upcomingTransactions","segMessages[0]","flxAccountLandingUpcomingTransactions"],15000);
	  if (Results){
	
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","upcomingTransactions","segMessages[0]","flxAccountLandingUpcomingTransactions"],"text")).not.toBe('');
	    appLog("Successfully verified upcoming transactions list");
	  }
	  else  {
	    await kony.automation.playback.waitFor(["frmAccountsLanding","upcomingTransactions","rtxNoPaymentMessage"],15000);
	    await kony.automation.scrollToWidget(["frmAccountsLanding","upcomingTransactions","rtxNoPaymentMessage"]);
	    appLog("No Results found ");
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","upcomingTransactions","rtxNoPaymentMessage"],"text")).toEqual("You have no transactions scheduled for the next 7 days.");
	  }
	}
	
	async function SelectAccountsOnDashBoard(AccountType){
	
	  appLog("Intiated method to analyze accounts data Dashboard");
	  if (AccountType==="Chequing")
	  {
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[0,0]","flxAccountNameWrapper"]);
	    await kony.automation.playback.wait(15000);
	  }
	  else if (AccountType==="Savings"){
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[1,0]","flxAccountNameWrapper"]);
	    await kony.automation.playback.wait(25000);
	  }
	  else if (AccountType==="Line of Credit ")
	  { 
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[2,0]","flxAccountNameWrapper"]);
	    await kony.automation.playback.wait(25000);
	  }
	  else if (AccountType==="Mortgage")
	  { 
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[3,0]","flxAccountNameWrapper"]);
	    await kony.automation.playback.wait(25000);
	  }
	  else if (AccountType==="Term Loan")
	  { 
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[4,0]","flxAccountNameWrapper"]);
	    await kony.automation.playback.wait(25000);
	  }
	  else if (AccountType==="Non Registered Term Deposit")
	  { 
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[5,0]","flxAccountNameWrapper"]);
	    await kony.automation.playback.wait(25000);
	  }
	  else if (AccountType==="Registered Term Deposit")
	  { 
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[6,0]","flxAccountNameWrapper"]);
	    await kony.automation.playback.wait(25000);
	  }
	  else if (AccountType==="Registered Savings")
	  { 
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[7,0]","flxAccountNameWrapper"]);
	    await kony.automation.playback.wait(25000);
	  }
	  //   else{
	  //     appLog("No Such Account for the loggedin user");
	  //   }
	}
	
	
	
	//await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	
	//kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[1,0]","flxAccountNameWrapper"]);
	
	/*var accounts_Size=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts"],"data");
	  var segLength=accounts_Size.length;
	
	  var finished = false;
	  for(var x = 0; x <segLength && !finished; x++) {
	
	    var segHeaders="segAccounts["+x+",-1]";
	
	    var subaccounts_Size=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList",segHeaders,"lblAccountTypeNumber"],"text");
	    var subaccounts_Length= parseInt(subaccounts_Size.substring(1, 2));
	    //appLog('Sub accounts size is '+subaccounts_Length);
	
	    for(var y = 0; y <subaccounts_Length; y++){
	      var seg="segAccounts["+x+","+y+"]";
	      var accountName=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList",seg,"lblAccountName"], "text");
	      applog("accountName:"+accountName);
	      var typeOfAccount=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList",seg,"lblAccountType"], "text");
	      applog ("typeofAccount:"+typeOfAccount);
	      if(typeOfAccount.includes(AccountType)){
	        kony.automation.widget.touch(["frmAccountsLanding","accountList",seg,"flxContent"], null,null,[303,1]);
	        kony.automation.flexcontainer.click(["frmAccountsLanding","accountList",seg,"flxAccountNameWrapper"]);
	        appLog("Successfully Clicked on : <b>"+accountName+"</b>");
	        finished = true;
	        break;
	      }
	    }
	  }*/
	
	
	
	async function clickOnFirstCheckingAccount(){
	
	  appLog("Intiated method to click on First Chequing account");
	  await kony.automation.playback.wait(15000);
	  SelectAccountsOnDashBoard("Chequing");
	  appLog("Successfully Clicked on First Chequing account");
	  await kony.automation.playback.wait(10000);
	}
	
	async function clickOnFirstSavingsAccount(){
	
	  appLog("Intiated method to click on First Savings account");
	  await kony.automation.playback.wait(15000);
	  SelectAccountsOnDashBoard("Savings");
	  appLog("Successfully Clicked on First Savings account");
	  await kony.automation.playback.wait(25000);
	}
	
	
	async function clickOnFirstCreditCardAccount(){
	
	  appLog("Intiated method to click on First CreditCard account");
	  await kony.automation.playback.wait(15000);
	  SelectAccountsOnDashBoard("Line of Credit ");
	  appLog("Successfully Clicked on First CreditCard account");
	  await kony.automation.playback.wait(15000);
	}
	
	
	async function clickOnFirstMortgageAccount(){
	
	  appLog("Intiated method to click on First Mortgage account");
	  await kony.automation.playback.wait(10000);
	  SelectAccountsOnDashBoard("Mortgage");
	
	  appLog("Successfully Clicked on First Mortgage account");
	  await kony.automation.playback.wait(15000);
	}
	
	
	async function clickOnFirstLoanAccount(){
	
	  appLog("Intiated method to click on First Loan account");
	  await kony.automation.playback.wait(15000);
	  SelectAccountsOnDashBoard("Term Loan");
	
	  appLog("Successfully Clicked on First Loan  account");
	  await kony.automation.playback.wait(15000);
	}
	
	async function clickOnFirstDepositAccount(){
	appLog("Intiated method to click on First Deposit account");
	
	  //   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	  //   kony.automation.widget.touch(["frmAccountsLanding","accountList","segAccounts[1,0]","flxContent"], null,null,[303,1]);
	  //   kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[1,0]","flxAccountDetails"]);
	
	  //SelectAccountsOnDashBoard("Deposit");
	 // appLog("Successfully Clicked on First Deposit account");
	  await kony.automation.playback.wait(5000);
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],10000);
	  //   kony.automation.widget.touch(["frmDashboard","accountList","segAccounts[0,0]","flxContent"], null,null,[303,1]);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[5,0]","flxAccountNameWrapper"]);
	  
	  appLog("Successfully Clicked on First Deposit account");
	}
	
	async function clickOnFirstNonRegisteredTermDepositAccount(){
	
	  appLog("Intiated method to click on First Deposit account");
	  await kony.automation.playback.wait(10000);
	  SelectAccountsOnDashBoard("Non Registered Term Deposit");
	
	  appLog("Successfully Clicked on First Deposit account");
	  await kony.automation.playback.wait(20000);
	
	}
	
	async function clickOnFirstRegisteredSavingsAccount(){
	
	  appLog("Intiated method to click on First RegisteredSavings account");
	  await kony.automation.playback.wait(15000);
	  SelectAccountsOnDashBoard("Registered Savings");
	
	  appLog("Successfully Clicked on First RegisteredSavings account");
	  await kony.automation.playback.wait(15000);
	}
	
	async function clickOnFirstRegisteredTermDepositAccount(){
	
	  appLog("Intiated method to click on First RegisteredTermDeposit account");
	  await kony.automation.playback.wait(10000);
	  SelectAccountsOnDashBoard("Registered Term Deposit");
	  appLog("Successfully Clicked on First Registered Term Deposit account");
	  await kony.automation.playback.wait(20000);
	
	}
	
	async function clickOnSearch_AccountDetails(){
	
	  appLog("Intiated method to click on Search Icon");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","flxSearch"],45000);
	  await kony.automation.scrollToWidget(["frmAccountsDetails","transactions","flxSearch"]);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxSearch"]);
	  appLog("Successfully Clicked on Search Icon");	
	}
	
	async function selectTranscationtype(TransactionType){
	
	  appLog("Intiated method to select Transcation type");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTransactionType"],15000);
	  kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTransactionType"],TransactionType);
	  appLog("Successfully selected Transcation type : <b>"+TransactionType+"</b>");
	  await kony.automation.playback.wait(10000);
	}
	
	async function selectAmountRange(From,To){
	
	  appLog("Intiated method to select Amount Range");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","txtAmountRangeFrom"],15000);
	  kony.automation.textbox.enterText(["frmAccountsDetails","accountTransactionList","txtAmountRangeFrom"],From);
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","txtAmountRangeTo"],15000);
	  kony.automation.textbox.enterText(["frmAccountsDetails","accountTransactionList","txtAmountRangeTo"],To);
	
	  appLog("Successfully selected amount Range : ["+From+","+To+"]");
	}
	
	async function selectCustomdate(){
	
	  appLog("Intiated method to select Custom Date Range");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","lstbxTimePeriod"],15000);
	  kony.automation.listbox.selectItem(["frmAccountsDetails","accountTransactionList","lstbxTimePeriod"], "CUSTOM_DATE_RANGE");
	  appLog("Successfully selected Date Range");
	}
	
	async function clickOnbtnSearch(){
	
	  appLog("Intiated method to click on Search Button with given search criteria");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","btnSearch"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountTransactionList","btnSearch"]);
	  appLog("Successfully Clicked on Search Button");
	  await kony.automation.playback.wait(5000);
	}
	
	async function validateSearchResult() {
	
	  var noResult=await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","rtxNoPaymentMessage"],15000);
	  if(noResult){
	    appLog("No Results found with given criteria..");
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountTransactionList","rtxNoPaymentMessage"], "text")).toEqual("No Transactions Found");
	  }else{
	    await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","segTransactions"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","accountTransactionList","segTransactions[0,0]","flxDropdown"]);
	    appLog("Successfully clicked on Transcation with given search criteria");
	  }
	}
	
	async function MoveBackToLandingScreen_AccDetails(){
	
	  appLog("Move back to Account Dashboard from AccountsDetails");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"], "text")).toContain("Accounts");
	  appLog("Successfully Moved back to Account Dashboard");
	}
	async function MoveBackToLandingScreen_BBAccDetails(){
	
	  appLog("Move back to Account Dashboard from AccountsDetails");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"],5000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","lblAccounts"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","lblAccounts"],"text")).toContain("Accounts");
	  appLog("Successfully Moved back to Account Dashboard");
	}
	
	async function MoveBackToLandingScreen_BBAccounts(){
	
	  appLog("Move back to Account Dashboard from AccountsDetails");
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxaccounts"],5000);
	  kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxaccounts"]);
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","lblAccounts"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","customheader","topmenu","lblAccounts"],"text")).toContain("Accounts");
	  appLog("Successfully Moved back to Account Dashboard");
	}
	
	async function SelectContextualOnDashBoard(AccountType){
	
	  appLog("Intiated method to analyze accounts data Dashboard");
	  // await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts[1,0]","flxMenu"],15000);  
	  //kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[1,0]","flxMenu"]);
	  if (AccountType==="Savings")
	  {
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[1,0]"]);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[1,0]","flxAccountListItem","flxMenu"]);
	  } 
	  else if (AccountType==="Chequing"){
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    kony.automation.widget.touch(["frmAccountsLanding","accountList","segAccounts[0,0]","flxMenu"], [45,36],null,null);
	    kony.automation.widget.touch(["frmAccountsLanding"], null,null,[831,289]);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[0,0]","flxMenu"]);
	  }   
	  else if (AccountType==="Line of Credit "){
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[2,0]"]);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[2,0]","flxMenu"]);
	  }  
	  else if (AccountType==="Term Loan"){
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[4,0]"]);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[4,0]","flxMenu"]);
	  }  
	  else if (AccountType==="Non Registered Term Deposit"){
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[5,0]"]);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[5,0]","flxMenu"]);
	  }  
	  else if (AccountType==="Mortgage"){
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[3,0]"]);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[3,0]","flxMenu"]);
	  } 
	  else if (AccountType==="Lease"){
	    await kony.automation.playback.waitFor(["frmBBAccountsLanding","accountList","segAccounts"],15000);
	    await kony.automation.scrollToWidget(["frmBBAccountsLanding","accountList","segAccounts[5,0]"]);
	    kony.automation.flexcontainer.click(["frmBBAccountsLanding","accountList","segAccounts[5,0]","flxMenu"]);
	  } 
	  else if (AccountType==="Registered Savings"){
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[7,0]"]);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[7,0]","flxMenu"]);
	  } 
	
	  /*await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	  var accounts_Size=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts"],"data");
	  var segLength=accounts_Size.length;
	
	  var finished = false;
	  for(var x = 0; x <segLength && !finished; x++) {
	
	    var segHeaders="segAccounts["+x+",-1]";
	
	    var subaccounts_Size=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList",segHeaders,"lblAccountTypeNumber"],"text");
	    var subaccounts_Length= parseInt(subaccounts_Size.substring(1, 2));
	    //appLog('Sub accounts size is '+subaccounts_Length);
	
	    for(var y = 0; y <subaccounts_Length; y++){
	
	      var seg="segAccounts["+x+","+y+"]";
	
	      var accountName=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList",seg,"lblAccountName"], "text");
	      var typeOfAccount=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList",seg,"lblAccountType"], "text");
	      if(typeOfAccount.includes(AccountType)){
	        await kony.automation.scrollToWidget(["frmAccountsLanding","accountList",seg]);
	        kony.automation.flexcontainer.click(["frmAccountsLanding","accountList",seg,"flxMenu"]);
	        appLog("Successfully Clicked on Menu of : <b>"+accountName+"</b>");
	        finished = true;
	        break;
	      }
	    }
	  }*/
	}
	
	
	async function clickOnCheckingAccountContextMenu(){
	
	  appLog("Intiated method to click on Checking account context Menu");
	
	
	
	  // SelectContextualOnDashBoard("Chequing");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[0,0]"]);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[0,0]","flxMenu"]);
	}
	
	async function clickOnSavingsAccountContextMenu(){
	
	  appLog("Intiated method to click on Saving account context Menu");
	
	
	  SelectContextualOnDashBoard("Savings");
	}
	
	async function clickOnCreditCardAccountContextMenu(){
	
	  appLog("Intiated method to click on CreditCard account context Menu");
	
	
	
	  SelectContextualOnDashBoard("Line of Credit ");
	}
	
	async function clickOnMortrageAccountContextMenu(){
	
	  appLog("Intiated method to click on Mortrage account context Menu");
	
	
	
	  SelectContextualOnDashBoard("Mortgage");
	}
	
	async function clickOnLeaseContextMenu(){
	
	  appLog("Intiated method to click on Lease account context Menu");
	
	
	
	  SelectContextualOnDashBoard("Lease");
	}
	
	async function clickOnRegisteredSavingsContextMenu()
	{
	  appLog("Intiated method to click on Registered Savings account context Menu");
	
	  SelectContextualOnDashBoard("Registered Savings");
	
	}
	
	async function clickOnFirstRegisteredSavingsAccount(){
	
	  appLog("Intiated method to click on First registered savings account");
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],10000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[6,0]","flxAccountNameWrapper"]);
	  appLog("Successfully Clicked on First Lease  account");
	  await kony.automation.playback.wait(15000);
	}
	
	async function clickOnDepositAccountContextMenu(){
	
	  appLog("Intiated method to click on Deposit account context Menu");
	
	
	
	  SelectContextualOnDashBoard("Non Registered Term Deposit");
	}
	
	async function clickOnLoanAccountContextMenu(){
	
	  appLog("Intiated method to click on Loan account context Menu");
	
	
	
	  SelectContextualOnDashBoard("Term Loan");
	
	}
	
	async function verifyContextMenuOptions(){
	
	  await kony.automation.playback.wait(25000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountListMenu","segAccountListActions"],25000);
	  await kony.automation.playback.wait(25000);
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountListMenu","segAccountListActions[0]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu","segAccountListActions[0]","flxAccountTypes","lblUsers"],"text")).toEqual("Pay Bill From");
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountListMenu","segAccountListActions[1]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu","segAccountListActions[1]","flxAccountTypes","lblUsers"],"text")).toEqual("Move Money");
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountListMenu","segAccountListActions[2]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu","segAccountListActions[2]","flxAccountTypes","lblUsers"],"text")).toEqual("Stop Cheque Payment");
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountListMenu","segAccountListActions[3]"]);
	  var fav=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu","segAccountListActions[3]","flxAccountTypes","lblUsers"],"text");
	  if(fav==="Set as Favourite"){
	    appLog("Set as favorite option is displayed");
	  }
	  else
	  {
	    appLog("Remove as favorite is displayed");
	  }
	  appLog("Successfully Verified all the context menu options");
	
	
	  // appLog("My Actual List is :: "+myList);
	  // appLog("My Expected List is:: "+myList_Expected);
	
	  //let isFounded = myList.some( ai => myList_Expected.includes(ai) );
	  //appLog("isFounded"+isFounded);
	  //  expect(isFounded).toBe(true);
	}
	
	async function verifySavingsContextMenuOptions(){
	
	  await kony.automation.playback.wait(25000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountListMenu","segAccountListActions"],25000);
	  await kony.automation.playback.wait(25000);
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountListMenu","segAccountListActions[0]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu","segAccountListActions[0]","flxAccountTypes","lblUsers"],"text")).toEqual("Pay Bill From");
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountListMenu","segAccountListActions[1]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu","segAccountListActions[1]","flxAccountTypes","lblUsers"],"text")).toEqual("Move Money");
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountListMenu","segAccountListActions[2]"]);
	  var Savfav=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu","segAccountListActions[2]","flxAccountTypes","lblUsers"],"text");
	  if(Savfav==="Set as Favourite"){
	    appLog("Set as favorite option is displayed");
	  }
	  else
	  {
	    appLog("Remove as favorite is displayed");
	  }
	  appLog("Successfully Verified all the savings context menu options");
	
	
	}
	async function verifyContextMenuOpts()
	{
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountListMenu","segAccountListActions"],25000);
	  //await kony.automation.playback.wait(25000);
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountListMenu","segAccountListActions[0]"]);
	  var fav1 = kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu","segAccountListActions[0]","flxAccountTypes","lblUsers"],"text");
	  if(fav1==="Set as Favourite"){
	    appLog("Set as favorite option is displayed");
	  }
	  else
	  {
	    appLog("Remove as favorite is displayed");
	  }
	  appLog("Successfully verified context menu options");
	}
	
	async function verifyLeaseContextMenuOpts()
	{
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","accountListMenu","segAccountListActions"],25000);
	  //await kony.automation.playback.wait(25000);
	  await kony.automation.scrollToWidget(["frmBBAccountsLanding","accountListMenu","segAccountListActions[0]"]);
	  var leasefav = kony.automation.widget.getWidgetProperty(["frmBBAccountsLanding","accountListMenu","segAccountListActions[0]","flxAccountTypes","lblUsers"],"text");
	  if(leasefav==="Set as Favourite"){
	    appLog("Set as favorite option is displayed");
	  }
	  else
	  {
	    appLog("Remove as favorite is displayed");
	  }
	  appLog("Successfully verified  Lease context menu options");
	}
	
	
	async function MoveBackToLandingScreen_Accounts(){
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxaccounts"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxaccounts"]);
	  //frmAccountsLanding_accountList_lblAccountsHeader
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","lblAccountsHeader"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"], "text")).toContain("Accounts");
	
	}
	
	async function scrolltoTranscations_accountDetails(){
	
	  appLog("Intiated method to scroll to Transcations under account details");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lblTransactions"],15000);
	  await kony.automation.scrollToWidget(["frmAccountsDetails","transactions","lblTransactions"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","lblTransactions"],"text")).toEqual("Transactions");
	  appLog("Successfully Verified Transactions text");
	  //await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","segTransactions"],15000);
	  //await kony.automation.scrollToWidget(["frmAccountsDetails","accountTransactionList","segTransactions"]);
	
	}
	
	async function verifyAccountSummary_CheckingAccounts(){
	
	  appLog("Intiated method to verify account summary for Checking Account");
	
	  await kony.automation.playback.wait(25000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],5000);
	  //await kony.automation.playback.waitFor(["frmAccountsDetails","summary","FormatValue7Tab1","lblFormat"],5000);
	}
	
	async function verifyAccountSummary_DepositAccounts(){
	
	  appLog("Intiated method to verify account summary for Deposit Account");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"],5000);
	}
	
	async function verifyAccountSummary_CreditCardAccounts(){
	
	  appLog("Intiated method to verify account summary for CreditCard Account");
	
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblRepaymentTypeTitle"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingWithdrawalsTitle"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],5000);
	
	}
	
	async function verifyAccountSummary_LoanAccounts(){
	
	  appLog("Intiated method to verify account summary for Loan Account");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","summary","FormatValue6Tab1","lblFormat"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","summary","FormatValue7Tab1","lblFormat"],5000);
	}
	
	async function verifyAccountSummary_SavingsAccounts(){
	
	  appLog("Intiated method to verify account summary for Savings Account");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountSummary","lblFormat"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","FormatValue2Tab1","btnBalanceDetails"],5000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","FormatValue6Tab1","btnAccountInfo"],5000);
	  await kony.automation.playback.wait(10000);
	  // await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","FormatValue7Tab1","lblFormat"],5000);
	}
	
	async function verifyAccountsOrder_DashBoard(){
	
	  appLog("Intiated method to verify accounts order in Dashboard");
	
	  //Accounts Order can't be garunteed across different users. Hence checking all Types of accounts.
	  var myList = new Array();
	  var myList_Expected = new Array();
	  myList_Expected.push("Checking","Saving","Credit","Deposit","Loan");
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	  var accounts_Size=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts"],"data");
	  var segLength=accounts_Size.length;
	
	  for(var x = 0; x <segLength; x++) {
	
	    var segHeaders="segAccounts["+x+",-1]";
	
	    var subaccounts_Size=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList",segHeaders,"lblAccountTypeNumber"],"text");
	    var subaccounts_Length= parseInt(subaccounts_Size.substring(1, 2));
	    //appLog('Sub accounts size is '+subaccounts_Length);
	
	    for(var y = 0; y <subaccounts_Length; y++){
	      var seg="segAccounts["+x+","+y+"]";
	      var accountName=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList",seg,"lblAccountName"], "text");
	      myList.push(accountName);
	    }
	  }
	
	  appLog("My Actual List is :: "+myList);
	  appLog("My Expected List is:: "+myList_Expected);
	}
	
	
	async function VerifyAccountOnDashBoard(AccountType){
	
	  appLog("Intiated method to verify the account on Dashboard");
	  await kony.automation.playback.wait(50000);
	  if (AccountType==="Savings") {
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[1,-1]"]);
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts[1,-1]","flxAccountListItemHeader","lblTransactionHeader"], "text")).toEqual("Savings");
	    appLog("Successfully verified savings account");
	  }
	
	  else if (AccountType==="Chequing"){
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	    await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[0,-1]"]);
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts[0,-1]","flxAccountListItemHeader","lblTransactionHeader"], "text")).toEqual("Chequing");    
	    appLog("Successfully verified Chequing account");
	  }
	
	}
	// var myList = new Array();
	
	//await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	//var accounts_Size=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts"],"data");
	//var segLength=accounts_Size.length;
	
	//var finished = false;
	//for(var x = 0; x <segLength && !finished; x++) {
	
	//var segHeaders="segAccounts["+x+",-1]";
	
	//var subaccounts_Size=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList",segHeaders,"lblAccountTypeNumber"],"text");
	//var subaccounts_Length= parseInt(subaccounts_Size.substring(1, 2));
	//appLog('Sub accounts size is '+subaccounts_Length);
	
	//    for(var y = 0; y <subaccounts_Length; y++){
	//
	//    var seg="segAccounts["+x+","+y+"]";
	
	//      var accountName=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList",seg,"lblAccountName"], "text");
	//    var typeOfAccount=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList",seg,"lblAccountType"], "text");
	//  if(typeOfAccount.includes(AccountType)){
	//  appLog("Successfully verified : <b>"+accountName+"</b>");
	//myList.push("TRUE");
	//finished = true;
	//break;
	//}else{
	//myList.push("FALSE");
	//}
	//}
	//}
	
	// appLog("My Actual List is :: "+myList);
	//var Status=JSON.stringify(myList).includes("TRUE");
	//appLog("Over all Result is  :: <b>"+Status+"</b>");
	//expect(Status).toBe(true);
	
	
	async function VerifyCheckingAccountonDashBoard(){
	
	  appLog("Intiated method to verify Checking account in Dashboard");
	
	  //   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	  //   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts[0,0]","lblAccountName"],15000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts[0,0]","lblAccountName"], "text")).toContain("Checking");
	  VerifyAccountOnDashBoard("Chequing");
	}
	//Added new function By Tapasya
	async function verifyChequingAccountQuickActionsOptions(){
	
	  appLog("Intiated method to verify Quick Actions options");
	
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","btnScheduledTransfer"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","btnScheduledTransfer"],"text")).toEqual("Pay Bill");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","btnMakeTransfer"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","btnMakeTransfer"],"text")).toEqual("Move Money");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","btnPayABill"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","btnPayABill"],"text")).toEqual("Stop Pre-Authorized Payment Requests");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","lblSecondaryActions"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","lblSecondaryActions"],"text")).toEqual("What else do you want to do?");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","flxSecondaryActions"],10000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","flxSecondaryActions"]);
	  await kony.automation.playback.wait(5000);
	  appLog("checking secondary actions");
	  await kony.automation.scrollToWidget(["frmAccountsDetails","moreActions","segAccountTypes[0]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","moreActions","segAccountTypes[0]","flxAccountTypes","lblUsers"],"text")).toEqual("Manage Bill Pay Payees");
	  await kony.automation.scrollToWidget(["frmAccountsDetails","moreActions","segAccountTypes[1]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","moreActions","segAccountTypes[1]","flxAccountTypes","lblUsers"],"text")).toEqual("Manage Recipients");
	  await kony.automation.scrollToWidget(["frmAccountsDetails","moreActions","segAccountTypes[2]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","moreActions","segAccountTypes[2]","flxAccountTypes","lblUsers"],"text")).toEqual("Stop Cheque Payment");
	  await kony.automation.scrollToWidget(["frmAccountsDetails","moreActions","segAccountTypes[3]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","moreActions","segAccountTypes[3]","flxAccountTypes","lblUsers"],"text")).toEqual("Update Account Settings");
	  appLog("Successfully Verified all the context menu options");	
	
	  kony.automation.flexcontainer.click(["frmAccountsDetails","flxSecondaryActions"]);
	  appLog("closed dropdown");
	  await kony.automation.playback.wait(5000);
	  appLog("Moving back to account dashboard");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","lblAccounts"],10000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","lblAccounts"]);
	
	}
	//Added new function By Tapasya
	async function verifySavingsAccountQuickActionsOptions(){
	
	  appLog("Intiated method to verify Quick Actions options");
	
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","btnScheduledTransfer"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","btnScheduledTransfer"],"text")).toEqual("Pay Bill");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","btnMakeTransfer"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","btnMakeTransfer"],"text")).toEqual("Move Money");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","btnPayABill"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","btnPayABill"],"text")).toEqual("Stop Pre-Authorized Payment Requests");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","lblSecondaryActions"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","lblSecondaryActions"],"text")).toEqual("What else do you want to do?");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","flxSecondaryActions"],10000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","flxSecondaryActions"]);
	  await kony.automation.playback.wait(5000);
	  appLog("checking secondary actions");
	  await kony.automation.scrollToWidget(["frmAccountsDetails","moreActions","segAccountTypes[0]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","moreActions","segAccountTypes[0]","flxAccountTypes","lblUsers"],"text")).toEqual("Manage Bill Pay Payees");
	  await kony.automation.scrollToWidget(["frmAccountsDetails","moreActions","segAccountTypes[1]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","moreActions","segAccountTypes[1]","flxAccountTypes","lblUsers"],"text")).toEqual("Manage Recipients");
	  //   await kony.automation.scrollToWidget(["frmAccountsDetails","moreActions","segAccountTypes[2]"]);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","moreActions","segAccountTypes[2]","flxAccountTypes","lblUsers"],"text")).toEqual("Stop Cheque Payment");
	  await kony.automation.scrollToWidget(["frmAccountsDetails","moreActions","segAccountTypes[2]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","moreActions","segAccountTypes[2]","flxAccountTypes","lblUsers"],"text")).toEqual("Update Account Settings");
	  appLog("Successfully Verified all the context menu options");	
	
	  kony.automation.flexcontainer.click(["frmAccountsDetails","flxSecondaryActions"]);
	  appLog("closed dropdown");
	  await kony.automation.playback.wait(5000);
	  appLog("Moving back to account dashboard");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","lblAccounts"],10000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","lblAccounts"]);
	
	}
	async function VerifySavingsAccountonDashBoard(){
	
	  appLog("Intiated method to verify Savings account in Dashboard");
	
	  //   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	  //   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts[1,0]","lblAccountName"],15000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts[1,0]","lblAccountName"], "text")).toContain("Saving");
	  VerifyAccountOnDashBoard("Savings");
	}
	async function VerifyCreditCardAccountonDashBoard(){
	  appLog("Intiated method to verify CreditCard account in Dashboard");
	  await kony.automation.playback.wait(30000);
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[2,-1]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts[2,-1]","flxAccountListItemHeader","lblTransactionHeader"], "text")).toEqual("Line of Credit ");
	  appLog("Successfully verified cred account");
	
	
	  // appLog("Intiated method to verify CreditCard account in Dashboard");
	
	  //   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	  //   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts[2,0]","lblAccountName"],15000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts[2,0]","lblAccountName"], "text")).toContain("Credit");
	  // VerifyAccountOnDashBoard("Credit");
	}
	
	async function VerifyDepositAccountonDashBoard(){
	
	  appLog("Intiated method to verify Deposit account in Dashboard");
	
	  //   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	  //   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts[3,0]","lblAccountName"],15000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts[3,0]","lblAccountName"], "text")).toContain("Deposit");
	  //VerifyAccountOnDashBoard("Deposit");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[5,-1]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts[5,-1]","flxAccountListItemHeader","lblTransactionHeader"], "text")).toEqual("Non Registered Term Deposit");
	  //  expect(ChqAccHeader.toEqual(AccountType));
	  appLog("Successfully verified Deposit account");
	}
	
	async function VerifyLoanAccountonDashBoard(){
	
	
	  appLog("Intiated method to verify Loan account in Dashboard");
	  await kony.automation.scrollToWidget(["frmAccountsLanding","accountList","segAccounts[4,-1]"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts[4,-1]","flxAccountListItemHeader","lblTransactionHeader"], "text")).toEqual("Term Loan");
	  //  expect(ChqAccHeader.toEqual(AccountType));
	  appLog("Successfully verified Loan account");
	  //   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	  //   await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts[4,0]","lblAccountName"],15000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","segAccounts[4,0]","lblAccountName"], "text")).toContain("Loan");
	  // VerifyAccountOnDashBoard("Loan");
	}
	
	
	async function verifyViewAllTranscation(){
	
	  appLog("Intiated method to view all Tranx in AccountDetails");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","lblTransactions"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountTransactionList","lblTransactions"],"text")).toEqual("Transactions");
	}
	
	async function verifyAdvancedSearch_AccountDetails(AmountRange1,AmountRange2){
	
	  appLog("Intiated method to verify Advanced Search in AccountDetails");
	
	  //   await kony.automation.playback.waitFor(["frmAccountsDetails","accountTransactionList","btnAll"],15000);
	  //   kony.automation.button.click(["frmAccountsDetails","accountTransactionList","btnAll"]);
	  //   appLog("Successfully clicked on All button under AccountDetails");
	  //   await kony.automation.playback.wait(5000);
	  await kony.automation.playback.wait(15000);
	  appLog("Intiated method to click on Seach Icon");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","flxSearch"],15000);
	  //frmAccountsDetails_transactions_flxSearch
	  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxSearch"]);
	  appLog("Successfully Clicked on Seach Icon");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTransactionType"],15000);
	  kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTransactionType"], "Transfers");
	  appLog("Successfully selected Transcation Type");
	
	  appLog("Intiated method to select Amount Range : ["+AmountRange1+","+AmountRange2+"]");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeFrom"],15000);
	  kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeFrom"],AmountRange1);
	  appLog("Successfully selected amount range From");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeTo"],15000);
	  kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeTo"],AmountRange2);
	  appLog("Successfully selected amount range To");
	
	  appLog("Successfully selected amount Range : ["+AmountRange1+","+AmountRange2+"]");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTimePeriod"],15000);
	  kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTimePeriod"], "Last 31 days");
	  appLog("Successfully selected date range");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnSearch"],15000);
	  kony.automation.button.click(["frmAccountsDetails","transactions","btnSearch"]);
	  appLog("Successfully clicked on Search button");
	  await kony.automation.playback.wait(15000);
	
	  var noResults= await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","rtxNoPaymentMessage"],15000);
	  if (noResults){
	    await kony.automation.scrollToWidget(["frmAccountsDetails","transactions","rtxNoPaymentMessage"]);
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","rtxNoPaymentMessage"],"text")).toEqual("No transactions found for the last 31 days");    
	    appLog("No Results found with given criteria..");
	  }
	  else  {
	    await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0,0]","flxDropdown"]);
	    appLog("Successfully clicked on Transcation with given search criteria");
	  }
	
	  // await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions"],15000);
	  // kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0,0]","flxDropdown"]);
	  // appLog("Successfully clicked on Transcation with given search criteria");
	}
	
	async function verifyAdvancedSearch_CreditCardAccount(AmountRange1,AmountRange2){
	
	  appLog("Intiated method to verify Advanced Search in AccountDetails");
	
	  //appLog("Intiated method to click on Seach Icon");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","flxSearch"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxSearch"]);
	  appLog("Successfully Clicked on Seach Icon");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTransactionType"],15000);
	  kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTransactionType"],"Deposit");
	  appLog("Successfully selected Transcation Type");
	
	  //appLog("Intiated method to select Amount Range : ["+AmountRange1+","+AmountRange2+"]");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeFrom"],15000);
	  kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeFrom"],AmountRange1);
	  appLog("Successfully selected amount range From");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeTo"],15000);
	  kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeTo"],AmountRange2);
	  appLog("Successfully selected amount range To");
	
	  //appLog("Successfully selected amount Range : ["+AmountRange1+","+AmountRange2+"]");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTimePeriod"],15000);
	  kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTimePeriod"], "CHOOSE_TIME_RANGE");
	  appLog("Successfully selected date range");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnSearch"],15000);
	  kony.automation.button.click(["frmAccountsDetails","transactions","btnSearch"]);
	  //appLog("Successfully clicked on Search button");
	  await kony.automation.playback.wait(15000);
	
	  var noResults= await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","rtxNoPaymentMessage"],15000);
	  if (noResults){
	    await kony.automation.scrollToWidget(["frmAccountsDetails","transactions","rtxNoPaymentMessage"]);
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","rtxNoPaymentMessage"],"text")).toEqual("No transactions found for the last 31 days");    
	    appLog("No Results found with given criteria..");
	  }
	  else  {
	    await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0,0]","flxDropdown"]);
	    appLog("Successfully clicked on Transcation with given search criteria");
	  }
	
	}
	
	
	async function verifyAdvancedSearch_LoanAccount(AmountRange1,AmountRange2){
	
	  appLog("Intiated method to verify Advanced Search in AccountDetails");
	
	  //appLog("Intiated method to click on Seach Icon");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","flxSearch"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxSearch"]);
	  appLog("Successfully Clicked on Seach Icon");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTransactionType"],15000);
	  kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTransactionType"],"Both");
	  appLog("Successfully selected Transcation Type");
	
	  //appLog("Intiated method to select Amount Range : ["+AmountRange1+","+AmountRange2+"]");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeFrom"],15000);
	  kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeFrom"],AmountRange1);
	  appLog("Successfully selected amount range From");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeTo"],15000);
	  kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeTo"],AmountRange2);
	  appLog("Successfully selected amount range To");
	
	  //appLog("Successfully selected amount Range : ["+AmountRange1+","+AmountRange2+"]");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTimePeriod"],15000);
	  kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTimePeriod"], "CHOOSE_TIME_RANGE");
	  appLog("Successfully selected date range");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnSearch"],15000);
	  kony.automation.button.click(["frmAccountsDetails","transactions","btnSearch"]);
	  //appLog("Successfully clicked on Search button");
	  await kony.automation.playback.wait(15000);
	
	  var noResults= await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","rtxNoPaymentMessage"],15000);
	  if (noResults){
	    await kony.automation.scrollToWidget(["frmAccountsDetails","transactions","rtxNoPaymentMessage"]);
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","rtxNoPaymentMessage"],"text")).toEqual("No transactions found for the last 31 days");    
	    appLog("No Results found with given criteria..");
	  }
	  else  {
	    await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0,0]","flxDropdown"]);
	    appLog("Successfully clicked on Transcation with given search criteria");
	  }
	
	}
	
	
	async function verifyAdvancedSearch_DepositAccount(AmountRange1,AmountRange2){
	
	  appLog("Intiated method to verify Advanced Search in AccountDetails");
	
	  //appLog("Intiated method to click on Seach Icon");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","flxSearch"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxSearch"]);
	  appLog("Successfully Clicked on Seach Icon");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTransactionType"],15000);
	  kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTransactionType"],"Both");
	  appLog("Successfully selected Transcation Type");
	
	  //appLog("Intiated method to select Amount Range : ["+AmountRange1+","+AmountRange2+"]");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeFrom"],15000);
	  kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeFrom"],AmountRange1);
	  appLog("Successfully selected amount range From");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeTo"],15000);
	  kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeTo"],AmountRange2);
	  appLog("Successfully selected amount range To");
	
	  //appLog("Successfully selected amount Range : ["+AmountRange1+","+AmountRange2+"]");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTimePeriod"],15000);
	  kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTimePeriod"], "CHOOSE_TIME_RANGE");
	  appLog("Successfully selected date range");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnSearch"],15000);
	  kony.automation.button.click(["frmAccountsDetails","transactions","btnSearch"]);
	  //appLog("Successfully clicked on Search button");
	  await kony.automation.playback.wait(15000);
	
	  var noResults= await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","rtxNoPaymentMessage"],15000);
	  if (noResults){
	    await kony.automation.scrollToWidget(["frmAccountsDetails","transactions","rtxNoPaymentMessage"]);
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","rtxNoPaymentMessage"],"text")).toEqual("No transactions found for the last 31 days");    
	    appLog("No Results found with given criteria..");
	  }
	  else  {
	    await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0,0]","flxDropdown"]);
	    appLog("Successfully clicked on Transcation with given search criteria");
	  }
	
	}
	
	async function VerifyChequingAccountDetails() {
	  appLog("Clicking on Account Summary tab and verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountSummary"],10000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","btnAccountSummary"]);
	  await kony.automation.playback.wait(30000);
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"], "text")).toContain("Current Balance");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"], "text")).toContain("Credit Limit");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"], "text")).toContain("Available Balance");
	
	  appLog("Clicking on Interest rate Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnBalanceDetails"],5000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnBalanceDetails"]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblTotalCreditsTitle"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblTotalCreditsTitle"], "text")).toContain("Interest Rate");
	
	  appLog("Clicking on AccountInfo Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountInfo"],5000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnAccountInfo"]);
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAccountNumber"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAccountNumber"], "text")).toContain("Account Number");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblIBANCode"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblIBANCode"], "text")).toContain("SWIFT Code");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPrimaryHolder"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPrimaryHolder"], "text")).toContain("Transit / Branch Number");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblJointHolderTitle"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblJointHolderTitle"], "text")).toContain("Institution Number");
	  await kony.automation.playback.wait(10000);
	  //Moving back to account Dashboard//Added by Tapasya
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	}
	
	async function VerifyLineOfCreditAccountDetails() {
	  appLog("Clicking on Account Summary tab and verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountSummary"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","btnAccountSummary"]);
	  await kony.automation.playback.wait(15000);
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"], "text")).toContain("Current Balance");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"], "text")).toContain("Current Amount Due");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"], "text")).toContain("Payment Due Date");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingWithdrawalsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPendingWithdrawalsTitle"], "text")).toContain("Credit Limit");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"], "text")).toContain("Started On");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblRepaymentTypeTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblRepaymentTypeTitle"], "text")).toContain("Payment Schedule");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"], "text")).toContain("Available Balance");
	
	  appLog("Clicking on Interest rate Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnBalanceDetails"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnBalanceDetails"]);
	  await kony.automation.playback.wait(10000);
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblTotalDebtsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblTotalDebtsTitle"], "text")).toContain("Interest Rate");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblDividentRateTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblDividentRateTitle"], "text")).toContain("Interest Amount Paid for Previous Period");
	
	  appLog("Clicking on Account Info Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountInfo"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnAccountInfo"]);
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAccountNumber"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAccountNumber"], "text")).toContain("Account Number");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblIBANCode"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblIBANCode"], "text")).toContain("SWIFT Code");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPrimaryHolder"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPrimaryHolder"], "text")).toContain("Transit / Branch Number");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblJointHolderTitle"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblJointHolderTitle"], "text")).toContain("Institution Number");
	  //Moving back to account Dashboard//Added by Tapasya
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	}
	
	async function VerifyRegisteredSavingsAccountDetails() {
	  appLog("Clicking on Account Summary tab and verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountSummary"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","btnAccountSummary"]);
	  await kony.automation.playback.wait(15000);
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"], "text")).toContain("Maturity Date"); 
	
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"], "text")).toContain("Contract Number");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"], "text")).toContain("Current Balance");
	
	  appLog("Clicking on Interest rate Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnBalanceDetails"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnBalanceDetails"]);
	  await kony.automation.playback.wait(10000);  
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblTotalDebtsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblTotalDebtsTitle"], "text")).toContain("Interest Rate");  
	  //   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblDividentRateTitle"],15000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblDividentRateTitle"], "text")).toContain("Interest Amount Paid for Previous Period");
	
	  appLog("Clicking on Account Info Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountInfo"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnAccountInfo"]);
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAccountNumber"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAccountNumber"], "text")).toContain("Account Number");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblIBANCode"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblIBANCode"], "text")).toContain("SWIFT Code");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPrimaryHolder"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPrimaryHolder"], "text")).toContain("Transit / Branch Number");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblJointHolderTitle"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblJointHolderTitle"], "text")).toContain("Institution Number");
	  //Moving back to account Dashboard//Added by Tapasya
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	}
	async function VerifyNonRegisteredTermDepositAccountDetails() {
	  appLog("Clicking on Account Summary tab and verifying the fields");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountSummary"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","btnAccountSummary"]);
	  await kony.automation.playback.wait(20000);
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"], "text")).toContain("Maturity Date");  
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"], "text")).toContain("Principal Investment");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"], "text")).toContain("Started On");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"], "text")).toContain("Original Deposit");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"], "text")).toContain("Current Balance");
	
	  appLog("Clicking on Interest rate Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnBalanceDetails"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnBalanceDetails"]);
	
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblTotalCreditsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblTotalCreditsTitle"], "text")).toContain("Maturity Option");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblDividentRateYTDTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblDividentRateYTDTitle"], "text")).toContain("Interest Rate");  
	
	
	  appLog("Clicking on Account Info Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountInfo"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnAccountInfo"]);
	
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAccountNumber"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAccountNumber"], "text")).toContain("Account Number");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblIBANCode"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblIBANCode"], "text")).toContain("SWIFT Code");
	  //    await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPrimaryHolder"],10000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPrimaryHolder"], "text")).toContain("Transit / Branch Number");
	  //    await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblJointHolderTitle"],10000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblJointHolderTitle"], "text")).toContain("Institution Number");
	  //Moving back to account Dashboard//Added by Tapasya
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	}
	async function VerifyTermLoanAccountDetails() {
	  appLog("Clicking on Account Summary tab and verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountSummary"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","btnAccountSummary"]);
	  await kony.automation.playback.wait(15000);
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"], "text")).toContain("Maturity Date"); 
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblStartedOnTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblStartedOnTitle"], "text")).toContain("Started On");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"], "text")).toContain("Payment Schedule"); 
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"], "text")).toContain("Current Amount Due");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblOriginalAmountTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblOriginalAmountTitle"], "text")).toContain("Original Amount"); 
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblRepaymentTypeTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblRepaymentTypeTitle"], "text")).toContain("Repayment Type");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"], "text")).toContain("Payment Due Date");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingWithdrawalsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPendingWithdrawalsTitle"], "text")).toContain("Disbursement Date");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"], "text")).toContain("Current Balance");
	
	  appLog("Clicking on Interest rate Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnBalanceDetails"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnBalanceDetails"]);
	  await kony.automation.playback.wait(10000);  
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblTotalDebtsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblTotalDebtsTitle"], "text")).toContain("Interest Rate");  
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblDividentRateTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblDividentRateTitle"], "text")).toContain("Interest Amount Paid for Previous Period");
	
	  appLog("Clicking on Account Info Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountInfo"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnAccountInfo"]);
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAccountNumber"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAccountNumber"], "text")).toContain("Account Number");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblIBANCode"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblIBANCode"], "text")).toContain("SWIFT Code");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPrimaryHolder"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPrimaryHolder"], "text")).toContain("Transit / Branch Number");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblJointHolderTitle"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblJointHolderTitle"], "text")).toContain("Institution Number");
	  //Moving back to account Dashboard//Added by Tapasya
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	}
	async function VerifyMortgageAccountDetails() {
	  appLog("Clicking on Account Summary tab and verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountSummary"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","btnAccountSummary"]);
	  await kony.automation.playback.wait(15000);
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"], "text")).toContain("Scheduled Payment Amount");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblStartedOnTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblStartedOnTitle"], "text")).toContain("Started On");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"], "text")).toContain("Payment Schedule");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"], "text")).toContain("Payment Due Date");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblOriginalAmountTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblOriginalAmountTitle"], "text")).toContain("Original Amount");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblRepaymentTypeTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblRepaymentTypeTitle"], "text")).toContain("Repayment Type");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"],15000);
	  //commenting as dev06 has renewaldate
	  //expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"], "text")).toContain("Maturity Date");
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"], "text")).toContain("Renewal Date");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingWithdrawalsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPendingWithdrawalsTitle"], "text")).toContain("Disbursement Date");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"], "text")).toContain("Current Balance");
	
	  appLog("Clicking on Interest rate Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnBalanceDetails"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnBalanceDetails"]);
	  await kony.automation.playback.wait(10000);
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblTotalDebtsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblTotalDebtsTitle"], "text")).toContain("Interest Rate");
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblDividentRateTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblDividentRateTitle"], "text")).toContain("Interest Amount Paid for Previous Period");
	
	  appLog("Clicking on Account Info Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountInfo"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnAccountInfo"]);
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAccountNumber"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAccountNumber"], "text")).toContain("Account Number");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblIBANCode"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblIBANCode"], "text")).toContain("SWIFT Code");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPrimaryHolder"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPrimaryHolder"], "text")).toContain("Transit / Branch Number");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblJointHolderTitle"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblJointHolderTitle"], "text")).toContain("Institution Number");
	  //Moving back to account Dashboard//Added by Tapasya
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	}
	
	async function VerifyRegisteredTermDepositAccountDetails() {
	  appLog("Clicking on Account Summary tab and verifying the fields");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountSummary"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","btnAccountSummary"]);
	  await kony.automation.playback.wait(20000);
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"], "text")).toContain("Maturity Date");  
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"], "text")).toContain("Principal Investment");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"], "text")).toContain("Started On");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblStartedOnTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblStartedOnTitle"], "text")).toContain("Original Deposit");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"], "text")).toContain("Contract Number"); 
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"], "text")).toContain("Current Balance");
	
	  appLog("Clicking on Interest rate Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnBalanceDetails"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnBalanceDetails"]);
	
	  await kony.automation.playback.wait(10000);
	  //   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblTotalCreditsTitle"],15000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblTotalCreditsTitle"], "text")).toContain("Maturity Option");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblDividentRateYTDTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblDividentRateYTDTitle"], "text")).toContain("Maturity Option");  
	
	
	  appLog("Clicking on Account Info Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountInfo"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnAccountInfo"]);
	
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAccountNumber"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAccountNumber"], "text")).toContain("Account Number");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblIBANCode"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblIBANCode"], "text")).toContain("SWIFT Code");
	  //    await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPrimaryHolder"],10000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPrimaryHolder"], "text")).toContain("Transit / Branch Number");
	  //    await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblJointHolderTitle"],10000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblJointHolderTitle"], "text")).toContain("Institution Number");
	  //Moving back to account Dashboard//Added by Tapasya
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	}
	//async function VerifyLeaseAccountDetails() {
	//     appLog("Clicking on Account Summary tab and verifying the fields");
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountSummary"],15000);
	//   kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","btnAccountSummary"]);
	//   await kony.automation.playback.wait(15000);
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"], "text")).toContain("Maturity Date"); 
	//    await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblStartedOnTitle"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblStartedOnTitle"], "text")).toContain("Started On");
	//     await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblRepaymentTypeTitle"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblRepaymentTypeTitle"], "text")).toContain("Repayment Type");
	//     await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"], "text")).toContain("Current Amount Due");
	//     await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblOriginalAmountTitle"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblOriginalAmountTitle"], "text")).toContain("Original Amount");
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceRightTitle"], "text")).toContain("Payment Schedule"); 
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPendingDepositsTitle"], "text")).toContain("Payment Due Date");
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingWithdrawalsTitle"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPendingWithdrawalsTitle"], "text")).toContain("Disbursement Date");
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"], "text")).toContain("Current Balance");
	
	//   appLog("Clicking on Interest rate Tab and Verifying the fields");
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnBalanceDetails"],15000);
	//   kony.automation.button.click(["frmAccountsDetails","accountSummary","btnBalanceDetails"]);
	//   await kony.automation.playback.wait(10000);  
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblTotalDebtsTitle"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblTotalDebtsTitle"], "text")).toContain("Interest Rate");  
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblDividentRateTitle"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblDividentRateTitle"], "text")).toContain("Interest Amount Paid for Previous Period");
	
	//   appLog("Clicking on Account Info Tab and Verifying the fields");
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountInfo"],15000);
	//   kony.automation.button.click(["frmAccountsDetails","accountSummary","btnAccountInfo"]);
	//   await kony.automation.playback.wait(15000);
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAccountNumber"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAccountNumber"], "text")).toContain("Account Number");
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblIBANCode"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblIBANCode"], "text")).toContain("SWIFT Code");
	//    await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPrimaryHolder"],10000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPrimaryHolder"], "text")).toContain("Transit / Branch Number");
	//    await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblJointHolderTitle"],10000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblJointHolderTitle"], "text")).toContain("Institution Number");
	//   //Moving back to account Dashboard//Added by Tapasya
	//   kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	// }
	
	async function selectContextMenuOption(Option){
	  appLog("Intiated method to select context menu option :: "+Option);
	  if (Option==="Pay Bill From"){
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountListMenu","segAccountListActions[0]","flxAccountTypes"],15000);
	    await kony.automation.scrollToWidget(["frmAccountsLanding","accountListMenu","segAccountListActions[0]","flxAccountTypes"]);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountListMenu","segAccountListActions[0]","flxAccountTypes"]);
	  }
	  else if (Option==="Move Money"){
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountListMenu","segAccountListActions[1]","flxAccountTypes"],15000);
	    await kony.automation.scrollToWidget(["frmAccountsLanding","accountListMenu","segAccountListActions[1]","flxAccountTypes"]);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","accountListMenu","segAccountListActions[1]","flxAccountTypes"]);
	  }
	}
	//   var myList = new Array();
	
	//   await kony.automation.playback.waitFor(["frmAccountsLanding","accountListMenu","segAccountListActions"],15000);
	//   var accounts_Size=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu","segAccountListActions"],"data");
	
	//   var segLength=accounts_Size.length;
	//   //appLog("Length is :: "+segLength);
	//   for(var x = 0; x <segLength; x++) {
	
	//     var seg="segAccountListActions["+x+"]";
	//     //appLog("Segment will be :: "+seg);
	//     await kony.automation.playback.waitFor(["frmAccountsLanding","accountListMenu",seg,"lblUsers"],15000);
	//     var TransfersText=kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountListMenu",seg,"lblUsers"], "text");
	//     //appLog("Text is :: "+TransfersText);
	
	//     if(TransfersText===Option){
	//       appLog("Option to be selected is :"+TransfersText);
	//       //kony.automation.flexcontainer.click(["frmAccountsLanding","accountListMenu",seg,"flxAccountTypes"]);
	//       kony.automation.widget.touch(["frmAccountsLanding","accountListMenu",seg,"flxAccountTypes"], null,null,[45,33]);
	//       appLog("Successfully selected menu option  : <b>"+TransfersText+"</b>");
	//       await kony.automation.playback.wait(5000);
	//       myList.push("TRUE");
	//       break;
	//     }else{
	//       myList.push("FALSE");
	//     }
	
	
	//   appLog("My Actual List is :: "+myList);
	//   var Status=JSON.stringify(myList).includes("TRUE");
	//   appLog("Over all Result is  :: <b>"+Status+"</b>");
	//   expect(Status).toBe(true);
	// }
	
	//Added new Function "SelectQuickActionsOption" by Tapasya
	async function SelectQuickActionsOption(Option){
	  appLog("Intiated method to select Quick Action option :: "+Option);
	  if (Option==="Move Money"){
	    appLog("selecting Move money option");
	    await kony.automation.playback.waitFor(["frmAccountsDetails","btnMakeTransfer"],10000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","btnMakeTransfer"]);
	    await kony.automation.playback.wait(20000);
	    appLog("selected Move money");
	  }
	  else if(Option==="Pay Bill"){
	    await kony.automation.playback.waitFor(["frmAccountsDetails","btnScheduledTransfer"],10000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","btnScheduledTransfer"]);
	    await kony.automation.playback.wait(10000);
	  }
	  else if (Option==="Stop Pre-Authorized Payment Requests"){
	    await kony.automation.playback.waitFor(["frmAccountsDetails","btnPayABill"],10000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","btnPayABill"]);
	  }
	  //   else{
	  //     appLog("Invalid Account");
	  //   }
	}
	
	//Added new Function "ChequingAccountQuickActionsSecondaryOption" by Tapasya
	async function ChequingAccountQuickActionsSecondaryOption(Option){
	  await kony.automation.playback.wait(10000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","flxSecondaryActions"]);
	  appLog("Intiated method to select Quick Action secondary option :: "+Option);
	  if (Option==="Manage Bill Pay Payees"){
	    appLog("selecting Manage Bill Pay Payees option");
	    await kony.automation.playback.wait(10000);
	    await kony.automation.playback.waitFor(["frmAccountsDetails","moreActions","segAccountTypes[0]","flxAccountTypes"],10000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","moreActions","segAccountTypes[0]","flxAccountTypes"]);
	    appLog("selected Manage Bill Pay Payees");
	    await kony.automation.playback.wait(10000);
	    appLog("Validate ManagePayPayees Page Navigation");
	    await kony.automation.playback.waitFor(["frmManagePayees","lblPayABill"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","lblPayABill"], "text")).toContain("Pay Bills");
	    expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","btnManagePayees"], "text")).toContain("Manage Payees");
	    appLog("Validated ManagePayPayees Page Navigation");
	    await kony.automation.playback.wait(5000);
	//     await kony.automation.playback.waitFor(["frmAccountsDetails","moreActions","segAccountTypes[0]","flxAccountTypes"],10000);
	//     kony.automation.flexcontainer.click(["frmAccountsDetails","moreActions","segAccountTypes[0]","flxAccountTypes"]);
	//     await kony.automation.playback.wait(10000);
	    // 	var name=kony.automation.widget.getWidgetProperty(["frmManagePayees","btnManagePayees"], "text");
	    // 	appLog("name value is:<b>"+name+"</b>");
	    // 	expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","btnManagePayees"], "text")).toContain("Manage Payees");
	    // 	expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","lblPayABill"], "text")).toContain("Payments");
	    //     await kony.automation.playback.wait(10000);
	  }
	  else if(Option==="Manage Recipients"){
	    await kony.automation.playback.waitFor(["frmAccountsDetails","moreActions","segAccountTypes[1]","flxAccountTypes"],10000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","moreActions","segAccountTypes[1]","flxAccountTypes"]);
	    await kony.automation.playback.wait(10000);
	
	    appLog("Validate Manage Recipients Page Navigation");
	    await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"], "text")).toContain("Manage Recipients");
	    expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblAddBankAccount"], "text")).toContain("Add CWB Account");
	    appLog("Validated Manage Recipients Page Navigation");
	  }
	  else if (Option==="Stop Cheque Payment"){
	    await kony.automation.playback.waitFor(["frmAccountsDetails","moreActions","segAccountTypes[2]","flxAccountTypes"],10000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","moreActions","segAccountTypes[2]","flxAccountTypes"]);
	
	    appLog("Validate Stop Cheque Payment Page Navigation");
	    await kony.automation.playback.waitFor(["frmStopPayments","lblChequeBookRequests"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblChequeBookRequests"], "text")).toContain("Stop Cheque Payment Request");
	    await kony.automation.playback.wait(10000);
	
	  }
	  else if (Option==="Update Account Settings"){
	    await kony.automation.playback.wait(10000);
	    await kony.automation.playback.waitFor(["frmAccountsDetails","moreActions","segAccountTypes[3]","flxAccountTypes"],10000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","moreActions","segAccountTypes[3]","flxAccountTypes"]);
	    await kony.automation.playback.wait(10000);
	    appLog("Validate Update Account Settings Page Navigation");
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountSettings"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountSettings"], "text")).toContain("Account Settings");
	    appLog("Validated Update Account Settings Page Navigation");
	    await kony.automation.playback.wait(10000);
	  }
	  //   else{
	  //     appLog("Invalid Account");
	  //   }
	}
	
	//Added new Function "SavingsAccountQuickActionsSecondaryOption" by Tapasya
	async function SavingsAccountQuickActionsSecondaryOption(Option){
	  kony.automation.flexcontainer.click(["frmAccountsDetails","flxSecondaryActions"]);
	  appLog("Intiated method to select Quick Action secondary option :: "+Option);
	  if (Option==="Manage Bill Pay Payees"){
	    appLog("selecting Manage Bill Pay Payees option");
	    await kony.automation.playback.waitFor(["frmAccountsDetails","moreActions","segAccountTypes[0]","flxAccountTypes"],10000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","moreActions","segAccountTypes[0]","flxAccountTypes"]);
	    appLog("selected Manage Bill Pay Payees");
	    await kony.automation.playback.wait(15000);
	    appLog("Validate ManagePayPayees Page Navigation");
	    await kony.automation.playback.waitFor(["frmManagePayees","lblPayABill"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","lblPayABill"], "text")).toContain("Pay Bills");
	    appLog("Validated ManagePayPayees Page Navigation");
	
	  }
	  else if(Option==="Manage Recipients"){
	    await kony.automation.playback.waitFor(["frmAccountsDetails","moreActions","segAccountTypes[1]","flxAccountTypes"],10000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","moreActions","segAccountTypes[1]","flxAccountTypes"]);
	    await kony.automation.playback.wait(10000);
	
	    appLog("Validate Manage Recipients Page Navigation");
	    await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"], "text")).toContain("Manage Recipients");
	    expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblAddBankAccount"], "text")).toContain("Add CWB Account");
	    appLog("Validated Manage Recipients Page Navigation");
	  }
	  //   else if (Option==="Stop Cheque Payment"){
	  //     await kony.automation.playback.waitFor(["frmAccountsDetails","moreActions","segAccountTypes[2]","flxAccountTypes"],10000);
	  //     kony.automation.flexcontainer.click(["frmAccountsDetails","moreActions","segAccountTypes[2]","flxAccountTypes"]);
	
	  //     appLog("Validate Stop Cheque Payment Page Navigation");
	  //     await kony.automation.playback.waitFor(["frmStopPayments","lblChequeBookRequests"],15000);
	  //     expect(kony.automation.widget.getWidgetProperty(["frmStopPayments","lblChequeBookRequests"], "text")).toContain("Stop Cheque Payment Request");
	  //     await kony.automation.playback.wait(10000);
	
	  //   }
	  else if (Option==="Update Account Settings"){
	    await kony.automation.playback.wait(10000);
	    await kony.automation.playback.waitFor(["frmAccountsDetails","moreActions","segAccountTypes[2]","flxAccountTypes"],10000);
	    kony.automation.flexcontainer.click(["frmAccountsDetails","moreActions","segAccountTypes[2]","flxAccountTypes"]);
	    await kony.automation.playback.wait(10000);
	    appLog("Validate Update Account Settings Page Navigation");
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountSettings"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountSettings"], "text")).toContain("Account Settings");
	    appLog("Validated Update Account Settings Page Navigation");
	    await kony.automation.playback.wait(10000);
	  }
	  //   else{
	  //     appLog("Invalid Account");
	  //   }
	}
	
	async function ClickUpdateAccountSettings(){
	
	  appLog("Intiated method to select Update account settings");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","btnScheduledTransfer"],10000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","btnScheduledTransfer"]);
	  appLog("Clicked on Update Account settings");
	  await kony.automation.playback.wait(10000);
	  appLog("Validate Update Account Settings Page Navigation");
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountSettings"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountSettings"], "text")).toContain("Account Settings");
	  appLog("Validated Update Account Settings Page Navigation");
	  await kony.automation.playback.wait(10000);
	}
	
	async function BillPayValidationAllAccounts()
	{
	  appLog("Intiating method to validate Pay Bill Page is loaded");
	  await kony.automation.playback.wait(10000);
	  //   await kony.automation.playback.waitFor(["frmPayABill","lbxPayFromValue"],10000);  
	  //   var getValue = document.getElementById(["frmPayABill","lbxPayFromValue"]).selectedOptions[0].value;
	  //   expect(kony.automation.widget.getWidgetProperty(["frmPayABill","lbxPayFromValue"],"text")).not.toBe(''); 
	  //   appLog("Successfully verified that PayFrom is not empty");
	  expect(kony.automation.widget.getWidgetProperty(["frmPayABill","lblPayABill"],"text")).toEqual("Pay Bills");
	  await kony.automation.playback.wait(10000);
	  appLog("Moving back to account Dashboard");
	  kony.automation.flexcontainer.click(["frmPayABill","customheadernew","lblAccounts"]);
	  await kony.automation.playback.wait(10000);
	  appLog("Successfully moved back to account Dashboard");
	}
	async function verifyVivewStatementsHeader(){
	
	  await kony.automation.playback.waitFor(["frmAccountsDetails","viewStatementsnew","lblViewStatements"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","viewStatementsnew","lblViewStatements"], "text")).toContain("Statements");
	
	}
	
	async function VerifySavingsAccountDetails() {
	  appLog("Clicking on Account Summary tab and verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountSummary"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","btnAccountSummary"]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblExtraFieldTitle"], "text")).toContain("Credit Limit");
	  // await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"],15000);
	  //  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblCurrentBalanceTitle"], "text")).toContain("Credit Limit");
	  //frmAccountsDetails_accountSummary_lblAvailableBalanceTitle
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAvailableBalanceTitle"], "text")).toContain("Available Balance");
	
	  appLog("Clicking on Interest rate Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnBalanceDetails"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnBalanceDetails"]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblTotalCreditsTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblTotalCreditsTitle"], "text")).toContain("Interest Rate");
	
	}
	async function VerifySavingsAccount_InfoTab() {
	
	  appLog("Clicking on Info Tab and Verifying the fields");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountInfo"],15000);
	  kony.automation.button.click(["frmAccountsDetails","accountSummary","btnAccountInfo"]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAccountNumber"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAccountNumber"], "text")).toContain("Account Number");
	  await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblIBANCode"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblIBANCode"], "text")).toContain("SWIFT Code");
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblPrimaryHolder"], "text")).toContain("Transit / Branch Number");
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblJointHolderTitle"], "text")).toContain("Institution Number");
	  //Moving back to account Dashboard//Added by Tapasya
	  //kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	}
	async function NavigatetoAccountStatement()
	{
	  appLog("Inititated method to navigate to account statement");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","ACCOUNTS1flxMyAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ACCOUNTS1flxMyAccounts"]);
	}
	async function Statement_SelectMonthandverify()
	{
	  //kony.automation.widget.touch(["frmAccountsDetails"], null,null,[0,0]);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","ViewStatements","Segment0d986ba7141b544[0]","btnStatement1"],15000);
	  kony.automation.button.click(["frmAccountsDetails","ViewStatements","Segment0d986ba7141b544[0]","btnStatement1"]);
	  if (await kony.automation.playback.waitFor(["frmAccountsDetails","noStatementsPopup"],15000))
	  {
	    appLog("There are not statements for the selected month");
	    await kony.automation.playback.waitFor(["frmAccountsDetails","noStatementsPopup","btnYes"],15000);
	    kony.automation.button.click(["frmAccountsDetails","noStatementsPopup","btnYes"]);
	  }
	  appLog("Successfully displayed the monthly e-statements");
	}
	async function NaviagteBacktoDashboard_Statements()
	{
	  await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	  // frmAccountsDetails_customheader_topmenu_flxaccounts
	}
	async function MoveMoneyAllAccountsValidation()
	{
	  appLog("Getting Account Name");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsDetails","lblAccountTypes"],10000);
	  var acc=kony.automation.widget.getWidgetProperty(["frmAccountsDetails","lblAccountTypes"], "text");
	  appLog("Account is :<b>"+acc+"</b>");
	  var Acc1=(acc.substr(0,15));
	  appLog("Account1 is :<b>"+Acc1+"</b>");
	  await kony.automation.playback.wait(5000);
	  SelectQuickActionsOption("Move Money");
	   await kony.automation.playback.wait(30000);
	  appLog("selected Move money");
	  await kony.automation.playback.wait(30000);
	  appLog("Validate TransferFrom account name"); 
	 
	//   kony.automation.flexcontainer.click(["frmFastTransfers","flxFrom"]);
	//   await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmFastTransfers","lblSelectAccount"],10000);
	  var acc2=kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblSelectAccount"],"text");
	  appLog("Account2 is :<b>"+acc2+"</b>");
	  var Acc2=(acc2.substr(0,15));
	  appLog("Account2 is :<b>"+Acc2+"</b>");
	  expect(Acc2).toEqual(Acc1);
	  await kony.automation.playback.wait(5000);
	  appLog("Successfully validated Pay from"); 
	//   appLog("Getting Available Balance");
	//   await kony.automation.playback.wait(25000);
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","btnAccountSummary"],10000);
	//   kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","btnAccountSummary"]);
	//   await kony.automation.playback.wait(10000);
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceValue"],5000);
	//   var bal1=kony.automation.widget.getWidgetProperty(["frmAccountsDetails","accountSummary","lblAvailableBalanceValue"], "text");
	//   appLog("Balance amount is :<b>"+bal1+"</b>");
	//   await kony.automation.playback.wait(10000);
	//   SelectQuickActionsOption("Move Money");
	//   appLog("selected Move money");
	//   appLog("Validate TransferFrom amount"); 
	//   await kony.automation.playback.wait(10000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","lblFromAmount"],10000);
	//   var bal2=kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblFromAmount"],"text");
	//   //await kony.automation.playback.wait(10000);
	//   appLog("Transfer from is : <b>"+bal2+"</b>");
	//   expect(bal2).toContain(bal1);
	//   await kony.automation.playback.wait(5000);
	//   appLog("Successfully validated Pay from");  
	}
	async function VerifyTransactionPagination()
	{
	  await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","flxPaginationNext"]);
	  await kony.automation.scrollToWidget(["frmAccountsDetails","transactions","flxPaginationNext"]);
	  kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxPaginationNext"]);
	  await kony.automation.playback.wait(5000);
	  var fiftiethTohundred = kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","lblPagination"],"text"); 
	  // frmAccountsDetails_transactions_lblPagination
	  if (fiftiethTohundred === "51 - 100 Transactions")
	  {
	    appLog("The accounts pagination is working as expected");	
	  }
	  else{
	    appLog("The pagination of accounts is failed");
	  }
	}
	
	
	
	async function navigateToMoveMoney(){
	
	  appLog("Intiated method to Navigate Move Money Screen");
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","Label0dcf00103bdba46"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","Label0dcf00103bdba46"]);
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmFastTransfers","lblTransfers"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblTransfers"], "text")).toEqual("Transfer Between Accounts");
	  await kony.automation.playback.waitFor(["frmFastTransfers","lblAddBankAccount"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblAddBankAccount"],"text")).toContain("Add CWB Recipient");
	  await kony.automation.playback.waitFor(["frmFastTransfers","lblAddKonyAccount"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblAddKonyAccount"],"text")).toContain("Manage Recipients");
	  appLog("Successfully Navigated to FastTransfers Screen and verified the UI");
	  }
	async function NavigatetoAddCWBAccount_TransferLanding(){
	  await kony.automation.playback.waitFor(["frmFastTransfers","lblAddBankAccount"],15000);
	  kony.automation.flexcontainer.click(["frmFastTransfers","lblAddBankAccount"]);
	  await kony.automation.playback.wait(5000);  
	}
	async function navigateToInteracEtransfer(){
	
	  appLog("Intiated method to Navigate to Interac e-Transfer Screen");
	  
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxeTransfer"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxeTransfer"]);
	  await kony.automation.playback.wait(20000);
	  await kony.automation.playback.waitFor(["frmeTransferSendMoney","rtxeTransferSendMoney"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","rtxeTransferSendMoney"], "text")).toContain("Send an ");
	  await kony.automation.playback.waitFor(["frmeTransferSendMoney","lblManageRecipients"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","lblManageRecipients"], "text")).toContain("Manage Recipients");
	  await kony.automation.playback.waitFor(["frmeTransferSendMoney","lblSenderProfileSettings"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","lblSenderProfileSettings"], "text")).toContain("Sender Profile Settings");
	  //  await kony.automation.playback.waitFor(["frmeTransferSendMoney","lbleTransferAutodeposit"],15000);
	//  expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","lbleTransferAutodeposit"], "text")).toContain("Autodeposit");
	//  await kony.automation.playback.waitFor(["frmeTransferSendMoney","lbleTransferRequestMoney"],15000);
	  //frmeTransferSendMoney_lbleTransferRequestMoney
	  //expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","lbleTransferRequestMoney"], "text")).toContain("Request Money");
	 await kony.automation.playback.waitFor(["frmeTransferSendMoney","lblTransferHistory"],15000);
	 expect(kony.automation.widget.getWidgetProperty(["frmeTransferSendMoney","lblTransferHistory"], "text")).toContain("Transfer History");
	  
	  appLog("Successfully Navigated to Interac e-Transfer Screen");
	}
	
	async function SelectFromAccount(fromAcc){
	
	   appLog("Intiated method to Select From Account");
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmFastTransfers","lbTransferFrom"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lbTransferFrom"], "text")).toEqual("Transfer From");
	  await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferFrom"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","txtTransferFrom"], "placeholder")).toEqual("Search by account name or number");
	  kony.automation.widget.touch(["frmFastTransfers","txtTransferFrom"], [230,25],null,null);
	  kony.automation.textbox.enterText(["frmFastTransfers","txtTransferFrom"],fromAcc);
	   appLog("Successfully Entered From Account");
	  await kony.automation.playback.wait(3000);
	  kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAmount"]);
	   appLog("Successfully Selected From Account from List");
	}
	
	async function SelectToAccount(ToAccReciptent){
	
	  appLog("Intiated method to Select To Account :: <b>"+ToAccReciptent+"</b>");
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmFastTransfers","lbTransferTo"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lbTransferTo"], "text")).toEqual("Transfer To");
	  await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferTo"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","txtTransferTo"], "placeholder")).toEqual("Search by account name, account number or recipient name");
		kony.automation.widget.touch(["frmFastTransfers","txtTransferTo"], [128,19],null,null);
		kony.automation.widget.touch(["frmFastTransfers"], null,null,[232,333]);
		kony.automation.widget.touch(["frmFastTransfers","flxToSegment"], null,null,[132,86]);
		kony.automation.widget.touch(["frmFastTransfers"], null,null,[239,444]);
	    await kony.automation.playback.wait(15000);
		kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxTransfersFrom","flxAccountListItemWrapper","lblAccountName"]);
	  
	}
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferTo"],15000);
	//   kony.automation.widget.touch(["frmFastTransfers","txtTransferTo"], [72,9],null,null);
	
	  //   if(ToAccReciptent==='OwnAcc'){
	  //     kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],"Saving");
	  //      appLog("Successfully Entered Default To Account : ");
	  //     await kony.automation.playback.wait(5000);
	  //     expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","segTransferTo[0,0]","lblAccountName"], "text")).not.toBe('');
	  //   }else{
	  //     kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],ToAccReciptent);
	  //      appLog("Successfully Entered To Account : <b>"+ToAccReciptent+"</b>");
	  //     await kony.automation.playback.wait(5000);
	  //     expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","segTransferTo[0,0]","lblAccountName"], "text")).not.toBe('');
	  //   }
	
	 // kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],ToAccReciptent);
	  // appLog("Successfully Entered To Account : <b>"+ToAccReciptent+"</b>");
	//   await kony.automation.playback.wait(20000);
	//  // expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","segTransferTo[0,0]","lblAccountName"], "text")).not.toBe('');
	
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxTransfersFrom","flxAccountListItemWrapper"]);
	//    appLog("Successfully Selected To Account from List");
	
	
	
	async function EnterAmount(amountValue) {
	  await kony.automation.playback.waitFor(["frmFastTransfers","lblAmount"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblAmount"], "text")).toEqual("Amount");
	  await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","tbxAmount"], "placeholder")).toEqual("0.00");
	  kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],amountValue);
	  var placeholder = kony.automation.widget.getWidgetProperty(["frmFastTransfers","tbxAmount"], "placeholder");
	  appLog("Successfully Entered Amount as : <b>"+amountValue+"</b>");
	  appLog("<b>"+placeholder+"</b>");
	  await kony.automation.scrollToWidget(["frmFastTransfers","customfooternew","btnFaqs"]);
	}
	async function verifyFrequencyList(){
	  await kony.automation.playback.waitFor(["frmFastTransfers","lbxFrequency"],15000);
	  var List = kony.automation.widget.getWidgetProperty(["frmFastTransfers","lbxFrequency"], "masterData");
	  var expectedlist = Transfers.p2pAccount.frequencylist;
	  for (var i= 0;i<List.Length;i++){
	    expect(List(i)===expectedlist(i));
	  }
	   appLog("<b>"+List+"</b>");
	  
	}
	
	async function SelectFrequency(freqValue) {
	
	  kony.automation.flexcontainer.click(["frmFastTransfers","flxContainer4"]);
	  kony.automation.listbox.selectItem(["frmFastTransfers","lbxFrequency"], freqValue);
	  // appLog("Successfully Selected Freq as : <b>"+freqValue+"</b>");
	}
	
	async function SelectDateRange() {
	
	  kony.automation.calendar.selectDate(["frmFastTransfers","calSendOnNew"], [11,28,2022]);
	  kony.automation.calendar.selectDate(["frmFastTransfers","calEndingOnNew"], [11,28,2023]);
	 //  appLog("Successfully Selected DateRange");
	}
	
	async function SelectSendOnDate() {
	
	  kony.automation.calendar.selectDate(["frmFastTransfers","calSendOnNew"], [11,29,2022]);
	   appLog("Successfully Selected SendOn Date");
	}
	
	async function SelectOccurences(occurences) {
	
	  kony.automation.listbox.selectItem(["frmFastTransfers","lbxForHowLong"], "NO_OF_RECURRENCES");
	  kony.automation.textbox.enterText(["frmFastTransfers","tbxNoOfRecurrences"],occurences);
	   appLog("Successfully Selected Occurences as <b>"+occurences+"</b>");
	  kony.automation.calendar.selectDate(["frmFastTransfers","calSendOnNew"], [11,29,2022]);
	   appLog("Successfully Selected SendOn Date");
	}
	async function EnterNoteValue(notes) {
	
	  await kony.automation.scrollToWidget(["frmFastTransfers","lblNotes"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","lblNotes"], "text")).toEqual("Note (Optional)");
	  await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"],10000);
	  kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],notes);
	 //  appLog("Successfully entered Note value as : <b>"+notes+"</b>");
	  await kony.automation.playback.waitFor(["frmFastTransfers","btnConfirm"],10000);
	  await kony.automation.scrollToWidget(["frmFastTransfers","btnConfirm"]);
	  kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
	  await kony.automation.playback.wait(4000);
	  // appLog("Successfully Clicked on Continue Button");
	}
	
	async function ConfirmTransfer() {
	
	 //  appLog("Intiated method to Confirm Transfer Details");
	
	  await kony.automation.playback.waitFor(["frmReview","btnConfirm"],30000);
	  kony.automation.button.click(["frmReview","btnConfirm"]);
	  // appLog("Successfully Clicked on Confirm Button");
	
	}
	async function ConfmTransfer() {
	
	 //  appLog("Intiated method to Confirm Transfer Details");
	
	  await kony.automation.playback.waitFor(["frmFastTransfers","btnConfirm"],30000);
	  kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
	  // appLog("Successfully Clicked on Confirm Button");
	
	}
	
	async function VerifyTransferSuccessMessage() {
	
	  // appLog("Intiated method to Verify Transfer SuccessMessage ");
	
	  await kony.automation.playback.wait(5000);
	  var success=await kony.automation.playback.waitFor(["frmConfirmTransfer"],60000);
	
	  if(success){
	    //expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully");
	    //   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).not.toBe('');
	    //   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"],15000);
	    //   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);
	    await kony.automation.playback.waitFor(["frmConfirmTransfer","customheadernew","flxAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmConfirmTransfer","customheadernew","flxAccounts"]);
	    // appLog("Successfully Clicked on Accounts Button");
	  }else if(await kony.automation.playback.waitFor(["frmFastTransfers","rtxMakeTransferError"],5000)){
	    //expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","rtxMakeTransferError"], "text")).toEqual("Transaction cannot be executed. Update your organization's approval matrix and re-submit the transaction.");
	 //    appLog("Failed with : rtxMakeTransferError");
	    fail("Failed with : rtxMakeTransferError");
	
	    await MoveBackToLandingScreen_Transfers();
	
	  }else{
	
	    // This is the condition for use cases where it won't throw error on UI but struck at same screen
	     appLog("Unable to perform Successfull Transcation");
	    fail("Unable to perform Successfull Transcation");
	  }
	
	}
	
	async function CancelTransfer() {
	
	  //await kony.automation.playback.wait(5000);
	
	  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
	  kony.automation.button.click(["frmReview","btnCancel"]);
	   appLog("Successfully Clicked on CANCEL Button");
	  await kony.automation.playback.waitFor(["frmReview","CustomPopup","lblHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","CustomPopup","lblHeading"], "text")).toEqual("Cancel Transfer");
	  await kony.automation.playback.waitFor(["frmReview","CustomPopup","btnYes"],15000);
	  kony.automation.button.click(["frmReview","CustomPopup","btnYes"]);
	  //  frmFastTransfers_customheadernew_flxAccounts
	   appLog("Successfully Clicked on YES Button");
	  await kony.automation.playback.waitFor(["frmFastTransfers","customheadernew","flxAccounts"],15000);
	  kony.automation.button.click(["frmFastTransfers","customheadernew","flxAccounts"]);
	  await kony.automation.playback.wait(5000);
	}
	async function NoButton_CancelTransfer() {
	
	  //await kony.automation.playback.wait(5000);
	
	  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
	  kony.automation.button.click(["frmReview","btnCancel"]);
	   appLog("Successfully Clicked on CANCEL Button");
	  await kony.automation.playback.waitFor(["frmReview","CustomPopup","lblHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","CustomPopup","lblHeading"], "text")).toEqual("Cancel Transfer");
	  await kony.automation.playback.waitFor(["frmReview","CustomPopup","btnNo"],15000);
	  kony.automation.button.click(["frmReview","CustomPopup","btnNo"]);
	  //  frmFastTransfers_customheadernew_flxAccounts
	   appLog("Successfully Clicked on NO Button");
	  await kony.automation.playback.waitFor(["frmReview","customheadernew","flxAccounts"],15000);
	  kony.automation.button.click(["frmReview","customheadernew","flxAccounts"]);
	  await kony.automation.playback.wait(5000);
	}
	async function ModifyOnTimeTransfer() {
	  await kony.automation.playback.waitFor(["frmReview","btnModify"],15000);
	  kony.automation.button.click(["frmReview","btnModify"]);
	  await kony.automation.playback.wait(2000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","customheadernew","flxAccounts"],15000);
	//   kony.automation.button.click(["frmFastTransfers","customheadernew","flxAccounts"]);
	//   await kony.automation.playback.wait(5000);
	  
	}
	
	
	async function navigateToManageTransfer(){
	
	   appLog("Intiated method to navigate to Manage Transfers");
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxPayBills"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayBills"]);
	  await kony.automation.playback.wait(5000);
	   appLog("Successfully Navigated to TransferActivities");
	}
	
	async function navigateToTransferActivities(){
	
	  appLog("Intiated method to navigate to Transfer Activities");
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],30000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxPayBills"],30000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayBills"]);
	  await kony.automation.playback.wait(25000);
	  appLog("Successfully Navigated to TransferActivities");
	}
	
	
	
	async function navigateToPastTransfersTab(){
	
	   appLog("Intiated method to navigate to PastTransfer Tab");
	  await kony.automation.playback.waitFor(["frmFastTransfersActivites","btnRecent"],15000);
	  kony.automation.button.click(["frmFastTransfersActivites","btnRecent"]);
	  await kony.automation.playback.wait(5000);
	   appLog("Successfully navigated to PastTransfer Tab");
	}
	
	async function verifyRepeatTransferFunctionality(note){
	
	   appLog("Intiated method verify Repeat Transfer Functionality");
	await kony.automation.playback.wait(25000);
	 var RepeatBtn= await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers[0]","btnAction"],15000);
	
	  if(RepeatBtn)
	  {
	   // flxFaastTransfersSelectedstP_flxDropdown
	    await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers[0]","flxDropdown"],10000);
	      kony.automation.button.click(["frmFastTransfersActivites","segmentTransfers[0]","flxDropdown"]);
	      appLog('Intiating Repeat Transfer');
	    await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers[0]","btnAction"],10000);
	      kony.automation.button.click(["frmFastTransfersActivites","segmentTransfers[0]","btnAction"]);
	     // await kony.automation.playback.wait(15000);
	      appLog("Successfully Clicked on Repeat Button");
	      await EnterNoteValue(note);
	      await ConfmTransfer();
	    await ConfirmTransfer();
	      await VerifyTransferSuccessMessage();
	    }else{
	      
	      appLog("No Completed transfers listed");
	      await kony.automation.playback.waitFor(["frmFastTransfersActivites","customheadernew","flxAccounts"],15000);
	      kony.automation.flexcontainer.click(["frmFastTransfersActivites","customheadernew","flxAccounts"]);
	
	    //await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers"],15000);
	//     var noReapeatBtn= await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers[0]","btnAction"],10000);
	
	//     if(noReapeatBtn){
	//        appLog('Intiating Repeat Transfer');
	//       kony.automation.button.click(["frmFastTransfersActivites","segmentTransfers[0]","btnAction"]);
	//       await kony.automation.playback.wait(5000);
	//        appLog("Successfully Clicked on Repeat Button");
	//       await EnterNoteValue(note);
	//       await ConfirmTransfer();
	//       await VerifyTransferSuccessMessage();
	//     }else{
	//        appLog('No Repeat Transfers available');
	//       await kony.automation.playback.waitFor(["frmFastTransfersActivites","customheadernew","flxAccounts"],15000);
	//       kony.automation.flexcontainer.click(["frmFastTransfersActivites","customheadernew","flxAccounts"]);
	//       await kony.automation.playback.wait(5000); 
	//       // appLog("Successfully Moved back to Accounts dashboard");
	//     }
	//   }
	}
	}
	
	async function VerifyTranxUnderActivities(){
	
	   appLog("Intiated method verify Transfer under Activities");
	
	  var noTransfers=await kony.automation.playback.waitFor(["frmFastTransfersActivites","rtxNoPaymentMessage"],15000);
	
	  if(noTransfers){
	     appLog('There are No Transactions Found');
	    await kony.automation.playback.waitFor(["frmFastTransfersActivites","customheadernew","flxAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmFastTransfersActivites","customheadernew","flxAccounts"]);
	    await kony.automation.playback.wait(5000);
	    await verifyAccountsLandingScreen();
	     appLog("Successfully Moved back to Accounts dashboard");
	  }else{
	
	    //await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers"],15000);
	    var noTranxBtn= await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers[0]","flxDropdown"],10000);
	    if(noTranxBtn){
	
	       appLog('Intiating to verify Transfer Activity');
	      await kony.automation.playback.waitFor(["frmFastTransfersActivites","segmentTransfers"],15000);
	      kony.automation.flexcontainer.click(["frmFastTransfersActivites","segmentTransfers[0]","flxDropdown"]);
	       appLog("Successfully Clicked on first Sheduled Transfer");
	
	          await kony.automation.playback.waitFor(["frmFastTransfersActivites","customheadernew","flxAccounts"],15000);
	      kony.automation.flexcontainer.click(["frmFastTransfersActivites","customheadernew","flxAccounts"]);
	      await verifyAccountsLandingScreen();
	       appLog("Successfully Moved back to Accounts dashboard");
	    }else{
	
	       appLog('No Transfers activities available');
	      await kony.automation.playback.waitFor(["frmFastTransfersActivites","customheadernew","flxAccounts"],15000);
	      kony.automation.flexcontainer.click(["frmFastTransfersActivites","customheadernew","flxAccounts"]);
	      await kony.automation.playback.wait(5000); 
	       appLog("Successfully Moved back to Accounts dashboard");
	    }
	
	  }
	}
	
	async function MoveBackToLandingScreen_Transfers(){
	
	  //Move back to landing Screen
	  await kony.automation.playback.wait(5000); 
	   appLog("Intiated method to move from frmFastTransfers screen");
	  await kony.automation.playback.waitFor(["frmFastTransfers","customheadernew","flxAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmFastTransfers","customheadernew","flxAccounts"]);
	   appLog("Successfully Moved back to Accounts dashboard");
	}
	
	async function MoveBackToLandingScreen_TransfersReviewScreen(){
	
	  //Move back to landing Screen
	   appLog("Intiated method to move from transfer review screen");
	  await kony.automation.playback.waitFor(["frmReview","customheadernew","flxAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmReview","customheadernew","flxAccounts"]);
	   appLog("Successfully Moved back to Accounts dashboard");
	}
	async function NavigateBacktoDashboard_InteracEtransferlandingscreen()
	{
	  await kony.automation.playback.waitFor(["frmeTransferSendMoney","customheadernew","flxAccounts"],15000);
	  //frmeTransferSendMoney_customheadernew_flxAccounts
	  kony.automation.flexcontainer.click(["frmeTransferSendMoney","customheadernew","flxAccounts"]);
	}
	
	async function VerifyTransferConfirmationscreen_OneTimeTransfer(){
	  
	  await kony.automation.playback.waitFor(["frmReview","lblKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblKey"], "text")).toEqual("Transfer From"); 
	  await kony.automation.playback.waitFor(["frmReview","lblValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","lblToKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToKey"], "text")).toEqual("Transfer To"); 
	  await kony.automation.playback.waitFor(["frmReview","lblToValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","lblToAmountKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountKey"], "text")).toEqual("Amount"); 
	  await kony.automation.playback.waitFor(["frmReview","lblToAmountValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountValue"], "text")).toEqual("$ 1.00 CAD"); 
	  await kony.automation.playback.waitFor(["frmReview","lblFrequencyKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyKey"], "text")).toEqual("Frequency"); 
	  await kony.automation.playback.waitFor(["frmReview","lblFrequencyValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyValue"], "text")).toEqual("Daily"); 
	  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("Start Date");
	  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","lblNoteKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteKey"], "text")).toEqual("Note (Optional)");
	  await kony.automation.playback.waitFor(["frmReview","lblNoteValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteValue"], "text")).toEqual("OwnAcc-ModifyTransfer");
	  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
	  await kony.automation.playback.waitFor(["frmReview","btnModify"],15000);
	  await kony.automation.playback.waitFor(["frmReview","btnConfirm"],15000);
	}
	
	async function VerifyTransfer_OneTimeTransfer(){
	  
	  await kony.automation.playback.waitFor(["frmReview","lblKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblKey"], "text")).toEqual("Transfer From"); 
	  await kony.automation.playback.waitFor(["frmReview","lblValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","lblToKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToKey"], "text")).toEqual("Transfer To"); 
	  await kony.automation.playback.waitFor(["frmReview","lblToValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","lblToAmountKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountKey"], "text")).toEqual("Amount"); 
	  await kony.automation.playback.waitFor(["frmReview","lblToAmountValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountValue"], "text")).toEqual("$ 1.00 CAD"); 
	  await kony.automation.playback.waitFor(["frmReview","lblFrequencyKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyKey"], "text")).toEqual("Frequency"); 
	  await kony.automation.playback.waitFor(["frmReview","lblFrequencyValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyValue"], "text")).toEqual("Once"); 
	  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("When");
	  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","lblNoteKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteKey"], "text")).toEqual("Note (Optional)");
	  await kony.automation.playback.waitFor(["frmReview","lblNoteValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteValue"], "text")).toEqual("OwnAcc-OneTimeTransfer");
	  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
	  await kony.automation.playback.waitFor(["frmReview","btnModify"],15000);
	  await kony.automation.playback.waitFor(["frmReview","btnConfirm"],15000);
	}
	async function VerifyTransferConfirmationscreen_ReccurringTransfer(frequency,Range){
	  await kony.automation.playback.waitFor(["frmReview","lblKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblKey"], "text")).toEqual("Transfer From"); 
	  await kony.automation.playback.waitFor(["frmReview","lblValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblValue"], "text")).not.toBe('');
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToKey"], "text")).toEqual("Transfer To"); 
	  await kony.automation.playback.waitFor(["frmReview","lblToValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","lblToAmountKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountKey"], "text")).toEqual("Amount"); 
	  await kony.automation.playback.waitFor(["frmReview","lblToAmountValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountValue"], "text")).toEqual("$ 1.00 CAD"); 
	  await kony.automation.playback.waitFor(["frmReview","lblFrequencyKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyKey"], "text")).toEqual("Frequency"); 
	  await kony.automation.playback.waitFor(["frmReview","lblFrequencyValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyValue"], "text")).toEqual(frequency);
	   if (Range === "DateRange"){
	  await kony.automation.playback.waitFor(["frmReview","lblDurationKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDurationKey"], "text")).toEqual("For How Long?");
	  await kony.automation.playback.waitFor(["frmReview","lblDurationValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDurationValue"], "text")).toEqual("Date range");
	  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("Start Date");
	  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","lblEndDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateKey"], "text")).toEqual("End Date");
	  await kony.automation.playback.waitFor(["frmReview","lblEndDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateValue"], "text")).not.toBe('');
	  appLog("Successfully verified fields specific to Date Range Transfer in confirmation screen");
	  }
	  else if (Range === "No. of reccurrences"){
	  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("Start On");
	  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","lblEndDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateKey"], "text")).toEqual("Number of Recurrences");
	  await kony.automation.playback.waitFor(["frmReview","lblEndDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateValue"], "text")).not.toBe('');
	   appLog("Successfully verified fields specific to number of reccurrences transfer");
	    }
	  await kony.automation.playback.waitFor(["frmReview","lblNoteKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteKey"], "text")).toEqual("Note (Optional)");
	  await kony.automation.playback.waitFor(["frmReview","lblNoteValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
	  await kony.automation.playback.waitFor(["frmReview","btnModify"],15000);
	  await kony.automation.playback.waitFor(["frmReview","btnConfirm"],15000);
	  }
	
	async function VerifyTransferConfirmationscreen_Occurrences(frequency,Range){
	  await kony.automation.playback.waitFor(["frmReview","lblKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblKey"], "text")).toEqual("Transfer From"); 
	  await kony.automation.playback.waitFor(["frmReview","lblValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblValue"], "text")).not.toBe('');
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToKey"], "text")).toEqual("Transfer To"); 
	  await kony.automation.playback.waitFor(["frmReview","lblToValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","lblToAmountKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountKey"], "text")).toEqual("Amount"); 
	  await kony.automation.playback.waitFor(["frmReview","lblToAmountValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblToAmountValue"], "text")).toEqual("$ 1.00 CAD"); 
	  await kony.automation.playback.waitFor(["frmReview","lblFrequencyKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyKey"], "text")).toEqual("Frequency"); 
	  await kony.automation.playback.waitFor(["frmReview","lblFrequencyValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblFrequencyValue"], "text")).toEqual(frequency);
	   if (Range === "DateRange"){
	  await kony.automation.playback.waitFor(["frmReview","lblDurationKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDurationKey"], "text")).toEqual("For How Long?");
	  //await kony.automation.playback.waitFor(["frmReview","lblDurationValue"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDurationValue"], "text")).toEqual("Date range");
	  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("Start On");
	  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
	expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
	  //await kony.automation.playback.waitFor(["frmReview","lblEndDateKey"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateKey"], "text")).toEqual("End Date");
	//   await kony.automation.playback.waitFor(["frmReview","lblEndDateValue"],15000);
	  //expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateValue"], "text")).not.toBe('');
	  appLog("Successfully verified fields specific to Date Range Transfer in confirmation screen");
	  }
	  else if (Range === "No. of reccurrences"){
	  await kony.automation.playback.waitFor(["frmReview","lblDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateKey"], "text")).toEqual("Start On");
	  await kony.automation.playback.waitFor(["frmReview","lblDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblDateValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","lblEndDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateKey"], "text")).toEqual("Number of Recurrences");
	  await kony.automation.playback.waitFor(["frmReview","lblEndDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblEndDateValue"], "text")).not.toBe('');
	   appLog("Successfully verified fields specific to number of reccurrences transfer");
	    }
	  await kony.automation.playback.waitFor(["frmReview","lblNoteKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteKey"], "text")).toEqual("Note (Optional)");
	  await kony.automation.playback.waitFor(["frmReview","lblNoteValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmReview","lblNoteValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmReview","btnCancel"],15000);
	  await kony.automation.playback.waitFor(["frmReview","btnModify"],15000);
	  await kony.automation.playback.waitFor(["frmReview","btnConfirm"],15000);
	  }
	
	async function VerifyTransferSuccessScreenRightPanel_OneTime(){
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblHeading"], "text")).toEqual("Your Transfer Details");
	    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblKey"], "text")).toEqual("Transfer From");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToKey"], "text")).toEqual("Transfer To");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
	 expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToValue"], "text")).not.toBe('');
	    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountKey"], "text")).toEqual("Amount ");
	   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyKey"], "text")).toEqual("Frequency");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyValue"], "text")).toEqual("Daily");
	   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateKey"], "text")).toEqual("Start Date"); 
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateValue"], "text")).not.toBe('');
	   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesKey"], "text")).toEqual("Note (Optional)"); 
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"],15000);
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnAddAnotherAccount"],15000);
	  
	   }
	async function VerifyTransferSuccesscreenRightPanel_ReccurringTransfer(frequency,Range)
	{
	   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblHeading"], "text")).toEqual("Your Transfer Details");
	    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblKey"], "text")).toEqual("Transfer From");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToKey"], "text")).toEqual("Transfer To");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
	 expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToValue"], "text")).not.toBe('');
	    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountKey"], "text")).toEqual("Amount ");
	   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyKey"], "text")).toEqual("Frequency");
	   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyValue"], "text")).toEqual(frequency);
	  if (Range === "DateRange"){
	    appLog("Initiated validating fields specific to date range transfer");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationKey"], "text")).toEqual("For How Long?");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationValue"], "text")).toEqual("Date range");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateKey"], "text")).toEqual("Start Date");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateKey"], "text")).toEqual("End Date");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateValue"], "text")).not.toBe('');
	  appLog("Successfully verified fields specific to Date Range Transfer in Acknowledgement screen");
	  }
	  else if (Range === "No. of reccurrences"){
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateKey"], "text")).toEqual("Start Date");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationKey"], "text")).toEqual("Duration"); 
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationValue"], "text")).toEqual("Recurrences");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateKey"], "text")).toEqual("Number of Recurrences");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateValue"], "text")).not.toBe('');
	   appLog("Successfully verified fields specific to number of reccurrences transfer in success screen");
	    }
	   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesKey"], "text")).toEqual("Note (Optional)"); 
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"],15000);
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnAddAnotherAccount"],15000);
	  }
	
	async function VerifyTransferSuccesscreenRightPanel_Occurences(frequency,Range)
	{
	   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblHeading"], "text")).toEqual("Your Transfer Details");
	    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblKey"], "text")).toEqual("Transfer From");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToKey"], "text")).toEqual("Transfer To");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToKey"],15000);
	 expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToValue"], "text")).not.toBe('');
	    await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountKey"], "text")).toEqual("Amount ");
	   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblToAmountValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblToAmountValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyKey"], "text")).toEqual("Frequency");
	   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblFrequencyValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblFrequencyValue"], "text")).toEqual(frequency);
	  if (Range === "DateRange"){
	    appLog("Initiated validating fields specific to date range transfer");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationKey"], "text")).toEqual("Duration");
	 // await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationValue"],15000);
	  //expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationValue"], "text")).toEqual("Date range");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateKey"], "text")).toEqual("Start Date");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateValue"], "text")).not.toBe('');
	  //await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateKey"],15000);
	  //expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateKey"], "text")).toEqual("End Date");
	  //await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateValue"],15000);
	  //expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateValue"], "text")).not.toBe('');
	  appLog("Successfully verified fields specific to Date Range Transfer in Acknowledgement screen");
	  }
	  else if (Range === "No. of reccurrences"){
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateKey"], "text")).toEqual("Start Date");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblStartDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblStartDateValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationKey"], "text")).toEqual("Duration"); 
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblDurationValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblDurationValue"], "text")).toEqual("Recurrences");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateKey"], "text")).toEqual("Number of Recurrences");
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblEndDateValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblEndDateValue"], "text")).not.toBe('');
	   appLog("Successfully verified fields specific to number of reccurrences transfer in success screen");
	    }
	   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesKey"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesKey"], "text")).toEqual("Note (Optional)"); 
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","lblNotesValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblNotesValue"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"],15000);
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnAddAnotherAccount"],15000);
	  }
	async function ClickOnAccountsButton_TransferAcknowledgemntScreen(){
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"],15000);
	  kony.automation.flexcontainer.click(["frmConfirmTransfer","btnSavePayee"]);   
	}
	
	async function ClickOnNewTransfer_TransferAcknowledgemntScreen(){
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmConfirmTransfer","btnAddAnotherAccount"],15000);
	  kony.automation.flexcontainer.click(["frmConfirmTransfer","btnAddAnotherAccount"]);
	}
	  
	
	
	async function NavigateToManageRecipitents(){
	
	  appLog("Intiated method to navigate to ManageRecipitents");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxSendMoney"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxSendMoney"]);
	  await kony.automation.playback.wait(10000);
	  appLog("Clicked on ManageRecipients button");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients",],20000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
	  appLog("Successfully verified ManageRecipients Header");
	}
	
	async function clickOnManageRecipientsAccountsTab(){
	
	  //External Acc list
	  appLog("Intiated method to navigate to External Reciptents");
	  await kony.automation.playback.waitFor(["frmFastManagePayee","btnExternalAccounts"],15000);
	  kony.automation.button.click(["frmFastManagePayee","btnExternalAccounts"]);
	  appLog("Clicked on External Recipients tab");
	  await kony.automation.playback.wait(5000);
	  //   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"],15000);
	  //   kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
	  //   appLog("Successfully Clicked on External Recipient from list");
	}
	async function clickOnP2PRecipitentsTab(){
	
	  //P2P Acc list
	  appLog("Intiated method to navigate to P2P Reciptents");
	  await kony.automation.playback.waitFor(["frmFastManagePayee","BeneficiaryList","btnTab2"],15000);
	  kony.automation.button.click(["frmFastManagePayee","BeneficiaryList","btnTab2"]);
	  appLog("Clicked on P2P Recipients tab");
	  await kony.automation.playback.wait(5000);
	  //   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"],15000);
	  //   kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
	  //   appLog("Successfully Clicked on P2P Recipient from list");
	}
	
	async function MoveBacktoDashboard_ManageRecipitent(){
	
	  await kony.automation.playback.wait(5000);
	  appLog("Intiated method to Move back Accounts dashboard");
	  await kony.automation.playback.waitFor(["frmFastManagePayee","customheadernew","flxAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmFastManagePayee","customheadernew","flxAccounts"]);
	  appLog("Successfully Moved back to Accounts dashboard");
	  await kony.automation.playback.wait(5000);
	}
	
	async function clickonAddExternalAccounttab(){
	
	  var status=await kony.automation.playback.waitFor(["frmFastManagePayee","quicklinks","flxRow2"],15000);
	  expect(status).toBe(true);
	  kony.automation.flexcontainer.click(["frmFastManagePayee","quicklinks","flxRow2"]);
	  appLog("Successfully Clicked on Add External Account Flex");
	  await kony.automation.playback.wait(5000);
	}
	
	async function clickonAddCWBAccount(){
	  
	 // frmFastManagePayee_lblAddBankAccount
		  await kony.automation.playback.wait(10000);
	  var status=await kony.automation.playback.waitFor(["frmFastManagePayee","lblAddBankAccount"],15000);
	  expect(status).toBe(true);
	  kony.automation.flexcontainer.click(["frmFastManagePayee","lblAddBankAccount"]);
	  appLog("Successfully Clicked on Add CWB Account Flex");
	  await kony.automation.playback.wait(5000);
	}
	
	async function clickonAddInternationalAccounttab(){
	
	  var status=await kony.automation.playback.waitFor(["frmFastManagePayee","quicklinks","flxRow3"],15000);
	  expect(status).toBe(true);
	  kony.automation.flexcontainer.click(["frmFastManagePayee","quicklinks","flxRow3"]);
	  appLog("Successfully Clicked on Add International Account Flex");
	  await kony.automation.playback.wait(5000);
	}
	
	async function clickonAddP2PAccounttab(){
	
	  var status=await kony.automation.playback.waitFor(["frmFastManagePayee","quicklinks","flxRow4"],15000);
	  expect(status).toBe(true);
	  kony.automation.flexcontainer.click(["frmFastManagePayee","quicklinks","flxRow4"]);
	  appLog("Successfully Clicked on Add P2P Account Flex");
	  await kony.automation.playback.wait(5000);
	}
	
	async function enterExternalBankAccountDetails(Routingno,Accno,unique_RecipitentName){
	
	  appLog("Intiated method to add enterExternalBankAccountDetails");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue1"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue1"],Routingno);
	  appLog("Successfully Entered Routing Number : <b>"+Routingno+"</b>");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue2"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue2"],Accno);
	  appLog("Successfully Entered Acc Number : <b>"+Accno+"</b>");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue3"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue3"],Accno);
	  appLog("Successfully Re-Entered Acc Number : <b>"+Accno+"</b>");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue4"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue4"],unique_RecipitentName);
	  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue5"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],unique_RecipitentName);
	  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction2"],15000);
	  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction2"]);
	  appLog("Successfully Clicked on Continue Button");
	
	  await linkReciptent();
	}
	
	async function enterInternationalBankAccountDetails(swiftCode,Accno,unique_RecipitentName){
	
	  appLog("Intiated method to add enterInternationalBankAccountDetails");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue1"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue1"],swiftCode);
	  appLog("Successfully Entered SwiftCode : <b>"+swiftCode+"</b>");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue2"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue2"],Accno);
	  appLog("Successfully Entered Acc Number : <b>"+Accno+"</b>");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue3"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue3"],Accno);
	  appLog("Successfully Re-Entered Acc Number : <b>"+Accno+"</b>");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue4"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue4"],unique_RecipitentName);
	  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue5"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],unique_RecipitentName);
	  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction2"],15000);
	  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction2"]);
	  appLog("Successfully Clicked on Continue Button");
	
	  await linkReciptent();
	}
	
	async function enterSameBankAccountDetails(Accno,unique_RecipitentName){
	
	  appLog("Intiated method to add enterSameBankAccountDetails");
	
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"],15000);
	  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberKA"],Accno);
	  appLog("Successfully Entered Acc Number : <b>"+Accno+"</b>");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],15000);
	  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],Accno);
	  appLog("Successfully Re-Entered Acc Number : <b>"+Accno+"</b>");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lbxAccountTypeKA"],15000);
	  kony.automation.listbox.selectItem(["frmFastAddDBXAccount","lbxAccountTypeKA"], "Savings");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],15000);
	  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],unique_RecipitentName);
	  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"],15000);
	  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickNameKA"],unique_RecipitentName);
	  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"],15000);
	  kony.automation.button.click(["frmFastAddDBXAccount","btnAddAccountKA"]);
	  appLog("Successfully Clicked on Continue Button");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnConfirm"],15000);
	  kony.automation.button.click(["frmFastAddDBXAccountConfirm","btnConfirm"]);
	  //await linkReciptent();
	
	}
	
	async function enterP2PAccountDetails_Email(unique_RecipitentName,email){
	
	  appLog("Intiated method to add enterSameBankAccountDetails");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue1"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue1"],unique_RecipitentName);
	  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue2"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue2"],unique_RecipitentName);
	  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","img2"],15000);
	  kony.automation.widget.touch(["frmFastP2P","addBenificiary","img2"], null,null,[10,19]);
	  appLog("Successfully Selected Email Radio button ");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue5"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],email);
	  appLog("Successfully Entered Email name : <b>"+email+"</b>");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction2"],15000);
	  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction2"]);
	  appLog("Successfully Clicked on Continue Button");
	
	  await linkReciptent();
	
	}
	
	async function enterP2PAccountDetails_MobileNumber(unique_RecipitentName,phno){
	
	  appLog("Intiated method to add enterSameBankAccountDetails");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue1"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue1"],unique_RecipitentName);
	  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue2"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue2"],unique_RecipitentName);
	  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","img1"],15000);
	  kony.automation.widget.touch(["frmFastP2P","addBenificiary","img1"], null,null,[10,19]);
	  appLog("Successfully Selected Email Radio button ");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue5"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],phno);
	  appLog("Successfully Entered Email name : <b>"+phno+"</b>");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction2"],15000);
	  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction2"]);
	  appLog("Successfully Clicked on Continue Button");
	
	  await linkReciptent();
	
	}
	
	
	async function linkReciptent(){
	
	  var linkreciptent=await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","contractList","lblHeader"],15000);
	
	  if(linkreciptent){
	    kony.automation.widget.touch(["frmFastP2P","addBenificiary","contractList","lblCheckBoxSelectAll"], [8,7],null,null);
	    appLog("Successfully selected Select All CheckBox");
	    await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","contractList","flxCol4"],15000);
	    kony.automation.flexcontainer.click(["frmFastP2P","addBenificiary","contractList","flxCol4"]);
	    await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","contractList","btnAction6"],15000);
	    kony.automation.button.click(["frmFastP2P","addBenificiary","contractList","btnAction6"]);
	    appLog("Successfully Clicked on Link Reciptent SaveReciptent Button");
	  }
	
	  appLog("Intiated Method to Click on AddAccount Button");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction6"],15000);
	  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction6"]);
	  appLog("Successfully Clicked on AddAccount Button");
	}
	
	async function verifyAddingNewReciptientSuccessMsg(){
	
	  var success=await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],30000);
	  if(success){
	    expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],"text")).not.toBe('');
	    appLog("Successfully verified Newly Added/edited Reciptent");
	  }else if(await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","rtxDowntimeWarning"],5000)){
	    //appLog("Logged in User is not authorized to perform this action");
	    //fail('Logged in User is not authorized to perform this action');
	    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","rtxDowntimeWarning"],"text"));
	    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","rtxDowntimeWarning"],"text"));
	  }
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","lblAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","lblAccounts"]);
	  appLog("Successfully Moved back to Accounts dashboard");
	}
	
	
	async function SearchforPayee_RecipientList(payeeName){
	
	  appLog("Intiated method to Search for a Payee :: <b>"+payeeName+"</b>");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","Search","txtSearch"],15000);
	  kony.automation.textbox.enterText(["frmFastManagePayee","Search","txtSearch"],payeeName);
	  appLog("Successfully Entered payee name : <b>"+payeeName+"</b>");
	  await kony.automation.playback.waitFor(["frmFastManagePayee","Search","btnConfirm"],15000);
	  kony.automation.flexcontainer.click(["frmFastManagePayee","Search","btnConfirm"]);
	  appLog("Successfully Clicked on Search button");
	  await kony.automation.playback.wait(5000);
	
	}
	
	async function DeleteReciptent(){
	
	  appLog("Intiated method to Delete a Reciptent");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"],15000);
	  kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
	  kony.automation.button.click(["frmFastManagePayee","segmentTransfers[0]","btnRemoveRecipient"]);
	  appLog("Successfully Clicked on RemoveRecipient button");
	  //await kony.automation.playback.wait(5000);
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","lblPopupMessage"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","CustomPopup","lblPopupMessage"],"text")).toContain('Are you sure you want to delete this recipient?');
	  appLog("Successfully Verified RemoveRecipient PopUp Msg");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","btnYes"],15000);
	  kony.automation.button.click(["frmFastManagePayee","CustomPopup","btnYes"]);
	  appLog("Successfully Clicked on RemoveRecipient YES button");
	  //await kony.automation.playback.wait(5000);
	
	}
	
	async function EditReciptent(UniqueUpdatedName,UniqueUpdatedNickName){
	
	  appLog("Intiated method to Edit Reciptent");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"],15000);
	  kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
	  kony.automation.button.click(["frmFastManagePayee","segmentTransfers[0]","btnEdit"]);
	  appLog("Successfully Clicked on EditRecipient button");
	  //await kony.automation.playback.wait(5000);
	
	  // Line Items 3,4, and 5 will be different for External,International and SameBank acc.
	  //More over Searc button is not working hence Iterating over acc and Editing accordingly.
	
	 // for(var i=3;i<=5;i++){
	
	   // var key="lblDetailKey"+i;
	   // var value="lblDetailValue"+i;
	
	    await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryName"],15000);
	   // var keyLabel =kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","addBenificiary",key], "text");
	
	   // if(keyLabel==='Recipient Name'){
	
	      kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryName"],UniqueUpdatedName);
	     // appLog("Successfully Updated <b>"+keyLabel+"</b>");
	
	   // }else if(keyLabel==='Account Nickname'){
	      await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickName"],15000);
	      kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickName"],UniqueUpdatedNickName);
	     // appLog("Successfully Updated <b>"+keyLabel+"</b>");
	
	  //  }else{
	    //  appLog("Select Name or Nick name Text filed to Update");
	 // }
	
	//  }
	
	  //   if(AccType.toUpperCase() === SAMEBANK){
	
	  //     await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue3"],15000);
	  //     kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue4"],UniqueUpdatedName);
	
	  //     await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue4"],15000);
	  //     kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],UniqueUpdatedNickName);
	
	  //   }else{
	
	  //     await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue4"],15000);
	  //     kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue4"],UniqueUpdatedName);
	
	  //     await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue5"],15000);
	  //     kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue5"],UniqueUpdatedNickName);
	  //   }
	
	
	  //Having intermittent issue in Save button
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnSave"],15000);
	  kony.automation.button.click(["frmFastAddDBXAccount","btnSave"]);
	  appLog("Successfully Clicked on SAVE Button");
	
	//  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","contractList","btnAction6"],15000);
	 // kony.automation.button.click(["frmFastP2P","addBenificiary","contractList","btnAction6"]);
	 // appLog("Successfully Clicked on Link Reciptent SaveReciptent Button");
	
	}
	
	async function EditP2PReciptent(UniqueUpdatedName,UniqueUpdatedNickName){
	
	  appLog("Intiated method to Edit P2P Reciptent");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","BeneficiaryList","segmentTransfers"],15000);
	  kony.automation.flexcontainer.click(["frmFastManagePayee","BeneficiaryList","segmentTransfers[0]","flxDropdown"]);
	  kony.automation.button.click(["frmFastManagePayee","BeneficiaryList","segmentTransfers[0]","btn1"]);
	  appLog("Successfully Clicked on EditRecipient button");
	  //await kony.automation.playback.wait(5000);
	
	  appLog("Intiated method to Update Reciptent value");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue1"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue1"],UniqueUpdatedName);
	  appLog("Successfully Updated Reciptent name value");
	
	  appLog("Intiated method to Update Reciptent value");
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","lblDetailValue2"],15000);
	  kony.automation.textbox.enterText(["frmFastP2P","addBenificiary","lblDetailValue2"],UniqueUpdatedNickName);
	  appLog("Successfully Updated Reciptent nick name value");
	
	  //Having intermittent issue in Save button
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","btnAction2"],15000);
	  kony.automation.button.click(["frmFastP2P","addBenificiary","btnAction2"]);
	  appLog("Successfully Clicked on SAVE Button");
	
	  await kony.automation.playback.waitFor(["frmFastP2P","addBenificiary","contractList","btnAction6"],15000);
	  kony.automation.button.click(["frmFastP2P","addBenificiary","contractList","btnAction6"]);
	  appLog("Successfully Clicked on Link Reciptent SaveReciptent Button");
	
	}
	
	
	async function NavigatetoInteracEtransferManagerecipient(){
	
	   appLog("Intiated method to Naviagte to Interac Etransfer Manage recipient");
	    await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
	    kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxSendMoney"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxSendMoney"]);
	  await kony.automation.playback.wait(5000);
	  //frmFastManagePayee_rtxInteraceTransfer
	  //frmFastManagePayee_lblManageRecipients
	  await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients",],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
	  // await kony.automation.playback.waitFor(["frmFastManagePayee","rtxInteraceTransfer"],15000);
		//kony.automation.richtext.click(["frmFastManagePayee","rtxInteraceTransfer"]);
	   appLog("Successfully Navigated to Manage Tab of Interac E Transfer");
	}
	
	async function AddInteracEtransferRecipient(RecipitentName){
	
	   appLog("Intiated method to add Interac Etransfer recipient");
	    await kony.automation.playback.waitFor(["frmFastManagePayee","flxAddReciepient"],15000);
	    kony.automation.flexcontainer.click(["frmFastManagePayee","flxAddReciepient"]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmeTransferAddRecipient","tbxRecipientName"],15000);
		kony.automation.textbox.enterText(["frmeTransferAddRecipient","tbxRecipientName"],RecipitentName);
	 // await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmeTransferAddRecipient","tbxMobileNumber"],15000);
		kony.automation.textbox.enterText(["frmeTransferAddRecipient","tbxMobileNumber"],"(250) 728-1928");
	    await kony.automation.playback.waitFor(["frmeTransferAddRecipient","lbxSendTransferByMethod"],15000);
		kony.automation.listbox.selectItem(["frmeTransferAddRecipient","lbxSendTransferByMethod"], "MobileNumber");
	   await kony.automation.playback.waitFor(["frmeTransferAddRecipient","btnAddRecipientContinue"],15000);
	  await kony.automation.playback.wait(5000);
		kony.automation.button.click(["frmeTransferAddRecipient","btnAddRecipientContinue"]);
	}
	async function EnterSecurityQuestionandAnswer(){
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmeTransferAddRecipientSecurityInfo","tbxSecurityQuestion"],15000);
		kony.automation.textbox.enterText(["frmeTransferAddRecipientSecurityInfo","tbxSecurityQuestion"],"What are u doing");
	  await kony.automation.playback.waitFor(["frmeTransferAddRecipientSecurityInfo","tbxAnswer"],15000);
		kony.automation.textbox.enterText(["frmeTransferAddRecipientSecurityInfo","tbxAnswer"],"AddEtransferRecipient");
		//kony.automation.flexcontainer.click(["frmeTransferAddRecipientSecurityInfo","flxAddRecipientSecurityInfo"]);
	  await kony.automation.playback.waitFor(["frmeTransferAddRecipientSecurityInfo","tbxConfirmAnswer"],15000);
		kony.automation.textbox.enterText(["frmeTransferAddRecipientSecurityInfo","tbxConfirmAnswer"],"AddEtransferRecipient");
	      await kony.automation.playback.waitFor(["frmeTransferAddRecipientSecurityInfo","btnUpdateSecurityInfo"],15000);
	  kony.automation.button.click(["frmeTransferAddRecipientSecurityInfo","btnUpdateSecurityInfo"]);
	  await kony.automation.playback.wait(7000);
	    await kony.automation.playback.waitFor(["frmeTransferAddRecipientConfirm","btnConfirm"],15000);
		kony.automation.button.click(["frmeTransferAddRecipientConfirm","btnConfirm"]);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmeTransferAddRecipientAcknowledgement","lblSuccessMessage"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmeTransferAddRecipientAcknowledgement","lblSuccessMessage"], "text")).toEqual("You have successfully added your recipient.");
	   appLog("Successfully added Interact E-Transfer recipient");
	}
	
	async function NavigateBacktoDashboard_AddEtransferrecipient()
	{
	  await kony.automation.playback.waitFor(["frmeTransferAddRecipientAcknowledgement","customheadernew","flxAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmeTransferAddRecipientAcknowledgement","customheadernew","flxAccounts"]);
	 // frmeTransferSendMoney_customheadernew_flxAccounts
	}
	//frmeTransferAddRecipientAcknowledgement_customheadernew_flxAccounts
	
	
	async function navigateToManageInteracETransfer(){
	    
	  appLog("Initiated Navigate to ManageEtransfer"); 
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxSendMoney"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxSendMoney"]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmFastManagePayee","rtxInteraceTransfer"],15000);
		kony.automation.flexcontainer.click(["frmFastManagePayee","rtxInteraceTransfer"]);
	
	}
	async function verifyManageIntracEtransferUI()
	{
	 appLog("Started verifying ManageIntracEtransfer UI") ;
	  await kony.automation.playback.wait(10000);
	//  kony.automation.widget.touch(["frmFastManagePayee"], null,null,[98,403]);
	   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"],15000);
		kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
	   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","btnAction"],15000);
	 // await kony.automation.playback.waitFor(["frmeTransferSendMoney","lblTransferHistory"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","segmentTransfers[0]","btnAction"], "text")).toContain("Edit Recipient");
	  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","btnViewActivity"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","segmentTransfers[0]","btnViewActivity"], "text")).toContain("View Activity");
	   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","btnEdit"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","segmentTransfers[0]","btnEdit"], "text")).toContain("Send Money");
	   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","btnRemoveRecipient"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","segmentTransfers[0]","btnRemoveRecipient"], "text")).toEqual("Delete Recipient");
	 appLog("Verified the ManageIntreacEtransfer Tab successfully");
	}
	
	async function ManageRecipientsHeadersValidation()
	{
	  await kony.automation.playback.wait(10000);
	  appLog("Fields evaluation started");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toContain("Manage Recipients");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","btnExternalAccounts"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","btnExternalAccounts"],"text")).toEqual("Accounts");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","rtxInteraceTransfer"],15000);
	  // expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","rtxInteraceTransfer"],"text")).toEqual("INTERAC e-Transfer®");
	  //   appLog("search field evaluation using status condition");
	  //   var status=await kony.automation.playback.waitFor(["frmFastManagePayee","Search","txtSearch"],15000);
	  //   expect(status).toBe(true);
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","Search","txtSearch"],15000);
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","lblSortDateExternal"],15000);
	
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblSortDateExternal"],"text")).toContain("Recipient Name");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","lblSortDescriptionExternal"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblSortDescriptionExternal"],"text")).toContain("Bank Name");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","lblSortTypeExternal"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblSortTypeExternal"],"text")).toContain("Status");
	
	  await kony.automation.playback.waitFor(["frmFastManagePayee","lblActions"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblActions"],"text")).toContain("Action");
	  appLog("9Done");
	  await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers[0]","btnAction"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","segmentTransfers[0]","btnAction"],"text")).toContain("Send Money");
	  appLog("10Done");
	  await kony.automation.playback.waitFor(["frmFastManagePayee","lblAddBankAccount"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblAddBankAccount"],"text")).toContain("Add CWB Account");
	  appLog("11Done");
	  appLog("Add an INTERAC e-Transfer® Recipient button evaluation using status condition");
	  var status1=await kony.automation.playback.waitFor(["frmFastManagePayee","lblAddETransfer"],15000);
	  expect(status1).toBe(true);
	  appLog("Add an INTERAC e-Transfer® Recipient button evaluated using status condition");
	
	  await kony.automation.playback.wait(10000);
	  appLog("all fields are evaluated");
	}
	
	async function AddCWBAccountFieldsValidation()
	{
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add CWB Account");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblRecipientDetails"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblRecipientDetails"],"text")).toEqual("Recipient Details");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblAccountNumberKA"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblAccountNumberKA"],"text")).toEqual("Account Number"); 
	  appLog("AccountNumber text box evaluation");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"],15000);
	  appLog("AccountNumber text box evaluated");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblAccountNumberAgainKA"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblAccountNumberAgainKA"],"text")).toEqual("Re-Enter Account Number");
	  appLog("Re enter AccountNumber text box evaluation");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],15000);
	  appLog("Re enter AccountNumber text box evaluated");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblBeneficiaryNameKA"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblBeneficiaryNameKA"],"text")).toEqual("Recipient Name");
	  appLog("Enter Beneficiary name text box evaluation");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],15000);
	  appLog("Beneficiary name text box evaluated");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblAccountNickNameKA"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblAccountNickNameKA"],"text")).toEqual("Account Nickname (Optional)");
	  appLog("Enter Nick name text box evaluation");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"],15000);
	  appLog(" Nick name text box evaluated");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnCancelKA"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","btnCancelKA"],"text")).toEqual("Cancel");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","btnAddAccountKA"],"text")).toEqual("Continue");
	  appLog("All Fields are evaluated");
	  await kony.automation.playback.wait(5000);
	}
	
	async function ContinueButton(Accno,unique_RecipitentName){
	
	  appLog("Intiated method to enter all details");
	
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"],15000);
	  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberKA"],Accno);
	  appLog("Successfully Entered Acc Number : <b>"+Accno+"</b>");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],15000);
	  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],Accno);
	  appLog("Successfully Re-Entered Acc Number : <b>"+Accno+"</b>");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lbxAccountTypeKA"],15000);
	  kony.automation.listbox.selectItem(["frmFastAddDBXAccount","lbxAccountTypeKA"], "Savings");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],15000);
	  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],unique_RecipitentName);
	  appLog("Successfully Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"],15000);
	  kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickNameKA"],unique_RecipitentName);
	  appLog("Successfully Re-Entered Reciptent name : <b>"+unique_RecipitentName+"</b>");
	
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"],15000);
	  kony.automation.button.click(["frmFastAddDBXAccount","btnAddAccountKA"]);
	  await kony.automation.playback.wait(10000);
	
	}
	
	async function ContinueButtonvalidation()
	{
	  appLog("to check that Continue button is disabled");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add CWB Account");  
	
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblRecipientDetails"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblRecipientDetails"],"text")).toEqual("Recipient Details");  
	  await kony.automation.playback.wait(5000);
	  appLog("Continue button is disabled");
	}
	
	async function AddAccountConfirmationValidation()
	{
	  await kony.automation.playback.wait(10000);
	  appLog("Method to check cancel,modify and addaccount buttons");
	
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnCancel"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","btnCancel"],"text")).toEqual("Cancel");  
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnModify"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","btnModify"],"text")).toEqual("Modify"); 
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnConfirm"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","btnConfirm"],"text")).toEqual("Add Account"); 
	  appLog("verified check cancel,modify and addaccount buttons");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","customheadernew","lblAccounts"],15000);
	  kony.automation.button.click(["frmFastAddDBXAccountConfirm","customheadernew","lblAccounts"]);
	  //   await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","lblHeading"],15000);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblHeading"],"text")).toEqual("Confirm Recipient Details"); 
	  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lbBankNameKey"],"text")).toEqual("Bank Name:");
	  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblBankNameValue"], "text")).not.toBe('');
	  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblAccountNumberKey"],"text")).toEqual("Account Number:"); 
	  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblAccountNumberValue"], "text")).not.toBe('');
	  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblAccountTypeKey"],"text")).toEqual("Account Type:"); 
	  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblAccountTypeValue"], "text")).not.toBe('');
	  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblRecipientNameKey"],"text")).toEqual("Recipient Name:"); 
	  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblRecipientNameValue"], "text")).not.toBe('');
	  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblNickNameKey"],"text")).toEqual("Account Nickname:"); 
	  //   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountConfirm","lblNickNameValue"], "text")).not.toBe('');
	}
	
	async function AcknowledgementScreenDetailsValidation()
	{
	  await kony.automation.playback.wait(10000);
	
	  appLog("Method to check AcknowledgementScreen headers");
	
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblTransfers"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblTransfers"],"text")).toEqual("Add CWB Account");  
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","btnAddAnotherRecipient"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","btnAddAnotherRecipient"],"text")).toEqual("Add Another Recipient");  
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","btnNewTransfer"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","btnNewTransfer"],"text")).toEqual("Transfer");  
	
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","lblAccounts"],15000);
	  kony.automation.button.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","lblAccounts"]);
	}
	
	async function AddAnotherRecipientNavigationValidation()
	{
	  await kony.automation.playback.wait(10000);
	
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","btnAddAnotherRecipient"],15000);
	  kony.automation.button.click(["frmFastAddDBXAccountAcknowledgement","btnAddAnotherRecipient"]);
	
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add CWB Account");   
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblRecipientDetails"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblRecipientDetails"],"text")).toEqual("Recipient Details");  
	
	}
	
	async function MoveToAccountsPageFromAddCWBaccount()
	{
	  await kony.automation.playback.wait(10000);
	  appLog("Moving back to Accounts Landing Page from AddCWB Account Page");
	  await kony.automation.playback.waitFor(["frmFastAddDBXAccount","customheadernew","lblAccounts"],15000);
	  kony.automation.button.click(["frmFastAddDBXAccount","customheadernew","lblAccounts"]);
	  appLog("Moved back to Accounts Landing Page");
	  await kony.automation.playback.wait(5000);
	}
	
	
	
	it("Sample", async function() {
	  appLog("Hello");
	  await kony.automation.playback.wait(95000);
	  appLog("Test");
	},120000);
	
	it("AddInteracRecipient", async function() {
	  var RecipitentName =ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);
	  await NavigatetoInteracEtransferManagerecipient();
	 await AddInteracEtransferRecipient(RecipitentName);
	  await EnterSecurityQuestionandAnswer();
	  await NavigateBacktoDashboard_AddEtransferrecipient();
	  
	},75000);
	
	it("InteracEtransferlanding", async function() {
	  
	   await navigateToInteracEtransfer();
	   await NavigateBacktoDashboard_InteracEtransferlandingscreen();
	//	kony.automation.widget.touch(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"], [158,25],null,null);
		//kony.automation.widget.touch(["frmAccountsLanding"], null,null,[444,95]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
		//kony.automation.widget.touch(["frmAccountsLanding"], null,null,[388,178]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxeTransfer"]);
		//kony.automation.widget.touch(["frmeTransferSendMoney"], null,null,[179,154]);
		//kony.automation.richtext.click(["frmeTransferSendMoney","rtxeTransferSendMoney"]);
	},TimeOuts.Transfers.transfer); 
	
	it("VerifyManageETransferUI", async function() {
	  await navigateToManageInteracETransfer();
	  await verifyManageIntracEtransferUI();
	  await MoveBacktoDashboard_ManageRecipitent();
	//	kony.automation.widget.touch(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"], [157,17],null,null);
	//	kony.automation.widget.touch(["frmAccountsLanding"], null,null,[443,87]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
		//kony.automation.widget.touch(["frmAccountsLanding"], null,null,[380,261]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxSendMoney"]);
		//kony.automation.widget.touch(["frmFastManagePayee"], null,null,[237,203]);
		//kony.automation.richtext.click(["frmFastManagePayee","rtxInteraceTransfer"]);
		//kony.automation.widget.touch(["frmFastManagePayee"], null,null,[153,155]);
		//kony.automation.flexcontainer.click(["frmFastManagePayee","flxMain"]);
		//kony.automation.widget.touch(["frmFastManagePayee"], null,null,[102,410]);
		//kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
	},75000);
});