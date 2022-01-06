it("BB", async function() {
	await kony.automation.playback.waitFor(["frmRecievableUpcoming"]);
	kony.automation.widget.touch(["frmRecievableUpcoming"], null,null,[184,102]);
	kony.automation.flexcontainer.click(["frmRecievableUpcoming","customheadernew","flxAccounts"]);
});