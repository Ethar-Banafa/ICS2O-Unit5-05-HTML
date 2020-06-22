function myFunction() {
var age=25;
var day="Monday";
age= document.getElementById("demo").value;
day= document.getElementById("ss").value;
age= +age;
if ((day=="Monday" || day=="Tuesday" || day=="Wednesday" || day=="Thursday" || day=="Friday") && (age>=1 && age<=17)) {
alert("Time for school");
} else if((day=="Monday" || day=="Tuesday" || day=="Wednesday" || day=="Thursday" || day=="Friday") && (age>=18)) {
 alert("Get back to work!!");
} else {
alert("It is the weekend!! Time to relax!!");
}
}
