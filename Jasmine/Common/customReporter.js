var baseTemplate = "<html lang='en'>        <head>           <meta charset='utf-8'>           <meta name='viewport' content='user-scalable = no'>           <meta name='description' content=''>           <meta name='author' content=''>           <title>              Visualizer           </title>           <meta name='viewport' content='width=device-width, initial-scale=1'>           <!--Inline Style Starts-->           <style>              body, html { height:100%;}              body { font-family: 'Helvetica';  margin: 0; padding: 0; height: 100%;  position: relative; letter-spacing: 0.5px;min-width: 1024px; }              body, div, p, span, a, input, head, table, tr, tbody, thead, td, ul, li, ol, i, h1, h2, h3, h4, h5, h6, dl, dt, dd, select, input { margin:0; padding:0;  }              p {              font-family: 'Helvetica';              }              h4{              font-family:  'Helvetica';              font-weight: 400;              }              a {                  text-decoration: none !important;              }              .parent-heading{              /* background: #F2F4F7; */              padding: 10px 15px;              }              .label-heading{              font-size: 18px;              color: #333333;              font-weight: bold              }              .date{              font-size: 12px;              color: #333333;              opacity: 0.7;              font-weight: 100;              margin-left: 8px;              position: absolute;              top: 14px;              }              .info-sections .passed{              border: 1px solid #34C84A;              border-radius: 4px;              padding: 5px 10px;              width: fit-content;              }              .info-sections  .passed-text{              font-size: 10px;              color: #34C84A;              /* font-weight: 600; */              }              .info-sections .failed{              border: 1px solid #FF4743;              border-radius: 4px;              padding: 5px 10px;              width: fit-content              }              .info-sections .failed-text{              font-size: 10px;              color: #FF4743;              /* font-weight: 600; */              }              .info-sections .pending{              border: 1px solid #FF8B00;              border-radius: 4px;              padding: 5px 10px;              width: fit-content              }              .info-sections .pending-text{              font-size: 10px;              color: #FF8B00;              /* font-weight: 600; */              }              .ml-10{              margin-left: 10px;              }              .mr-20{              margin-right: 20px;              }              .info-sections{              display: inline-block;              margin-top: 12px;              }              .accordion {              background-color: #f7f7f7;              border: 1px solid #E6E6E6 !important;              color: #444;              cursor: pointer;              padding: 10px 15px;              width: 100%;              border: none;              text-align: left;              outline: none;              transition: 0.4s;              }              .active, .accordion:hover {              background-color: #F7F7F7              }              .panel {              /* padding: 0 18px; */              display: none;              background-color: white;              overflow: hidden;              border: 1px solid #E6E6E6;              border-radius: 0px;              box-shadow: none;              margin-bottom: 5px;              border-top: 0px;              }              .content-accordian{              padding: 15px 0px;              padding-left: 18px;              padding-right: 70px;              border-bottom: 1px solid #E6E6E6;              width:100%;              display: table              }              .container-data{              width: 100%;              }              .col-sm-3,.col-sm-1{              float: left;              }              .fa{              font-size: 12px;              color: #333333              }              .accordian-title{              font-size: 12px;              color: #333333;              font-weight: 300              }              .passed-circle{              background-color: #34C84A;              font-size: 10px;              color: #fff;              padding: 4px 8px;              border-radius: 20px;              }              .failed-circle{              background-color: #FF4743;              font-size: 10px;              color: #fff;              padding: 4px 8px;              border-radius: 20px;              margin-left: 6px;              }              .disabled{              opacity: 0.6;              }              .pending-circle{              background-color: #FF8B00;              font-size: 10px;              color: #fff;              padding: 4px 8px;              border-radius: 20px;              margin-left: 6px;              }              .info-area{              margin-top: -1px;              position: absolute;              float: right;              right: 26px;              }              .accordion.active > .fa-chevron-right {              transform: rotate(90deg)              }              .accordian-section{              padding: 0px 15px;              }              .p-0{              padding: 0px;              }              .accordian-heading{              color: #333333;              font-size: 12px;              opacity: 0.5;              }              .accordian-value{              color: #333333;              font-size: 12px;              opacity: 1;              margin-top: 2px;              float: left;              right: 26px;              }              .success{              color: #34C84A              }              .last-section .passed{              background-color: #34C84A;              color: #fff;              font-size: 10px;              font-weight: 300;              display: inline-block;              /* padding: 4px 18px; */              width: 70px;              /* height: 20px; */              line-height: 23px;              border-radius: 4px              }              .last-section .failed{              background-color: #FF4743;              color: #fff;              font-size: 10px;              font-weight: 300;              display: inline-block;              /* padding: 4px 18px; */              width: 70px;              /* height: 20px; */              line-height: 23px;              border-radius: 4px              }              .last-section .pending{              background-color: #FF8B00;              color: #fff;              font-size: 10px;              font-weight: 300;              display: inline-block;              /* padding: 4px 18px; */              width: 70px;              /* height: 20px; */              line-height: 23px !important;              border-radius: 4px              }              .last-section{              padding-top: 7px;              padding-right: 0px;              text-align: center;              }              .w-30{              width: 20%              }              .w-10{              width: 28%;              }              .mb-5{              margin-bottom: 5px;              }              div.content-accordian:hover {              background-color:rgb(230,230,230,0.2)              /* opacity: 0.4; */              }              .failed-info-section{              height: 163px;              overflow: auto;              display: list-item;              }              .failed-info-section:hover{              background-color:#fff !important              }              .active-color{              background-color:rgb(230,230,230,0.2)              }              .view span{              color: #2F90FF;              border-bottom: 1px solid #2F90FF;              }              .view:hover,.view:visited,.view:active,.view:focus{              text-decoration:none !important;              color: #2F90FF !important;              }              .linkicon{              color: #2F90FF;              transform: rotate(270deg);              }              .ml-5{              margin-left: 5px;              }              .failed-content{              font-size: 12px;              color: #333333;              line-height: 22px;              padding-left: 16px;              width: 95%;              }              .error-text{              color: #FF4743              }              .d-none{              display: none;              }              .last-row{              border-bottom: none              }              /*invisible scrollbar*/              .failed-info-section::-webkit-scrollbar { width: 0 !important }              .failed-info-section { overflow: -moz-scrollbars-none; }              .failed-info-section { -ms-overflow-style: none; }              .pull-left {              float: left!important;              }              .arrow-arrow {             border-bottom: 1.7px solid #2F90FF;             border-right: 1.7px solid #2F90FF;             width: 6px;             height: 6px;             transform: rotate(-45deg);             display: inline-block;             }           </style>           <!--Inline Style Ends-->        </head>        <body>           <div class='parentContainer'>              <div class='parentContainer1'>                 <div class='parent-heading'>                    <div class='heading'>                       <h4 class='label-heading'>Visualizer Testing Result  <span class='date'>{{date}}</span></h4>                    </div>                    <div class='info-sections'>                       <div class='passed pull-left'>                          <p class='passed-text'>Passed : {{passedCount}}</p>                       </div>                       <div class='failed pull-left ml-10'>                          <p class='failed-text'>Failed : {{failedCount}}</p>                       </div>                       <div class='pending pull-left ml-10'>                          <p class='pending-text'>Pending : {{pendingCount}}</p>                       </div>                    </div>                 </div>                 <div class='accordian-section'>                     {%{suites}%}                 </div>              </div>           </div>        </body>        <script type='text/javascript'>           var acc = document.getElementsByClassName('accordion');           var i;           for (i = 0; i < acc.length; i++) {                 acc[i].addEventListener('click', function() {                    this.classList.toggle('active');                    var panel = this.nextElementSibling;                    if(panel.style.display === 'block') {                       panel.style.display = 'none';                    } else {                       panel.style.display = 'block';                    }                 });           }            var getClosest = function(element, className){              for( ;element && element !== document; element = element.parentNode ) {                 if(element.classList.contains(className)) {                    return element;                 }              }           };            var views = document.getElementsByClassName('view');           for(i = 0; i < views.length; i++) {              views[i].addEventListener('click', function() {                 var view = getClosest(this, 'col-sm-12');                 if(view) {                    var log = view.nextElementSibling;                    if(log.style.display === 'block') {                       log.style.display = 'none';                    } else {                       log.style.display = 'block';                    }                 }              });           }        </script>     </html>";
var suiteHTML = "<div class='mb-5'>                       <button class='accordion'>                       <i class='fa fa-chevron-right '></i>                       <span class='accordian-title  ml-10 mr-20'>Suite description : {{description}}</span>                       <span class='info-area '>                       <span class='passed-circle'>{{passedCount}}</span>                       <span class='failed-circle'>{{failedCount}}</span>                       <span class='pending-circle'>{{pendingCount}}</span>                       </span>                       </button>                       <div class='panel' style='display: none'>                          {%{specs}%}                       </div>                    </div>";
var failedExpectationContent = "<div class='col-sm-12 content-accordian failed-info-section' style='display:none;'>                                <p class='failed-content'>{{message}}</p>                                <p class='failed-content'>{{stack}}</p>                          </div>";
var passedExpectationContent = "<div class='col-sm-3 w-30'>                                <!-- <p>Second section</p> -->                                <p class='accordian-heading'>Failed Expectations : </p>                                <p class='accordian-value success'>None</p>                             </div>";
var failedExpectationView = "<div class='col-sm-3 w-30'>                                      <!-- <p>Second section</p> -->                                      <p class='accordian-heading'>Failed Expectations : </p>                                      <p class='accordian-value'><a href='javascript:void(0)' class='view'><span>View</span>                                      <i class='arrow-arrow '></i></a></p>                                   </div>";
//var specHTML = "<div class='col-sm-12 content-accordian'>                                <div class='container-data'>                                   <div class='col-sm-3 w-30'>                                      <!-- <p>first section</p> -->                                      <p class='accordian-heading'>Spec Description : </p>                                      <p class='accordian-value'>{{description}}</p>                                   </div>                                   {%{failedView}%}                                   <div class='col-sm-3 w-30'>                                      <!-- <p>third section</p> -->                                      <p class='accordian-heading'>Execution Time : </p>                                      <p class='accordian-value'>{{duration}}</p>                                   </div>                                   <div class='col-sm-1 last-section p-0 w-10'>                                      <label class='{{status}}'>{{status}}</label>                                   </div>                                </div>                             </div>                             {%{failedContent}%}";
var specHTML = "<div class='col-sm-12 content-accordian'>                                <div class='container-data'>                                   <div class='col-sm-3 w-30'>                                      <!-- <p>first section</p> -->                                      <p class='accordian-heading'>Spec Description : </p>                                      <p class='accordian-value'>{{description}}</p>                                   </div>                                   {%{failedView}%}                                   <div class='col-sm-3 w-30'>                                      <!-- <p>third section</p> -->                                      <p class='accordian-heading'>Execution Time : </p>                                       <p class='accordian-value'>{{duration}}</p>                                   </div>                                   <div class='col-sm-3 w-30'>                                      <!-- <p>fourth section</p> -->                                      <p class='accordian-heading'>{{appID}}</p>                                       <p class='accordian-value'>{{applicationRef}}</p>                                   </div>                                   <div class='col-sm-1 last-section p-0 w-10'>                                      <label class='{{status}}'>{{status}}</label>                                   </div>                                </div>                             </div>                             {%{failedContent}%}";

