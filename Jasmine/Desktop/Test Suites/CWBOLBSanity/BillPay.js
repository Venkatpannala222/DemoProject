describe("BillPay", function() {
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
	
	it("Sample", async function() {
	  appLog("Hello");
	  await kony.automation.playback.wait(95000);
	  appLog("Test");
	},120000);
	
	it("PayBills_MakeOneTimePayment", async function() {
	
	  await NavigateToBillPay();
	  // await enterOneTimePayeeInformation(BillPay.oneTimePay.payeeName,BillPay.oneTimePay.zipcode,BillPay.oneTimePay.accno,BillPay.oneTimePay.accnoAgain,BillPay.oneTimePay.mobileno);
	  await enterOneTimePaymentdetails(BillPay.schedulePay.amountValue6,BillPay.schedulePay.amountValue7);
	  await confirmOneTimePaymnet();
	  await verifyOneTimePaymentSuccessMsg();
	  await verifyAccountsLandingScreen();
	},300000);
	
	it("SheduledPayment_Daily", async function() {
	
	  //var PayeeName="0-000011128-123456";
	  //var amount="1.45";
	  await NavigateToBillPay();
	  await SelectRecurringPaymentsTab();
	  await RecurringPaymentsTabValidation();
	  await EnterAmount_ScheduleBillPay(BillPay.schedulePay.amountValue1);
	  // await SelectPayFromAcc(Pay);
	  await SelectFrequency_ScheduleBillPay("Daily");
	  await SelectDateRange_ScheduleBillPay();
	  await SelectPayee_ManagePayeeList(BillPay.schedulePay.PayeeName1);
	  await ConfirmScheduleBillPay();
	  await ClickOnConfirm();
	  await VerifyScheduleBillPaySuccessMsg();
	  await verifyAccountsLandingScreen();
	  
	  
	  //   var PayeeName="0-000006090-520";
	  //   //var Pay="102368-00005";
	  //   await NavigateToBillPay();
	  //   await SelectRecurringPaymentsTab();
	  //    await EnterAmount_ScheduleBillPay(BillPay.schedulePay.amountValue);
	  //  // await SelectPayFromAcc(Pay);
	  //   await SelectFrequency_ScheduleBillPay("Daily");
	  //   await SelectDateRange_ScheduleBillPay();
	  //    await SelectPayee_ManagePayeeList(PayeeName);
	  //   await ConfirmScheduleBillPay();
	  //   await ClickOnConfirm();
	  //   await VerifyScheduleBillpaySuccessMsg();
	  //   await verifyAccountsLandingScreen();
	
	},300000);
	
	it("VerifyManagePayeeList", async function() {
	  
	  await navigateToManagePayees();
	  //await clickOnAllpayeesTab();
	  await verifyManagePayeeList();
	  await MoveBackToDashBoard_ManagePayees();
	  await verifyAccountsLandingScreen();
	},300000);
	
	it("Cancel_BillPay", async function() {
	
	  //var PayeeName="0-000011128-123456";
	  await NavigateToBillPay();
	  await SelectRecurringPaymentsTab();
	  await EnterAmount_ScheduleBillPay(BillPay.schedulePay.amountValue);
	  await SelectFrequency_ScheduleBillPay("Monthly");
	  await SelectDateRange_ScheduleBillPay();
	  await SelectPayee_ManagePayeeList(BillPay.oneTimePay.PayeeName);
	  await ConfirmScheduleBillPay();
	  await CancelSheduledBillPay();
	  await verifyAccountsLandingScreen();
	
	},300000);
});