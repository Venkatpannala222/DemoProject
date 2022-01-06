it("CheckingAcc_ContextMenuOptions", async function() {
  
  //var myList_Expected = new Array();
  //myList_Expected.push(Accounts.checkingAcc.ContextMenuOptions[0].type,Accounts.checkingAcc.ContextMenuOptions[1].type,Accounts.checkingAcc.ContextMenuOptions[2].type,Accounts.checkingAcc.ContextMenuOptions[3].type);
    await kony.automation.playback.wait(20000);
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

  await kony.automation.playback.wait(15000);
  await clickOnCheckingAccountContextMenu();
  await verifyContextMenuOptions();
  await MoveBackToLandingScreen_Accounts();

//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[0,0]","flxMenu"]);

//   await kony.automation.playback.waitFor(["frmDashboard","accountListMenu","segAccountListActions"]);
//   var accounts_Size=kony.automation.widget.getWidgetProperty(["frmDashboard","accountListMenu","segAccountListActions"],"data");
  
//   var segLength=accounts_Size.length;
//   kony.print("Length is :: "+segLength);
//   var myList = new Array();
//   var myList_Expected = new Array();
//   myList_Expected.push("Transfer","Pay Bill","Stop Check Payment","Manage Cards","View Statements","Account Alerts");
//   for(var x = 0; x <segLength-1; x++) {

//     var seg="segAccountListActions["+x+"]";
//     kony.print("Segment is :: "+seg);
//     await kony.automation.playback.waitFor(["frmDashboard","accountListMenu",seg,"lblUsers"]);
//     var options=kony.automation.widget.getWidgetProperty(["frmDashboard","accountListMenu",seg,"lblUsers"], "text");
//     kony.print("Text is :: "+options);
//     myList.push(options);
//   }
  
//   kony.print("My Actual List is :: "+myList);
//   kony.print("My Expected List is:: "+myList_Expected);

//   let isFounded = myList.some( ai => myList_Expected.includes(ai) );
//   kony.print("isFounded"+isFounded);
//   expect(isFounded).toBe(true);
  
//   await kony.automation.playback.waitFor(["frmDashboard","customheader","topmenu","flxaccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","customheader","topmenu","flxaccounts"]);
//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");

},150000);