var templatingEngine = {
  suites: function(suites) {
    var suitesTemplate = "", suitesCount = suites.length,
    index;
    
    for(index = 0; index < suitesCount; index++) {
      suitesTemplate += templatingEngine.parseHTML(suites[index], suiteHTML);
    }
    return suitesTemplate;
  },
  specs: function(specs) {
    var specsTemplate = "", specsCount = specs.length,
    index;
    
    for(index = 0; index < specsCount; index++) {
      specsTemplate += templatingEngine.parseHTML(specs[index], specHTML);
    }
    return specsTemplate;
  },
  failedView: function(failedExpectations) {
    var expectationTemplate = "", expectationsLength = failedExpectations.length,
    index;
    
    for(index = 0; index < expectationsLength; index++) {
      expectationTemplate += templatingEngine.parseHTML(failedExpectations[index], failedExpectationView);
    }
    if(failedExpectations.length === 0) {
      expectationTemplate += templatingEngine.parseHTML(failedExpectations[index], passedExpectationContent);
    }
    return expectationTemplate;
  },
  failedContent: function(failedExpectations) {
    var expectationTemplate = "", expectationsLength = failedExpectations.length,
    index;
    
    for(index = 0; index < expectationsLength; index++) {
      expectationTemplate += templatingEngine.parseHTML(failedExpectations[index], failedExpectationContent);
    }
    return expectationTemplate;
  },
  parseHTML: function(data, template) {
    //direct substitute
    var match, regex = /{{[a-zA-Z]*}}/gm, key, subtemplate;
    
    do {
      match = regex.exec(template);
      regex.lastIndex = 0;
      if(match) {
        match = match[0];
        key = match.substr(2, match.length - 4);
        template = template.split(match).join(data[key]);
      }
    } while(match);
    
    //sub-parser
    regex = /{%{[a-zA-Z.]*}%}/gm;
    do {
      match = regex.exec(template);
      regex.lastIndex = 0;
      if(match) {
        match = match[0];
        key = match.substr(3, match.length - 6);
        subtemplate = templatingEngine[key](data[key]);
        template = template.split(match).join(subtemplate);
      }
    } while(match);
    
    
    return template;
  }
};
var reportingInput = {};

