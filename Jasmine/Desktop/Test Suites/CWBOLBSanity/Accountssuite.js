describe("Accountssuite", function() {
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
	
	
	
	it("Sample", async function() {
	  appLog("Hello");
	  await kony.automation.playback.wait(95000);
	  appLog("Test");
	},120000);
	
	it("TransactionPagination", async function() {
	  await clickOnFirstCheckingAccount();
	 // await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	 // kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[0,0]","flxAccountNameWrapper"]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[0,0]","flxAccountNameWrapper"]);
	 //await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","flxPaginationWrapper"]);
	 //kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxPaginationWrapper"]);
	  await VerifyTransactionPagination();
	  await MoveBackToLandingScreen_AccDetails();
	},120000);
});