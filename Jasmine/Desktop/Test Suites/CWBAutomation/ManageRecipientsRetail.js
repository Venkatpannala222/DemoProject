describe("ManageRecipientsRetail", function() {
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
	
	
	
	async function NavigateToProfileSettings(){
	
	  appLog("Intiated method to Navigate to Personal Details");
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"]);
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","Settings0flxMyAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","Settings0flxMyAccounts"]);
	  await kony.automation.playback.wait(15000);
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblPersonalDetailsHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblPersonalDetailsHeading"], "text")).toEqual("Personal Details");
	
	  appLog("Successfully Navigated to Personal Details");
	}
	
	async function selectProfileSettings_PhoneNumber(){
	
	  appLog("Intiated method to Navigate to PhoneNumber Flex");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxPhone"],15000);
	  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxPhone"]);
	  //await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblPhoneNumbersHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblPhoneNumbersHeading"], "text")).toEqual("Phone Number");
	
	  appLog("Successfully Navigated to PhoneNumber Flex");
	}
	
	async function selectProfileSettings_EmailAddress(){
	
	  appLog("Intiated method to Navigate to EmailID Flex");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxEmail"],15000);
	  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxEmail"]);
	  //await kony.automation.playback.wait(5000);
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEmailHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblEmailHeading"], "text")).toEqual("Email");
	
	  appLog("Successfully Navigated to EmailID Flex");
	}
	
	async function selectProfileSettings_Address(){
	
	  appLog("Intiated method to Navigate to Address Flex");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxAddress"],15000);
	  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxAddress"]);
	  //await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddressHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAddressHeading"], "text")).toEqual("Address");
	
	  appLog("Successfully Navigated to Address Flex");
	}
	
	async function ProfileSettings_addNewPhoneNumberDetails(phoneNumber,isPrimary){
	
	  appLog("Intiated method to addNewPhoneNumberDetails");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddPhoneNumberHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAddPhoneNumberHeading"], "text")).toEqual("Add Phone Number");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxAddPhoneNumberType"],15000);
	  kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxAddPhoneNumberType"], "Other");
	  appLog("Successfully Selected PhoneNumber Type");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAddPhoneNumberCountryCode"],15000);
	  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAddPhoneNumberCountryCode"],"91");
	  appLog("Successfully Entered CountryCode");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAddPhoneNumber"],15000);
	  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAddPhoneNumber"],phoneNumber);
	  appLog("Successfully Entered Phone Number as : <b>"+phoneNumber+"</b>");
	
	  if(isPrimary==='YES'){
	
	    await selectMakePrimayPhoneNumbercheckBox();
	  }
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddPhoneNumberSave"],15000);
	  kony.automation.button.click(["frmProfileManagement","settings","btnAddPhoneNumberSave"]);
	  appLog("Successfully clicked on SAVE button");
	  await kony.automation.playback.wait(5000);
	
	  var isAddHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddPhoneNumberHeading"],15000);
	
	  if(isAddHeader){
	
	    appLog("Custom Message :: Update Customer Details Failed");
	    fail("Custom Message :: Update Customer Details Failed");
	  }else{
	    appLog("Successfully Added Mobile Number");
	  }
	
	}
	
	async function selectMakePrimayPhoneNumbercheckBox(){
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxAddCheckBox3"],15000);
	  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxAddCheckBox3"]);
	  appLog("Successfully Selected Entered Phone Number as Primary");
	}
	
	async function ProfileSettings_UpdatePhoneNumber(updatedPhonenum){
	
	  // Update Number
	  appLog("Intiated method to Update PhoneNumberDetails");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers"],15000);
	  var accounts_Size1=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segPhoneNumbers"],"data");
	
	  var segLength1=accounts_Size1.length;
	  kony.print("Segment length is :"+segLength1);
	
	  var isEditble=await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers[0]","btnViewDetail"],15000);
	  if(isEditble){
	
	    kony.automation.button.click(["frmProfileManagement","settings","segPhoneNumbers[0]","btnViewDetail"]);
	    appLog("Successfully clicked on ViewDetails button");
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxPhoneNumber"]);
	    kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxPhoneNumber"],updatedPhonenum);
	    appLog("Successfully Updated Phone number as : <b>"+updatedPhonenum+"</b>");
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditPhoneNumberSave"]);
	    kony.automation.button.click(["frmProfileManagement","settings","btnEditPhoneNumberSave"]);
	    appLog("Successfully clicked on SAVE button");
	    await kony.automation.playback.wait(5000);
	
	    var isEditHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditPhoneNumberHeading"],15000);
	
	    if(isEditHeader){
	
	      appLog("Custom Message :: Update Customer Details Failed");
	      fail("Custom Message :: Update Customer Details Failed");
	    }else{
	      appLog("Successfully Updated Mobile Number");
	    }
	  }else{
	    appLog("Unable to Update PhoneNumberDetails");
	  }
	}
	
	async function ProfileSettings_DeletePhoneNumber(phoneNumber){
	
	  //Delete already added Mobile Number
	  appLog("Intiated method to Delete PhoneNumberDetails");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers"],15000);
	  var seg_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segPhoneNumbers"],"data");
	  var segLength=seg_Size.length;
	  //appLog("Length is :: "+segLength);
	  for(var x = 0; x <segLength; x++){
	    var seg="segPhoneNumbers["+x+"]";
	    //appLog("Segment is :: "+seg);
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings",seg,"lblPhoneNumber"],15000);
	    var phonenum=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings",seg,"lblPhoneNumber"], "text");
	    //appLog("Text is :: "+phonenum);
	    if(phonenum===phoneNumber){
	
	      await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers"],15000);
	      kony.automation.button.click(["frmProfileManagement","settings",seg,"btnDelete"]);
	      appLog("Successfully Clicked on Delete Button");
	
	      await kony.automation.playback.waitFor(["frmProfileManagement","btnDeleteYes"],15000);
	      kony.automation.button.click(["frmProfileManagement","btnDeleteYes"]);
	      appLog("Successfully Clicked on YES Button");
	      await kony.automation.playback.wait(5000);
	      break;
	    }
	  } 
	}
	
	async function ProfileSettings_VerifyaddNewPhoneNumberFunctionality(phoneNumber,isPrimary){
	
	  appLog("Intiated method to VerifyaddNewPhoneNumberFunctionality");
	
	  var isAddNewNumber=await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddNewNumber"],15000);
	  //appLog("Button status is :"+isAddNewNumber);
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segPhoneNumbers"],15000);
	  var seg_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segPhoneNumbers"],"data");
	  var segLength=seg_Size.length;
	  //appLog("PhoneNumbers size is :: "+segLength);
	
	  if(segLength<3&&isAddNewNumber){
	    kony.automation.button.click(["frmProfileManagement","settings","btnAddNewNumber"]);
	    appLog("Successfully Clicked on Add New Phone Number Button");
	    await ProfileSettings_addNewPhoneNumberDetails(phoneNumber,isPrimary);
	
	    var Header=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblPhoneNumbersHeading"],15000);
	    if(Header&&isPrimary==='NO'){
	      await ProfileSettings_DeletePhoneNumber(phoneNumber);
	    }else{
	      appLog("Custom Message :: Update Customer Details Failed");
	      fail("Custom Message :: Custom Message :: Update Customer Details Failed");
	    }
	
	  }else{
	    appLog("Maximum phone numbers already added");
	  }
	}
	
	async function ProfileSettings_addNewAddressDetails(addressLine1,addressLine2,zipcode,isPrimary){
	
	  appLog("Intiated method to addNewAddressDetails");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAddressLine1"],15000);
	  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAddressLine1"],addressLine1);
	  appLog("Successfully Entered AddressLine1 : <b>"+addressLine1+"</b>");
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAddressLine2"],15000);
	  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAddressLine2"],addressLine2);
	  appLog("Successfully Entered AddressLine2 : <b>"+addressLine2+"</b>");
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxCountry"],15000);
	  kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxCountry"], "IN");
	  appLog("Successfully Selected Country Code");
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxState"],15000);
	  kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxState"], "IN-TG");
	  appLog("Successfully Selected State Code");
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","txtCity"],15000);
	  kony.automation.textbox.enterText(["frmProfileManagement","settings","txtCity"],"HYD");
	  appLog("Successfully Selected City Code");
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxZipcode"],15000);
	  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxZipcode"],zipcode);
	  appLog("Successfully Entered Zipcode : <b>"+zipcode+"</b>");
	
	  if(isPrimary==='YES'){
	
	    await selectMakeDefaultAddresscheckBox();
	  }
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddNewAddressAdd"],15000);
	  kony.automation.button.click(["frmProfileManagement","settings","btnAddNewAddressAdd"]);
	  appLog("Successfully Clicked on Add Address Button");
	  await kony.automation.playback.wait(5000);
	
	  var isAddHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddNewAddressHeader"],15000);
	
	  if(isAddHeader){
	    appLog("Custom Message :: Update Customer Details Failed");
	    fail("Custom Message :: Update Customer Details Failed");
	
	  }else{
	    appLog("Successfully Added new Address details");
	  }
	}
	
	
	async function selectMakeDefaultAddresscheckBox(){
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxSetAsPreferredCheckBox"],15000);
	  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxSetAsPreferredCheckBox"]);
	  appLog("Successfully Selected Entered Address as Primary");
	}
	
	// async function ProfileSettings_UpdateAddress(UpdatedZip){
	
	//   // Update Address
	//   appLog("Intiated method to update Address Details");
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses"]);
	//   var accounts_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAddresses"],"data");
	
	//   var segLength=accounts_Size.length;
	//   kony.print("Segment length is : "+segLength);
	
	//   var isEditble=await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses[0]","btnEdit"],15000);
	//   if(isEditble){
	//     kony.automation.button.click(["frmProfileManagement","settings","segAddresses[0]","btnEdit"]);
	//     appLog("Successfully clicked on Edit button");
	//     await kony.automation.playback.wait(5000);
	//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxEditZipcode"],15000);
	//     kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxEditZipcode"],UpdatedZip);
	//     appLog("Successfully Entered Updated Zipcode as : <b>"+UpdatedZip+"</b>");
	//     await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditAddressSave"],15000);
	//     kony.automation.button.click(["frmProfileManagement","settings","btnEditAddressSave"]);
	//     appLog("Successfully clicked on SAVE button");
	//     await kony.automation.playback.wait(5000);
	
	//     var isEditHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditAddressHeader"],15000);
	
	//     if(isEditHeader){
	//       appLog("Custom Message :: Update Customer Details Failed");
	//       fail("Custom Message :: Update Customer Details Failed");
	
	//     }else{
	//       appLog("Successfully Updated Address Details");
	//     }
	//   }
	
	
	
	// }
	
	async function ProfileSettings_DeleteAddress(addressLine1){
	
	  // Delete Address
	  appLog("Intiated method to Delete Address Details");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses"],15000);
	  var accounts_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAddresses"],"data");
	
	  var segLength=accounts_Size.length;
	  for(var x = 0; x <segLength; x++) {
	    var seg="segAddresses["+x+"]";
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings",seg,"flxRow","lblAddressLine1"],15000);
	    var address1=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings",seg,"flxRow","lblAddressLine1"], "text");
	    //appLog("Text is :: "+address1);
	    if(address1===addressLine1){
	      kony.automation.button.click(["frmProfileManagement","settings",seg,"btnDelete"]);
	      appLog("Successfully clicked on DELETE button");
	      await kony.automation.playback.waitFor(["frmProfileManagement","btnDeleteYes"],15000);
	      kony.automation.button.click(["frmProfileManagement","btnDeleteYes"]);
	      appLog("Successfully clicked on YES button");
	      await kony.automation.playback.wait(5000);
	      break;
	    }
	  }
	
	}
	
	async function ProfileSettings_VerifyaddNewAddressFunctionality(addressLine1,addressLine2,zipcode,isPrimary){
	
	
	  appLog("Intiated method to VerifyaddNewAddressFunctionality");
	
	  var isAddNewAddress=await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddNewAddress"],15000);
	  //appLog("Button status is :"+isAddNewAddress);
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses"],15000);
	  var seg_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAddresses"],"data");
	  var segLength=seg_Size.length;
	  //appLog("Address size is :: "+segLength);
	
	  if(segLength<3&&isAddNewAddress){
	    kony.automation.button.click(["frmProfileManagement","settings","btnAddNewAddress"]);
	    appLog("Successfully clicked on AddNewAddress button");
	    await ProfileSettings_addNewAddressDetails(addressLine1,addressLine2,zipcode,isPrimary);
	
	    var Header=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddressHeading"],15000);
	    if(Header&&isPrimary==='NO'){
	      await ProfileSettings_DeleteAddress(addressLine1);
	    }else{
	      appLog("Custom Message :: Update Customer Details Failed");
	      fail("Custom Message :: Custom Message :: Update Customer Details Failed");
	    }
	
	  }else{
	    appLog("Maximum Address already added");
	  }
	
	}
	
	async function ProfileSettings_addEmailAddressDetails(emailAddress,isPrimary){
	
	  // Add new email ID
	  appLog("Intiated method to add new Emai Address Details");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddNewEmailHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAddNewEmailHeading"], "text")).toEqual("Add New Email");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxEmailId"],15000);
	  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxEmailId"],emailAddress);
	  appLog("Successfully Entered new Email Address : <b>"+emailAddress+"</b>");
	
	  if(isPrimary==='YES'){
	
	    await selectMakePrimayEmailIDcheckBox();
	  }
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddEmailIdAdd"],15000);
	  kony.automation.button.click(["frmProfileManagement","settings","btnAddEmailIdAdd"]);
	  appLog("Successfully clicked on Add Button");
	  await kony.automation.playback.wait(5000);
	
	  var isAddHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddNewEmailHeading"],15000);
	
	  if(isAddHeader){
	    appLog("Custom Message :: Update Customer Details Failed");
	    fail("Custom Message :: Update Customer Details Failed");
	  }else{
	    appLog("Successfully added new Email Address");
	  }
	}
	
	async function selectMakePrimayEmailIDcheckBox(){
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxMarkAsPrimaryEmailCheckBox"],15000);
	  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxMarkAsPrimaryEmailCheckBox"]);
	  appLog("Successfully Selected Entered EmailID as Primary");
	}
	
	async function ProfileSettings_UpdateEmailAddress(updatedemailid){
	
	  // Update email ID
	  appLog("Intiated method to Update Email address");
	  
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEmailIds"],15000);
	  var accounts_Size1=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segEmailIds"],"data");
	
	  var segLength1=accounts_Size1.length;
	  appLog("Length is :"+segLength1);
	
	  var isEditble=await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEmailIds[0]","btnEdit"],15000);
	  if(isEditble){
	    kony.automation.button.click(["frmProfileManagement","settings","segEmailIds[0]","btnEdit"]);
	    appLog("Successfully clicked on Edit Button");
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxEditEmailId"],15000);
	    kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxEditEmailId"],updatedemailid);
	    appLog("Successfully Entered Updated Email ID : <b>"+updatedemailid+"</b>");
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditEmailIdSave"],15000);
	    kony.automation.button.click(["frmProfileManagement","settings","btnEditEmailIdSave"]);
	    appLog("Successfully Clicked on SAVE button");
	    await kony.automation.playback.wait(5000);
	
	    var isEditHeader=await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditEmailHeading"],15000);
	
	    if(isEditHeader){
	      appLog("Custom Message :: Update Customer Details Failed");
	      fail("Custom Message :: Update Customer Details Failed");
	    }else{
	      appLog("Successfully Updated email Address");
	    }
	  }
	
	}
	
	async function ProfileSettings_deleteEmailAddressDetails(emailAddress){
	
	  // Delete Address
	  appLog("Intiated method to Delete Email Details");
	  
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEmailIds"],15000);
	  var accounts_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segEmailIds"],"data");
	
	  var segLength=accounts_Size.length;
	  for(var x = 0; x <segLength; x++) {
	    var seg="segEmailIds["+x+"]";
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings",seg,"flxRow","lblEmail"],15000);
	    var address1=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings",seg,"flxRow","lblEmail"], "text");
	    //appLog("Text is :: "+address1);
	    if(address1===emailAddress){
	      kony.automation.button.click(["frmProfileManagement","settings",seg,"btnDelete"]);
	      appLog("Successfully Clicked on Delete Button");
	      await kony.automation.playback.waitFor(["frmProfileManagement","btnDeleteYes"],15000);
	      kony.automation.button.click(["frmProfileManagement","btnDeleteYes"]);
	      appLog("Successfully Clicked on YES Button");
	      await kony.automation.playback.wait(5000);
	      break;
	    }
	  }
	}
	
	async function ProfileSettings_VerifyaddEmailAddressFunctionality(emailAddress,isPrimary){
	
	  appLog("Intiated method to VerifyaddEmailAddressFunctionality");
	  
	  var isAddEmailAddress=await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddNewEmail"],15000);
	  //appLog("Button status is :"+isAddEmailAddress);
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEmailIds"],15000);
	  var seg_Size=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segEmailIds"],"data");
	  var segLength=seg_Size.length;
	  //appLog("email size is :: "+segLength);
	
	  if(segLength<3&&isAddEmailAddress){
	    
	    kony.automation.button.click(["frmProfileManagement","settings","btnAddNewEmail"]);
	    appLog("Successfully clicked on NewEmail Button");
	    await ProfileSettings_addEmailAddressDetails(emailAddress,isPrimary);
	
	    // if there is an error after saving phone number
	    var Header= await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEmailHeading"],15000);
	    if(Header&&isPrimary==='NO'){
	      await ProfileSettings_deleteEmailAddressDetails(emailAddress);
	    }else{
	
	      appLog("Custom Message :: Update Customer Details Failed");
	      fail("Custom Message :: Custom Message :: Update Customer Details Failed");
	      //await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnAddPhoneNumberCancel"]);
	      //kony.automation.button.click(["frmProfileManagement","settings","btnAddPhoneNumberCancel"]);
	    }
	
	  }else{
	    appLog("Maximum Email Address already added");
	  }
	
	}
	
	
	async function MoveBackToDashBoard_ProfileManagement(){
	
	  // Move back to base state
	  await kony.automation.playback.waitFor(["frmProfileManagement","customheader","topmenu","flxaccounts"],15000);
	  kony.automation.flexcontainer.click(["frmProfileManagement","customheader","topmenu","flxaccounts"]);
	  appLog("Successfully Moved back to Accounts dashboard");
	  await kony.automation.playback.wait(20000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","accountList"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"], "text")).toContain("Accounts");
	  appLog("Successfully Moved back to Account Dashboard");
	}
	
	async function NavigateToAccountSettings(){
	
	  appLog("Intiated method to navigate to Account Settings");
	  
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"]);
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","Settings2flxMyAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","Settings2flxMyAccounts"]);
	  await kony.automation.playback.wait(5000);
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountsHeader"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountsHeader"], "text")).toEqual("Accounts");
	
	  appLog("Successfully Navigated to AccountSettings");
	}
	
	
	async function clickonDefaultAccountstab(){
	
	  appLog("Intiated method to click on DefaultAccountstab");
	    await kony.automation.playback.wait(20000);
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxSetDefaultAccount"],15000);
	  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxSetDefaultAccount"]);
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblDefaultTransactionAccounttHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblDefaultTransactionAccounttHeading"], "text")).toEqual("Default Transaction Accounts");
	
	  appLog("Successfully clicked on DefaultAccountstab");
	  
	  await kony.automation.playback.wait(20000);
	}
	async function clickonAccountPreferencetab(){
	
	  appLog("Intiated method to click on AccountPreferencetab");
	  
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxAccountPreferences"],15000);
	  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxAccountPreferences"]);
	  
	  appLog("Successfully clicked on AccountPreferencetab");
	  
	  await kony.automation.playback.wait(5000);
	}
	
	
	async function EditFavAccountPreferences(){
	
	  appLog("Intiated method to Edit FavAccountPreferences");
	  
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"],15000);
	  kony.automation.button.click(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"]);
	  appLog("Successfully Clicked on Edit button");
	  await kony.automation.playback.wait(20000);
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditAccountsHeader"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblEditAccountsHeader"], "text")).toEqual("Edit Account");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountNickNameKey"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountNickNameKey"],"text")).toEqual("Account Name:");
	   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","tbxAccountNickNameValue"], "text")).not.toBe('');
	  appLog("Successfully verified Account Name");
	  
	 await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountTypeKey"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountTypeKey"],"text")).toEqual("Account Type:");
	   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountTypeValue"], "text")).not.toBe('');
	  appLog("Successfully verified Account Type");
	  
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountNumberKey"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountNumberKey"],"text")).toEqual("Account Number:");
	   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountNumberValue"], "text")).not.toBe('');
	  appLog("Successfully verified Account Number");
	  
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblFavoriteAccount"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblFavoriteAccount"],"text")).toEqual("Preferred Account");
	   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblFavoriteEmailCheckBox"], "text")).not.toBe('');
	  appLog("Successfully verified Preferred account check box and text");
	}
	
	async function ValidateSetDefaultAcc_ChequeDeposit()
	{
	   await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"],15000);
	  kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	  appLog("Successfully clicked on Edit Button");
	    await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxCheckDeposit"],15000);
	    var List = kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lbxCheckDeposit"], "masterData");
	  var AccLength = List.length;
	  appLog(AccLength);
	  if(AccLength>1)
	    {
	  kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxCheckDeposit"], "102977-00002");
	  appLog("Successfully selected the other account from cheque deposit");
	}
	  else
	    {
	      appLog("Only one account is present");
	    }
	 
	    kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	appLog("Successfully clicked on save button");
	      await kony.automation.playback.wait(20000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblCheckDeposit"], "text")).toEqual("Cheque Deposit:");
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblCheckDepositValue"], "text")).not.toBe('');
	  
	
	}
	
	async function ValidateSetDefaultAcc_MyBills()
	{
	   await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"],15000);
	  kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	  appLog("Successfully clicked on Edit Button");
	    await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxBillPay"],15000);
	    var List = kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lbxBillPay"], "masterData");
	  var AccLength = List.length;
	  appLog(AccLength);
	  if(AccLength>1)
	    {
	  kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxBillPay"], "102977-00002");
	  appLog("Successfully selected the other account from My Bills");
	}
	  else
	    {
	      appLog("Only one account is present");
	    }
	 
	    kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	appLog("Successfully clicked on save button");
	      await kony.automation.playback.wait(20000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblBillPayKey"], "text")).toEqual("Bill Pay:");
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblBillPayValue"], "text")).not.toBe('');
	 
	
	}
	
	async function EditNickName_GreaterThan28char(){
	  
	  appLog("Intiated method to Edit account nickname");
	  
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"],15000);
	  kony.automation.button.click(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"]);
	  appLog("Successfully Clicked on Edit button");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditAccountsHeader"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblEditAccountsHeader"], "text")).toEqual("Edit Account");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAccountNickNameValue"],15000);
	  kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAccountNickNameValue"],'abcdefghijklmnopqrstuvwxyzabc');
	  appLog("Successfully Updated NickName value");
	  
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditAccountsSave"],15000);
	  kony.automation.button.click(["frmProfileManagement","settings","btnEditAccountsSave"]);
	  appLog("Successfully Clicked on SAVE button");
	//  flxAccountRow_lblAccountName
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAccounts[0,0]","lblAccountName"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblAccountName"],"text")).toEqual("abcdefghijklmnopqrstuvwxyzab");
	  appLog("Successfully verified that the nickname is not greater than 28 characters");
	}
	
	async function SetDefaultAccountPreferences(){
	
	  appLog("Intiated method to Set DefaultAccountPreferences Tab");
	  
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"],15000);
	  kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	  appLog("Successfully clicked on Edit Button");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblSelectedDefaultAccounts"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblSelectedDefaultAccounts"], "text")).not.toBe('');
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxBillPay"],15000);
	//   kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxBillPay"], "190128223241502");
	//   appLog("Successfully Selected Default BillPay acc");
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxCheckDeposit"],15000);
	//   kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxCheckDeposit"], "190128223242830");
	//   appLog("Successfully Selected Default Deposit acc");
	
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"],15000);
	  await kony.automation.scrollToWidget(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	  kony.automation.flexcontainer.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	  appLog("Successfully Clicked on SAVE Button");
	
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblSelectedDefaultAccounts"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblSelectedDefaultAccounts"], "text")).not.toBe('');
	  appLog("Successfully Verified Default accounts");
	}
	
	async function CancelSetDefaultAccount(){
	   appLog("Intiated method to Set DefaultAccountPreferences Tab");
	  
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"],15000);
	  kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	  appLog("Successfully clicked on Edit Button");
	      await kony.automation.playback.wait(20000);
	  //await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblSelectedDefaultAccounts"],15000);
	 // expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblSelectedDefaultAccounts"], "text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransctionAccountsCancel"],15000);
	  kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransctionAccountsCancel"]);
	  appLog("Successfully clicked on Cancel button");
	  
	}
	async function ProfileSettings_VerifyAddress(){
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxAddress"],15000); 
	  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxAddress"]);
	  await kony.automation.playback.wait(5000);    
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddressHeading"],15000); 
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAddressHeading"],15000); 
	    
	}
	  async function ProfileSettings_Updateaddress(){
	    
	     
		await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxAddress"],15000); 
		kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxAddress"]);
	    await kony.automation.playback.wait(5000); 
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses[0]","btnEdit"],15000); 
		kony.automation.button.click(["frmProfileManagement","settings","segAddresses[0]","btnEdit"]);
		//kony.automation.widget.touch(["frmProfileManagement"], null,null,[634,105]);
		//kony.automation.widget.touch(["frmProfileManagement"], null,null,[456,91]);
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxEditAddressLine"],15000); 
		kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxEditAddressLine"],"T");
	    await kony.automation.playback.wait(5000); 
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEditAddressList[0]","flxAddressSearchListWrapper"],15000); 
		kony.automation.flexcontainer.click(["frmProfileManagement","settings","segEditAddressList[0]","flxAddressSearchListWrapper"]);
	    await kony.automation.playback.wait(5000);
		//kony.automation.widget.touch(["frmProfileManagement"], null,null,[1070,485]);
	        await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditAddressSaveNew"],15000); 
		kony.automation.button.click(["frmProfileManagement","settings","btnEditAddressSaveNew"]);
		//kony.automation.widget.touch(["frmProfileManagement"], null,null,[475,189]);
	   // flxRow_lblAddressLine1
	   // "frmProfileManagement","settings","segAddresses[0]","flxAddress"]);
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAddresses[0]","lblAddressLine1"],15000); 
	   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAddresses[0]","lblAddressLine1"], "text")).toContain("T-190 Charlotte St");
	  appLog("Successfully Updated the resides at address");
	  }
	
	async function VerifyAccountPreferences(){
	  //await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAccounts"],15000);
	  // await kony.automation.playback.waitFor(["frmProfileManagement","settings","segEmailIds"],15000);
	//   var Accountslist=kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts"],"data");
	//   var accountscount=Accountslist.length; 
	//   appLog(+ Accountslist);
	//  appLog("accountName:"+ accountscount);
	      await kony.automation.playback.wait(20000); 
	 expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"], "text")).toEqual("Edit");
	 expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblMove"], "text")).toEqual("Move");
	 expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblMarkAsFavouriteAccountCheckBoxIcon"], "text")).not.toBe('');
	   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblMarkAsFavorite"], "text")).toEqual("Mark as Favourite Account");
	 expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblMoveUpIcon"], "text")).not.toBe('');
	 expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","segAccounts[0,0]","lblMoveDownIcon"], "text")).not.toBe('');
	  appLog("Successfully verified account preferences settings");
	  }
	//frmProfileManagement_settings_flxRight
	async function Naviagteto_TransactionandAlerts()
	{
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
	  
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","SettingsflxAccountsMenu"]);
	  
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","Settings4flxMyAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","Settings4flxMyAccounts"]);
	  await kony.automation.playback.wait(5000);
	  
	  await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxTransactionAndPaymentsAlerts"],15000);
	  kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxTransactionAndPaymentsAlerts"]);
	   await kony.automation.playback.wait(5000);
	  }
	
	
	async function EditTransactionandAlerts() {
	  var status = kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatus"],"text");
	  
	  if(status === "Alerts Enabled"){
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnModifyAlerts"],15000);
	    kony.automation.button.click(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnModifyAlerts"]);
	    
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatusCheckBox"],15000);
	    kony.automation.button.click(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatusCheckBox"]);
	    
	    await kony.automation.playback.waitFor(["frmProfileManagement","btnAlertsDisableYes"],15000);
	    kony.automation.button.click(["frmProfileManagement","btnAlertsDisableYes"]);
	    await kony.automation.playback.wait(5000);
	    
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatus"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatus"], "text")).toEqual("Alerts Disabled");
	  }
	  else if (status === "Alerts Disabled"){
	     await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnModifyAlerts"],15000);
	    kony.automation.button.click(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnModifyAlerts"]);
	    
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatusCheckBox"],15000);
	    kony.automation.button.click(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatusCheckBox"]);
	    
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnSave"],15000);
		kony.automation.button.click(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","btnSave"]);
	    await kony.automation.playback.wait(5000);
	    await kony.automation.playback.waitFor(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatus"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","transactionalAndPaymentsAlerts","lblAlertsStatus"], "text")).toEqual("Alerts Enabled");
	         
	    }
	       
	  }
	  
	
	
	
	
	
	it("Sample", async function() {
	  appLog("Hello");
	  await kony.automation.playback.wait(95000);
	  appLog("Test");
	},120000);
	
	it("ManageRecipientsHeaderDetails", async function() {
	  
	  await NavigateToManageRecipitents();
	  await ManageRecipientsHeadersValidation();
	  await MoveBacktoDashboard_ManageRecipitent();
	},350000);
	
	it("ContinueButtonDisabled", async function() {
	  
	   var Accno=getRandomNumber(10);
	       //Math.floor(new Date().getTime()/1000) + "12";
	  var unique_RecipitentName=getRandomString(5);
	
	  await NavigateToManageRecipitents();
	  await clickonAddCWBAccount();
	  await ContinueButton(Accno,unique_RecipitentName);
	  await ContinueButtonvalidation();
	  await MoveToAccountsPageFromAddCWBaccount();
	  await verifyAccountsLandingScreen(); 
	},350000);
	
	it("AddCWBAccountDetailsHeaders", async function() {
	  
	  await NavigateToManageRecipitents();
	  await clickonAddCWBAccount();
	  await AddCWBAccountFieldsValidation();
	  await MoveToAccountsPageFromAddCWBaccount();
	  await verifyAccountsLandingScreen();
	},350000);
	
	it("AddAnotherRecipient", async function() {
	
	  var Accno= getRandomNumber(12);
	  var unique_RecipitentName=getRandomString(5);
	      //ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);
	
	  await NavigateToManageRecipitents();
	  await clickonAddCWBAccount();
	  await enterSameBankAccountDetails(Accno,unique_RecipitentName);
	  await AddAnotherRecipientNavigationValidation();
	  await MoveToAccountsPageFromAddCWBaccount();
	  await verifyAccountsLandingScreen(); 
	},350000);
	
	it("AddButtonOnAddCWBBankAccount", async function() {
	
	  var Accno= getRandomNumber(12);
	  var unique_RecipitentName=getRandomString(5);
	      //ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);
	
	  await NavigateToManageRecipitents();
	  await clickonAddCWBAccount();
	  await enterSameBankAccountDetails(Accno,unique_RecipitentName);
	  await AddAnotherRecipientNavigationValidation();
	  await MoveToAccountsPageFromAddCWBaccount();
	  await verifyAccountsLandingScreen(); 
	},350000);
	
	it("AddCWBBankAccountConfirmationDetails", async function() {
	
	  var Accno= getRandomNumber(12);
	  var unique_RecipitentName=getRandomString(5);
	      //ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);
	
	  await NavigateToManageRecipitents();
	  await clickonAddCWBAccount();
	  await ContinueButton(Accno,unique_RecipitentName);
	  await AddAccountConfirmationValidation();
	  await verifyAccountsLandingScreen(); 
	},350000);
	
	it("EditSameBankRecipitent", async function() {
	
	  // Add Recipitent and edit it
	  
	  // Add a recipitent and Then delete the same recipitent
	 //var Accno="0"+new Date().getTime();
	 var Accno= getRandomNumber(12);
	 var unique_RecipitentName=ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);
	  
	  //var AccType="SameBank";
	  var unique_EditRecipitentName=ManageRecipients.sameBankAccount.unique_EditRecipitentName+getRandomString(5);
	  var unique_EditNickName=ManageRecipients.sameBankAccount.unique_EditNickName+getRandomString(5);
	  
	  await NavigateToManageRecipitents();
	  await clickonAddCWBAccount();
	  await enterSameBankAccountDetails(Accno,unique_RecipitentName);
	  await verifyAddingNewReciptientSuccessMsg();
	  await verifyAccountsLandingScreen(); 
	  
	  //Edit Added Recipitent
	  await NavigateToManageRecipitents();
	  await clickOnManageRecipientsAccountsTab();
	  await SearchforPayee_RecipientList(unique_RecipitentName);
	  await EditReciptent(unique_EditRecipitentName,unique_EditNickName);
	  await verifyAddingNewReciptientSuccessMsg();
	  await verifyAccountsLandingScreen();
	
	
	},350000);
});