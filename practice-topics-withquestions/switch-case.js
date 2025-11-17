//Write a switch statement to check if today is "Monday" or "Friday", otherwise print "Other day".

const today = new Date().getDay()

switch(today){
  case 1:
    console.log("MOnday");
    break;

  case 5:
    console.log("Friday");
    break;

  default:
    console.log("Other day");
    break;

}