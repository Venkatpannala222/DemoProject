it("DepositAcc_ContextMenuOptions", async function() {
 
  await clickOnDepositAccountContextMenu();
  await verifyContextMenuOpts();
  await MoveBackToLandingScreen_Accounts();

//   await kony.automation.playback.waitFor(["frmDashboard","lblShowing"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmDashboard","lblShowing"], "text")).toContain("Show");
//   await kony.automation.playback.waitFor(["frmDashboard","accountList","segAccounts"]);
//   kony.automation.flexcontainer.click(["frmDashboard","accountList","segAccounts[3,0]","flxMenu"]);

//   await kony.automation.playback.waitFor(["frmDashboard","accountListMenu","segAccountListActions"]);
//   var accounts_Size=kony.automation.widget.getWidgetProperty(["frmDashboard","accountListMenu","segAccountListActions"],"data");

//   var segLength=accounts_Size.length;
//   kony.print("Length is :: "+segLength);
//   var myList = new Array();
//   var myList_Expected = new Array();
//   myList_Expected.push("View Statements","Update Account Settings","Account Alerts");
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

},90000);