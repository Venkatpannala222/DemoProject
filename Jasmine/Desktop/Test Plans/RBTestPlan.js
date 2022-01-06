require(["Test Suites/CWBAutomation/AccountsRB"], function() {
	require(["Test Suites/CWBAutomation/FeedBack"], function() {
		require(["Test Suites/CWBAutomation/FXCalculator"], function() {
			require(["Test Suites/CWBAutomation/Messages"], function() {
				require(["Test Suites/CWBAutomation/ManageRecipientsRetail"], function() {
					require(["Test Suites/CWBAutomation/SettingsSuite"], function() {
						require(["Test Suites/CWBAutomation/TransactionsRetail"], function() {
							require(["Test Suites/CWBAutomation/StopChequeRequestSuite"], function() {
								require(["Test Suites/CWBAutomation/StopPAP"], function() {
									require(["Test Suites/CWBAutomation/TransferToOwnAcc"], function() {
										require(["Test Suites/CWBAutomation/TransferToSameBank"], function() {
											require(["Test Suites/CWBAutomation/BillPayRetail"], function() {
												require(["Test Suites/CWBAutomation/CRATaxes"], function() {
																										jasmine.getEnv().execute();
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});