it("Signout", async function() {

  await kony.automation.playback.waitFor(["frmAccountsLanding","customheader","headermenu","btnLogout"]);
  kony.automation.button.click(["frmAccountsLanding","customheader","headermenu","btnLogout"]);
  await kony.automation.playback.waitFor(["frmAccountsLanding","CustomPopup","btnYes"]);
  kony.automation.button.click(["frmAccountsLanding","CustomPopup","btnYes"]);
  await kony.automation.playback.wait(10000);

},20000);