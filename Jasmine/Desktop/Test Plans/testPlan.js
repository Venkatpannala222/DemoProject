//This is the entry point for automation. You can either:
//1.Require any one of the created test plans like this:



var app="xyz";  
var userType = "_RB"; //valid values are "_RB" and "_SME"
  
require(["testScripts/logger"]);
require(["testScripts/TestData/testData"+userType]);
  
if(app==="RBRegression"){
  require(["Test Plans/RBTestPlan"]);
}else if(app==="SMERegression"){
  require(["Test Plans/SMETestPlan"]);
}else if(app==="RBSanity"){
  require(["Test Plans/RBSanityTestPlan"]);
}else if(app==="SMESanity"){
  require(["Test Plans/SMESanityTestPlan"]);
}else if(app==="Unit"){
  require(["Test Plans/UnitTestPlan"]);
}else{
  //jasmine.DEFAULT_TIMEOUT_INTERVAL = 80000;
  require(["Test Plans/tempPlan"]);
}


//require(["Test Plans/SamplePlan"]);
//require(["Test Plans/CopyofRBTestPlan"]);

// or
//2.  require the test suites along with executing jasmine as below
//Nested require for test suites will ensure the order of test suite exectuion
// require([/*<Test Suites/test suite1>*/],function(){
//   require([/*<Test Suites/test suite2>*/], function(){
//     //and so on
//     	require([/*<Test Suites/last test suite>*/], function(){
//         		jasmine.getEnv().execute();  
//         });
//   });
// });

//Since this is file is to be manually edited, make sure to update 
//any changes (rename/delete) to the test suites/plans.