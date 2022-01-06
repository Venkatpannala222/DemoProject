var strLogger=[];
var Search_unique_Payee="";

async function appLog(strtmpLogger){
  
  //strLogger= strLogger+"<BR>"+strtmpLogger;
  strLogger.push("<BR>"+strtmpLogger+" -> "+new Date().getHours()+" : "+new Date().getMinutes()+" : "+new Date().getSeconds()+" : "+new Date().getMilliseconds());
}

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
function getRandomNumber(length) {
    var randomChars = '0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}