var specStartDurations = {};

var reporterHTML;

var userReporter = {
  jasmineStarted: function(suiteInfo) {
    reportingInput = {
      status: '',
      passedCount: 0,
      failedCount: 0,
      pendingCount: 0,
      suites: []
    };
    kony.print('Running suite with total specs ' + suiteInfo.totalSpecsDefined);
    
  },
  
  suiteStarted: function(result) {
    reportingInput.suites.push({
      'description': result.description,
      'specs': [],
      'passedCount': 0,
      'failedCount': 0,
      'pendingCount':0
    });
    kony.print('Test Suite: ' + result.description);
  },
  
  specStarted:function (result) {
    specStartDurations[result.id] = new Date().getTime();
    kony.print('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
    
  },
  
  specDone: function(result) {
    var failure, passed, i, spec = {
      'failedContent': []
    };
    
    // suspectLine
    for (i = 0; i < result.failedExpectations.length; i++) {
      
      failure = result.failedExpectations[i];
      spec.failedContent.push({
        'message': failure.message,
        'stack': failure.stack
      });
    }
    var suiteInfo = reportingInput.suites[reportingInput.suites.length - 1];
    if(i > 0)
    suiteInfo.failedCount++;
    else
    suiteInfo.passedCount++;
    spec.failedView = spec.failedContent;
    spec.status = result.status;
    spec.description = result.description;
    spec.duration = (new Date().getTime() - specStartDurations[result.id]) + ' ms';
    spec.appID = "Custom Tracker : ";
    spec.applicationRef = strLogger;
    suiteInfo.specs.push(spec);
//     reportingInput.date = getDate();  
//     reporterHTML = templatingEngine.parseHTML(reportingInput, baseTemplate);
//     kony.print('Spec: ' + result.description + ' Execution status: ' + result.status);
//     if(kony.os.deviceInfo().name == "android")
//       writeReportIntoFile(reporterHTML)
  },
  
  suiteDone: function(result) {
    var suite = reportingInput.suites[reportingInput.suites.length - 1],
    spec = suite.specs, i, suiteStatus = 'passed';
    
    suite.passedCount = 0;
    suite.failedCount = 0;
    suite.pendingCount = 0;
    
    for (i = 0; i < spec.length; i++) {
      if (spec[i].status === 'failed') {
        if (suiteStatus === 'passed') {
          suiteStatus = 'failed';
        }
        suite.failedCount++;
      } else if (spec[i].status === 'pending') {
        if (suiteStatus === 'passed') {
          suiteStatus = 'pending';
        }
        suite.pendingCount++;
      } else {
        suite.passedCount++;
      }
    }
    suite.status = suiteStatus;
    reportingInput.date = getDate();
    reporterHTML = templatingEngine.parseHTML(reportingInput, baseTemplate);
    kony.print('Suite: ' + result.description + ' was ' + result.status);
//     if(kony.os.deviceInfo().name == "android")
//       writeReportIntoFile(reporterHTML)
     downloadReportFile(reporterHTML);
  },
  
  jasmineDone: function() {
    var suite = reportingInput.suites, i, jasmineStatus = 'passed', passedCount = 0,
    failedCount = 0, pendingCount = 0;
    
    for (i = 0; i < suite.length; i++) {
      if (suite[i].status === 'failed') {
        if (jasmineStatus === 'passed') {
          jasmineStatus = 'failed';
        }
        failedCount++;
      } else if (suite[i].status === 'pending') {
        if (jasmineStatus === 'passed') {
          jasmineStatus = 'pending';
        }
        pendingCount++;
      } else {
        passedCount++;
      }
    }
    reportingInput.status = jasmineStatus;
    reportingInput.pendingCount = pendingCount;
    reportingInput.failedCount = failedCount;
    reportingInput.passedCount = passedCount;
    reportingInput.date = getDate();
    
    reporterHTML = templatingEngine.parseHTML(reportingInput, baseTemplate);
    kony.print('Finished suite');
//     if(kony.os.deviceInfo().name == "android"){
//       writeReportIntoFile(reporterHTML);
//     }else if(kony.os.deviceInfo().name == "thinclient"){
      downloadReportFile(reporterHTML);
//     }
  }
};
/*Utility function to save reports in sdcard of Android device */ 
/*Sdcard permission is required*/ 

function writeReportIntoFile(reporterHTML1)
{
  var mainLoc = kony.io.FileSystem.getExternalStorageDirectoryPath();
  var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "JasmineResult.html";
  var myFileName = new kony.io.File(myFileLoc);
  if(myFileName.exists())
  myFileName.remove();
  var myFile = myFileName.createFile();
  try {
    var writing = new kony.io.File(myFileLoc).write(reporterHTML1);
    if (writing !== null) {
      kony.print("writing can be done on  Existing Files");
    } else {
      kony.print("writing on nonExisting file returns null");
    }
  } catch (err) {
    kony.print("can't try write on NonExistingFile, causes Error");
  }
}

/*Utility function to download reports for desktop web */ 
function downloadReportFile(reporterHTML1) {
  var blob = new Blob([reporterHTML1], {type: 'text/plain'}),
  e = document.createEvent('MouseEvents'),
  a = document.createElement('a');
  
  a.download = 'TestResult_00_Custom_' + getDate() + '.html';
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl =  ['text/html', a.download, a.href].join(':');
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  a.dispatchEvent(e);
}

getDate = function () {
  var today = new Date();
  
  var mm = today.getMonth();
  mm = mm < 9 ? "0" + (mm + 1) : mm + 1; // getMonth() is zero-based
  
  var dd = today.getDate();
  dd = dd < 10 ? "0" + dd : dd;
  
  var hh = today.getHours();
  hh = hh < 10 ? "0" + hh : hh;
  
  var min = today.getMinutes();
  min = min < 10 ? "0" + min : min;
  
  var ss = today.getSeconds();
  ss = ss < 10 ? "0" + ss : ss;
  
  return dd + "-" + mm + "-" + today.getFullYear() + " " + hh + ":" + min + ":" + ss;
};