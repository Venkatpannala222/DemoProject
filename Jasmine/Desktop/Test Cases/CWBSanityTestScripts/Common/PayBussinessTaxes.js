
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