var LoginDetails={
  username:'dbxJasmine',
  password:'Kony@1234'
};
var TimeOuts={

  Accounts : {
    Timeout : "180000",
  },
  ManageBenefeciary : {

    AddBenefeciary : "180000",
    EditBenefeciary : "180000",
    DeleteBenefeciary: "120000",
    PaymentBenefeciary: "180000",
    SeachBenefeciary: "120000"
  },
  Transfers : {
    transfer : "200000"
  },
  TrasferActivities : {
    PaymentActivity : "180000",
    ActivitiesList : "180000",
    SearchActivities : "180000"
  },
  BillPay : {
    Payment : "180000" 

  },  
  WireTransfers : {
    Payment : "180000"
  }
};


var Accounts={

  checkingAcc : {

    toAccount : "Saving",
    amountValue : "1",

    "ContextMenuOptions":
    [
      { "type": "Transfer" },
      { "type": "Pay Bill" },
      { "type": "Stop Check Payment" },
      { "type": "Manage Cards" },
      { "type": "View Statements" },
      { "type": "Account Alerts" }
    ]
  },
  savingAcc : {

    toAccount : "Checking",
    amountValue : "1",

    "ContextMenuOptions":
    [
      { "type": "Transfer" },
      { "type": "Stop Check Payment" },
      { "type": "Manage Cards" },
      { "type": "View Statements" },
      { "type": "Account Alerts" }
    ]
  },
  creditcardAcc : {

    amountValue : "1",

    "ContextMenuOptions":
    [

      { "type": "Pay Bill" },
      { "type": "View Statements" },
      { "type": "Account Alerts" }
    ]
  },
  depositAcc : {
    "ContextMenuOptions":
    [

      { "type": "View Statements" },
      { "type": "Update Account Settings" },
      { "type": "Account Alerts" }
    ]
  },
  loanAcc : {
    "ContextMenuOptions":
    [
      { "type": "Pay Due Amount" },
      { "type": "View Statements" },
      { "type": "Update Account Settings" },
      { "type": "Account Alerts" },
      { "type": "Pay Off Loan" }
    ]
  },
};


var Transfers={


  p2pAccount : {
    frequencylist: ["Once","Daily","Weekly","Every 2 Weeks","Monthly","Every 3 Months","Every 6 Months","Annually"],
    fromAccount : "Check",
    toAccount : "PToPAccJasmine",
    amountValue : "1"
  },
  externalAccount : {
    frequencylist: ["Once","Daily","Weekly","Every 2 Weeks","Monthly","Every 3 Months","Every 6 Months","Annually"],
    fromAccount : "Check",
    toAccount : "ExtAccJasmine",
    amountValue : "1"
  },
  internationalAccount : {
    fromAccount : "Check",
    toAccount : "InterAccJasmine",
    amountValue : "1"
  },
  ownAccount : {
    fromAccount : "Check",
    toAccount : "Saving",
    amountValue : "1"
  },
  sameBankAccount : {
    fromAccount : "Check",
    toAccount : "Nrt",
    amountValue : "1"
  }
};

var ManageRecipients={

  p2pAccount : {
    unique_RecipitentName : "PToPAccJasmine",
    email : "PTOPAccJasmine@gmail.com",
    phno : "1234567890",
    unique_EditRecipitentName : "PToPAccJasmineEdit",
    unique_EditNickName : "PToPAccJasmineEditNick"
  },
  externalAccount : {
    Routingno : "1234567890",
    unique_RecipitentName : "ExtAccJasmine",
    unique_EditRecipitentName : "ExtAccJasmineEdit",
    unique_EditNickName : "ExtAccJasmineEditNick"
  },
  internationalAccount : {
    swiftCode : "BOFAUS3N",
    unique_RecipitentName : "InterAccJasmine",
    unique_EditRecipitentName : "InterAccJasmineEdit",
    unique_EditNickName : "InterAccJasmineEditNick"
  },
  sameBankAccount : {
    unique_RecipitentName : "SameBankAccJasmine",
    unique_EditRecipitentName : "PToPAccJasmineEdit",
    unique_EditNickName : "PToPAccJasmineEditNick"
  }
};

var BillPay={

  oneTimePay : {
    payeeName : "A",
    zipcode : "500055",
    accno : "1234567890",
    accnoAgain : "1234567890",
    mobileno : "1234567890",
    amountValue : "1.50",
    PayeeName : "0-000011128-123456",
    Payee : "102977-00002",
    amountValue1 : "1.40",  
    amountValue2 : "1.41",  
    amountValue3 : "1.42",
    amountValue4 : "1.43",
    amountValue5 : "1.44",
    amountValue6 : "1.45",
    amountValue7 : "1.46",
    amountValue8 : "1.47",
    amountValue9 : "1.48"

  },
  addPayee : {
    RecipitentName : "TERRY'S TEST AND TUNE",
    address1 : "LR PALLI",
    address2 : "ATMAKUR",
    city : "NELLORE"
  },
  deletePayee : {
    delete_RecipitentName : "Test Automation",
    address1 : "LR PALLI",
    address2 : "ATMAKUR",
    city : "NELLORE"
  },
  schedulePay : {
    amountValue : "1.30",
    amountValue1 : "2.31",
    amountValue2 : "2.32",
    amountValue3 : "2.33",
    amountValue4 : "2.34",
    amountValue5 : "2.35",
    amountValue6 : "1.36",
    amountValue7 : "1.37",
    amountValue8 : "2.38",
    amountValue9 : "2.39",
    PayeeName1 :"0-000001564-098765",
    PayeeName2 :"0-000008920-12345678",
    PayeeName3 :"0-000011128-051278116578",
    PayeeName4 :"0-000011128-058223364360"
  }
};

var Settings={

  address : {
    addressLine1 : "Miyapur",
    addressLine2 : "alwyn",
    zipcode : "500055",
    primaryAddressLine1 : "MiyapurPrimary",
    primaryAddressLine2 : "alwynPrimary",
    primaryZipcode : "500049",
    updatedZip : "500011"
  },
  phone : {
    phoneNumber : "888456789",
    primaryPhoneNumber : "888456700",
    updatedPhonenum : "1234567130"

  },
  email : {
    emailAddress : "dbxjasmine@infinity.com",
    primaryEmailAddress : "dbxjasminePrimary@infinity.com",
    updatedemailid :"dbxjasmineUpdate@infinity.com"

  },
};
var CRATaxes={

  BusinessNo : {
    Template1 : "123456782RD0016",
    Template2 : "123456782RD0046",
    Template3 : "123456782RT0057",
    Template4 : "123456782NW0068",
  }
};

var File_RemitFormNames={
  FormName : {
    Template1 : "frmTemplate1",
    Template2 : "frmTemplate2",
    Template3 : "frmTemplate3",
    Template4 : "frmTemplate4",
  }

};