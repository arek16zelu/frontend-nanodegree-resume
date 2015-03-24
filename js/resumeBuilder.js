var awesomeThoughts = "I am Arek and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Arek");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");

$("#header").append(formattedName);
$("#header").append(formattedRole);

var myArray = ["awesomeness", "programming"];
console.log(myArray.length);
