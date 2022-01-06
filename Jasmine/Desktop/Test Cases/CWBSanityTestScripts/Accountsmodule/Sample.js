it("Sample", async function() {
  appLog("Hello");
  await kony.automation.playback.wait(95000);
  appLog("Test");
},120000);