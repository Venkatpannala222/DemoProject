describe("CWBSanity", function() {
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
	
	
	
	
	 async function navigatetoaccountservices_CRADirectDeposit(){
	   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
	   kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
	   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICEflxAccountsMenu"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICEflxAccountsMenu"]);
	   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICE3flxMyAccounts"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICE3flxMyAccounts"]);
	 }
	
	async function CRADirectDeposit_ToaIndividual()
	{
	   await kony.automation.playback.waitFor(["frmCRADirectDeposit","btnConfirm"],15000);
	    kony.automation.button.click(["frmCRADirectDeposit","btnConfirm"]);
		//kony.automation.listbox.selectItem(["frmCRADirectDepositRegister","lsbAccountSelection"], "102368-00001");
	  await kony.automation.playback.waitFor(["frmCRADirectDepositRegister","txtSinNumber"],15000);
		kony.automation.textbox.enterText(["frmCRADirectDepositRegister","txtSinNumber"],"611538422");
	  await kony.automation.playback.waitFor(["frmCRADirectDepositRegister","flxCheckBox"],15000);
		kony.automation.flexcontainer.click(["frmCRADirectDepositRegister","flxCheckBox"]);
	    await kony.automation.playback.waitFor(["frmCRADirectDepositRegister","btnConfirm"],15000);
		kony.automation.button.click(["frmCRADirectDepositRegister","btnConfirm"]);
	}
	
	async function VerifyCRADirectdeposit_AcknowledgementScreen()
	{
	  //frmCRADDAcknowledgement_lblSuccessMessage
	  await kony.automation.playback.waitFor(["frmCRADDAcknowledgement","lblSuccessMessage"],15000);
	   expect(kony.automation.widget.getWidgetProperty(["frmCRADDAcknowledgement","lblSuccessMessage"], "text")).toEqual("Thank you for enrolling for CRA direct deposit.");
	  appLog("Successfully verified the CRA direct deposit acknowledgement screen");
	  }
	async function NavigateBacktoDashboard_CRADirectdepositacknowledgement(){
	   await kony.automation.playback.waitFor(["frmCRADDAcknowledgement","customheadernew","flxAccounts"],15000);
	 // frmCRADDAcknowledgement_customheadernew_flxAccounts
	   kony.automation.flexcontainer.click(["frmCRADDAcknowledgement","customheadernew","flxAccounts"]);
	}
	
	async function navigateToOneTimePayment(){
	
	  //await kony.automation.playback.waitFor(["frmBulkPayees","flxMakeOneTimePayment"],15000);
	  //kony.automation.flexcontainer.click(["frmBulkPayees","flxMakeOneTimePayment"]);
	
	  //Navigating using Menu
	  appLog("Intiated method to navigate to OneTimePayment");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
	  appLog("Successfully clicked on Menu on Dashboard");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","BillPayflxAccountsMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","BillPayflxAccountsMenu"]);
	  appLog("Successfully clicked on Billpay option");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","BillPay4flxMyAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","BillPay4flxMyAccounts"]);
	  appLog("Successfully clicked on OneTimePayment option");
	  await kony.automation.playback.wait(20000);
	
	}
	
	async function enterOneTimePayeeInformation(payeeName,zipcode,accno,accnoAgain,mobileno){
	
	  appLog("Intiated method to enter OneTime Payee Information");
	
	  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","tbxName"],15000);
	  kony.automation.textbox.enterText(["frmMakeOneTimePayee","tbxName"],payeeName);
	  appLog("Successfully entered payee name to auto select : <b>"+payeeName+"</b>");
	  await kony.automation.playback.wait(5000);
	
	  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","segPayeesName"],15000);
	  kony.automation.flexcontainer.click(["frmMakeOneTimePayee","segPayeesName[3]","flxNewPayees"]);
	  //  appLog("Successfully selected payee name from list");
	
	  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","txtZipCode"],15000);
	  kony.automation.textbox.enterText(["frmMakeOneTimePayee","txtZipCode"],zipcode);
	  // appLog("Successfully entered zipcode : <b>"+zipcode+"</b>");
	
	  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","txtAccountNumber"],15000);
	  kony.automation.textbox.enterText(["frmMakeOneTimePayee","txtAccountNumber"],accno);
	  appLog("Successfully entered acc number : <b>"+accno+"</b>");
	
	  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","txtAccountNumberAgain"],15000);
	  kony.automation.textbox.enterText(["frmMakeOneTimePayee","txtAccountNumberAgain"],accnoAgain);
	  appLog("Successfully Re-entered account number : <b>"+accnoAgain+"</b>");
	
	  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","txtmobilenumber"],15000);
	  kony.automation.textbox.enterText(["frmMakeOneTimePayee","txtmobilenumber"],mobileno);
	  appLog("Successfully entered mobile number : <b>"+mobileno+"</b>");
	
	  await kony.automation.playback.waitFor(["frmMakeOneTimePayee","btnNext"],15000);
	  kony.automation.button.click(["frmMakeOneTimePayee","btnNext"]);
	  //await kony.automation.playback.wait(5000);
	  //appLog("Successfully clicked on Next button");
	}
	
	
	async function enterOneTimePaymentdetails(amount,amount1)
	{
	  appLog("Intiated method to enter details for OneTime payment");
	  await kony.automation.scrollToWidget(["frmBulkPayees","segmentBillpay"]);
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","flxDropdown"],15000);
	  kony.automation.button.click(["frmBulkPayees","segmentBillpay[0]","flxDropdown"]);
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","txtAmount"],15000);
	  kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[0]","txtAmount"],amount);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[1]","txtAmount"],15000);
	  kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[1]","txtAmount"],amount1);
	  await kony.automation.playback.wait(10000);
	  //appLog("Successfully entered amount : <b>"+amount+"</b>");
	  //kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[0]","txtAmount"],"1");
	  // await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","calSendOn"],15000);
	  //kony.automation.calendar.selectDate(["frmBulkPayees","segmentBillpay[0]","calSendOn"], [8,18,2022]);
	  // appLog("Intiated method to Select Payee From Acc for OneTime payment");
	
	}
	
	async function enterOneTimePaymentdetailsScheduled()
	{
	  appLog("Intiated method to enter details for OneTime payment");
	  await kony.automation.scrollToWidget(["frmBulkPayees","segmentBillpay"]);
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","flxDropdown"],15000);
	  kony.automation.button.click(["frmBulkPayees","segmentBillpay[0]","flxDropdown"]);
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","txtAmount"],15000);
	  kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[0]","txtAmount"],"1.81");
	  //appLog("Successfully entered amount : <b>"+amount+"</b>");
	  //kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[0]","txtAmount"],"1");
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[0]","calSendOn"],15000);
	  kony.automation.calendar.selectDate(["frmBulkPayees","segmentBillpay[0]","calSendOn"], [2,18,2022]);
	  // appLog("Intiated method to Select Payee From Acc for OneTime payment");
	
	}
	
	async function confirmOneTimePaymnet(){
	
	  appLog("Initiated method to confirm OneTimePayment");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnBulkConfirm"],15000);
	  // await kony.automation.scrollToWidget(["frmBulkPayees","btnBulkConfirm"]);
	  kony.automation.flexcontainer.click(["frmBulkPayees","btnBulkConfirm"]);
	  await kony.automation.playback.wait(10000);
	  appLog("Successfully clicked on confirm button after filling onetime payment details");
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnConfirm"],15000);
	  kony.automation.flexcontainer.click(["frmBulkBillPayConfirm","btnConfirm"]);
	  appLog("Successfully clicked on confirm button in Bill payment confirmation screen");
	  await kony.automation.playback.wait(10000);
	}
	//updated the function by Tapasya removed waitFor and added as wait
	async function verifyOneTimePaymentSuccessMsg(){
	
	  appLog("Intiated method to verify OneTimePayment SuccessMsg");
	  await kony.automation.playback.wait(15000);
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","flxHeader","lblPaymentStatus"],10000);
	  var success=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","flxHeader","lblPaymentStatus"],"text");
	  appLog("success message is:<b>"+success+"</b>");
	  if(success === "Payment successful")
	  {
	    await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"],15000);
	    await kony.automation.playback.wait(5000);
	    kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"]);
	    appLog("Successfully Moved back to Accounts Dashboard");
	    await kony.automation.playback.wait(5000);
	  }
	  else if (success==="Payment submitted")
	  {
	    await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"],15000);
	    await kony.automation.playback.wait(5000);
	    kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"]);
	    appLog("Successfully Moved back to Accounts Dashboard");   
	    await kony.automation.playback.wait(5000);
	  }
	}
	
	
	
	async function VerifyOneTimePaymentFailureMessage(){
	
	  appLog("Intiated method to verify OneTimePayment FailureMessage");
	  await kony.automation.playback.wait(15000);
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","flxHeader","lblPaymentStatus"],10000);
	  var Status=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","flxHeader","lblPaymentStatus"],"text");
	  appLog("Message is:<b>"+Status+"</b>");
	
	  if (Status==="Payment failed")
	  {
	    await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","lblRefernceNumber"],15000);
	
	    expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblRefernceNumber"],"text")).toContain("Attention");
	    appLog("ReferenceNumber is Validated");
	    //appLog("msg is:<b>"+failure+"</b>");
	    expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblPaymentStatus"], "text")).toContain("Payment failed");
	    appLog("Status is Validated");
	    expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","lblAmountValue"], "text")).toContain("$0.00");
	    appLog("Amount is Validated");
	    await kony.automation.playback.wait(5000);
	    await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"],15000);
	    await kony.automation.playback.wait(5000);
	    kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"]);
	    appLog("Successfully Moved back to Accounts Dashboard");  
	    await kony.automation.playback.wait(5000);
	  }
	  else if(await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","rtxDowntimeWarning"],5000)){
	    //appLog("Logged in User is not authorized to perform this action");
	    //fail('Logged in User is not authorized to perform this action');
	    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","rtxDowntimeWarning"],"text"));
	    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","rtxDowntimeWarning"],"text"));
	    await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"]);
	    appLog("Successfully Moved back to Accounts Dashboard");
	  }else{
	    appLog("Unable to perform OneTimePayment so return to accounts dashboard");
	    //     await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"],15000);
	    //     kony.automation.flexcontainer.click(["frmBulkBillPayAcknowledgement","customheadernew","flxAccounts"]);
	    //     appLog("Successfully Moved back to Accounts Dashboard");
	    await kony.automation.playback.wait(5000);
	
	  }
	}
	async function NavigateandcancelSchduledPayment()
	{
	
	  kony.automation.flexcontainer.click(["frmBulkPayees","btnManagePayee"]);
	  await kony.automation.playback.wait(10000);
	  kony.automation.flexcontainer.click(["frmManagePayees","btnPaymentDue"]); 
	  await kony.automation.playback.wait(10000);
	  kony.automation.flexcontainer.click(["frmBillPaymentDue","btnAllPayees"]); 
	  await kony.automation.playback.wait(10000);
	  appLog("Intiated method to cancel scheduled payment");
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],15000);
	  kony.automation.button.click(["frmBulkPayees","btnScheduled"]); 
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmBillPayScheduled","segmentBillpay[0]","flxDropdown"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayScheduled","segmentBillpay[0]","flxDropdown"]);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmBillPayScheduled","segmentBillpay[0]","btnEdit"],15000);
	  kony.automation.button.click(["frmBillPayScheduled","segmentBillpay[0]","btnEdit"]);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmBillPayScheduled","CustomPopupCancel","btnYes"],15000);
	  kony.automation.button.click(["frmBillPayScheduled","CustomPopupCancel","btnYes"]);
	  await kony.automation.playback.wait(10000);
	
	}
	
	
	async function navigateToManagePayee(){
	
	  await NavigateToBillPay();
	  appLog("Intiated method to navigate to Manage Payee list");
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnManagePayee"],15000);
	  kony.automation.button.click(["frmBulkPayees","btnManagePayee"]);
	  appLog("Successfully clicked on Manage payee Button");
	  await kony.automation.playback.wait(10000);
	}
	
	async function selectPayee_ManagePayeeList(payeename){
	
	  appLog("Intiated method to select Payee from Manage Payee list : <b>"+payeename+"</b>");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","txtSearch"],15000);
	  kony.automation.textbox.enterText(["frmManagePayees","manageBiller","txtSearch"],payeename);
	  appLog("Successfully entered Payee "+payeename);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","btnConfirm"],15000);
	  kony.automation.flexcontainer.click(["frmManagePayees","manageBiller","btnConfirm"]);
	  appLog("Successfully clicked on Search button");
	  await kony.automation.playback.wait(5000);
	
	  //   await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","txtSearch"],15000);
	  //   kony.automation.textbox.enterText(["frmManagePayees","manageBiller","txtSearch"], [ { modifierCapsLock:true, key : 'A' },
	  //                                                             { modifierCapsLock:true, key : 'B' },
	  // 															{ modifierCapsLock:true, key : 'C' },
	  //                                                             { modifierCapsLock:false, keyCode : 13 }
	  // 														]);
	
	  appLog("Intiated Method to verify Payee <b>"+payeename+"</b>");
	
	  var PayeeList=await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","segmentBillPay"],15000);
	  if(PayeeList){
	    //expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","segmentBillPay[0]","lblColumn1"],"text")).toEqual(payeename);
	    expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","segmentBillPay[0]","lblColumn1"],"text")).not.toBe('');
	  }else if(await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","rtxNoPaymentMessage"],5000)){
	    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","rtxNoPaymentMessage"],"text"));
	    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","rtxNoPaymentMessage"],"text"));
	
	  }else{
	    appLog("Unable to find Payee in ManagePayees List");
	  }
	
	}
	
	async function clickOnBillPayBtn_ManagePayees(){
	
	
	  // BillPay and Active ebill has same locator hence verifying text and doing operation accordingly, Instead of directly failing.
	
	  appLog("Intiated method to click on Billpay button from Manage Payee list");
	
	  await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","segmentBillPay"],15000);
	
	  var ButtonName=kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"], "text");
	
	  //appLog('Button Name is : '+ButtonName);
	
	  if(ButtonName==='Activate ebill'){
	
	    appLog("Info : <b>"+ButtonName+"</b>"+" is Available instead of BillPay button");
	    //Activate e Bill to convert button to PayaBill. instead of failing we can proceed execution
	    kony.automation.button.click(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"]);
	    await kony.automation.playback.waitFor(["frmManagePayees","btnProceedIC"],15000);
	    kony.automation.button.click(["frmManagePayees","btnProceedIC"]);
	    appLog('Successfully clicked on YES button');
	    await kony.automation.playback.wait(10000);
	    kony.automation.button.click(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"]);
	    appLog("Successfully clicked on BillPay button");
	
	  }else{
	
	    // We can directly click on BillPay button
	    kony.automation.button.click(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"]);
	    appLog("Successfully clicked on BillPay button");
	    await kony.automation.playback.wait(5000);
	  }
	}
	
	async function SelectPayee_Reccurringpayment(){
	
	  //await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnPayementDue"],15000);
	  kony.automation.button.click(["frmBulkPayees","btnPayementDue"]);
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxpayee"], "0-000005701-123456782NW6739",15000);
	  kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxpayee"], "0-000005701-123456782NW6739");
	  appLog("Selected the Payee while Reccurring Payment");
	
	}
	
	
	
	// async function enterAmount_SheduleBillPay(amount){
	
	//   appLog("Intiated method to enter amount : <b>"+amount+"</b>");
	//   await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","txtSearch"],15000);
	//   kony.automation.textbox.enterText(["frmBillPaymentDue","payABill","txtSearch"],amount);
	//   appLog("Successfully entered amount : <b>"+amount+"</b>");
	
	//   // await SelectPayFromAcc_SheduleBillPay();
	// }
	
	async function SelectPayFromAcc_SheduleBillPay(){
	
	  appLog("Intiated method to Select Payee From");
	
	  await kony.automation.playback.waitFor(["frmPayABill","txtTransferFrom"],15000);
	  kony.automation.widget.touch(["frmPayABill","txtTransferFrom"], [600,17],null,null);
	  kony.automation.flexcontainer.click(["frmPayABill","segTransferFrom[0,0]","flxAccountListItem"]);
	
	  appLog("Successfully selected Payee from the list");
	}
	
	// async function selectfrequency_SheduledBillPay(freq){
	
	//   appLog("Intiated method to select freq : <b>"+freq+"</b>");
	//   await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxFrequency"],15000);
	//   kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxFrequency"],freq);
	//   appLog("Successfully selected freq : "+freq);
	// }
	
	async function SelectDateRange_SheduledBillpay() {
	
	  //new chnage in 202010
	  //await kony.automation.playback.wait(5000);
	  appLog("Intiated method to select DateRange");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxForHowLong"],15000);
	  kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxForHowLong"], "ON_SPECIFIC_DATE");
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","calSendOn"],15000);
	  kony.automation.calendar.selectDate(["frmBillPaymentDue","payABill","calSendOn"], [29,11,2021]);
	  appLog("Successfully selected sendOn Date");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","CalDeliverBy"],15000);
	  kony.automation.calendar.selectDate(["frmBillPaymentDue","payABill","CalDeliverBy"], [12,21,2021]);
	  appLog("Successfully selected EndOn Date");
	}
	
	async function SelectSendOnDate_SheduledBillpay() {
	
	  await kony.automation.playback.waitFor(["frmPayABill","calSendOn"],15000);
	  kony.automation.calendar.selectDate(["frmPayABill","calSendOn"], [1,11,2022]);
	  appLog("Successfully selected sendOn Date");
	}
	
	async function SelectOccurences_SheduledBillPay(occurences) {
	  //new chnage in 202010
	  appLog("Intiated method to select N.of Occurences");
	  await kony.automation.playback.waitFor(["frmPayABill","lbxForHowLong"],15000);
	  kony.automation.listbox.selectItem(["frmPayABill","lbxForHowLong"], "NO_OF_RECURRENCES");
	  await kony.automation.playback.waitFor(["frmPayABill","txtEndingOn"],15000);
	  kony.automation.textbox.enterText(["frmPayABill","txtEndingOn"],occurences);
	  appLog("Successfully selected Occurences : <b>"+occurences+"</b>");
	}
	
	async function EnterNoteValue_SheduledBillPay(notes) {
	
	  appLog("Intiated method to enter note value");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","txtNotes"],15000);
	  kony.automation.textbox.enterText(["frmBillPaymentDue","payABill","txtNotes"],notes);
	  appLog("Successfully entered Note value : <b>"+notes+"</b>");
	
	  appLog("Intiated method to click on Confirm button");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","btnConfirm"],15000);
	  kony.automation.button.click(["frmBillPaymentDue","payABill","btnConfirm"]);
	  appLog("Successfully clicked on Confirm button");
	}
	
	// async function confirmSheduledBillpay(){
	
	//   appLog("Intiated method to Confirm Sheduled BillPayment");
	
	//   await kony.automation.playback.waitFor(["frmPayBillConfirm","flxImgCheckBox"],15000);
	//   kony.automation.flexcontainer.click(["frmPayBillConfirm","flxImgCheckBox"]);
	//   appLog("Successfully accepted terms check box");
	
	//   await kony.automation.playback.waitFor(["frmPayBillConfirm","btnConfirm"],15000);
	//   kony.automation.button.click(["frmPayBillConfirm","btnConfirm"]);
	//   appLog("Successfully clicked on Confirm button");
	// }
	
	async function CancelSheduledBillPay(){
	
	  appLog("Intiated method to CANCEL Sheduled BillPayment");
	  await kony.automation.playback.waitFor(["frmPaymentDueConfirm","btnCancelBill"],15000);
	  kony.automation.flexcontainer.click(["frmPaymentDueConfirm","btnCancelBill"]);
	  appLog("Successfully clicked on Cancel button");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmPaymentDueConfirm","CustomPopupCancel","lblPopupMessage"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPaymentDueConfirm","CustomPopupCancel","lblPopupMessage"],"text")).toEqual("Are you sure you want to cancel this bill payment?");
	
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmPaymentDueConfirm","CustomPopupCancel","btnYes"],15000);
	  kony.automation.flexcontainer.click(["frmPaymentDueConfirm","CustomPopupCancel","btnYes"]);
	  appLog("Successfully clicked on YES button");
	
	  await kony.automation.playback.wait(15000);
	  appLog("Moving back to Accounts Dashboard");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","customheadernew","flxAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmBillPaymentDue","customheadernew","flxAccounts"]);
	  appLog("Successfully MovedBack to Account DashBoard");
	}
	
	async function verifySheduledBillpaySuccessMsg(){
	
	  appLog("Intiated method to verify Sheduled BillPay SuccessMsg");
	
	  await kony.automation.playback.wait(5000);
	  var Success= await kony.automation.playback.waitFor(["frmPayBillAcknowledgement"],30000);
	
	  if(Success){
	    //expect(kony.automation.widget.getWidgetProperty(["frmPayBillAcknowledgement","lblSuccessMessage"],"text")).not.toBe('');
	    await kony.automation.playback.waitFor(["frmPayBillAcknowledgement","customheadernew","flxAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmPayBillAcknowledgement","customheadernew","flxAccounts"]);
	    appLog("Successfully MovedBack to Account DashBoard");
	  }else if(await kony.automation.playback.waitFor(["frmPayABill","rtxDowntimeWarning"],15000)){
	    //Checking for exception message
	    //Move back to dashboard again there is an exception message
	    appLog("Exception while performing a Sheduled BillPay");
	    await kony.automation.playback.waitFor(["frmPayABill","customheadernew","flxAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmPayABill","customheadernew","flxAccounts"]);
	    await kony.automation.playback.waitFor(["frmAccountsLanding","lblShowing"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","lblShowing"], "text")).toContain("Show");
	
	    //appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));
	    //fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));
	    appLog("Failed : Unable to Perform Successfull Transcation. Failed with rtxDowntimeWarning");
	    fail("Failed : Unable to Perform Successfull Transcation. Failed with rtxDowntimeWarning");
	  }else{
	    appLog("Unable to verify Success Message");
	  }
	
	}
	
	async function navigateToSheduledBillPay(){
	
	  await NavigateToBillPay();
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],15000);
	  kony.automation.button.click(["frmBulkPayees","btnScheduled"]);
	  appLog("Successfully clicked on Sheduled tab");
	  await kony.automation.playback.wait(5000);
	}
	
	async function clickOnEditButton_SheduledBillPayment(){
	
	  appLog("Intiated method to click on Edit button");
	  await kony.automation.playback.waitFor(["frmBillPayScheduled","segmentBillpay"],15000);
	  kony.automation.button.click(["frmBillPayScheduled","segmentBillpay[0]","btnEdit"]);
	  appLog("Successfully clicked on Edit button");
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmPayABill","lblPayABill"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPayABill","lblPayABill"],"text")).toEqual("Pay a Bill");
	
	}
	
	async function UpdatedSheduledBillPayment(notes){
	
	  await SelectPayFromAcc_SheduleBillPay();
	  await selectfrequency_SheduledBillPay("Once");
	  await EnterNoteValue_SheduledBillPay(notes);
	  await confirmSheduledBillpay();
	
	}
	async function EditSheduledBillPay(notes){
	
	  var nopayments=await kony.automation.playback.waitFor(["frmBillPayScheduled","rtxNoPaymentMessage"],15000);
	  if(nopayments){
	    appLog("There are no sheduled payments");
	    //Move back to accounts
	    await kony.automation.playback.waitFor(["frmBillPayScheduled","customheadernew","flxAccounts"],15000);
	    kony.automation.button.click(["frmBillPayScheduled","customheadernew","flxAccounts"]);
	    appLog("Successfully MovedBack to Account DashBoard");
	  }else{
	
	    appLog("There are few sheduled payments");
	    await clickOnEditButton_SheduledBillPayment();
	    await UpdatedSheduledBillPayment(notes);
	    var warning=await kony.automation.playback.waitFor(["frmPayABill","rtxDowntimeWarning"],15000);
	    if(warning){
	      await kony.automation.playback.waitFor(["frmPayABill","customheadernew","flxAccounts"],15000);
	      kony.automation.flexcontainer.click(["frmPayABill","customheadernew","flxAccounts"]);
	      await verifyAccountsLandingScreen();
	      appLog("Successfully MovedBack to Account DashBoard");
	      //fail("Custom Message :: Amount Greater than Allowed Maximum Deposit");
	      appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));
	      fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));
	
	    }else{
	      await verifySheduledBillpaySuccessMsg();
	      await verifyAccountsLandingScreen();
	    }  
	
	  }
	}
	
	async function clickOnAddPayeeLink(){
	
	  appLog("Intiated method to click on Add payee link");
	  await kony.automation.playback.waitFor(["frmBulkPayees","flxAddPayee"],15000);
	  kony.automation.flexcontainer.click(["frmBulkPayees","flxAddPayee"]);
	  await kony.automation.playback.wait(10000);
	  appLog("Successfully Clicked on addPayee link");
	}
	
	async function enterPayeeDetails_UsingPayeeinfo(name,number){
	
	  appLog("Intiated method to Add Payee Details");
	  await kony.automation.playback.wait(5000);
	  appLog("Enter New Payee");
	
	  kony.automation.textbox.enterText(["frmAddPayee1","tbxCustomerName"],name);
	  
	  await kony.automation.playback.wait(10000);
	  kony.automation.flexcontainer.click(["frmAddPayee1","segPayeesName[0]","flxNewPayees"]);
	
	  await kony.automation.playback.waitFor(["frmAddPayee1","segPayeesName[0]","flxNewPayees"],1000);
	  appLog("Selecting Payee");
	  kony.automation.flexcontainer.click(["frmAddPayee1","segPayeesName[0]","flxNewPayees"]);
	  appLog("Successfully Entered Payee name as : <b>"+name+"</b>");
	
	  await kony.automation.playback.waitFor(["frmAddPayee1","tbxAccountNumber"],15000);
	  kony.automation.textbox.enterText(["frmAddPayee1","tbxAccountNumber"],number);
	  appLog("Successfully Entered account number as : <b>"+number+"</b>");
	  await kony.automation.playback.waitFor(["frmAddPayee1","tbxConfirmAccountNumber"],15000);
	  kony.automation.textbox.enterText(["frmAddPayee1","tbxConfirmAccountNumber"],number);
	  appLog("Successfully Re-Entered account number as : <b>"+number+"</b>");
	  await kony.automation.playback.waitFor(["frmAddPayee1","btnNext"],25000);
	  await kony.automation.playback.wait(10000);
	  kony.automation.button.click(["frmAddPayee1","btnNext"]);
	  appLog("Successfully Clicked on Continue button ");
	  await kony.automation.playback.wait(10000);
	}
	
	async function clickOnNextButton_payeeDetails(){
	
	  appLog("Intiated method verify Payee Details");
	  await kony.automation.playback.waitFor(["frmPayeeDetails","btnDetailsConfirm"],15000);
	  await kony.automation.playback.wait(10000);
	  kony.automation.button.click(["frmPayeeDetails","btnDetailsConfirm"]);
	  appLog("Successfully Clicked on Next button ");
	
	  // await linkPayee();
	}
	
	async function SelectPayeeBankingType_payeeDetails(BankingType){
	
	  appLog("Intiated method to click on AddRecepientContinue");
	  var btnAddRecepient=await kony.automation.playback.waitFor(["frmPayeeDetails","btnAddRecepientContinue"],15000);
	  if(btnAddRecepient){
	    kony.automation.button.click(["frmPayeeDetails","btnAddRecepientContinue"]);
	    appLog("Successfully Clicked on AddRecepientContinue button ");
	    await kony.automation.playback.wait(5000);
	  }else{
	    appLog("Selecting Banking type screen is not available");
	  }
	
	}
	
	async function linkPayee(){
	
	  var linkreciptent=await kony.automation.playback.waitFor(["frmPayeeDetails","contractList","lblHeader"],15000);
	
	  if(linkreciptent){
	    kony.automation.widget.touch(["frmPayeeDetails","contractList","lblCheckBoxSelectAll"], [8,6],null,null);
	    appLog("Successfully selected select All CheckBox");
	    await kony.automation.playback.waitFor(["frmPayeeDetails","contractList","flxCol4"],15000);
	    kony.automation.flexcontainer.click(["frmPayeeDetails","contractList","flxCol4"]);
	    await kony.automation.playback.waitFor(["frmPayeeDetails","contractList","btnAction6"],15000);
	    kony.automation.button.click(["frmPayeeDetails","contractList","btnAction6"]);
	    appLog("Successfully Clicked on Link Reciptent Continue Button");
	
	  }
	}
	
	
	async function clickOnConfirmButton_verifyPayee(){
	
	
	  appLog("Intiated method to confirm Payee Details");
	  await kony.automation.playback.waitFor(["frmVerifyPayee","btnConfirm"],15000);
	  await kony.automation.playback.wait(10000);
	  kony.automation.button.click(["frmVerifyPayee","btnConfirm"]);
	  appLog("Successfully Clicked on Confirm button");
	}
	
	async function verifyAddPayeeSuccessMsg(){
	  
	  appLog("Intiated method to verify Add payee SuccessMsg");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],30000);
	  var msg=kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text");
	  appLog("Success message is:<b>"+msg+"</b>");
	  // var name1=(RecipientName+msg);
	  //expect(kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text")).not.toBe(''))
	  if(msg==="‘TERRY'S TEST AND TUNE’ has been added!")
	  {
	    //     await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],15000);
	    //     var message1=kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text");
	    //     appLog("message is:<b>"+message1+"</b>");
	    await kony.automation.playback.wait(10000);
	    await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","customheadernew","flxAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmPayeeAcknowledgement","customheadernew","flxAccounts"]);
	    appLog("Successfully Moved back to Accounts dashboard");
	
	  }else if(await kony.automation.playback.waitFor(["frmAddPayeeInformation","rtxDowntimeWarning"],5000)){
	
	    appLog("Intiated method to verify DowntimeWarning");
	    await kony.automation.playback.waitFor(["frmAddPayeeInformation","customheadernew","flxAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmAddPayeeInformation","customheadernew","flxAccounts"]);
	
	    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmAddPayeeInformation","rtxDowntimeWarning"],"text"));
	    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmAddPayeeInformation","rtxDowntimeWarning"],"text"));
	
	  }else{
	    appLog("Unable to add Payee");
	  }
	
	}
	
	
	async function expandPayee_ManagePayee(){
	
	  appLog("Intiated method to Expand payee from Manage payee");
	  //   await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","segmentBillPay"],15000);
	  //   kony.automation.flexcontainer.click(["frmManagePayees","manageBiller","segmentBillPay[0]","flxDropdown"]);
	  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillPay","flxDropdown"],15000);
	  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillPay[0]","flxDropdown"]);
	  appLog("Successfully clicked on Manage Payees dropdown arrow");
	  await kony.automation.playback.wait(10000);
	}
	
	async function MoveBackToDashBoard_ManagePayees(){
	
	  await kony.automation.playback.waitFor(["frmManagePayees","customheadernew","lblAccounts"],15000);
	  await kony.automation.playback.wait(10000);
	  kony.automation.flexcontainer.click(["frmManagePayees","customheadernew","lblAccounts"]);
	  await kony.automation.playback.wait(5000);
	  appLog("Successfully Moved back to Accounts dashboard");
	}
	async function clickOnEditBtn_ManagePayees(){
	
	  await expandPayee_ManagePayee();
	  appLog("Intiated method to Edit Biller");
	  await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","segmentBillPay"],15000);
	  kony.automation.button.click(["frmManagePayees","manageBiller","segmentBillPay[0]","btn3"]);
	  appLog("Successfully clicked on Editbutton under manage payee");
	}
	
	async function deletePayee_ManagePayee(){
	
	  appLog("Intiated method to Delete Payee");
	  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[0]","flxDropdown"],15000);
	  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxDropdown"]);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[0]","btnDeleteBiller"],15000);
	  kony.automation.button.click(["frmManagePayees","segmentBillpay[0]","btnDeleteBiller"]);
	  appLog("Successfully clicked on Delete button under manage payee");
	  await kony.automation.playback.waitFor(["frmManagePayees","DeletePopup","btnYes"],15000);
	  kony.automation.button.click(["frmManagePayees","DeletePopup","btnYes"]);
	  await kony.automation.playback.wait(10000);
	  appLog("Successfully clicked on YES button on delete biller");
	  await kony.automation.playback.wait(10000);
	  await MoveBackToDashBoard_ManagePayees();
	}
	
	async function EditPayee_ManagePayee(){
	
	
	  appLog("Intiated method to updated biller Zipcode");
	  await kony.automation.playback.waitFor(["frmManagePayees","tbxZipCode"],15000);
	  kony.automation.textbox.enterText(["frmManagePayees","tbxZipCode"],getRandomNumber(6));
	  appLog("Successfully Updated biller zipcode");
	
	  appLog("Intiated method to click on Continue button");
	  await kony.automation.playback.waitFor(["frmManagePayees","btnContinue"],15000);
	  kony.automation.button.click(["frmManagePayees","btnContinue"]);
	  appLog("Successfully Clicked on Continue button");
	
	  appLog("Intiated method to click on Savelink Continue button");
	  await kony.automation.playback.waitFor(["frmManagePayees","contractList","btnAction6"],15000);
	  kony.automation.button.click(["frmManagePayees","contractList","btnAction6"]);
	  await kony.automation.playback.wait(5000);
	  appLog("Successfully Clicked on Savelink Continue button");
	
	  await verifyUpdatePayeeSuccessMsg();
	
	}
	
	
	async function verifyUpdatePayeeSuccessMsg(){
	
	  appLog("Intiated method to verify Update payee SuccessMsg");
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],30000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","customheadernew","flxAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmPayeeAcknowledgement","customheadernew","flxAccounts"]);
	  appLog("Successfully Moved back to Accounts dashboard");
	
	}
	
	
	async function navigateToPastBillPay(){
	
	  appLog("Intiated method to navigate to Billpay History");
	  await NavigateToBillPay();
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnHistory"],15000);
	  kony.automation.button.click(["frmBulkPayees","btnHistory"]);
	  appLog("Successfully clicked on History tab");
	  await kony.automation.playback.wait(5000);
	}
	
	async function clickonRepeatButton_PastBillpay(){
	
	  appLog("Intiated method to click on Repeat button");
	  await kony.automation.playback.waitFor(["frmBillPayHistory","segmentBillpay"],15000);
	  kony.automation.button.click(["frmBillPayHistory","segmentBillpay[0]","btnRepeat"]);
	  appLog("Successfully clicked on Repeat tab");
	  await kony.automation.playback.wait(5000);
	}
	
	async function repeatPastBillPayment(note){
	
	  appLog("Intiated method to Repeat a BillPay");
	
	  var nopayments=await kony.automation.playback.waitFor(["frmBillPayHistory","rtxNoPaymentMessage"],15000);
	
	  if(nopayments){
	    appLog("There are no History payments");
	    //Move back to accounts
	    await kony.automation.playback.waitFor(["frmBillPayHistory","customheadernew","flxAccounts"],15000);
	    kony.automation.button.click(["frmBillPayHistory","customheadernew","flxAccounts"]);
	    appLog("Successfully Moved back to Accounts dashboard");
	  }else{
	
	    await clickonRepeatButton_PastBillpay();
	    await SelectPayFromAcc_SheduleBillPay();
	    await EnterNoteValue_SheduledBillPay(note);
	    await confirmSheduledBillpay();
	
	    var warning=await kony.automation.playback.waitFor(["frmPayABill","rtxDowntimeWarning"],15000);
	    if(warning){
	      await kony.automation.playback.waitFor(["frmPayABill","customheadernew","flxAccounts"],15000);
	      kony.automation.flexcontainer.click(["frmPayABill","customheadernew","flxAccounts"]);
	      await verifyAccountsLandingScreen();
	      appLog("Successfully Moved back to Accounts dashboard");
	      //fail("Custom Message :: Amount Greater than Allowed Maximum Deposit");
	      appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));
	      fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmPayABill","rtxDowntimeWarning"],"text"));
	
	
	    }else{
	      await verifySheduledBillpaySuccessMsg();
	      await verifyAccountsLandingScreen();
	      appLog("Successfully Moved back to Accounts dashboard");
	    }
	
	  }
	}
	
	async function clickOnAllpayeesTab(){
	
	  appLog("Intiated method to click on Allpayees tab");
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnAllPayees"],15000);
	  await kony.automation.playback.wait(5000);
	  kony.automation.button.click(["frmBulkPayees","btnAllPayees"]);
	  appLog("Successfully clicked on Allpayees tab");
	  await kony.automation.playback.wait(5000);
	}
	
	async function verifyAllPayeesList(){
	
	  appLog("Intiated method to verify Allpayees List");
	
	  var PayeeList=await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay"],15000);
	
	  if(PayeeList){
	    await kony.automation.playback.wait(5000);
	    kony.automation.flexcontainer.click(["frmBulkPayees","segmentBillpay[0]","flxDropdown"]);
	    appLog("Successfully verified on Allpayees List");
	  }else if(await kony.automation.playback.waitFor(["frmBulkPayees","rtxNoPaymentMessage"],5000)){
	
	    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmBulkPayees","rtxNoPaymentMessage"],"text"));
	    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmBulkPayees","rtxNoPaymentMessage"],"text"));
	
	  }else {
	    appLog("Unable to verify Allpayees List");
	  }
	
	}
	async function verifyManagePayeeList(){
	
	  appLog("Intiated method to verify Manage Payee List");
	
	  var PayeeList=await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay"],15000);
	
	  if(PayeeList){
	    await kony.automation.playback.wait(5000);
	    kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxDropdown"]);
	    appLog("Successfully verified on Manage Payee List");
	  }else if(await kony.automation.playback.waitFor(["frmManagePayees","rtxNoPaymentMessage"],5000)){
	
	    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmManagePayees","rtxNoPaymentMessage"],"text"));
	    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmManagePayees","rtxNoPaymentMessage"],"text"));
	
	  }else {
	    appLog("Unable to verify ManagePayee List");
	  }
	
	}
	
	
	async function MoveBackToDashBoard_AllPayees(){
	
	  await kony.automation.playback.waitFor(["frmBulkPayees","customheadernew","flxAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmBulkPayees","customheadernew","flxAccounts"]);
	}
	
	async function clickOnSavePayeeButton_OneTimePay(){
	
	  appLog("Intiated method to Save Payee from OneTime Payment");
	
	  await kony.automation.playback.waitFor(["frmOneTimePaymentAcknowledgement","btnSavePayee"],15000);
	  kony.automation.button.click(["frmOneTimePaymentAcknowledgement","btnSavePayee"]);
	  appLog("Successfully Clicked on Save button");
	
	  //Continue Button
	  await kony.automation.playback.waitFor(["frmPayeeDetails","btnDetailsConfirm"],15000);
	  kony.automation.button.click(["frmPayeeDetails","btnDetailsConfirm"]);
	  appLog("Successfully Clicked on Continue button");
	
	  //Confirm Button
	  await kony.automation.playback.waitFor(["frmVerifyPayee","btnConfirm"],15000);
	  kony.automation.button.click(["frmVerifyPayee","btnConfirm"]);
	  appLog("Successfully Clicked on Confirm button");
	
	  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAddPayee"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAddPayee"],"text")).toEqual("Add Payee");
	
	
	  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text")).toContain("has been added.");
	  appLog("Successfully verified Added payee");
	
	  await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","btnViewAllPayees"],15000);
	  kony.automation.button.click(["frmPayeeAcknowledgement","btnViewAllPayees"]);
	  appLog("Successfully clicked on ViewAll payees button");
	
	}
	
	async function activateBillPayTermsconditions(){
	
	  appLog("Intiated method to Activate Billpay TC's");
	
	  var warning=await kony.automation.playback.waitFor(["frmBillPayActivation","lblWarning"],15000);
	  if(warning){
	    //expect(kony.automation.widget.getWidgetProperty(["frmBillPayActivation","lblWarning"], "text")).toEqual("Please activate My Bills.");
	    await kony.automation.playback.waitFor(["frmBillPayActivation","listbxAccountType"],15000);
	    kony.automation.listbox.selectItem(["frmBillPayActivation","listbxAccountType"], "160128223241511");
	    appLog("Successfully Selected Default BillPay Acc");
	    await kony.automation.playback.waitFor(["frmBillPayActivation","lblFavoriteEmailCheckBox"],15000);
	    kony.automation.widget.touch(["frmBillPayActivation","lblFavoriteEmailCheckBox"], null,null,[14,13]);
	    appLog("Successfully accepted checkbox");
	    await kony.automation.playback.waitFor(["frmBillPayActivation","flxAgree"],15000);
	    kony.automation.flexcontainer.click(["frmBillPayActivation","flxAgree"]);
	    appLog("Successfully clicked on AgreeFlex");
	    await kony.automation.playback.waitFor(["frmBillPayActivation","btnProceed"],15000);
	    kony.automation.button.click(["frmBillPayActivation","btnProceed"]);
	    appLog("Successfully clicked on Proceed button");
	    var error=await kony.automation.playback.waitFor(["frmBillPayActivation","rtxErrorMessage"],15000);
	    if(error){
	      //expect(kony.automation.widget.getWidgetProperty(["frmBillPayActivation","rtxErrorMessage"], "text")).toEqual("Update operation failed on  customerpreference:No value specified for parameter 2");
	      await kony.automation.playback.waitFor(["frmBillPayActivation","customheadernew","flxAccounts"],15000);
	      kony.automation.flexcontainer.click(["frmBillPayActivation","customheadernew","flxAccounts"]);
	    }
	  }else{
	    appLog("Already accepted billpay activation..Moveback to dashboard");
	    await MoveBackToDashBoard_AllPayees();
	  }
	}
	
	async function activateNewlyAddedpayee(){
	
	  appLog('Intiated method to activate Newly Added Payee');
	
	  await kony.automation.playback.waitFor(["frmManagePayees","manageBiller","segmentBillPay"],15000);
	
	  var ButtonName=kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"], "text");
	
	  //appLog('Button Name is : '+ButtonName);
	
	  if(ButtonName==='Activate ebill'){
	
	    kony.automation.button.click(["frmManagePayees","manageBiller","segmentBillPay[0]","btnAction"]);
	    appLog('Successfully clicked on activate button');
	
	    var activate=await kony.automation.playback.waitFor(["frmManagePayees","lblWarningOneIC"],15000);
	    if(activate){
	      await kony.automation.playback.waitFor(["frmManagePayees","btnProceedIC"],15000);
	      kony.automation.button.click(["frmManagePayees","btnProceedIC"]);
	      appLog('Successfully clicked on YES button');
	      await kony.automation.playback.wait(10000);
	      await MoveBackToDashBoard_ManagePayees();
	    }else {
	      appLog('Failed : Unable to Activate Added Payee');
	      fail('Failed : Unable to Activate Added Payee');
	    }
	  }else {
	    appLog('Payee Already activated');
	  }
	
	}
	
	async function NavigateToBillPay(){
	
	  appLog("Intiated method to navigate to BillPay");
	  await kony.automation.playback.wait(20000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMyBills"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxPayBill"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayBill"]);
	  appLog("Successfully clicked on BillPay tab");
	  await kony.automation.playback.wait(5000);
	}
	
	async function SelectRecurringPaymentsTab()
	{
	
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnPayementDue"],15000);
	  kony.automation.button.click(["frmBulkPayees","btnPayementDue"]);
	  appLog("Successfully selected recurringPayments");
	  await kony.automation.playback.wait(15000);
	}
	async function SelectPayee_ManagePayeeList(PayeeName)
	{
	  await kony.automation.playback.wait(10000);
	  appLog("Intiated method to select Payee from Manage Payee list : <b>"+PayeeName+"</b>");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxpayee"],15000);
	  kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxpayee"],PayeeName);
	  await kony.automation.playback.wait(15000);
	}
	
	async function SelectPayFromAcc(Pay){
	
	  appLog("Intiated method to Select Payee From");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxpayFromValue"],15000);
	  await kony.automation.playback.wait(5000);
	  kony.automation.flexcontainer.click(["frmBillPaymentDue","payABill","lbxpayFromValue"],"Pay");
	  appLog("Successfully selected Payee from the list");
	}
	
	async function EnterAmount_ScheduleBillPay(amount){
	
	  await kony.automation.playback.wait(5000);
	  appLog("Intiated method to enter amount : <b>"+amount+"</b>");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","txtSearch"],15000);
	  kony.automation.textbox.enterText(["frmBillPaymentDue","payABill","txtSearch"],amount);
	  appLog("Successfully entered amount : <b>"+amount+"</b>");
	  //await SelectPayFromAcc_SheduleBillPay();
	}
	
	async function SelectFrequency_ScheduleBillPay(freq){
	
	  await kony.automation.playback.wait(5000);
	  appLog("Intiated method to select freq : <b>"+freq+"</b>");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxFrequency"],15000);
	  kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxFrequency"],freq);
	  appLog("Successfully selected freq : "+freq);
	  await kony.automation.playback.wait(5000);
	}
	
	async function SelectDateRange_ScheduleBillPay()
	{
	
	  await kony.automation.playback.wait(5000);
	  appLog("Intiated method to select DateRange");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxForHowLong"],15000);
	  kony.automation.listbox.selectItem(["frmBillPaymentDue","payABill","lbxForHowLong"], "ON_SPECIFIC_DATE");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","calSendOn"],15000);
	  kony.automation.calendar.selectDate(["frmBillPaymentDue","payABill","calSendOn"], [12,20,2021]);
	  appLog("Successfully selected sendOn Date");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","CalDeliverBy"],15000);
	  kony.automation.calendar.selectDate(["frmBillPaymentDue","payABill","CalDeliverBy"], [1,10,2022]);
	  appLog("Successfully selected EndOn Date");
	  await kony.automation.playback.wait(5000);
	}
	async function ConfirmScheduleBillPay()
	{
	
	  await kony.automation.playback.wait(5000);
	  appLog("Intiated method to Confirm Sheduled BillPayment");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","btnConfirm"],15000);
	  kony.automation.button.click(["frmBillPaymentDue","payABill","btnConfirm"]);
	  appLog("Successfully clicked on Confirm button");
	  await kony.automation.playback.wait(5000);
	}
	async function ClickOnConfirm()
	{
	  await kony.automation.playback.wait(5000);
	  appLog("Initiated method to confirm");
	  await kony.automation.playback.waitFor(["frmPaymentDueConfirm","btnConfirmBill"],15000);
	  kony.automation.button.click(["frmPaymentDueConfirm","btnConfirmBill"]);
	  appLog("Successfully Clicked on Next button");
	  await kony.automation.playback.wait(5000);
	}
	
	//Updated by Tapasya
	async function VerifyScheduleBillPaySuccessMsg()
	{
	
	  appLog("Intiated method to verify Sheduled BillPay SuccessMsg");
	
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmPaymentDueAcknowledgement","lblSuccessMessage"],30000);
	  var Status= kony.automation.widget.getWidgetProperty(["frmPaymentDueAcknowledgement","lblSuccessMessage"],"text");
	  appLog("Success message is:<b>"+Status+"</b>");
	  if(Status==="Success! Your payment has been scheduled.")
	  {
	    appLog("Moving back to Account Dashboard as Payment is success");
	    await kony.automation.playback.wait(5000);
	    await kony.automation.playback.waitFor(["frmPaymentDueAcknowledgement","customheadernew","flxAccounts"],15000);
	    kony.automation.flexcontainer.click(["frmPaymentDueAcknowledgement","customheadernew","flxAccounts"]);
	    appLog("Successfully MovedBack to Account DashBoard");
	  }
	  else
	    {
	      appLog("Unable to perform payment and  Status is:<b>"+Status+"</b>");
	      
	    }
	}
	//   else if(await kony.automation.playback.waitFor(["frmPayABill","rtxDowntimeWarning"],15000)){
	//     //Checking for exception message
	//     //Move back to dashboard again there is an exception message
	//     appLog("Exception while performing a Sheduled BillPay");
	//     await kony.automation.playback.waitFor(["frmPayABill","customheadernew","flxAccounts"],15000);
	//     kony.automation.flexcontainer.click(["frmPayABill","customheadernew","flxAccounts"]);
	//     await kony.automation.playback.waitFor(["frmAccountsLanding","lblShowing"],15000);
	//     expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","lblShowing"], "text")).toContain("Show");
	//     appLog("Failed : Unable to Perform Successfull Transcation. Failed with rtxDowntimeWarning");
	//     fail("Failed : Unable to Perform Successfull Transcation. Failed with rtxDowntimeWarning");
	//   }else{
	//     appLog("Unable to verify Success Message");
	//   }
	
	
	
	async function navigateToManagePayees(){
	
	  await NavigateToBillPay();
	  appLog("Intiated method to navigate to Manage Payee list");
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnManagePayee"],15000);
	  kony.automation.button.click(["frmBulkPayees","btnManagePayee"]);
	  appLog("Successfully clicked on Manage payee Button");
	  await kony.automation.playback.wait(15000);
	}
	
	
	// async function MoveBackToDashBoard_ManagePayees(){
	
	//   await kony.automation.playback.waitFor(["frmManagePayees","customheadernew","lblAccounts"],15000);
	//   kony.automation.flexcontainer.click(["frmManagePayees","customheadernew","lblAccounts"]);
	//   appLog("Successfully Moved back to Accounts dashboard");
	// }
	
	// async function clickOnAddPayeeLink(){
	
	//   appLog("Intiated method to click on Add payee link");
	//   await kony.automation.playback.waitFor(["frmBulkPayees","lblAddPayee"],15000);
	//   kony.automation.flexcontainer.click(["frmBulkPayees","lblAddPayee"]);
	//   appLog("Successfully Clicked on addPayee link");
	// }
	async function SearchPayeeName(Payeename){
	
	  appLog("Intiated Method to verify Payee <b>"+Payeename+"</b>");
	  var PayeeList=await kony.automation.playback.waitFor(["frmManagePayees","txtSearch"],15000);
	  if(PayeeList){
	    expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","segmentBillPay[0]"],"text")).toEqual(Payeename);
	    //expect(kony.automation.widget.getWidgetProperty(["frmManagePayees","manageBiller","segmentBillPay[0]","lblColumn1"],"text")).toEqual(payeename);
	    // expect(kony.automation.widget.getWidgetProperty(["flxBillPaymentManagePayees","flxBillPayManagePayees","segmentBillPay[0]","lblPayee"],"text")).not.toBe('');
	  }
	  else if(await kony.automation.playback.waitFor(["frmManagePayees","rtxNoPaymentMessage"],5000)){
	    appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmManagePayees","rtxNoPaymentMessage"],"text"));
	    fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmManagePayees","rtxNoPaymentMessage"],"text"));
	
	  }else{
	    appLog("Unable to find Payee in ManagePayees List");
	  }
	
	}
	// async function enterPayeeDetails_UsingPayeeinfo(payeeName,accno){
	
	//   appLog("Intiated method to Add Payee Details");
	//   await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmAddPayee1","tbxCustomerName"],5000);
	//   kony.automation.textbox.enterText(["frmAddPayee1","tbxCustomerName"],payeeName);
	//   await kony.automation.playback.wait(25000);
	//   kony.automation.flexcontainer.click(["frmAddPayee1","segPayeesName[0]","flxNewPayees"]);
	
	//   appLog("Successfully Entered Payee name as : <b>"+payeeName+"</b>");
	
	//   await kony.automation.playback.waitFor(["frmAddPayee1","tbxAccountNumber"],15000);
	//   kony.automation.textbox.enterText(["frmAddPayee1","tbxAccountNumber"],accno);
	//   appLog("Successfully Entered account number as : <b>"+accno+"</b>");
	//   await kony.automation.playback.waitFor(["frmAddPayee1","tbxConfirmAccountNumber"],15000);
	//   kony.automation.textbox.enterText(["frmAddPayee1","tbxConfirmAccountNumber"],accno);
	//   appLog("Successfully Re-Entered account number as : <b>"+accno+"</b>");
	//   await kony.automation.playback.waitFor(["frmAddPayee1","btnNext"],25000);
	//   kony.automation.button.click(["frmAddPayee1","btnNext"]);
	//   appLog("Successfully Clicked on Continue button ");
	// }
	// async function clickOnConfirmButton_verifyPayee(){
	
	//   appLog("Intiated method to confirm Payee Details");
	//   await kony.automation.playback.waitFor(["frmVerifyPayee","btnConfirm"],15000);
	//   kony.automation.button.click(["frmVerifyPayee","btnConfirm"]);
	//   appLog("Successfully Clicked on Confirm button ");
	// }
	// async function verifyAddPayeeSuccessMsg(){
	
	//   appLog("Intiated method to verify Add payee SuccessMsg");
	//   await kony.automation.playback.wait(5000);
	//   var success=await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],30000);
	
	//   if(success){
	//     await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],15000);
	//     expect(kony.automation.widget.getWidgetProperty(["frmPayeeAcknowledgement","lblAcknowledgementMessage"],"text")).not.toBe('');
	//     await kony.automation.playback.waitFor(["frmPayeeAcknowledgement","customheadernew","flxAccounts"],15000);
	//     kony.automation.flexcontainer.click(["frmPayeeAcknowledgement","customheadernew","flxAccounts"]);
	//     appLog("Successfully Moved back to Accounts dashboard");
	//     await kony.automation.playback.wait(5000);
	
	//   }else if(await kony.automation.playback.waitFor(["frmAddPayeeInformation","rtxDowntimeWarning"],5000)){
	
	//     appLog("Intiated method to verify DowntimeWarning");
	//     await kony.automation.playback.waitFor(["frmAddPayeeInformation","customheadernew","flxAccounts"],15000);
	//     kony.automation.flexcontainer.click(["frmAddPayeeInformation","customheadernew","flxAccounts"]);
	
	//     appLog("Failed : "+kony.automation.widget.getWidgetProperty(["frmAddPayeeInformation","rtxDowntimeWarning"],"text"));
	//     fail('Failed : '+kony.automation.widget.getWidgetProperty(["frmAddPayeeInformation","rtxDowntimeWarning"],"text"));
	//     await kony.automation.playback.wait(5000);
	//   }else{
	
	//     appLog("Unable to add Payee");
	//     await kony.automation.playback.wait(5000);
	
	//   }
	
	// }
	// async function navigateToManagePayee(){
	//   await kony.automation.playback.wait(15000);
	//   await NavigateToBillPay();
	//   await kony.automation.playback.wait(10000);
	//   appLog("Intiated method to navigate to Manage Payee list");
	//   await kony.automation.playback.waitFor(["frmBulkPayees","btnManagePayee"],15000);
	//   kony.automation.button.click(["frmBulkPayees","btnManagePayee"]);
	//   appLog("Successfully clicked on Manage payees tab");
	//   await kony.automation.playback.wait(25000);
	// }
	async function validateNewlyAddedPayee(data){
	
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmManagePayees","txtSearch"],10000);
	  kony.automation.textbox.enterText(["frmManagePayees","txtSearch"],data);
	  kony.automation.flexcontainer.click(["frmManagePayees","btnConfirm"]);
	  await kony.automation.playback.wait(20000);
	  //kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxPayee"]);
	  //await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[0]","flxDropdown"],5000);
	  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[0]","flxDropdown"],10000);
	  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxDropdown"]);
	  await kony.automation.playback.wait(2000);
	  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxDropdown"]);
	  await kony.automation.playback.wait(10000);
	  //expect(kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[0]","flxBankAddress"],"text")).toContain(unique_Accnumber);
	}
	
	//Added by Tapasya
	async function PayBillHeadersValidation()
	{
	  appLog("Navigated to PayBills Screen");
	  await kony.automation.playback.wait(10000);
	
	  await kony.automation.playback.waitFor(["frmBulkPayees","lblTransactions"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","lblTransactions"],"text")).toContain("Pay Bills");
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnAllPayees"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnAllPayees"],"text")).toContain("One-Time Payment");
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnPayementDue"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnPayementDue"],"text")).toContain("Recurring Payments");
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnScheduled"],"text")).toContain("Scheduled");
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnHistory"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnHistory"],"text")).toContain("History");
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnManagePayee"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnManagePayee"],"text")).toContain("Manage Payees");
	  await kony.automation.playback.waitFor(["frmBulkPayees","lblAddPayee"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","lblAddPayee"],"text")).toContain("Add Payee");
	  appLog("Headers Validated");
	
	  appLog("SubHeaders Validation");
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmBulkPayees","lblPayee"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","lblPayee"],"text")).toContain("Payee");
	  await kony.automation.playback.waitFor(["frmBulkPayees","imgSortPayee"],5000);
	  await kony.automation.playback.waitFor(["frmBulkPayees","lblAmount"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","lblAmount"],"text")).toContain("Amount");
	  appLog("SubHeaders Validated");
	
	  appLog("Footers validation");
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnBulkCancel"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnBulkCancel"],"text")).toContain("Cancel");
	  await kony.automation.playback.waitFor(["flxBillPaymentAllPayeesSelected","lblDropdown"],5000);
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnBulkConfirm"],5000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkPayees","btnBulkConfirm"],"text")).toContain("Continue");
	  appLog("Footers validated");
	}
	
	//Added by Tapasya
	async function MoveBackToDashBoard_ScheduledTab(){
	
	  await kony.automation.playback.waitFor(["frmBillPayScheduled","customheadernew","flxAccounts"],15000);
	  await kony.automation.playback.wait(10000);
	  kony.automation.flexcontainer.click(["frmBillPayScheduled","customheadernew","flxAccounts"]);
	  await kony.automation.playback.wait(5000);
	  appLog("Successfully Moved back to Accounts dashboard");
	}
	
	//Added by Tapasya
	async function VerifyScheduledTabPagination()
	{
	
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmBillPayScheduled","lblPagination"],15000);
	  var Count=kony.automation.widget.getWidgetProperty(["frmBillPayScheduled","lblPagination"], "text");
	  appLog("count is:<b>"+Count+"</b>");
	  if(Count=="1 - 50 Payees")
	  {
	    appLog("50 Transactions are present");
	  }
	  else
	  {
	    appLog("less than 50 Transactions are present");
	  }
	}
	
	//Added by Tapasya
	async function HistoryTabValidation()
	{
	  appLog("Validate all details in History tab");
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmBillPayHistory","segmentBillpay[0]","flxDropdown"],10000);
	  kony.automation.flexcontainer.click(["frmBillPayHistory","segmentBillpay[0]","flxDropdown"]);
	  await kony.automation.playback.waitFor(["flxBillPaymentHistorySelected","btnRepeat"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","btnRepeat"],"text")).toContain("Repeat"); 
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxDate"],"text")).not.toBe('');
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxSendTo"],"text")).not.toBe('');
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxAmount"],"text")).not.toBe('');
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxStatus"],"text")).not.toBe('');
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","btnEdit"],"text")).toContain("Download Report");
	  //expect(kony.automation.widget.getWidgetProperty(["flxBillPaymentHistorySelected","lblSentFrom"],"text")).toContain("From"); 
	
	  appLog("Checking Pagination");
	  var Count=kony.automation.widget.getWidgetProperty(["frmBillPayHistory","lblPagination"], "text");
	  appLog("count is:<b>"+Count+"</b>");
	  if(Count=="1 - 50 Payees")
	  {
	    appLog("50 Transactions are present");
	  }
	  else
	  {
	    appLog("less than 50 Transactions are present");
	  }
	}
	
	
	//Added by Tapasya
	async function MoveBackToDashBoard_HistoryTab()
	{
	  appLog("Moving back to account Dashboard");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmBillPayHistory","customheadernew","lblAccounts"],10000);
	  kony.automation.flexcontainer.click(["frmBillPayHistory","customheadernew","lblAccounts"]);
	  appLog("Moved back to account Dashboard");
	  await kony.automation.playback.wait(5000);
	}
	
	//Added By Tapasya
	async function NavigateToManagePayeesFromPayments()
	{
	  await kony.automation.playback.wait(10000);
	
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxManagePayee"],10000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxManagePayee"]);
	
	  await kony.automation.playback.waitFor(["frmManagePayees","btnAllPayees"],10000);
	  kony.automation.flexcontainer.click(["frmManagePayees","btnAllPayees"]); 
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],10000);
	  kony.automation.flexcontainer.click(["frmBulkPayees","btnScheduled"]); 
	  await kony.automation.playback.wait(10000);
	  kony.automation.flexcontainer.click(["frmBillPayScheduled","customheadernew","lblAccounts"]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxManagePayee"],10000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxManagePayee"]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[2]","flxDropdown"],10000);
	  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[2]","flxDropdown"]); 
	  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[2]","btnPayBill"],10000);
	  appLog("clicking on View activity");
	  kony.automation.button.click(["frmManagePayees","segmentBillpay[2]","btnPayBill"]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmPaymentActivity","btnbacktopayeelist"],10000);
	  appLog("Moving back to list");
	  kony.automation.button.click(["frmPaymentActivity","btnbacktopayeelist"]);
	  await kony.automation.playback.wait(10000);
	  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[2]","flxDropdown"]);
	  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[2]","btnDeleteBiller"],10000);
	  appLog("clicking on Delete");
	  kony.automation.button.click(["frmManagePayees","segmentBillpay[2]","btnDeleteBiller"]); 
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmManagePayees","DeletePopup","btnYes"],10000);
	  appLog("click on Yes cancel");
	  kony.automation.button.click(["frmManagePayees","DeletePopup","btnYes"]);
	  await kony.automation.playback.wait(10000);
	  appLog("Clicked on YES");
	  await kony.automation.playback.wait(10000);
	}
	
	//Added by Tapasya
	async function ManagePayeesViewActivityDetailsValidation()
	{
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[1]","flxDropdown"],10000);
	  kony.automation.flexcontainer.click(["frmManagePayees","segmentBillpay[1]","flxDropdown"]); 
	  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[1]","btnPayBill"],10000);
	  appLog("clicking on View activity");
	  kony.automation.button.click(["frmManagePayees","segmentBillpay[1]","btnPayBill"]);
	  await kony.automation.playback.wait(10000);
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","lblPayABill"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblPayABill"],"text")).toContain("Pay Bills");
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","lblActivityHeader"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblActivityHeader"],"text")).toContain("Payment Activity");
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","lblActivityHeaderlbl"],10000);
	  var text=kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblActivityHeaderlbl"],"text");
	  appLog("data is:</b>"+text+"</b>");
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","lblFromTitle"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblFromTitle"],"text")).toContain("From");
	  var From=kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblFromTitle"],"text");
	  appLog("data is:</b>"+From+"</b>");
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","lblAmountDeductedTitle"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblAmountDeductedTitle"],"text")).toContain("Total Amount Paid");
	  var Deducted=kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblAmountDeducted"],"text");
	  appLog("data is:</b>"+Deducted+"</b>");  
	  if(Deducted=="N/A")
	  {
	    await kony.automation.playback.waitFor(["frmPaymentActivity","rtxNoRecords"],10000);
	    expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","rtxNoRecords"],"text")).toContain("No Records found so far.");
	    appLog("No Records");
	  }
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","lblDate"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblDate"],"text")).toContain("Paid Date");
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","imgSortDate"],10000);
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","CopylblFrom0id1c1a27969541"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","CopylblFrom0id1c1a27969541"],"text")).toContain("From Account");
	  await kony.automation.playback.waitFor(["frmPaymentActivity","CopyimgSortDate0b28c91ef371c48"],10000);
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","lblAmount"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblAmount"],"text")).toContain("Amount");
	  await kony.automation.playback.waitFor(["frmPaymentActivity","imgSortAmount"],10000);
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","lblStatus"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblStatus"],"text")).toContain("Confirmation #");	
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","lblAddPayee"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","lblAddPayee"],"text")).toContain("Add Payee");	
	  await kony.automation.playback.wait(5000);
	  kony.automation.button.click(["frmPaymentActivity","lblAddPayee"]);
	  await kony.automation.playback.wait(5000);
	
	  await kony.automation.playback.waitFor(["frmAddPayee1","lblAddPayee"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAddPayee1","lblAddPayee"],"text")).toContain("Add Payee");	
	
	  await kony.automation.playback.waitFor(["frmAddPayee1","customheadernew","lblManagepayee"],10000);
	  kony.automation.button.click(["frmAddPayee1","customheadernew","lblManagepayee"]);
	  await kony.automation.playback.wait(5000);
	
	  await kony.automation.playback.waitFor(["frmManagePayees","segmentBillpay[1]","btnPayBill"],10000);
	  kony.automation.button.click(["frmManagePayees","segmentBillpay[1]","btnPayBill"]);
	
	  await kony.automation.playback.wait(10000);
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","btnbacktopayeelist"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPaymentActivity","btnbacktopayeelist"],"text")).toContain("Back to Payee List");	
	
	  await kony.automation.playback.waitFor(["frmPaymentActivity","btnbacktopayeelist"],10000);
	  appLog("Moving back to list");
	  kony.automation.button.click(["frmPaymentActivity","btnbacktopayeelist"]);
	  await kony.automation.playback.wait(1000);
	}
	//Added By Tapasya
	async function PayeeSortIconOneTimePaymentValidation()
	{
	
	  await kony.automation.playback.wait(15000); 
	  appLog("Verifying Payee name before sorting");
	  var name=kony.automation.widget.getWidgetProperty(["frmBulkPayees","segmentBillpay[0]","flxBillPaymentAllPayeesSelected","lblPayee"],"text"); 
	  appLog("name is:<b>"+name+"</b>");
	  await kony.automation.playback.wait(10000);
	  appLog("Clicking on sort icon");
	  await kony.automation.playback.waitFor(["frmBulkPayees","lblPayee"],10000);
	  kony.automation.flexcontainer.click(["frmBulkPayees","lblPayee"]);
	  await kony.automation.playback.wait(10000);
	  var name1=kony.automation.widget.getWidgetProperty(["frmBulkPayees","segmentBillpay[0]","flxBillPaymentAllPayeesSelected","lblPayee"],"text"); 
	  appLog("name is:<b>"+name1+"</b>");
	  if(name===name1)
	  {
	    appLog("data is not sorted");
	  }
	  else
	  {
	    appLog("Sorted");
	  }
	}
	async function PayeeSortIconScheduledTabValidation()
	{
	
	  await kony.automation.playback.wait(10000);
	  appLog("Move to Scheduled Tab and Validate Payee sorting");
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],10000);
	  kony.automation.flexcontainer.click(["frmBulkPayees","btnScheduled"]);
	  await kony.automation.playback.wait(15000); 
	  var Scheduled=kony.automation.widget.getWidgetProperty(["frmBillPayScheduled","segmentBillpay[0]","flxBillPaymentScheduledSelected","lblPayeeName"],"text"); 
	  appLog("name is:<b>"+Scheduled+"</b>");
	  await kony.automation.playback.wait(10000); 
	  appLog("Clicking on sort icon");
	  await kony.automation.playback.waitFor(["frmBillPayScheduled","lblPayee"],10000);
	  kony.automation.flexcontainer.click(["frmBillPayScheduled","lblPayee"]);
	  //   await kony.automation.playback.waitFor(["frmBulkPayees","lblPayee"],10000);
	  //   kony.automation.flexcontainer.click(["frmBulkPayees","lblPayee"]); 
	  await kony.automation.playback.wait(15000);
	  appLog("Clicked on sort icon");
	  var Scheduled1=kony.automation.widget.getWidgetProperty(["frmBillPayScheduled","segmentBillpay[0]","flxBillPaymentScheduledSelected","lblPayeeName"],"text"); 
	  appLog("name is:<b>"+Scheduled1+"</b>");
	  if(Scheduled===Scheduled1)
	  {
	    appLog("data is not sorted");
	  }
	  else
	  {
	    appLog("Sorted");
	  }
	}
	async function PayeeSortIconScheduledTabValidation()
	{
	
	  await kony.automation.playback.wait(10000);
	  appLog("Move to Scheduled Tab and Validate Payee sorting");
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnScheduled"],10000);
	  kony.automation.flexcontainer.click(["frmBulkPayees","btnScheduled"]);
	  await kony.automation.playback.wait(15000); 
	  var Scheduled=kony.automation.widget.getWidgetProperty(["frmBillPayScheduled","segmentBillpay[0]","flxBillPaymentScheduledSelected","lblPayeeName"],"text"); 
	  appLog("name is:<b>"+Scheduled+"</b>");
	  await kony.automation.playback.wait(10000); 
	  appLog("Clicking on sort icon");
	  await kony.automation.playback.waitFor(["frmBillPayScheduled","lblPayee"],10000);
	  kony.automation.flexcontainer.click(["frmBillPayScheduled","lblPayee"]);
	  //   await kony.automation.playback.waitFor(["frmBulkPayees","lblPayee"],10000);
	  //   kony.automation.flexcontainer.click(["frmBulkPayees","lblPayee"]); 
	  await kony.automation.playback.wait(15000);
	  appLog("Clicked on sort icon");
	  var Scheduled1=kony.automation.widget.getWidgetProperty(["frmBillPayScheduled","segmentBillpay[0]","flxBillPaymentScheduledSelected","lblPayeeName"],"text"); 
	  appLog("name is:<b>"+Scheduled1+"</b>");
	  if(Scheduled===Scheduled1)
	  {
	    appLog("data is not sorted");
	  }
	  else
	  {
	    appLog("Sorted");
	  }
	}
	async function PayeeSortIconHistoryTabValidation()
	{
	
	  await kony.automation.playback.wait(10000);
	  appLog("Move to History Tab and Validate Payee sorting");
	  await kony.automation.playback.waitFor(["frmBillPayScheduled","btnHistory"],10000);
	  kony.automation.flexcontainer.click(["frmBillPayScheduled","btnHistory"]);
	  await kony.automation.playback.wait(15000); 
	  var History=kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxBillPaymentHistorySelected","lblSendTo"],"text"); 
	  appLog("name is:<b>"+History+"</b>");
	  await kony.automation.playback.wait(10000); 
	  appLog("Clicking on sort icon");
	  await kony.automation.playback.waitFor(["frmBillPayHistory","lblSortDescription"],10000);
	  kony.automation.flexcontainer.click(["frmBillPayHistory","lblSortDescription"]);
	  await kony.automation.playback.wait(15000);
	  appLog("Clicked on sort icon");
	  var History1=kony.automation.widget.getWidgetProperty(["frmBillPayHistory","segmentBillpay[0]","flxBillPaymentHistorySelected","lblSendTo"],"text"); 
	  appLog("name is:<b>"+History1+"</b>");
	  if(History===History1)
	  {
	    appLog("data is not sorted");
	  }
	  else
	  {
	    appLog("Sorted");
	  }
	}
	async function PayeeSortIconMangeePayeeTabValidation()
	{
	
	  await kony.automation.playback.wait(10000);
	  appLog("Move to ManagePayees Tab and Validate Payee sorting");
	  await kony.automation.playback.waitFor(["frmBillPayHistory","btnManagePayee"],10000);
	  kony.automation.flexcontainer.click(["frmBillPayHistory","btnManagePayee"]);
	  await kony.automation.playback.wait(15000); 
	  var ManagePayee=kony.automation.widget.getWidgetProperty(["frmManagePayees","segmentBillpay[0]","flxBillPaymentManagePayeesSelected","lblPayee"],"text"); 
	  appLog("name is:<b>"+ManagePayee+"</b>");
	  await kony.automation.playback.wait(10000); 
	  appLog("Clicking on sort icon");
	  await kony.automation.playback.waitFor(["frmManagePayees","flxBillerName"],10000);
	  kony.automation.flexcontainer.click(["frmManagePayees","flxBillerName"]);
	  await kony.automation.playback.wait(15000);
	  appLog("Clicked on sort icon");
	  var ManagePayee1=kony.automation.widget.getWidgetProperty(["frmManagePayees","segmentBillpay[0]","flxBillPaymentManagePayeesSelected","lblPayee"],"text"); 
	  appLog("name is:<b>"+ManagePayee1+"</b>");
	  if(ManagePayee===ManagePayee1)
	  {
	    appLog("data is not sorted");
	  }
	  else
	  {
	    appLog("Sorted");
	  }
	  await kony.automation.playback.wait(10000);
	}
	//added by Tapasya 
	async function EnterOneTimePaymentdetails_Bulk(Payee,amount,amount2)
	{
	  appLog("Intiated method to enter details for OneTime payment");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[1]","lblDropdown"],10000);
	  appLog("Clicking on Dropdown");
	  kony.automation.flexcontainer.click(["frmBulkPayees","segmentBillpay[1]","lblDropdown"]);
	  appLog("Clicked on Dropdown");
	  await kony.automation.playback.wait(10000);
	  appLog("Selecting Payee from dropdown list");
	  kony.automation.listbox.selectItem(["frmBulkPayees","segmentBillpay[1]","lstPayFrom"],Payee);
	  appLog("Selected Payee from dropdown list");
	  await kony.automation.playback.wait(10000);
	  appLog("Intiated method to enter amount details for OneTime payment");
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[1]","txtAmount"],10000);
	  kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[1]","txtAmount"],amount);
	  appLog("entered amount details for OneTime payment");
	  await kony.automation.playback.wait(10000); 
	
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[1]","lblPayee"],10000);
	  var Payee=kony.automation.widget.getWidgetProperty(["frmBulkPayees","segmentBillpay[1]","lblPayee"],"text"); 
	  appLog("name is:<b>"+Payee+"</b>");
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[1]","calSendOn"],10000);
	  kony.automation.calendar.selectDate(["frmBulkPayees","segmentBillpay[1]","calSendOn"], [12,14,2021]);
	  await kony.automation.playback.wait(10000);
	  appLog("date is selected and populated");
	  appLog("Intiated method to enter details for OneTime payment for another Payee");
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[2]","txtAmount"],10000);
	  kony.automation.textbox.enterText(["frmBulkPayees","segmentBillpay[2]","txtAmount"],amount2);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[2]","lblPayee"],10000);
	  var Payees=kony.automation.widget.getWidgetProperty(["frmBulkPayees","segmentBillpay[2]","lblPayee"],"text"); 
	  appLog("name is:<b>"+Payees+"</b>");
	  // await kony.automation.playback.wait(5000);
	  //      await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[2]","lblDropdown"],10000);
	  //     appLog("Clicking on Dropdown");
	  //     kony.automation.flexcontainer.click(["frmBulkPayees","segmentBillpay[2]","lblDropdown"]);
	  //     appLog("Clicked on Dropdown");
	  //     await kony.automation.playback.waitFor(["frmBulkPayees","segmentBillpay[2]","calSendOn"],10000);
	  //     kony.automation.calendar.selectDate(["frmBulkPayees","segmentBillpay[2]","calSendOn"], [1,14,2022]);
	  await kony.automation.playback.wait(10000);
	  if(Payee=== Payees)
	  {
	    appLog("Same Payees");
	  }
	  else
	  {
	    appLog("Different Payees");
	  }
	}
	async function OnetimePaymentConfirmationScreenDetails()
	{
	  appLog("Initiated method to confirm OneTimePayment");
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmBulkPayees","btnBulkConfirm"],15000);
	  kony.automation.flexcontainer.click(["frmBulkPayees","btnBulkConfirm"]);
	  await kony.automation.playback.wait(10000);
	
	  appLog("Validate BillPayee screen Header and sub headers");
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblAddPayee"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblAddPayee"], "text")).toEqual("Pay Bills");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblPayee"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblPayee"], "text")).toEqual("Payee");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblPaymentAccount"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblPaymentAccount"], "text")).toEqual("Pay From");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblSendOn"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblSendOn"], "text")).toEqual("Send On");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblAmount"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblAmount"], "text")).toEqual("Amount");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblTotalAMountPaid"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblTotalAMountPaid"], "text")).toEqual("Total Amount");
	
	  var value=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblAmountValue"],"text");
	  appLog("value is:<b>"+value+"</b>");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","lblDisclaimerText"],10000);
	  var data=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","lblDisclaimerText"], "text");
	  appLog("Text is:<b>"+data+"</b>");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","segBill[0]","lblPayee"],10000);
	  var Payee=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","segBill[0]","lblPayee"], "text");
	  appLog("Details are:<b>"+Payee+"</b>");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","segBill[0]","lblPaymentAccount"],10000);
	  var PayFrom=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","segBill[0]","lblPaymentAccount"], "text");
	  appLog("Details are:<b>"+PayFrom+"</b>");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","segBill[0]","lblSendOn"],10000);
	  var SendOn=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","segBill[0]","lblSendOn"], "text");
	  appLog("Details are:<b>"+SendOn+"</b>");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","segBill[0]","lblAmount"],10000);
	  var Amount=kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","segBill[0]","lblAmount"], "text");
	  appLog("Details are:<b>"+Amount+"</b>");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnCancel"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","btnCancel"], "text")).toEqual("Cancel");
	
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnCancel"],10000);
	  kony.automation.flexcontainer.click(["frmBulkBillPayConfirm","btnCancel"]);
	  await kony.automation.playback.wait(5000);
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","CustomPopupCancel","lblHeading"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","CustomPopupCancel","lblHeading"], "text")).toEqual("Cancel Bill Payment(s)");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","CustomPopupCancel","lblPopupMessage"],10000);
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","CustomPopupCancel","btnYes"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","CustomPopupCancel","btnYes"], "text")).toEqual("Yes, Cancel");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","CustomPopupCancel","btnNo"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","CustomPopupCancel","btnNo"], "text")).toEqual("No, Go Back");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","CustomPopupCancel","lblcross"],10000);
	  kony.automation.flexcontainer.click(["frmBulkBillPayConfirm","CustomPopupCancel","btnNo"]);
	  await kony.automation.playback.wait(5000);
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnModify"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","btnModify"], "text")).toEqual("Modify");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnConfirm"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayConfirm","btnConfirm"], "text")).toEqual("Confirm");
	  await kony.automation.playback.wait(10000);
	}
	
	async function VerifyOneTimePaymentAcknowledgementScreenDetails()
	{
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","lblBulkBillPayAcknowledgement"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","lblBulkBillPayAcknowledgement"], "text")).toEqual("Pay Bills");
	
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","lblHeading"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","lblHeading"], "text")).toEqual("Acknowledgement");
	  //appLog("Display1 passed");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","lblPaymentStatus"],10000);
	  //expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","flxHeader","lblPaymentStatus"], "text")).toEqual("Payment successful" ||"Payment submitted");
	  var Status=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblPaymentStatus"], "text");
	  appLog("PaymentStatus is:<b>"+Status+"</b>");
	  //appLog("Display2 passed");
	  //await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","flxHeader","lblPaymentStatus"],10000);
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","lblRefernceNumber"],10000);
	  var reference=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblRefernceNumber"], "text");
	  appLog("number is:<b>"+reference+"</b>");
	  //appLog("Display3 passed");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","imgAcknowledgement"],10000);
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","segBill[0]","lblPayee"],10000);
	  var Payee=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblPayee"], "text");
	  appLog("Payee is:<b>"+Payee+"</b>");
	  // appLog("Display4 passed");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","lblSendOn"],10000);
	  var SendOnDate=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblSendOn"], "text");
	  appLog("Date is:<b>"+SendOnDate+"</b>");
	  //appLog("Display5 passed");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","segBill[0]","lblAmount"],10000);
	  var Amount=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","segBill[0]","lblAmount"], "text");
	  appLog("Amount is:<b>"+Amount+"</b>");
	  //appLog("Display6 passed");
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","lblDisclaimerText"],10000);
	  var disclaimer=kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","lblDisclaimerText"], "text");
	  appLog("text is:<b>"+disclaimer+"</b>");
	
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","btnMakeAnotherPayment"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","btnMakeAnotherPayment"], "text")).toEqual("Make Another Payment");
	
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","btnViewPaymentActivity"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","btnViewPaymentActivity"], "text")).toEqual("View Payment Activity");
	
	
	  await kony.automation.playback.waitFor(["frmBulkBillPayAcknowledgement","lblTotalAmountPaid"],10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBulkBillPayAcknowledgement","lblTotalAmountPaid"], "text")).toEqual("Total  Paid");
	
	
	  await kony.automation.playback.wait(10000);
	
	}
	
	async function ClickModifyButton()
	{
	  await kony.automation.playback.wait(10000);
	  appLog("Clicking on ModifyButton");
	  await kony.automation.playback.waitFor(["frmBulkBillPayConfirm","btnModify"],10000);
	  kony.automation.flexcontainer.click(["frmBulkBillPayConfirm","btnModify"]);
	  appLog("Clicked on ModifyButton");
	}
	
	
	async function RecurringPaymentsTabValidation()
	{
	  await kony.automation.playback.wait(10000);
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","lblTransactions"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","lblTransactions"], "text")).toEqual("Pay Bills");   
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","btnPayementDue"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","btnPayementDue"], "text")).toEqual("Recurring Payments"); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblPayee"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblPayee"], "text")).toEqual("Payee"); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblPaymentAccount"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblPaymentAccount"], "text")).toEqual("Payment Amount"); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblPayFrom"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblPayFrom"], "text")).toEqual("Pay From"); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblFrequency"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblFrequency"], "text")).toEqual("Frequency"); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblForHowLong"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblForHowLong"], "text")).toEqual("For How Long?"); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblSendOn"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblSendOn"], "text")).toEqual("Start Date"); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lblDelieverBy"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lblDelieverBy"], "text")).toEqual("End Date"); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","btnCancel"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","btnCancel"], "text")).toEqual("Cancel"); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","btnConfirm"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","btnConfirm"], "text")).toEqual("Continue"); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","lblAddPayee"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","lblAddPayee"], "text")).toEqual("Add Payee"); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","txtSearch"],1000);
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxpayFromValue"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lbxpayFromValue"], "text")).not.toBe(''); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxFrequency"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lbxFrequency"], "text")).not.toBe(''); 
	
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","payABill","lbxForHowLong"],1000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPaymentDue","payABill","lbxForHowLong"], "text")).not.toBe('');
	  await kony.automation.playback.wait(10000);
	
	}
	async function QuckLinkRecurringPayments()
	{
	  await kony.automation.playback.wait(10000);
	  appLog("Moving to AddPayee screen and validate header");
	  await kony.automation.playback.waitFor(["frmBillPaymentDue","lblAddPayee"],15000);
	  kony.automation.button.click(["frmBillPaymentDue","lblAddPayee"]);
	  await kony.automation.playback.waitFor(["frmAddPayee1","lblAddPayee"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAddPayee1","lblAddPayee"],"text")).toContain("Add Payee");
	  await kony.automation.playback.waitFor(["frmAddPayee1","lblMyRegisteredPayees"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAddPayee1","lblMyRegisteredPayees"],"text")).toContain("My Registered Payees");
	  appLog("Click on Cancel button");
	  await kony.automation.playback.waitFor(["frmAddPayee1","btnResetPayeeInfo"],15000);
	  kony.automation.button.click(["frmAddPayee1","btnResetPayeeInfo"]); 
	  appLog("Clicked on Cancel button");
	  await kony.automation.playback.wait(10000);
	  appLog("Moving back to Onetime Payment Tab and validate headers");
	
	}
	
	
	async function NaviagtetoPayBusinessTaxes_CRATab() {
	
	 // await kony.automation.playback.wait(5000);
	   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMyBills"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
		await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"]);
	  await kony.automation.playback.wait(10000);  
		
	}
	
	async function SelectTaxandPaymenttype(Businessnumber) {
	//  frmPayBusinessTaxes_lblAddCRAFrom
	  await kony.automation.playback.wait(30000);
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblAddCRAFrom"],15000);
	  kony.automation.flexcontainer.click(["frmPayBusinessTaxes","lblAddCRAFrom"]);
	  await kony.automation.playback.wait(8000);
	  if (Businessnumber === CRATaxes.BusinessNo.Template1)
	  {
	    appLog("Initiated adding CRA Form Tamplate 1");
	    await kony.automation.playback.waitFor(["frmAddCRAForm","lbxTaxType"],15000);
		kony.automation.listbox.selectItem(["frmAddCRAForm","lbxTaxType"], "Excise Duty");
	    //await kony.automation.playback.waitFor(["frmAddCRAForm","lbxPaymentType"],15000);
		kony.automation.listbox.selectItem(["frmAddCRAForm","lbxPaymentType"], "Amount Owing");
	  }
	  else if (Businessnumber === CRATaxes.BusinessNo.Template2)  {
	     appLog("Initiated adding CRA Form Tamplate 2");
	       await kony.automation.playback.waitFor(["frmAddCRAForm","lbxTaxType"],15000);
		kony.automation.listbox.selectItem(["frmAddCRAForm","lbxTaxType"], "Excise Duty");
	   // await kony.automation.playback.waitFor(["frmAddCRAForm","lbxPaymentType"],15000);
		kony.automation.listbox.selectItem(["frmAddCRAForm","lbxPaymentType"], "Balance Due");
	  }
	 else if (Businessnumber === CRATaxes.BusinessNo.Template3 ) {
	   // appLog("Initiated adding CRA Form Tamplate 3");
	       await kony.automation.playback.waitFor(["frmAddCRAForm","lbxTaxType"],15000);
		kony.automation.listbox.selectItem(["frmAddCRAForm","lbxTaxType"], "GST/HST");
	   // await kony.automation.playback.waitFor(["frmAddCRAForm","lbxPaymentType"],15000);
		kony.automation.listbox.selectItem(["frmAddCRAForm","lbxPaymentType"], "Filing & Remittance");
	  }
	  else if (Businessnumber === CRATaxes.BusinessNo.Template4 ) {
	    appLog("Initiated adding CRA Form Tamplate 4");
	       await kony.automation.playback.waitFor(["frmAddCRAForm","lbxTaxType"],15000);
		kony.automation.listbox.selectItem(["frmAddCRAForm","lbxTaxType"], "Workers Comp Board - Nova Scotia");
	   // await kony.automation.playback.waitFor(["frmAddCRAForm","lbxPaymentType"],15000);
		//kony.automation.listbox.selectItem(["frmAddCRAForm","lbxPaymentType"], "Filing & Remittance");
	  }
	  else {
	   appLog("Please check the business number test data entered");
	  }
	}
	
	async function AddCRATaxesForm(Businessnumber) {
		//kony.automation.widget.touch(["frmAddCRAForm","txtBusinessName"], null,null,[146,13]);
		//kony.automation.widget.touch(["frmAddCRAForm"], null,null,[246,449]);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmAddCRAForm","txtBusinessName"],15000);
		kony.automation.textbox.enterText(["frmAddCRAForm","txtBusinessName"],Businessnumber);
	  await kony.automation.playback.wait(2000);
	   await kony.automation.playback.waitFor(["frmAddCRAForm","btnConfirm"],15000);
		kony.automation.button.click(["frmAddCRAForm","btnConfirm"]);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmSelectCRAForms","segTaxFormsList"],15000);
	  //kony.automation.widget.touch(["frmSelectCRAForms","segTaxFormsList[0]","flxCheckBox"], null,null,[8,22]);
	  kony.automation.flexcontainer.click(["frmSelectCRAForms","segTaxFormsList[0]","flxCheckBox"]);
	  await kony.automation.playback.waitFor(["frmSelectCRAForms","btnContinue"],15000);
	  kony.automation.button.click(["frmSelectCRAForms","btnContinue"]);
	  appLog ("Added the CRA TAx form successfully");
	     }
	async function VerifytheAddedCRAform(Template_BusinessNumber) {
	  var a = 0;
	  await kony.automation.playback.wait(10000);
	   for(var i=0; i<50; i++){
	  var lable = "lblBusniessNumber" + i ;
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxBusniessMain"],15000);
	  var businessnumber = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes",lable],"text");
	    if (businessnumber === Template_BusinessNumber){
	      appLog("The CRA tax is successfully added");
	      a++;
	      break;
	    }    
	    }
	  if (a===0)
	    fail("Failed as the added CRA form is not listed");
	}
	  
	//   await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"],15000);
	//   kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
	//   await kony.automation.playback.wait(3000);
	//   await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxBusniessNumber0"],15000);
	//   expect(kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblBusniessNumber0"], "text")).not.toBe('');
	//   appLog("Successfully verified the added CRA business Tax form");
	
	
	async function Naviagatebacktodashboard_PayBusinessTaxes() {
	  
	  await kony.automation.playback.wait(3000);
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","customheadernew","flxAccounts"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","customheadernew","flxAccounts"]);
	  appLog("Navigated back to dashboard successfully");
	  await kony.automation.playback.wait(2000);
	
	}
	// async function FileandRemitCRATax() {
	//   if (await await kony.automation.playback.waitFor(["frmTemplate4","tbxEnterEmployees"]))
	//   {
	//     appLog("Initiated File and remit of CRA Template 4");
	    
	//   }
	  
	// }
	 async function RemoveCRATaxesBusinessNumber() {
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"],15000);
	    kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
	    await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblRemoveBusinessNumber0"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","lblRemoveBusinessNumber0"]);
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","RemovePopup","btnYes"],15000);
		kony.automation.button.click(["frmPayBusinessTaxes","RemovePopup","btnYes"]);
	  await kony.automation.playback.wait(3000);
	}
	async function RemoveCRATaxesForm(){
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"],15000);
	 kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
	  
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblBusniessNumber0"],15000);
	 // "frmPayBusinessTaxes","lblBusniessNumber0"
	  var Businessno = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblBusniessNumber0"],"text"); 
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxMenu00"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxMenu00"]);
	    await kony.automation.playback.waitFor(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[1]","flxAccountTypes"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[1]","flxAccountTypes"]);
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","CancelPopup","btnYes"],15000);
		kony.automation.button.click(["frmPayBusinessTaxes","CancelPopup","btnYes"]);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
	    await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblBusniessNumber0"],15000);
		var Business2 = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblBusniessNumber0"],"text");
	  if (Businessno === Business2){
	    appLog("The form is not deleted successfully");
	  }
	     
	  else{
	    appLog("Successfully deleted the form");
	  }
	                
	}
	
	
	async function FileandRemitCRATax(TemplateType,TemplateFormName){
	   appLog("Initiated File and remit of CRA");
	//    await kony.automation.playback.wait(5000);
	//   await SelectAddedCRATemplate(TemplateType);
	  await kony.automation.playback.wait(10000);
	  if(TemplateType === CRATaxes.BusinessNo.Template2){
	   await kony.automation.playback.waitFor([TemplateFormName,"tbxBusinessName"],15000);
	  kony.automation.textbox.enterText([TemplateFormName,"tbxBusinessName"],"abcdefghijklmnopqrstuvwxy");
	    
	  await kony.automation.playback.waitFor([TemplateFormName,"calEffectiveDate"],15000);
	  kony.automation.calendar.selectDate([TemplateFormName,"calEffectiveDate"], [11,5,2022]);
	  await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
	  kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"2000000");
	  await kony.automation.playback.waitFor([TemplateFormName,"calPaymentDate"],15000);
	  kony.automation.calendar.selectDate([TemplateFormName,"calPaymentDate"], [10,10,2022]);
	      await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
	  kony.automation.button.click([TemplateFormName,"btnContinue"]);
	    kony.automation.widget.touch([TemplateFormName,"flxFromSegment"], null,null,[135,68]);
	     await kony.automation.playback.waitFor([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"],15000);
	  kony.automation.flexcontainer.click([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	    await kony.automation.playback.wait(2000);
	    await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
	  kony.automation.button.click([TemplateFormName,"btnContinue"]);
	  await kony.automation.playback.waitFor([TemplateFormName,"lblAmountError"],15000);
	     expect(kony.automation.widget.getWidgetProperty([TemplateFormName,"lblAmountError"], "text")).toEqual("The amount must be more than $0 and less than $1,000.00");
	      await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
	  kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"2.1");
	      await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
	  kony.automation.button.click([TemplateFormName,"btnContinue"]);
	    await kony.automation.playback.wait(5000);
	//     await kony.automation.playback.waitFor(["frmCRAVerification","flxCRAVerifyPaymentDetails","lblValue"],15000);
	//      expect(kony.automation.widget.getWidgetProperty(["frmCRAVerification","flxCRAVerifyPaymentDetails","lblValue"], "text")).toEqual("The amount must be more than $0 and less than $200,000.00.");
	//   kony.automation.button.click([TemplateFormName,"btnContinue"]);
	  }
	  else if (TemplateType === CRATaxes.BusinessNo.Template1){
	    await kony.automation.playback.waitFor([TemplateFormName,"tbxBusinessName"],15000);
	  kony.automation.textbox.enterText([TemplateFormName,"tbxBusinessName"],"abcdefghijklmnopqrstuvwxy");
	//   await kony.automation.playback.waitFor([TemplateFormName,"calEffectiveDate"],15000);
	//   kony.automation.calendar.selectDate([TemplateFormName,"calEffectiveDate"], [10,30,2022]);
	  await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
	  kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"2000000");
	  await kony.automation.playback.waitFor([TemplateFormName,"calPaymentDate"],15000);
	  kony.automation.calendar.selectDate([TemplateFormName,"calPaymentDate"], [11,10,2022]);
	      await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor([TemplateFormName,"btnConfirm"],15000);
	  kony.automation.button.click([TemplateFormName,"btnConfirm"]);
	    kony.automation.widget.touch([TemplateFormName,"flxFromSegment"], null,null,[135,68]);
	     await kony.automation.playback.waitFor([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"],15000);
	  kony.automation.flexcontainer.click([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	    await kony.automation.playback.wait(2000);
	    await kony.automation.playback.waitFor([TemplateFormName,"btnConfirm"],15000);
	  kony.automation.button.click([TemplateFormName,"btnConfirm"]);
	  await kony.automation.playback.waitFor([TemplateFormName,"lblAmountError"],15000);
	     expect(kony.automation.widget.getWidgetProperty([TemplateFormName,"lblAmountError"], "text")).toEqual("The amount must be more than $0 and less than $1,000.00");
	      await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
	  kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"2.1");
	      await kony.automation.playback.waitFor([TemplateFormName,"btnConfirm"],15000);
	  kony.automation.button.click([TemplateFormName,"btnConfirm"]);
	    await kony.automation.playback.wait(5000);
	  }
	  else if(TemplateType === CRATaxes.BusinessNo.Template3){
	       await kony.automation.playback.waitFor([TemplateFormName,"tbxBusinessName"],15000);
	  kony.automation.textbox.enterText([TemplateFormName,"tbxBusinessName"],"abcdefghijklmnopqrstuvwxy");
	    
	  await kony.automation.playback.waitFor([TemplateFormName,"calStartDate"],15000);
	  kony.automation.calendar.selectDate([TemplateFormName,"calStartDate"], [11,5,2022]);
	  await kony.automation.playback.waitFor([TemplateFormName,"calEndDate"],15000);
	  kony.automation.calendar.selectDate([TemplateFormName,"calEndDate"], [11,29,2022]);
	  }
	}
	  async function Confirm_FileandRemite(){
	
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmCRAVerification","btnContinue"],15000);
	  kony.automation.button.click(["frmCRAVerification","btnConfirm"]);
	   await kony.automation.playback.wait(15000);
	//   await kony.automation.playback.waitFor(["frmCRAnABAcknowledgement","flxSuccess"],15000);
	//    expect(kony.automation.widget.getWidgetProperty(["frmCRAnABAcknowledgement","flxSuccess"], "text")).toEqual("We successfully scheduled your payment.");
	// kony.automation.flexcontainer.click(["frmCRAnABAcknowledgement","flxSuccess"]);
	}
	async function Cancel_FileandRemit(){
	  await kony.automation.playback.wait(10000);
	   await kony.automation.playback.waitFor(["frmCRAVerification","btnCancel"],15000);
	  kony.automation.button.click(["frmCRAVerification","btnCancel"]);  
	  await kony.automation.playback.waitFor(["frmCRAVerification","CancelPopup","btnYes"],15000);
	  kony.automation.button.click(["frmCRAVerification","CancelPopup","btnYes"]);  
	   await kony.automation.playback.wait(5000);
	//   await Naviagatebacktodashboard_PayBusinessTaxes();
	}
	 
	async function SelectAddedCRATemplate(Template_BusinessNumber){
	 //var Template2BusinessNumber = CRATaxes.BusinessNo.Template2;
	//   await  NaviagtetoPayBusinessTaxes_CRATab();
	//   await SelectTaxandPaymenttype(Template2BusinessNumber);
	//   await AddCRATaxesForm(Template2BusinessNumber);
	  await kony.automation.playback.wait(10000);
	  //await VerifytheAddedCRAform();
	 // frmPayBusinessTaxes_flxBusniessMain
	
	  //var businessnum = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","flxBusniessMain"],"data");
	  for(var i=0; i<50; i++){
	 var lable = "lblBusniessNumber" + i ;
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxBusniessMain"],15000);
	  var businessnumber = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes",lable],"text");
	    if (businessnumber === Template_BusinessNumber){
	      var dropdown = "flxDropdown" + i;
	      var file = "lblFile0" + i;
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes",dropdown],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes",lable], "text")).toEqual(Template_BusinessNumber);
	  kony.automation.flexcontainer.click(["frmPayBusinessTaxes",dropdown]);
	  await kony.automation.playback.wait(10000);
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes",file],15000);
	  kony.automation.flexcontainer.click(["frmPayBusinessTaxes",file]);
	    break;
	    }
	  }
	}
	
	async function RemoveAddedCRATax(BusinessNumber_Added)
	{
	  await kony.automation.playback.wait(10000);
	  for(var i=0; i<50; i++){
	 var lable = "lblBusniessNumber" + i ;
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxBusniessMain"],15000);
	  var businessnumber = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes",lable],"text");
	    if (businessnumber === BusinessNumber_Added){
	      var dropdown = "flxDropdown" + i;
	      var Remove = "lblRemoveBusinessNumber" + i;
	       await kony.automation.playback.waitFor(["frmPayBusinessTaxes",dropdown],15000);
	    kony.automation.flexcontainer.click(["frmPayBusinessTaxes",dropdown]);
	    await kony.automation.playback.waitFor(["frmPayBusinessTaxes",Remove],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes",Remove]);
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","RemovePopup","btnYes"],15000);
		kony.automation.button.click(["frmPayBusinessTaxes","RemovePopup","btnYes"]);
	  await kony.automation.playback.wait(3000);
	  await Naviagatebacktodashboard_PayBusinessTaxes(); 
	   break;
	}
	  }
	}
	async function VerifyFileandRemit_SuccessScreen()
	{
	    await kony.automation.playback.waitFor(["frmCRAnABAcknowledgement","lblSuccessMessage"],15000);
	    expect(kony.automation.widget.getWidgetProperty(["frmCRAnABAcknowledgement","lblSuccessMessage"], "text")).toEqual("We successfully scheduled your payment.");
	  await kony.automation.playback.waitFor(["frmCRAnABAcknowledgement","lblConfirmationNumberValue"],15000);
	  var confirmation_number = kony.automation.widget.getWidgetProperty(["frmCRAnABAcknowledgement","lblConfirmationNumberValue"], "text");
	   appLog("The FileandRemit Confirmaton number is :: <b>"+confirmation_number+"</b>");
	    await kony.automation.playback.waitFor(["frmCRAnABAcknowledgement","btnViewTaxes"],15000);
	  kony.automation.button.click(["frmCRAnABAcknowledgement","btnViewTaxes"]);
	    await kony.automation.playback.wait(10000);
	}
	
	// async function File_RemitVerifyErrorMessages(TemplateType,TemplateFormName){
	//    appLog("Initiated File and remit of CRA");
	//    await kony.automation.playback.wait(5000);
	//   await SelectAddedCRATemplate(TemplateType);
	//   await kony.automation.playback.wait(10000);
	//   if(TemplateType === CRATaxes.BusinessNo.Template2){
	  
	//   await kony.automation.playback.waitFor([TemplateFormName,"tbxBusinessName"],15000);
	//   kony.automation.textbox.enterText([TemplateFormName,"tbxBusinessName"],"abcdefghijklmnopqrstuvwxyz");
	//   await kony.automation.playback.waitFor([TemplateFormName,"calEffectiveDate"],15000);
	//   kony.automation.calendar.selectDate([TemplateFormName,"calEffectiveDate"], [10,5,2022]);
	//   await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
	//   kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"2000000");
	//   await kony.automation.playback.waitFor([TemplateFormName,"calPaymentDate"],15000);
	//   kony.automation.calendar.selectDate([TemplateFormName,"calPaymentDate"], [10,10,2021]);
	//         await kony.automation.playback.wait(3000);
	//      await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
	//   kony.automation.button.click([TemplateFormName,"btnContinue"]);
	//     kony.automation.widget.touch([TemplateFormName,"flxFromSegment"], null,null,[135,68]);
	//   await kony.automation.playback.waitFor([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"],15000);
	//   kony.automation.flexcontainer.click([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	//       await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
	//   kony.automation.button.click([TemplateFormName,"btnContinue"]);
	//    await kony.automation.playback.waitFor([TemplateFormName,"btnContinue"],15000);
	//   }
	//   else if (TemplateType === CRATaxes.BusinessNo.Template1){
	//     kony.automation.widget.touch([TemplateFormName,"flxFromSegment"], null,null,[135,68]);
	//   await kony.automation.playback.waitFor([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"],15000);
	//   kony.automation.flexcontainer.click([TemplateFormName,"segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	//   await kony.automation.playback.waitFor([TemplateFormName,"tbxBusinessName"],15000);
	//   kony.automation.textbox.enterText([TemplateFormName,"tbxBusinessName"],"abcdefghijklmnopqrstuvwxyz");
	// //   await kony.automation.playback.waitFor([TemplateFormName,"calEffectiveDate"],15000);
	// //   kony.automation.calendar.selectDate([TemplateFormName,"calEffectiveDate"], [10,5,2022]);
	//   await kony.automation.playback.waitFor([TemplateFormName,"tbxAmount"],15000);
	//   kony.automation.textbox.enterText([TemplateFormName,"tbxAmount"],"1.4");
	//   await kony.automation.playback.waitFor([TemplateFormName,"calPaymentDate"],15000);
	//   kony.automation.calendar.selectDate([TemplateFormName,"calPaymentDate"], [10,10,2021]);
	//       await kony.automation.playback.wait(5000);
	//  await kony.automation.playback.waitFor([TemplateFormName,"btnConfirm-hint"],15000);
	//   kony.automation.button.click([TemplateFormName,"btnConfirm-hint"]);
	  
	// }
	
	
	
	async function NavigateToTransferExchangeCalculator(){
	  await kony.automation.playback.waitFor(["frmAccountsLanding","btnFXRate"],15000);
	kony.automation.button.click(["frmAccountsLanding","btnFXRate"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnTransfer"],15000);
		kony.automation.button.click(["frmAccountsLanding","fxWidget","btnTransfer"]);
	}
	
	async function CalculateCADtoUSDExchangeRate(){
	    await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxAmountDropDown"],15000);
	kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDown"]);
	   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","segAmountCurrDropDown[0]","flxGroupContainer"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDown[0]","flxGroupContainer"]);
	   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxAmountDropDownBottom"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDownBottom"]);
	   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","segAmountCurrDropDownBottom[1]","flxGroupContainer"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDownBottom[1]","flxGroupContainer"]);
	     await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","txtLeftAmount"],15000);
		kony.automation.textbox.enterText(["frmAccountsLanding","fxWidget","txtLeftAmount"],"12");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxMiddleContainer"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxMiddleContainer"]);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblcross"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","lblcross"]);
	  
	 // frmAccountsLanding_fxWidget_lblcross
	}
	async function CalculateCADtoUSDCashExchangeRate(){
	 // frmAccountsLanding_fxWidget_btnCash
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnCash"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","btnCash"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxAmountDropDown"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDown"]);
	   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","segAmountCurrDropDown[0]","flxGroupContainer"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDown[0]","flxGroupContainer"]);
	   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxAmountDropDownBottom"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDownBottom"]);
	   await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","segAmountCurrDropDownBottom[1]","flxGroupContainer"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDownBottom[1]","flxGroupContainer"]);
	     await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","txtLeftAmount"],15000);
		kony.automation.textbox.enterText(["frmAccountsLanding","fxWidget","txtLeftAmount"],"12");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxMiddleContainer"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxMiddleContainer"]);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblcross"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","lblcross"]);
	}
	async function VerifyFXCalculatorPopup(){
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnTransfer"],15000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnCash"],15000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblInfo"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","fxWidget","lblInfo"], "text")).toEqual("Foreign Exchange Calculator");
	  //frmAccountsLanding_fxWidget_lblIHave
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblIHave"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","fxWidget","lblIHave"], "text")).toEqual("I have");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblINeed"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","fxWidget","lblINeed"], "text")).toEqual("I need");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","txtLeftAmount"],15000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","txtRightAmount"],15000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","imgMiddle"],15000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","txtLeftAmount"],15000);
	  kony.automation.textbox.enterText(["frmAccountsLanding","fxWidget","txtLeftAmount"],"12");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","flxMiddleContainer"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxMiddleContainer"]);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnReset"],15000);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblBottomTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","fxWidget","lblBottomTitle"], "text")).toEqual("1 CAD = 0.7901 USD");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","lblcross"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","lblcross"]);
	  appLog("Successfully verified the Fx Calculator in Dashboard");
	  }
	
	async function VerifyFXCalculatorInTransfer(){
	  appLog("Navigating to transfer landing screen");
	   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxTransfersAndPay"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","Label0dcf00103bdba46"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","Label0dcf00103bdba46"]);
	  await kony.automation.playback.wait(15000);
	  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","flxMainWidgetContainer"],15000);
	  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","lblInfo"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","fxWidget","lblInfo"], "text")).toEqual("Foreign Exchange Calculator");
	  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","lblIHave"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","fxWidget","lblIHave"], "text")).toEqual("I have");
	  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","lblINeed"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","fxWidget","lblINeed"], "text")).toEqual("I need");
	  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","txtLeftAmount"],15000);
	  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","txtRightAmount"],15000);
	  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","imgMiddle"],15000);
	  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","txtLeftAmount"],15000);
	  kony.automation.textbox.enterText(["frmFastTransfers","fxWidget","txtLeftAmount"],"12");
	  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","flxMiddleContainer"],15000);
	  kony.automation.flexcontainer.click(["frmFastTransfers","fxWidget","flxMiddleContainer"]);
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","btnReset"],15000);
	  await kony.automation.playback.waitFor(["frmFastTransfers","fxWidget","lblBottomTitle"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmFastTransfers","fxWidget","lblBottomTitle"], "text")).toEqual("1 CAD = 0.7901 USD");
	  appLog("Successfully verified the FX calculator in transfer screen");
	  //frmFastTransfers_fxWidget_flxMainWidgetContainer
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
	
	
	
	async function NavigateToMessages(){
	
	  appLog("Intiated method to Navigate to NotficationsAndMessages");
	  
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
	  appLog("Successfully Navigated to NotficationsAndMessages");
	  await kony.automation.playback.wait(5000);
	
	}
	async function NavigateToMessages_ViaHeaderFlag(){
	  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMenu"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","headermenu","flxMessages"]);
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","lblHeader"],15000);
	
	 expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","lblHeader"],"text")).toEqual("Alerts & Messages");
	//  frmNotificationsAndMessages_lblHeader  
	}
	
	async function VerifyDismissAlert()
	{
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblDateAndTime"],15000);
	  var time_date = kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblDateAndTime"], "text");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnDismiss"],15000);
	  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnDismiss"]);
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1","btnNo"],15000);
		kony.automation.button.click(["frmNotificationsAndMessages","CustomPopup1","btnNo"]);
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnDismiss"],15000);
		kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnDismiss"]);
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","CustomPopup1","lblPopupMessage"],"text")).toEqual("Are you sure you want to dismiss this alert?");
		//kony.automation.flexcontainer.click(["frmNotificationsAndMessages","CustomPopup1"]);
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1","btnYes"],15000);
		kony.automation.button.click(["frmNotificationsAndMessages","CustomPopup1","btnYes"]);
	  await kony.automation.playback.wait(5000);
		//kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","flxNotificationHeader"]);
		expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblDateAndTime"],"text")).not.toBe(time_date);
	}
	  
	async function ClickOnComposeButtonDasboard()
	{
	       await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","btnWriteNewMessage"],15000);
	     kony.automation.flexcontainer.click(["frmAccountsLanding","myMessages","btnWriteNewMessage"]);
	  appLog("Successfully clicked on Compose button");
	  await VerifyAlertsTab();
	 // await VerifyMyMessagesTab();
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblNewMessage"],15000);
	
	 expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblNewMessage"],"text")).toEqual("New Message");
	  appLog("Verified New Message Text");
	
	}
	
	async function VerifyMyMessagesTab()
	{  
	  
	   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"],15000);
	 // await kony.automation.playback.wait(15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"],"text")).toContain("My Messages ");
	  appLog("Successfuly verified My Messages tab");
	
	}
	async function VerifyMyMessagesTabLeftPanel()
	{  
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"],15000);
	  kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"]);
	  await kony.automation.playback.wait(5000);
	  appLog("Initiated to verify the left panel of My Messages tab");
	  // await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"],15000);
	   expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","btnMyMessages"],"text")).toContain("My Messages ");
	   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","txtSearch"],15000);
	 // frmNotificationsAndMessages_NotficationsAndMessages_txtSearch
	  //flxNotificationsAndMessages_lblRequestIdValue
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblRequestIdValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblRequestIdValue"],"text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblCategoryValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblCategoryValue"],"text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblSegHeading"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblSegHeading"],"text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblSegDescription"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblSegDescription"],"text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblDateAndTime"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblDateAndTime"],"text")).not.toBe('');
	  appLog("Successfuly verified My Messages tab left panel");
	}
	  
	  async function VerifyMyMessagesTabRightPanel(){
	    
	  appLog("Initiated to verify My Messages Right Panel");
	    await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblRequestId"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblRequestId"],"text")).toEqual("Request ID:");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblRequestIdValue"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblRequestIdValue"],"text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblCategoryKey2"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblCategoryKey2"],"text")).toEqual("Category:");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblCategoryValue2"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblCategoryValue2"],"text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblAccountRenewal"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblAccountRenewal"],"text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","lblUser"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","lblUser"],"text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","lblDate"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","lblDate"],"text")).not.toBe('');
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","rtxMessage"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessages[0]","flxMessagesRight","rtxMessage"],"text")).not.toBe('');
	  }
	
	async function VerifyDeletedMessagesTab()
	{
	 // frmNotificationsAndMessages_NotficationsAndMessages_btnDeletedMessages
	     await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"],15000);
	   expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"],"text")).toContain("Deleted Messages");
	  appLog("Successfuly verified Deleted Messages tab");
	  
	  
	}
	
	async function ClickOnMessage_Dashboard(){
	  await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","rtxDescription"],15000);
	   var SubjectDashboard = kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","rtxDescription"],"text");
	  appLog("Successfully verified Subject of a Message");
	  await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages"],15000);
	  kony.automation.flexcontainer.click(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages"]);
	  appLog("Sucessfully clicked on message in dashboard");
	  VerifyAlertsTab();
	  //VerifyMyMessagesTab();
	    await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblAccountRenewal"],15000);
	      await kony.automation.playback.wait(20000);
	  var SubjectMyMsgTab = kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","lblAccountRenewal"],"text");
	if(SubjectDashboard===SubjectMyMsgTab){
	  appLog("Same message details are displayed in My Messages tab");
	
	}
	
	}
	async function ValidateMessagesOnDashboard(){
	  await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","lblHeader"],5000);
	
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","lblHeader"],"text")).toEqual("My Messages");
	  appLog("Successfully verified My Messages text");
	    await kony.automation.playback.wait(15000);
	 // await kony.automation.scrollToWidget(["flxAccountLandingUpcomingTransactions","flxAccountLandingUpcomingTransactions"]);
	  var Results= await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages"],15000);
	  if (Results){
	
	     expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages"],"text")).not.toBe('');
	    appLog("Successfully verified My Messages list");
	  }
	 else  {
	   await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","rtxNoMessage"],15000);
	       await kony.automation.scrollToWidget(["frmAccountsLanding","myMessages","rtxNoMessage"]);
	    appLog("No Results found ");
	    expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","rtxNoMessage"],"text")).toEqual("You have no messages at this time.");
	  }
	}
	async function VerifyMyMessagesDetails(){
	  var MessageSize = kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","segMessages"],"data");
	  var MessageCount = MessageSize.length;
	  if (MessageCount===3){
	    appLog("Messages count is 3");
	  }
	  else{
	    appLog("Messages count is not 3");
	  }
	     await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","btnWriteNewMessage"],15000);
	   expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","btnWriteNewMessage"],"text")).toEqual("Compose New Message");
	  appLog("Successfully verified Compose new message text");
	
	await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","lblDate"],15000);
	   expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","lblDate"],"text")).not.toBe('');
	  appLog("Successfully verified Date and time of a Message");
	  
	await kony.automation.playback.waitFor(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","rtxDescription"],15000);
	   expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","myMessages","segMessages[0]","flxAccountLandingDetailsMyMessages","rtxDescription"],"text")).not.toBe('');
	  appLog("Successfully verified Subject of a Message");
	}
	
	async function ComposeNewMessage(){
	
	  appLog("Intiated method to Compose a newMessage");
	  
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"],15000);
	  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
	  appLog("Successfully Clicked on NewMessage Button");
	  await kony.automation.playback.wait(5000);
	  
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"],15000);
	  kony.automation.listbox.selectItem(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"], "RCID_ONLINEBANKING");
	  appLog("Successfully Selected Category");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],15000);
	  kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"First Test Message");
	  appLog("Successfully Entered Message subject");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],15000);
	  kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],"Test Message");
	  appLog("Successfully Entered Message content");
	  
	  //await kony.automation.scrollToWidget(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"],15000);
	  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
	  appLog("Successfully Clicked on SEND button");
	  await kony.automation.playback.wait(5000);
	}
	
	async function CancelComposeMessage(){
	  appLog("Intiated method to Compose a newMessage");
	  
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"],15000);
	  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
	  appLog("Successfully Clicked on NewMessage Button");
	  await kony.automation.playback.wait(5000);
	  
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"],15000);
	  kony.automation.listbox.selectItem(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"], "RCID_ONLINEBANKING");
	  appLog("Successfully Selected Category");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],15000);
	  kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"First Test Message");
	  appLog("Successfully Entered Message subject");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],15000);
	  kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],"Test Message");
	  appLog("Successfully Entered Message content");
	  //await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],15000);
	  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnCancel"]);
	  appLog("Successfully cancelled the composed message");
	   await kony.automation.playback.wait(5000);
	   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblRequestId"],15000);
	  //frmNotificationsAndMessages_NotficationsAndMessages_lblRequestId  
	  //"frmNotificationsAndMessages","NotficationsAndMessages","lblRequestId"
	}
	
	async function deleteNewMessage(){
	
	  appLog("Intiated method to Delete a newMessage");
	  
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"],15000);
	  kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"]);
	  appLog("Successfully Clicked on Delete button");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1","btnYes"],15000);
	  kony.automation.button.click(["frmNotificationsAndMessages","CustomPopup1","btnYes"]);
	  appLog("Successfully Clicked on YES button");
	  await kony.automation.playback.wait(5000);
	}
	
	async function CancelDeleteMessageFlow()
	{
	   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","flxRequestId"],15000);
	  var requestId = kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","flxRequestId"],"text");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"],15000);
	  kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"]);
	  appLog("Successfully Clicked on Delete button");
	   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1","btnNo"],15000);
	  kony.automation.button.click(["frmNotificationsAndMessages","CustomPopup1","btnNo"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","flxRequestId"],"text")).toEqual(requestId);
	  appLog("Successfully Clicked on NO button and cancelled the delete flow");
	}
	
	async function replyNewMessage(){
	
	  appLog("Intiated method to Reply a newMessage");
	  
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"],15000);
	  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"]);
	  appLog("Successfully Clicked on REPLY button");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","txtAreaReply"],15000);
	  kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","txtAreaReply"],"Reply to Message");
	  appLog("Successfully Entered Message content");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"],15000);
	  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"]);
	  appLog("Successfully Clicked on Send REPLY button");
	  await kony.automation.playback.wait(15000);
	}
	
	async function restoreNewMessage(){
	
	  appLog("Intiated method to Restore a newMessage");
	  
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"],15000);
	  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"]);
	  appLog("Successfully Clicked on DELETE button");
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnRestore"],15000);
	  kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnRestore"]);
	  appLog("Successfully Clicked on RESTORE button");
	  await kony.automation.playback.wait(5000);
	}
	
	async function searchNewMessage(){
	
	  appLog("Intiated method to Search a newMessage");
	  
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","txtSearch"],15000);
	  kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","txtSearch"],"Test");
	  appLog("Successfully Entered Text to Search");
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","lblSearch"],15000);
	  kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","lblSearch"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblSegHeading"],"text")).toContain("Test");
	  //flxNotificationsAndMessages_lblSegHeading
	  appLog("Successfully Clicked on SEARCH button");
	  await kony.automation.playback.wait(5000);
	}
	
	async function verifyRequestID(){
	
	  appLog("Intiated method to Verify Request ID");
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","NotficationsAndMessages","segMessageAndNotification[0]","flxNotificationsAndMessages","lblRequestIdValue"],"text")).not.toBe('');
	}
	
	async function MoveBackToDashBoard_Messages(){
	
	  await kony.automation.playback.wait(5000);
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"],15000);
	  kony.automation.flexcontainer.click(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
	  await kony.automation.playback.wait(5000);
	    await kony.automation.playback.waitFor(["frmAccountsLanding","accountList"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","lblAccountsHeader"], "text")).toContain("Accounts");  
	  appLog("Successfully Moved back to Accounts dashboard");
	}
	async function VerifyAlertsTab(){
	  await kony.automation.playback.waitFor(["frmNotificationsAndMessages","lblHeader"],15000);
	     // await kony.automation.playback.wait(10000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNotificationsAndMessages","lblHeader"],"text")).toContain("Alerts & Messages");
	  appLog("Verify the Alerts Tab successfully");
	}
	
	
	
	async function NaviagtetoPayBusinessTaxes_CRATab() {
	
	 // await kony.automation.playback.wait(5000);
	   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMyBills"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
		await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"]);
		
	}
	async function NaviagtetoPayBusinessTaxes_ProvincialTaxesTab() {
	
	 // await kony.automation.playback.wait(5000);
	   await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxMyBills"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
		await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"],15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"]);
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","btnProvincialTaxes"],15000);
	  kony.automation.button.click(["frmPayBusinessTaxes","btnProvincialTaxes"]);
		
	}
		
	
	
	async function VerifyCRAPayBusinessTaxesscreen() {
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","btnCRATaxes"],15000);
		kony.automation.button.click(["frmPayBusinessTaxes","btnCRATaxes"]);
		await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblPayBusinessTaxes"],15000);
	  
		//kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxMain"]);
	 // frmPayBusinessTaxes_lblPayBusinessTaxes
	  expect(kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblPayBusinessTaxes"],"text")).toEqual("Pay Business Taxes");
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblAddCRAFrom"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblAddCRAFrom"],"text")).toEqual("Add CRA Tax Form");
	await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblAddProvincialTax"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblAddProvincialTax"],"text")).toEqual("Add Provincial Tax Form");
	  //frmPayBusinessTaxes_flxAddProvincialFroms
	  appLog("Verified Pay Business Taxes CRA tab landing screen");
	}
	
	async function VerifyProvincialTaxesTab() {
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","btnProvincialTaxes"],15000);
	  kony.automation.button.click(["frmPayBusinessTaxes","btnProvincialTaxes"]);
	   await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblAddCRAFrom"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblAddCRAFrom"],"text")).toEqual("Add CRA Tax Form");
	await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblAddProvincialTax"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblAddCRAFrom"],"text")).toEqual("Add Provincial Tax Form");
	  appLog("Verified Provincial Taxes Tab");
	}
	
	async function AddProvincialTaxesForm() {
	    await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxAddProvincialFroms"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxAddProvincialFroms"]);
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","tbxBusinessNumber"],15000);
		kony.automation.textbox.enterText(["frmAddNewProvincialTax","tbxBusinessNumber"],"409000007");
		await kony.automation.playback.waitFor(["frmAddNewProvincialTax","btnContinue"],15000);
	  kony.automation.button.click(["frmAddNewProvincialTax","btnContinue"]);
	 await kony.automation.playback.waitFor(["frmSelectProvincialForms","segTaxFormsList[0]","flxCheckBox"],15000);
	 // kony.automation.button.click(["frmSelectProvincialForms","flxTaxForm","imgCheckBox"]);
	  kony.automation.widget.touch(["frmSelectProvincialForms","segTaxFormsList[0]","flxCheckBox"], null,null,[14,10]);
		await kony.automation.playback.waitFor(["frmSelectProvincialForms","btnContinue"],15000);
		kony.automation.button.click(["frmSelectProvincialForms","btnContinue"]);
	  
	}
	async function RemoveProvincialTaxesForm() {
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"],15000);
	 
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
	   await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxMenu00"],15000);
	 
	  
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxMenu00"]);
	   await kony.automation.playback.waitFor(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[1]","flxAccountTypes"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[1]","flxAccountTypes"]);
	     await kony.automation.playback.waitFor(["frmPayBusinessTaxes","CancelPopup","btnYes"],15000);
		kony.automation.button.click(["frmPayBusinessTaxes","CancelPopup","btnYes"]);
		//kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxBusniessNumber0"]);
	
	   // await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblRemoveBusinessNumber0"],15000);
		//kony.automation.flexcontainer.click(["frmPayBusinessTaxes","lblRemoveBusinessNumber0"]);
	 // await kony.automation.playback.waitFor(["frmPayBusinessTaxes","RemovePopup","btnYes"],15000);
		//kony.automation.button.click(["frmPayBusinessTaxes","RemovePopup","btnYes"]);
	}
	async function RemoveProvincialTaxesBusinessNumber() {
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"],15000);
	    kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
	    await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblRemoveBusinessNumber0"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","lblRemoveBusinessNumber0"]);
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","RemovePopup","btnYes"],15000);
		kony.automation.button.click(["frmPayBusinessTaxes","RemovePopup","btnYes"]);
	}
	
	async function Naviagatebacktodashboard_PayBusinessTaxes() {
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","customheadernew","flxAccounts"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","customheadernew","flxAccounts"]);
	  appLog("Navigated back to dashboard successfully");
	
	}
	
	async function NaviagatetoTaxHistoryViaCRATaxes() {
	 // await Naviagatebacktodashboard_PayBusinessTaxes();
	    appLog("Intiated method to navigate to Taxes history via CRA Taxes");
	
	await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","lblBusniessNumber0"],15000);
	   var BusinessNumber = kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxes","lblBusniessNumber0"], "text");
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxMenu00"],15000);
	   kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxMenu00"]);
	    await kony.automation.playback.waitFor(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[0]","flxAccountTypes"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[0]","flxAccountTypes"]);
	    appLog("Navigated to Tax History successfully");
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxHistory","lblSearchBusinessName"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPayBusinessTaxHistory","lblSearchBusinessName"], "text")).toContain(BusinessNumber);
	  appLog("Successfully verify the businessnumber in the search history screen");
	   //await kony.automation.playback.waitFor(["frmPayBusinessTaxHistory","customheadernew","flxAccounts"],15000);
		//kony.automation.flexcontainer.click(["frmPayBusinessTaxHistory","customheadernew","flxAccounts"]);
	  }
	
	
	async function Naviagatebacktodashboard_TaxHistoryPayBusinessTaxes() {
	  await kony.automation.playback.waitFor(["frmPayBusinessTaxHistory","customheadernew","flxAccounts"],15000);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxHistory","customheadernew","flxAccounts"]);
	 // frmPayBusinessTaxHistory_customheadernew_flxAccounts
	  appLog("Navigated back to dashboard successfully");
	
	}
	
	//frmPayBusinessTaxHistory_customheadernew_flxAccounts
	
	async function PreLogin_NavigateToFAQ(){
	
	  appLog("Intiated method to Navigate to About US");
	  
	  await kony.automation.playback.waitFor(["frmLogin","btnFaqs"],10000);
	  kony.automation.button.click(["frmLogin","btnFaqs"]);
	  await kony.automation.playback.wait(5000);
	  appLog("Successfully Navigated to FAQs");
	}
	async function MoveBacktoLogin_FAQ(){
	
	  await kony.automation.playback.waitFor(["frmOnlineHelp","customheader","headermenu","btnLogout"],10000);
	  kony.automation.button.click(["frmOnlineHelp","customheader","headermenu","btnLogout"]);
	  appLog("Successfully Moved back to Login Screen");
	}
	
	async function PreLogin_NavigateToPrivacyPolicy(){
	
	  appLog("Intiated method to Navigate to PrivacyPolicy");
	  
	  await kony.automation.playback.waitFor(["frmLogin","btnPrivacy"],10000);
	  kony.automation.button.click(["frmLogin","btnPrivacy"]);
	  await kony.automation.playback.wait(5000);
	  appLog("Successfully Navigated to PrivacyPolicy");
	}
	async function MoveBacktoLogin_PrivacyPolicyScreen(){
	  
	  await kony.automation.playback.waitFor(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"],10000);
	  kony.automation.button.click(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"]);
	  appLog("Successfully Moved back to Login Screen");
	}
	async function PreLogin_NavigateToTermsConditions(){
	
	  //appLog("Intiated method to Navigate to TC's");
	  
	  await kony.automation.playback.waitFor(["frmLogin","btnTermsAndConditions"],10000);
	  kony.automation.button.click(["frmLogin","btnTermsAndConditions"]);
	  await kony.automation.playback.wait(5000);
	  //appLog("Successfully Navigated to TC's");
	}
	async function MoveBacktoLogin_TermsConditions(){
	  
	  await kony.automation.playback.waitFor(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"],10000);
	  kony.automation.button.click(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"]);
	  //appLog("Successfully Moved back to Login Screen");
	}
	async function PreLogin_NavigateToContactUs(){
	
	  //appLog("Intiated method to Navigate to ContactUs");
	  
	  await kony.automation.playback.waitFor(["frmLogin","btnContactUs"],10000);
	  kony.automation.button.click(["frmLogin","btnContactUs"]);
	  await kony.automation.playback.wait(5000);
	 // appLog("Successfully Navigated to Contact US");
	}
	async function MoveBacktoLogin_ContactUsScreen(){
	  
	  await kony.automation.playback.waitFor(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"],10000);
	  kony.automation.button.click(["frmContactUsPrivacyTandC","customheader","headermenu","btnLogout"]);
	 // appLog("Successfully Moved back to Login Screen");
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
	  
	
	
	async function NavigatetoCreateCustomeRole(){
	  appLog("Naviagting to CreateCustome role Usermanagement");
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxMenu"],15000);
	  kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
		await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"],15000);
		kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"]);
		await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagement3flxMyAccounts"],15000);
		kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagement3flxMyAccounts"]);
	}
	
	async function CreateaCustomeRole(rolename){
	  appLog("Initiated creation of custome role");
	 // var Time=Math.floor(Date.now()/1000);
	 // var rolename = "Jasmine"+Time; 
	  //var rolename = "Jasmine";
	  await kony.automation.playback.waitFor(["frmPermissionsTemplate","tbxRoleName"],15000);
	  kony.automation.textbox.enterText(["frmPermissionsTemplate","tbxRoleName"],rolename);
	  await kony.automation.playback.waitFor(["frmPermissionsTemplate","btnCheckAvailability"],15000);
		kony.automation.button.click(["frmPermissionsTemplate","btnCheckAvailability"]);
	   await kony.automation.playback.waitFor(["frmPermissionsTemplate","flxManual"],15000);
		kony.automation.flexcontainer.click(["frmPermissionsTemplate","flxManual"]);
	await kony.automation.playback.wait(10000);
	 // await kony.automation.scrollToBottom ;
	 //  await kony.automation.scrollToWidget(["frmPermissionsTemplate","btnProceedRoles"]);
	  await kony.automation.playback.waitFor(["frmPermissionsTemplate","btnProceedRoles"],15000);
		kony.automation.button.click(["frmPermissionsTemplate","btnProceedRoles"]);
	  await kony.automation.playback.wait(3000);
	}
	async function selectCustomAccounts(){
	  appLog("Initiated the select listed accounts for custom role/user creation");
	  //await kony.automation.playback.wait(5000);
	   await kony.automation.playback.waitFor(["frmPermissionsTemplate","segAccounts[0]","flxMainContainer","lblCheckAccount"],15000);
	  //flxMainContainer_lblCheckAccount
		kony.automation.flexcontainer.click(["frmPermissionsTemplate","segAccounts[0]","flxMainContainer","lblCheckAccount"]);
	  await kony.automation.playback.waitFor(["frmPermissionsTemplate","segAccounts[1]","flxMainContainer","lblCheckAccount"],15000);
		kony.automation.flexcontainer.click(["frmPermissionsTemplate","segAccounts[1]","flxMainContainer","lblCheckAccount"]);
	  await kony.automation.playback.waitFor(["frmPermissionsTemplate","segAccounts[2]","flxMainContainer","lblCheckAccount"],15000);
		kony.automation.flexcontainer.click(["frmPermissionsTemplate","segAccounts[2]","flxMainContainer","lblCheckAccount"]);
	  await kony.automation.playback.wait(5000);
	    await kony.automation.playback.waitFor(["frmPermissionsTemplate","btnProceedAccess"],15000);
	  kony.automation.button.click(["frmPermissionsTemplate","btnProceedAccess"]);
	   await kony.automation.playback.wait(8000);
	    await kony.automation.playback.waitFor(["frmPermissionsTemplate","btnSaveAndProceed"],15000);
		kony.automation.button.click(["frmPermissionsTemplate","btnSaveAndProceed"]);
	  await kony.automation.playback.wait(8000);
	  await kony.automation.playback.waitFor(["frmPermissionsTemplate","lblSuccessMessage"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPermissionsTemplate","lblSuccessMessage"], "text")).toEqual("Custom Role Template Created Successfully");
	  appLog("Successfully created a custome role");
	  }
	
	async function NavigateBactoDasboard_Usermanagement()
	{
	   await kony.automation.playback.waitFor(["frmPermissionsTemplate","customheader","topmenu","flxaccounts"],15000);
	  kony.automation.flexcontainer.click(["frmPermissionsTemplate","customheader","topmenu","flxaccounts"]);
	}
	
	async function NavigatetoUserRoles_Usermanagement(){
	  
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxMenu"],15000);                                                   
	    kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"],15000); 
		kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"]);
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagement1flxMyAccounts"],15000); 
		kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagement1flxMyAccounts"]);
	  appLog("Successfully navigated to User Roles screen");
	}
	
	async function VerifyUserRolesTab()
	{
	  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRoleName"],15000); 
	  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRoleName"], "text")).toEqual("Role Name");
	  //kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRoleName"]);
	   await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedOn"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedOn"], "text")).toEqual("Created On");
		//kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedOn"]);
	  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedBy"],15000); 
	  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedBy"], "text")).toEqual("Created By");
		//kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","btnCreatedBy"]);
	   await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","lblRoleAction"],15000); 
	  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","lblRoleAction"], "text")).toEqual("Description");
	 // kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","lblRoleAction"]);
	  appLog("Successfully verified UserRoles tab");
	 
	}
	async function NavigateBactoDasboard_UserRoles(){
	  await kony.automation.playback.waitFor(["frmBBUsersDashboard","customheader","topmenu","flxaccounts"],15000);
	 // frmBBUsersDashboard_customheader_topmenu_flxaccounts
	  kony.automation.flexcontainer.click(["frmBBUsersDashboard","customheader","topmenu","flxaccounts"]);
	}
	
	async function NavigatetoAllUsers_Usermanagement(){
	  await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","topmenu","flxMenu"],15000);
	  kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","topmenu","flxMenu"]);
	   await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"],15000);
		kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagementflxAccountsMenu"]);
	    await kony.automation.playback.waitFor(["frmBBAccountsLanding","customheader","customhamburger","UserManagement0flxMyAccounts"],15000);
		kony.automation.flexcontainer.click(["frmBBAccountsLanding","customheader","customhamburger","UserManagement0flxMyAccounts"]);
	}
	
	async function VerifyAllUsersTab_Usermanagement()
	{
	  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnName"],15000);
	 //kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","btnName"]);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnName"], "text")).toEqual("Name");
	  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRole"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnRole"], "text")).toEqual("Role");
	  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnUsername"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnUsername"], "text")).toEqual("Username");
	  //"frmBBUsersDashboard","TabPane","TabBodyNew","btnStatus"
	   await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","btnStatus"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","btnStatus"], "text")).toEqual("Status");
	 // frmBBUsersDashboard_TabPane_TabBodyNew_lblActions
	    await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","lblActions"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBBUsersDashboard","TabPane","TabBodyNew","lblActions"], "text")).toEqual("Action");
	}
	async function VerifyManageUser_Usermanagement(){
	   await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","segTemplates[0]","flxDropDown"],15000);
	  kony.automation.flexcontainer.click(["frmBBUsersDashboard","TabPane","TabBodyNew","segTemplates[0]","flxDropDown"]);
	  await kony.automation.playback.waitFor(["frmBBUsersDashboard","TabPane","TabBodyNew","segTemplates[0]","btnManageUsers"],15000);
		kony.automation.button.click(["frmBBUsersDashboard","TabPane","TabBodyNew","segTemplates[0]","btnManageUsers"]);
	   await kony.automation.playback.waitFor(["frmUserManagement","btnEdit"],15000);
	  kony.automation.button.click(["frmUserManagement","btnEdit"]);
	   await kony.automation.playback.waitFor(["frmUserManagement","tbxEmail"],15000);
	  kony.automation.textbox.enterText(["frmUserManagement","tbxEmail"],"Jasmin@gmail.com");
	  await kony.automation.playback.waitFor(["frmUserManagement","btnProceedCreate"],15000);
		kony.automation.button.click(["frmUserManagement","btnProceedCreate"]);
	  appLog("Successfully edited the User email ID");
	  }
	
	it("Sample", async function() {
	  appLog("Hello");
	  await kony.automation.playback.wait(95000);
	  appLog("Test");
	},120000);
	
	it("VerifyAccountsLandingPage", async function() {
	  var PreferredAcc = kony.automation.widget.getWidgetProperty(["frmAccountsLanding","accountList","flxAccountsRightContainer","btnShowAllAccounts"], "text");
	  appLog(PreferredAcc);
	  if(PreferredAcc==="Preferred Accounts")
	    {
	     
		kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","flxAccountsRightContainer"]);
	          await kony.automation.playback.wait(15000);
		kony.automation.flexcontainer.click(["frmAccountsLanding","FavouriteAccountTypes","segAccountTypes[0]","flxAccountTypes"]);
	      appLog("Successfully clicked on All accounts");
	  await kony.automation.playback.wait(15000);
	
	    }
	  else
	    {
	      appLog("All accounts are shown");
	    }
	  await verifyAccountsLandingScreen();
	
	},240000);
	
	it("VerifyAccountSummarySavingsAccount", async function() {
	
	  await clickOnFirstSavingsAccount();
	  await verifyAccountSummary_SavingsAccounts();
	  await MoveBackToLandingScreen_AccDetails();
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[1,0]","flxAccountNameWrapper"]);
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblCurrentBalanceValue"]);
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingDepositsValue"]);
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblPendingWithdrawalsValue"]);
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAsOf"]);
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","accountSummary","lblAvailableBalanceValue"]);
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	//   kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	
	},120000);
	
	it("VerifyAccountdetailsandaccountInfo", async function() {
	  await clickOnFirstSavingsAccount();
		//kony.automation.widget.touch(["frmAccountsLanding"], null,null,[362,291]);
	 // await kony.automation.playback.waitFor(["frmAccountsLanding","accountList","segAccounts"],15000);
	 // kony.automation.flexcontainer.click(["frmAccountsLanding","accountList","segAccounts[0,0]","flxAccountNameWrapper"]);
	  await VerifySavingsAccountDetails();
	  await VerifySavingsAccount_InfoTab();
	  await MoveBackToLandingScreen_AccDetails();
		/*kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxLeft1"]);
		kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxLeft2"]);
		kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxAvailableBalance"]);
		kony.automation.widget.touch(["frmAccountsDetails"], null,null,[311,220]);
		kony.automation.button.click(["frmAccountsDetails","accountSummary","btnBalanceDetails"]);
		kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxBalanceField1"]);
		kony.automation.widget.touch(["frmAccountsDetails"], null,null,[436,214]);
		kony.automation.button.click(["frmAccountsDetails","accountSummary","btnAccountInfo"]);
		kony.automation.widget.touch(["frmAccountsDetails"], null,null,[184,263]);
		kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxField3"]);
		kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxField4"]);
		kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxField5"]);
		kony.automation.flexcontainer.click(["frmAccountsDetails","accountSummary","flxField6"]);*/
	}, 120000);
	
	it("SavingsAcc_VerifyTranscations", async function() {
	  
	  await clickOnFirstSavingsAccount();
	  await scrolltoTranscations_accountDetails();
	  await MoveBackToLandingScreen_AccDetails();
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"],10000);
	//   kony.automation.widget.touch(["frmDashboard","accountList","segAccounts[1,0]","flxContent"], null,null,[303,1]);
	//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"],10000);
	//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[1,0]","flxAccountDetails"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lblTransactions"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","lblTransactions"],"text")).toEqual("Transactions");
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions"]);
	//   await kony.automation.scrollToWidget(["frmAccountsDetails","transactions","segTransactions"]);
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	//   kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	
	},120000);
	
	it("VerifySavingsAcc_AdvanceSearch", async function() {
	  
	  await clickOnFirstSavingsAccount();
	  await verifyAdvancedSearch_AccountDetails("1","1000");
	  await MoveBackToLandingScreen_AccDetails();
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[1,0]","flxAccountNameWrapper"]);
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnTransfersChecking"]);
	//   kony.automation.button.click(["frmAccountsDetails","transactions","btnTransfersChecking"]);
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","flxSearch"]);
	//   kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","flxSearch"]);
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTransactionType"]);
	//   kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTransactionType"], "Transfers");
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeFrom"]);
	//   kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeFrom"],"1");
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","txtAmountRangeTo"]);
	//   kony.automation.textbox.enterText(["frmAccountsDetails","transactions","txtAmountRangeTo"],"1000");
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","lstbxTimePeriod"]);
	//   kony.automation.listbox.selectItem(["frmAccountsDetails","transactions","lstbxTimePeriod"], "LAST_THREE_MONTHS");
	
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","btnSearch"]);
	//   kony.automation.button.click(["frmAccountsDetails","transactions","btnSearch"]);
	//   await kony.automation.playback.wait(5000);
	  
	//   var noResult=await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","rtxNoPaymentMessage"],10000);
	//   if(noResult){
	//     kony.print("No Results found with given criteria..");
	//     expect(kony.automation.widget.getWidgetProperty(["frmAccountsDetails","transactions","rtxNoPaymentMessage"], "text")).toEqual("No Transactions Found");
	//   }else{
	//      await kony.automation.playback.waitFor(["frmAccountsDetails","transactions","segTransactions"]);
	//      kony.automation.flexcontainer.click(["frmAccountsDetails","transactions","segTransactions[0,0]","flxDropdown"]);
	//   }
	  
	//   await kony.automation.playback.waitFor(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	//   kony.automation.flexcontainer.click(["frmAccountsDetails","customheader","topmenu","flxaccounts"]);
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	  
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
	
	it("CRADirectDeposit", async function() {
	  await navigatetoaccountservices_CRADirectDeposit();
	  await CRADirectDeposit_ToaIndividual();
	  await VerifyCRADirectdeposit_AcknowledgementScreen();
	  await NavigateBacktoDashboard_CRADirectdepositacknowledgement();
	  await kony.automation.playback.wait(10000);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMenu"]);
	//	kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICEflxAccountsMenu"]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","customhamburger","ACCOUNTSERVICE4flxMyAccounts"]);
		//kony.automation.button.click(["frmCRADirectDeposit","btnConfirm"]);
		//kony.automation.listbox.selectItem(["frmCRADirectDepositRegister","lsbAccountSelection"], "102368-00001");
		//kony.automation.textbox.enterText(["frmCRADirectDepositRegister","txtSinNumber"],"611538422");
		//kony.automation.flexcontainer.click(["frmCRADirectDepositRegister","flxCheckBox"]);
		//kony.automation.button.click(["frmCRADirectDepositRegister","btnConfirm"]);
	},90000);
	
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
	
	it("CreateNewMessage", async function() {
	
	  await NavigateToMessages();
	  await ComposeNewMessage();
	  await MoveBackToDashBoard_Messages();
	  await verifyAccountsLandingScreen();
	  
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxMenu"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
	//   await kony.automation.playback.wait(5000);
	  
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
	//   await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"]);
	//   kony.automation.listbox.selectItem(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"], "RCID_ONLINEBANKING");
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"]);
	//   kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"First Test Message");
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"]);
	//   kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],"Test Message");
	 
	//   //Send Button is not enabling after details. Hence clickinga nd entering same subject again
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"]);
	//   kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"Test Message");
	  
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
	//   kony.automation.flexcontainer.click(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},120000);
	
	it("Messages_AlertsTab", async function() {
	  await NavigateToMessages();
	  await VerifyAlertsTab();
	  await MoveBackToDashBoard_Messages();
	  await verifyAccountsLandingScreen();
	},120000);
	
	it("ReplytoMessage", async function() {
	
	  // Create a message and reply to it
	  
	  await NavigateToMessages();
	  await ComposeNewMessage();
	  await replyNewMessage();
	  await MoveBackToDashBoard_Messages();
	  await verifyAccountsLandingScreen();
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxMenu"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
	//   await kony.automation.playback.wait(5000);
	  
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
	//   await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"]);
	//   kony.automation.listbox.selectItem(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"], "RCID_ONLINEBANKING");
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"]);
	//   kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"First Test Message");
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"]);
	//   kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],"Test Message");
	 
	//   //Send Button is not enabling after details. Hence clickinga nd entering same subject again
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"]);
	//   kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"Test Message");
	  
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
	//   await kony.automation.playback.wait(5000);
	  
	  
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"]);
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","txtAreaReply"]);
	//   kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","txtAreaReply"],"Reply to Message");
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnSendReply"]);
	//   await kony.automation.playback.wait(10000);
	
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
	//   kony.automation.flexcontainer.click(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},120000);
	
	it("DeleteMessage", async function() {
	
	    // Create a message and Delete to it
	  
	  await NavigateToMessages();
	  await ComposeNewMessage();
	  await deleteNewMessage();
	  await MoveBackToDashBoard_Messages();
	  await verifyAccountsLandingScreen();
	  
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxMenu"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
	//   await kony.automation.playback.wait(5000);
	  
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
	//   await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"]);
	//   kony.automation.listbox.selectItem(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"], "RCID_ONLINEBANKING");
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"]);
	//   kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"First Test Message");
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"]);
	//   kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],"Test Message");
	 
	//   //Send Button is not enabling after details. Hence clickinga nd entering same subject again
	//   //await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"]);
	//   //kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"Test Message");
	  
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"]);
	//   kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"]);
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1","btnYes"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","CustomPopup1","btnYes"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
	//   kony.automation.flexcontainer.click(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},120000);
	
	it("RestoreMessage", async function() {
	
	     // Create a message and Delete to it
	  
	  await NavigateToMessages();
	  await ComposeNewMessage();
	  await deleteNewMessage();
	  await restoreNewMessage();
	  await MoveBackToDashBoard_Messages();
	  await verifyAccountsLandingScreen();
	  
	//    await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxMenu"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGESflxAccountsMenu"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","ALERTSANDMESSAGES1flxMyAccounts"]);
	//   await kony.automation.playback.wait(5000);
	  
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessage"]);
	//   await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"]);
	//   kony.automation.listbox.selectItem(["frmNotificationsAndMessages","NotficationsAndMessages","listbxCategory"], "RCID_ONLINEBANKING");
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"]);
	//   kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"First Test Message");
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"]);
	//   kony.automation.textarea.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","textareaDescription"],"Test Message");
	 
	//   //Send Button is not enabling after details. Hence clickinga nd entering same subject again
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"]);
	//   kony.automation.textbox.enterText(["frmNotificationsAndMessages","NotficationsAndMessages","tbxSubject"],"Test Message");
	  
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnNewMessageSend"]);
	//   await kony.automation.playback.wait(5000);
	
	
	
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"]);
	//   kony.automation.flexcontainer.click(["frmNotificationsAndMessages","NotficationsAndMessages","flxDelete"]);
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","CustomPopup1","btnYes"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","CustomPopup1","btnYes"]);
	//   await kony.automation.playback.wait(5000);
	
	
	
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnDeletedMessages"]);
	//   await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","NotficationsAndMessages","btnRestore"]);
	//   kony.automation.button.click(["frmNotificationsAndMessages","NotficationsAndMessages","btnRestore"]);
	//   await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
	//   kony.automation.flexcontainer.click(["frmNotificationsAndMessages","customheader","topmenu","flxaccounts"]);
	
	},120000);
	
	it("AddandRemoveProvincialTaxes", async function() {
	  
	  await  NaviagtetoPayBusinessTaxes_CRATab();
	  await AddProvincialTaxesForm();
	  await RemoveProvincialTaxesBusinessNumber();
	  await kony.automation.playback.wait(7000);
	  await Naviagatebacktodashboard_PayBusinessTaxes();
	  
		//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"]);
		//kony.automation.button.click(["frmPayBusinessTaxes","btnProvincialTaxes"]);
		/*kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxAddProvincialFroms"]);
		kony.automation.textbox.enterText(["frmAddNewProvincialTax","tbxBusinessNumber"],"409000007");
		kony.automation.button.click(["frmAddNewProvincialTax","btnContinue"]);
		kony.automation.button.click(["frmSelectProvincialForms","btnContinue"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxBottomRow0"]);
		kony.automation.butt15on.click(["frmPayBusinessTaxes","RemovePopup","btnYes"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","customheadernew","flxAccounts"]);*/
	},450000);
	
	it("RemoveFormofProvincialTaxes", async function() {
	   await  NaviagtetoPayBusinessTaxes_CRATab();
	  await AddProvincialTaxesForm();
	  await RemoveProvincialTaxesForm();
	  await kony.automation.playback.wait(7000);
	  await Naviagatebacktodashboard_PayBusinessTaxes();
	}, 60000);
	
	it("VerifyPayBusinessCRATaxes", async function() {
	  
	  await  NaviagtetoPayBusinessTaxes_CRATab();
	  await VerifyCRAPayBusinessTaxesscreen();
	  await Naviagatebacktodashboard_PayBusinessTaxes();
	  
		/*kony.automation.widget.touch(["frmAccountsLanding","customheader","topmenu","flxMyBills"], [140,34],null,null);
		kony.automation.widget.touch(["frmAccountsLanding"], null,null,[666,104]);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
		kony.automation.widget.touch(["frmAccountsLanding"], null,null,[618,175]);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"]);
		kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[156,211]);
		kony.automation.button.click(["frmPayBusinessTaxes","btnCRATaxes"]);
		kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[205,156]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxMain"]);*/
	},120000);
	
	it("TaxHistorynavigationViaCRA", async function() {
		await NaviagtetoPayBusinessTaxes_CRATab();
	 await NaviagatetoTaxHistoryViaCRATaxes();
	  await kony.automation.playback.wait(5000);
	  await Naviagatebacktodashboard_TaxHistoryPayBusinessTaxes();
	  //kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxPayTaxes"]);
		/*await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxMenu00"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[0]","flxAccountTypes"]);
		kony.automation.widget.touch(["frmPayBusinessTaxHistory"], null,null,[178,270]);
		await kony.automation.playback.waitFor(["frmPayBusinessTaxHistory","flxShowingResults"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxHistory","flxShowingResults"]);
		kony.automation.button.click(["frmPayBusinessTaxHistory","btnProvincialTaxes"]);
		await kony.automation.playback.waitFor(["frmPayBusinessTaxes","flxDropdown0"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxMenu00"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","accountListMenu","segAccountListActions[0]","flxAccountTypes"]);
		await kony.automation.playback.waitFor(["frmPayBusinessTaxHistory","flxShowingResults"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxHistory","flxShowingResults"]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxHistory","customheadernew","flxAccounts"]);
		kony.automation.flexcontainer.click(["frmAccountsLanding","customheader","topmenu","flxMyBills"]);*/
	},90000);
	
	it("NavigatetoTaxHistoryViaProvincialTaxes", async function() {
	await NaviagtetoPayBusinessTaxes_ProvincialTaxesTab();
	  await kony.automation.playback.wait(3000);
	  await AddProvincialTaxesForm();
	  await NaviagatetoTaxHistoryViaCRATaxes();
	  await kony.automation.playback.wait(5000);
	  await Naviagatebacktodashboard_TaxHistoryPayBusinessTaxes();
	  
	},75000);
	
	it("CancelTransfer", async function() {
	
	  await navigateToMoveMoney();
	  await SelectFromAccount(Transfers.ownAccount.fromAccount);
	  await SelectToAccount(Transfers.ownAccount.toAccount);
	  await EnterAmount(Transfers.ownAccount.amountValue);
	  await SelectFrequency("Daily");
	  await SelectDateRange();
	  await EnterNoteValue("OwnAcc-CancelTransfer");
	  await CancelTransfer();
	  await verifyAccountsLandingScreen();
	
	  //   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	  //   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	  //   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	  //   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	
	  //   await kony.automation.playback.wait(10000);
	  //   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
	  //   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	  //   //await kony.automation.playback.wait(5000);
	  //   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
	  //   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]); 
	
	  //   await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"]);
	  //   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1");
	
	  //   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
	  //   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"OwnAcc-CancelTransfer");
	
	  //   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
	
	  //   await kony.automation.playback.waitFor(["frmReview","btnCancel"]);
	  //   kony.automation.button.click(["frmReview","btnCancel"]);
	
	  //   await kony.automation.playback.waitFor(["frmReview","CustomPopup","btnYes"]);
	  //   kony.automation.button.click(["frmReview","CustomPopup","btnYes"]);
	
	  //   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},TimeOuts.Transfers.transfer);
	
	it("DailySheduledTransfer-DateRange", async function() {
	  
	  await navigateToMoveMoney();
	  await SelectFromAccount(Transfers.ownAccount.fromAccount);
	  await SelectToAccount(Transfers.ownAccount.toAccount);
	  await EnterAmount(Transfers.ownAccount.amountValue);
	  await SelectFrequency("Daily");
	  await SelectDateRange();
	  await EnterNoteValue("Own-DailySche-daterange");
	  await ConfirmTransfer();
	  await VerifyTransferSuccessMessage();
	  await verifyAccountsLandingScreen();
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	
	//   await kony.automation.playback.wait(10000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	//   //await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]); 
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1");
	
	//   kony.automation.flexcontainer.click(["frmFastTransfers","flxContainer4"]);
	//   kony.automation.listbox.selectItem(["frmFastTransfers","lbxFrequency"], "Daily");
	//   kony.automation.calendar.selectDate(["frmFastTransfers","calSendOnNew"], [10,25,2021]);
	//   kony.automation.calendar.selectDate(["frmFastTransfers","calEndingOnNew"], [11,25,2021]);
	  
	//   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"OwnAcc-DailySheduledTransfer-DateRange");
	
	//   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
	//   await kony.automation.playback.waitFor(["frmReview","btnConfirm"]);
	//   kony.automation.button.click(["frmReview","btnConfirm"]);
	  
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblTransactionMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully scheduled your transfer");
	
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"]);
	//   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},TimeOuts.Transfers.transfer);
	
	it("DailySheduledTransfer-Occurences", async function() {
	  
	  await navigateToMoveMoney();
	  await SelectFromAccount(Transfers.ownAccount.fromAccount);
	  await SelectToAccount(Transfers.ownAccount.toAccount);
	  await EnterAmount(Transfers.ownAccount.amountValue);
	  await SelectFrequency("Daily");
	  await SelectOccurences("2");
	  await EnterNoteValue("Own-DailySheduled-Occurences");
	  await ConfirmTransfer();
	  await VerifyTransferSuccessMessage();
	  await verifyAccountsLandingScreen();
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	
	//   await kony.automation.playback.wait(10000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	//   //await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]); 
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1");
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","flxContainer4"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","flxContainer4"]);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","lbxFrequency"]);
	//   kony.automation.listbox.selectItem(["frmFastTransfers","lbxFrequency"], "Daily");
	//   kony.automation.listbox.selectItem(["frmFastTransfers","lbxForHowLong"], "NO_OF_RECURRENCES");
	//   kony.automation.textbox.enterText(["frmFastTransfers","tbxNoOfRecurrences"],"2");
	//   kony.automation.calendar.selectDate(["frmFastTransfers","calSendOnNew"], [10,25,2021]);
	  
	//   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"OwnAcc-DailySheduledTransfer-Occurences");
	
	//   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
	//   await kony.automation.playback.waitFor(["frmReview","btnConfirm"]);
	//   kony.automation.button.click(["frmReview","btnConfirm"]);
	  
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblTransactionMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully scheduled your transfer");
	
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"]);
	//   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},TimeOuts.Transfers.transfer);
	
	it("OneTimeTransfer", async function() {
	  
	  await navigateToMoveMoney();
	  await SelectFromAccount(Transfers.ownAccount.fromAccount);
	  await SelectToAccount(Transfers.ownAccount.toAccount);
	  await EnterAmount(Transfers.ownAccount.amountValue);
	  await EnterNoteValue("OwnAcc-OneTimeTransfer");
	  await ConfirmTransfer();
	  await VerifyTransferSuccessMessage();
	  await verifyAccountsLandingScreen();
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	
	//   await kony.automation.playback.wait(10000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	//   //await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]); 
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1");
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"OwnAcc-OneTimeTransfer");
	
	//   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
	//   await kony.automation.playback.waitFor(["frmReview","btnConfirm"]);
	//   kony.automation.button.click(["frmReview","btnConfirm"]);
	
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblTransactionMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully completed the transfer");
	
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"]);
	//   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},TimeOuts.Transfers.transfer);//,TimeOuts.Transfers.transfer);
	
	it("SheduledOneTimeTransfer", async function() {
	  
	  await navigateToMoveMoney();
	  await SelectFromAccount(Transfers.ownAccount.fromAccount);
	  await SelectToAccount(Transfers.ownAccount.toAccount);
	  await EnterAmount(Transfers.ownAccount.amountValue);
	  await SelectSendOnDate();
	  await EnterNoteValue("OwnAcc-SheduledOneTimeTransfer");
	  await ConfirmTransfer();
	  await VerifyTransferSuccessMessage();
	  await verifyAccountsLandingScreen();
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	
	//   await kony.automation.playback.wait(10000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	//   //await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]); 
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1");
	
	//   kony.automation.calendar.selectDate(["frmFastTransfers","calSendOnNew"], [11,25,2021]);
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"OwnAcc-SheduledOneTimeTransfer");
	
	//   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
	//   await kony.automation.playback.waitFor(["frmReview","btnConfirm"]);
	//   kony.automation.button.click(["frmReview","btnConfirm"]);
	  
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblTransactionMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully scheduled your transfer");
	
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"]);
	//   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},TimeOuts.Transfers.transfer);
	
	it("VerifySearch_From_To_AccList", async function() {
	  
	  await navigateToMoveMoney();
	  await SelectFromAccount(Transfers.ownAccount.fromAccount);
	  await SelectToAccount(Transfers.ownAccount.toAccount);
	  await MoveBackToLandingScreen_Transfers();
	  await verifyAccountsLandingScreen();
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	//   await kony.automation.playback.wait(10000);
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferFrom"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","txtTransferFrom"],"My Checking");
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferTo"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],"My Savings");
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]);
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","customheadernew","flxAccounts"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","customheadernew","flxAccounts"]);
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},90000);
	
	it("CancelTransfer", async function() {
	
	  await navigateToMoveMoney();
	  await SelectFromAccount(Transfers.sameBankAccount.fromAccount);
	  await SelectToAccount(Transfers.sameBankAccount.toAccount);
	  await EnterAmount(Transfers.sameBankAccount.amountValue);
	  await SelectFrequency("Daily");
	  await SelectDateRange();
	  await EnterNoteValue("SameBank-CancelTransfer");
	  await CancelTransfer();
	  await verifyAccountsLandingScreen();
	
	  //   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	  //   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	  //   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	  //   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	
	  //   await kony.automation.playback.wait(10000);
	  //   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
	  //   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	  //   //await kony.automation.playback.wait(5000);
	  //    //Enter Recipitent Name
	  //   await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferTo"]);
	  //   kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],"Dan Markus");
	  //   await kony.automation.playback.wait(5000);
	  //   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
	  //   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]);
	
	  //   await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"]);
	  //   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1");
	
	  //   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
	  //   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"SameBank-CancelTransfer");
	
	  //   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
	
	  //   await kony.automation.playback.waitFor(["frmReview","btnCancel"]);
	  //   kony.automation.button.click(["frmReview","btnCancel"]);
	
	  //   await kony.automation.playback.waitFor(["frmReview","CustomPopup","btnYes"]);
	  //   kony.automation.button.click(["frmReview","CustomPopup","btnYes"]);
	
	  //   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
	  //   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},TimeOuts.Transfers.transfer);
	
	it("SheduledOneTimeTransfer", async function() {
	  
	  await navigateToMoveMoney();
	  await SelectFromAccount(Transfers.sameBankAccount.fromAccount);
	  await SelectToAccount(Transfers.sameBankAccount.toAccount);
	  await EnterAmount(Transfers.sameBankAccount.amountValue);
	  await SelectSendOnDate();
	  await EnterNoteValue("SameBank-SheduledOneTimeTrans");
	  await ConfirmTransfer();
	  await VerifyTransferSuccessMessage();
	  await verifyAccountsLandingScreen();
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	
	//   await kony.automation.playback.wait(10000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	//   //await kony.automation.playback.wait(5000);
	// await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferTo"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],"Dan Markus");
	//   await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]);
	    
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1");
	
	//   kony.automation.calendar.selectDate(["frmFastTransfers","calSendOnNew"], [11,25,2021]);
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"SameBank-SheduledOneTimeTransfer");
	
	//   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
	//   await kony.automation.playback.waitFor(["frmReview","btnConfirm"]);
	//   kony.automation.button.click(["frmReview","btnConfirm"]);
	  
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblTransactionMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully scheduled your transfer");
	
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"]);
	//   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},TimeOuts.Transfers.transfer);
	
	it("OneTimeTransfer", async function() {
	
	  await navigateToMoveMoney();
	  await SelectFromAccount(Transfers.sameBankAccount.fromAccount);
	  await SelectToAccount(Transfers.sameBankAccount.toAccount);
	  await EnterAmount(Transfers.sameBankAccount.amountValue);
	  await EnterNoteValue("SameBank-OneTimeTransfer");
	  await ConfirmTransfer();
	  await VerifyTransferSuccessMessage();
	  await verifyAccountsLandingScreen();
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransferMoney"]);
	
	//   await kony.automation.playback.wait(10000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferFrom"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferFrom[0,0]","flxAccountListItemWrapper"]);
	//   //await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","txtTransferTo"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","txtTransferTo"],"Dan Markus");
	//   await kony.automation.playback.wait(5000);
	//   await kony.automation.playback.waitFor(["frmFastTransfers","segTransferTo"]);
	//   kony.automation.flexcontainer.click(["frmFastTransfers","segTransferTo[0,0]","flxAccountListItemWrapper"]);
	   
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","tbxAmount"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","tbxAmount"],"1");
	
	//   await kony.automation.playback.waitFor(["frmFastTransfers","txtNotes"]);
	//   kony.automation.textbox.enterText(["frmFastTransfers","txtNotes"],"SameBank-OneTimeTransfer");
	
	//   kony.automation.button.click(["frmFastTransfers","btnConfirm"]);
	//   await kony.automation.playback.waitFor(["frmReview","btnConfirm"]);
	//   kony.automation.button.click(["frmReview","btnConfirm"]);
	
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","lblTransactionMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmConfirmTransfer","lblTransactionMessage"],"text")).toContain("We successfully completed the transfer");
	
	//   await kony.automation.playback.waitFor(["frmConfirmTransfer","btnSavePayee"]);
	//   kony.automation.button.click(["frmConfirmTransfer","btnSavePayee"]);
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},TimeOuts.Transfers.transfer);
	
	it("TransferForeignExchangeCalculator", async function() {
	  await NavigateToTransferExchangeCalculator();
	  await CalculateCADtoUSDExchangeRate();
	  
	  //kony.automation.button.click(["frmAccountsLanding","btnFXRate"]);
	  //await kony.automation.playback.waitFor(["frmAccountsLanding","fxWidget","btnTransfer"],15000);
		//kony.automation.button.click(["frmAccountsLanding","fxWidget","btnTransfer"]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDown"]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDown[0]","flxGroupContainer"]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxAmountDropDownBottom"]);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","segAmountCurrDropDownBottom[1]","flxGroupContainer"]);
		//kony.automation.textbox.enterText(["frmAccountsLanding","fxWidget","txtLeftAmount"],"12");
		//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxMiddleContainer"]);
	  //await kony.automation.playback.wait(5000);
		//kony.automation.flexcontainer.click(["frmAccountsLanding","fxWidget","flxBottomContainer"]);
	},450000);
	
	it("AddSameBankRecipitent", async function() {
	
	//    // Add a recipitent and Then delete the same recipitent
	 // var Accno= new Date().getTime();
	  var Accno= Math.floor(new Date().getTime()/1000) + "12";
	  var unique_RecipitentName=ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);
	  
	  await NavigateToManageRecipitents();
	  await clickonAddCWBAccount();
	  await enterSameBankAccountDetails(Accno,unique_RecipitentName);
	  await verifyAddingNewReciptientSuccessMsg();
	  await verifyAccountsLandingScreen(); 
	  
	   //Delete Added Recipitent
	  
	//   await NavigateToManageRecipitents();
	//   await clickOnExternalRecipitentsTab();
	//   await SearchforPayee_External(unique_RecipitentName);
	//   await DeleteReciptent();
	//   await MoveBacktoDashboard_ManageRecipitent();
	  
	//   var unique_RecipitentName="TestSameBankRecipitent_"+new Date().getTime();
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","flxAddBankAccount"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","flxAddBankAccount"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add Infinity Bank Account");
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberKA"],"1234567890");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],"1234567890");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],unique_RecipitentName);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickNameKA"],unique_RecipitentName);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   kony.automation.button.click(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnConfirm"]);
	//   kony.automation.button.click(["frmFastAddDBXAccountConfirm","btnConfirm"]);
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],"text")).toContain("has been added.");
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//   kony.automation.flexcontainer.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","flxAddBankAccount"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","flxAddBankAccount"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add Infinity Bank Account");
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberKA"],"1234567890");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],"1234567890");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],unique_RecipitentName);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickNameKA"],unique_RecipitentName);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   kony.automation.button.click(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnConfirm"]);
	//   kony.automation.button.click(["frmFastAddDBXAccountConfirm","btnConfirm"]);
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],"text")).toContain("has been added.");
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//   kony.automation.flexcontainer.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   //Delete Same Bank Recipitent
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","btnExternalAccounts"]);
	//   kony.automation.button.click(["frmFastManagePayee","btnExternalAccounts"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","Search","txtSearch"]);
	//   kony.automation.textbox.enterText(["frmFastManagePayee","Search","txtSearch"],unique_RecipitentName);
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","Search","btnConfirm"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","Search","btnConfirm"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
	//   kony.automation.button.click(["frmFastManagePayee","segmentTransfers[0]","btnRemoveRecipient"]);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","lblPopupMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","CustomPopup","lblPopupMessage"],"text")).toEqual("Are you sure you want to delete this account?");
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","btnYes"]);
	//   kony.automation.button.click(["frmFastManagePayee","CustomPopup","btnYes"]);
	//   await kony.automation.playback.wait(5000);
	  
	//   var error= await kony.automation.playback.waitFor(["frmFastManagePayee","rtxMakeTransferErro"],5000);
	  
	//   if(error){
	//     fail("There was a technical delay. Please try again.");
	//   }
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","customheadernew","flxAccounts"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","customheadernew","flxAccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},130000);
	
	it("EditSameBankRecipitent", async function() {
	
	  // Add Recipitent and edit it
	  
	  // Add a recipitent and Then delete the same recipitent
	 //var Accno="0"+new Date().getTime();
	 var Accno= Math.floor(new Date().getTime()/1000) + "12";
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
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","flxAddBankAccount"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","flxAddBankAccount"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add Infinity Bank Account");
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberKA"],"1234567890");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],"1234567890");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],"TestSameBankAcc");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickNameKA"],"Auto");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   kony.automation.button.click(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnConfirm"]);
	//   kony.automation.button.click(["frmFastAddDBXAccountConfirm","btnConfirm"]);
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],"text")).toContain("has been added.");
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//   kony.automation.flexcontainer.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   // Edit the added Recipitent
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","btnExternalAccounts"]);
	//   kony.automation.button.click(["frmFastManagePayee","btnExternalAccounts"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","Search","txtSearch"]);
	//   kony.automation.textbox.enterText(["frmFastManagePayee","Search","txtSearch"],"Test");
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","Search","btnConfirm"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","Search","btnConfirm"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
	//   kony.automation.button.click(["frmFastManagePayee","segmentTransfers[0]","btnEdit"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toContain("Edit");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickName"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickName"],"Auto Updated");
	
	//   //Having issue in Save button
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnSave"]);
	//   kony.automation.button.click(["frmFastAddDBXAccount","btnSave"]);
	
	//   var successMsg=await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],10000);
	
	//   if(!successMsg){
	//     // Move back to base state
	//     await kony.automation.playback.waitFor(["frmFastAddDBXAccount","customheadernew","flxAccounts"]);
	//     kony.automation.flexcontainer.click(["frmFastAddDBXAccount","customheadernew","flxAccounts"]);
	//   }else{
	//     await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"]);
	//     expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],"text")).toContain("has been successfully edited");
	//     await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//     kony.automation.flexcontainer.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//     await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//     expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	//   }
	// // Delete the recipitent to clean list
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","btnExternalAccounts"]);
	//   kony.automation.button.click(["frmFastManagePayee","btnExternalAccounts"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","Search","txtSearch"]);
	//   kony.automation.textbox.enterText(["frmFastManagePayee","Search","txtSearch"],unique_RecipitentName);
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","Search","btnConfirm"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","Search","btnConfirm"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
	//   kony.automation.button.click(["frmFastManagePayee","segmentTransfers[0]","btnRemoveRecipient"]);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","lblPopupMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","CustomPopup","lblPopupMessage"],"text")).toEqual("Are you sure you want to delete this account?");
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","btnYes"]);
	//   kony.automation.button.click(["frmFastManagePayee","CustomPopup","btnYes"]);
	//   await kony.automation.playback.wait(5000);
	  
	//   var error= await kony.automation.playback.waitFor(["frmFastManagePayee","rtxMakeTransferErro"],5000);
	  
	//   if(error){
	//     fail("There was a technical delay. Please try again.");
	//   }
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","customheadernew","flxAccounts"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","customheadernew","flxAccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},120000);
	
	it("DeleteSameBankRecipitent", async function() {
	
	  // Add a recipitent and Then delete the same recipitent
	  
	// var Accno="0"+new Date().getTime();
	 var Accno= Math.floor(new Date().getTime()/1000) + "12";
	 var unique_RecipitentName=ManageRecipients.sameBankAccount.unique_RecipitentName+getRandomString(5);
	  
	  await NavigateToManageRecipitents();
	  await clickonAddCWBAccount();
	  await enterSameBankAccountDetails(Accno,unique_RecipitentName);
	  await verifyAddingNewReciptientSuccessMsg();
	  await verifyAccountsLandingScreen(); 
	  
	   //Delete Added Recipitent
	  
	  await NavigateToManageRecipitents();
	  await clickOnManageRecipientsAccountsTab();
	  await SearchforPayee_RecipientList(unique_RecipitentName);
	  await DeleteReciptent();
	   await kony.automation.playback.wait(5000);
	  await MoveBacktoDashboard_ManageRecipitent();
	  
	  
	//   var unique_RecipitentName="TestSameBankRecipitent_"+new Date().getTime();
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","flxAddBankAccount"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","flxAddBankAccount"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add Infinity Bank Account");
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberKA"],"1234567890");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],"1234567890");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],unique_RecipitentName);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickNameKA"],unique_RecipitentName);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   kony.automation.button.click(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnConfirm"]);
	//   kony.automation.button.click(["frmFastAddDBXAccountConfirm","btnConfirm"]);
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],"text")).toContain("has been added.");
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//   kony.automation.flexcontainer.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","flxAddBankAccount"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","flxAddBankAccount"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","lblTransfers"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccount","lblTransfers"],"text")).toEqual("Add Infinity Bank Account");
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberKA"],"1234567890");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNumberAgainKA"],"1234567890");
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxBeneficiaryNameKA"],unique_RecipitentName);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","tbxAccountNickNameKA"]);
	//   kony.automation.textbox.enterText(["frmFastAddDBXAccount","tbxAccountNickNameKA"],unique_RecipitentName);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   kony.automation.button.click(["frmFastAddDBXAccount","btnAddAccountKA"]);
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountConfirm","btnConfirm"]);
	//   kony.automation.button.click(["frmFastAddDBXAccountConfirm","btnConfirm"]);
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastAddDBXAccountAcknowledgement","lblSuccessMessage"],"text")).toContain("has been added.");
	
	//   await kony.automation.playback.waitFor(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//   kony.automation.flexcontainer.click(["frmFastAddDBXAccountAcknowledgement","customheadernew","flxAccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	//   //Delete Same Bank Recipitent
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxTransfersAndPay"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxSendMoney"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","lblManageRecipients"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","lblManageRecipients"],"text")).toEqual("Manage Recipients");
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","btnExternalAccounts"]);
	//   kony.automation.button.click(["frmFastManagePayee","btnExternalAccounts"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","Search","txtSearch"]);
	//   kony.automation.textbox.enterText(["frmFastManagePayee","Search","txtSearch"],unique_RecipitentName);
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","Search","btnConfirm"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","Search","btnConfirm"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","segmentTransfers[0]","flxDropdown"]);
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","segmentTransfers"]);
	//   kony.automation.button.click(["frmFastManagePayee","segmentTransfers[0]","btnRemoveRecipient"]);
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","lblPopupMessage"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmFastManagePayee","CustomPopup","lblPopupMessage"],"text")).toEqual("Are you sure you want to delete this account?");
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","CustomPopup","btnYes"]);
	//   kony.automation.button.click(["frmFastManagePayee","CustomPopup","btnYes"]);
	//   await kony.automation.playback.wait(5000);
	  
	//   var error= await kony.automation.playback.waitFor(["frmFastManagePayee","rtxMakeTransferErro"],5000);
	  
	//   if(error){
	//     fail("There was a technical delay. Please try again.");
	//   }
	
	//   await kony.automation.playback.waitFor(["frmFastManagePayee","customheadernew","flxAccounts"]);
	//   kony.automation.flexcontainer.click(["frmFastManagePayee","customheadernew","flxAccounts"]);
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},120000);
	
	it("ForeginExchangeCash", async function() {
	  
	  await NavigateToTransferExchangeCalculator();
	  await CalculateCADtoUSDCashExchangeRate();
	
	},240000);
	
	it("RemoveCRABusinessNumber", async function() {
	var Template1BusinessNumber = CRATaxes.BusinessNo.Template1;
	   await  NaviagtetoPayBusinessTaxes_CRATab();
	  await SelectTaxandPaymenttype(Template1BusinessNumber);
	  await AddCRATaxesForm(Template1BusinessNumber);
	  await VerifytheAddedCRAform(Template1BusinessNumber);
	  await Naviagatebacktodashboard_PayBusinessTaxes();
	   await  NaviagtetoPayBusinessTaxes_CRATab();
	   await RemoveCRATaxesBusinessNumber();
	  await kony.automation.playback.wait(5000);
	  await Naviagatebacktodashboard_PayBusinessTaxes();
	},350000);
		
		
	
	
	it("RemoveCRAForm", async function() {
	var Template1BusinessNumber = CRATaxes.BusinessNo.Template1;
	   await  NaviagtetoPayBusinessTaxes_CRATab();
	  await SelectTaxandPaymenttype(Template1BusinessNumber);
	  await AddCRATaxesForm(Template1BusinessNumber);
	  await VerifytheAddedCRAform(Template1BusinessNumber);
	  await Naviagatebacktodashboard_PayBusinessTaxes();
	   await  NaviagtetoPayBusinessTaxes_CRATab();
	  await RemoveCRATaxesForm();
	  await Naviagatebacktodashboard_PayBusinessTaxes();
	 
	},350000);
	
	it("CRATemplate1", async function() {
	   var Template1BusinessNumber = CRATaxes.BusinessNo.Template1;
	   await  NaviagtetoPayBusinessTaxes_CRATab();
	  await SelectTaxandPaymenttype(Template1BusinessNumber);
	  await AddCRATaxesForm(Template1BusinessNumber);
	  await VerifytheAddedCRAform(Template1BusinessNumber);
	  await Naviagatebacktodashboard_PayBusinessTaxes();
		
		/*kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxAddCraForms"]);
		kony.automation.widget.touch(["frmAddCRAForm"], null,null,[364,296]);
		kony.automation.listbox.selectItem(["frmAddCRAForm","lbxTaxType"], "Excise Duty");
		kony.automation.widget.touch(["frmAddCRAForm"], null,null,[0,0]);
		kony.automation.widget.touch(["frmAddCRAForm"], null,null,[302,381]);
		kony.automation.listbox.selectItem(["frmAddCRAForm","lbxPaymentType"], "Amount Owing");
		kony.automation.widget.touch(["frmAddCRAForm"], null,null,[0,0]);
		kony.automation.widget.touch(["frmAddCRAForm","txtBusinessName"], null,null,[146,13]);
		kony.automation.widget.touch(["frmAddCRAForm"], null,null,[246,449]);
		kony.automation.textbox.enterText(["frmAddCRAForm","txtBusinessName"],"123456782RD0016");
		kony.automation.button.click(["frmAddCRAForm","btnConfirm"]);
		kony.automation.widget.touch(["frmSelectCRAForms","segTaxFormsList[0]","flxCheckBox"], null,null,[16,3]);
		kony.automation.widget.touch(["frmSelectCRAForms"], null,null,[116,363]);
		kony.automation.button.click(["frmSelectCRAForms","btnContinue"]);
		kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[788,215]);
		kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[114,195]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
		kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[192,208]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxBusniessNumber0"]);*/
	},350000);
	
	it("CRATemplate2", async function() {
	   var Template2BusinessNumber = CRATaxes.BusinessNo.Template2;
	   await  NaviagtetoPayBusinessTaxes_CRATab();
	  await SelectTaxandPaymenttype(Template2BusinessNumber);
	  await AddCRATaxesForm(Template2BusinessNumber);
	  await VerifytheAddedCRAform(Template2BusinessNumber);
	  await Naviagatebacktodashboard_PayBusinessTaxes();
		
		/*kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxAddCraForms"]);
		kony.automation.widget.touch(["frmAddCRAForm"], null,null,[364,296]);
		kony.automation.listbox.selectItem(["frmAddCRAForm","lbxTaxType"], "Excise Duty");
		kony.automation.widget.touch(["frmAddCRAForm"], null,null,[0,0]);
		kony.automation.widget.touch(["frmAddCRAForm"], null,null,[302,381]);
		kony.automation.listbox.selectItem(["frmAddCRAForm","lbxPaymentType"], "Amount Owing");
		kony.automation.widget.touch(["frmAddCRAForm"], null,null,[0,0]);
		kony.automation.widget.touch(["frmAddCRAForm","txtBusinessName"], null,null,[146,13]);
		kony.automation.widget.touch(["frmAddCRAForm"], null,null,[246,449]);
		kony.automation.textbox.enterText(["frmAddCRAForm","txtBusinessName"],"123456782RD0016");
		kony.automation.button.click(["frmAddCRAForm","btnConfirm"]);
		kony.automation.widget.touch(["frmSelectCRAForms","segTaxFormsList[0]","flxCheckBox"], null,null,[16,3]);
		kony.automation.widget.touch(["frmSelectCRAForms"], null,null,[116,363]);
		kony.automation.button.click(["frmSelectCRAForms","btnContinue"]);
		kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[788,215]);
		kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[114,195]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxDropdown0"]);
		kony.automation.widget.touch(["frmPayBusinessTaxes"], null,null,[192,208]);
		kony.automation.flexcontainer.click(["frmPayBusinessTaxes","flxBusniessNumber0"]);*/
	},350000);
	
	it("AddCRATemplate3", async function() {
	
	   var Template3BusinessNumber = CRATaxes.BusinessNo.Template3;
	   await  NaviagtetoPayBusinessTaxes_CRATab();
	  await SelectTaxandPaymenttype(Template3BusinessNumber);
	  await AddCRATaxesForm(Template3BusinessNumber);
	  await VerifytheAddedCRAform(Template3BusinessNumber);
	  await Naviagatebacktodashboard_PayBusinessTaxes();
	},350000);
	
	it("AddCRATemplate4", async function() {
	 
	   var Template4BusinessNumber = CRATaxes.BusinessNo.Template4;
	   await  NaviagtetoPayBusinessTaxes_CRATab();
	  await SelectTaxandPaymenttype(Template4BusinessNumber);
	  await AddCRATaxesForm(Template4BusinessNumber);
	  await VerifytheAddedCRAform(Template4BusinessNumber);
	  await Naviagatebacktodashboard_PayBusinessTaxes();
	},350000);
	
	
	it("VerifyEditAddress", async function() {
	  
	  await NavigateToProfileSettings();
	 await ProfileSettings_Updateaddress();
	 await MoveBackToDashBoard_ProfileManagement();
		//kony.automation.flexcontainer.click(["frmProfileManagement","settings","segAddresses[0]","flxAddress"]);
	},75000);
	
	it("ValidateEditAccountPreference", async function() {
	  
	  await NavigateToAccountSettings();
	  await EditFavAccountPreferences();
	  await MoveBackToDashBoard_ProfileManagement();
	  await verifyAccountsLandingScreen();
	  
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxMenu"]);
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","Settings2flxMyAccounts"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","Settings2flxMyAccounts"]);
	//   await kony.automation.playback.wait(5000);
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblAccountsHeader"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblAccountsHeader"], "text")).toEqual("Accounts");
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","segAccounts"]);
	//   kony.automation.button.click(["frmProfileManagement","settings","segAccounts[0,0]","btnEdit"]);
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEditAccountsHeader"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblEditAccountsHeader"], "text")).toEqual("Edit Account");
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","tbxAccountNickNameValue"]);
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblFavoriteEmailCheckBox"]);
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblEnableEStatementsCheckBox"]);
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnEditAccountsSave"]);
	  
	//   kony.automation.textbox.enterText(["frmProfileManagement","settings","tbxAccountNickNameValue"],'My Checking');
	//   kony.automation.button.click(["frmProfileManagement","settings","btnEditAccountsSave"]);
	
	//   //Move back to base state
	//   await kony.automation.playback.waitFor(["frmProfileManagement","customheader","topmenu","flxaccounts"]);
	//   kony.automation.flexcontainer.click(["frmProfileManagement","customheader","topmenu","flxaccounts"]);
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	},120000);
	
	it("ValidateEditDefaultAccount", async function() {
	  
	  await NavigateToAccountSettings();
	  await clickonDefaultAccountstab();
	  await SetDefaultAccountPreferences();
	  await MoveBackToDashBoard_ProfileManagement();
	  await verifyAccountsLandingScreen();
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxMenu"]);
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","SettingsflxAccountsMenu"]);
	
	//   await kony.automation.playback.waitFor(["frmDashboard","customheader","customhamburger","Settings2flxMyAccounts"]);
	//   kony.automation.flexcontainer.click(["frmDashboard","customheader","customhamburger","Settings2flxMyAccounts"]);
	//   await kony.automation.playback.wait(5000);
	
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","flxSetDefaultAccount"]);
	//   kony.automation.flexcontainer.click(["frmProfileManagement","settings","flxSetDefaultAccount"]);
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblDefaultTransactionAccounttHeading"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblDefaultTransactionAccounttHeading"], "text")).toEqual("Default Transaction Accounts");
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	//   kony.automation.button.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblSelectedDefaultAccounts"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblSelectedDefaultAccounts"], "text")).toEqual("You have set the following accounts as your default transaction accounts");
	
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblBillPayKey"]);
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxBillPay"]);
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblCheckDeposit"]);
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxCheckDeposit"]);
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxBillPay"]);
	//   kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxBillPay"], "190128223241502");
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lbxCheckDeposit"]);
	//   kony.automation.listbox.selectItem(["frmProfileManagement","settings","lbxCheckDeposit"], "190128223242830");
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	//   kony.automation.flexcontainer.click(["frmProfileManagement","settings","btnDefaultTransactionAccountEdit"]);
	
	//   await kony.automation.playback.waitFor(["frmProfileManagement","settings","lblSelectedDefaultAccounts"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmProfileManagement","settings","lblSelectedDefaultAccounts"], "text")).toEqual("You have set the following accounts as your default transaction accounts");
	
	//   //Move back to base state
	//   await kony.automation.playback.waitFor(["frmProfileManagement","customheader","topmenu","flxaccounts"]);
	//   kony.automation.flexcontainer.click(["frmProfileManagement","customheader","topmenu","flxaccounts"]);
	
	//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
	
	
	},120000);
	
	it("VerifyTranstionandPaymentAlert", async function() {
	  await Naviagteto_TransactionandAlerts();
	  await EditTransactionandAlerts();
	  await MoveBackToDashBoard_ProfileManagement();
	  await verifyAccountsLandingScreen();
	},90000);
});