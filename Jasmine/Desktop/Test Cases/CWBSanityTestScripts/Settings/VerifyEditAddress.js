it("VerifyEditAddress", async function() {
  
  await NavigateToProfileSettings();
 await ProfileSettings_Updateaddress();
 await MoveBackToDashBoard_ProfileManagement();
	//kony.automation.flexcontainer.click(["frmProfileManagement","settings","segAddresses[0]","flxAddress"]);
},75000);