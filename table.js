

for (var counter = 1 ; counter <= 10; counter++)
{
	//console.log(counter * 2);
}

function testfunction (param) {
	console.log('function invoked');
	return null ;
}
//console.log(typeof(testfunction()));
var sqrtnumber = Math.sqrt(29);
//console.log(sqrtnumber);



 function isNumberPrimeorNot(inputnumber) 
{
//	console.log('-----------checking isprime------------------------');
	var primeflag = 0;
	for(var i = 2; i<= Math.sqrt(inputnumber); i++)
	{ if(inputnumber%i == 0)	
		{
			primeflag = 1;
		}
	}

	if(primeflag == 1)
	{
//		console.log('Not a prime number');
		return false;
	}else{
//		console.log('Yay-- ' + inputnumber + '\tis a Prime');
		return true;
	}

//		console.log('-----------checking isprime------------Done------------');

//		return (primeflag ? true:false);

}
//isNumberPrimeorNot(7856);

//var testt = 0/15;
//console.log(testt);

var userinputnumber = 45;
var startdate = new Date();
for(var i=0; i<= Math.sqrt(userinputnumber);i++){
	
	if(userinputnumber%i == 0){
		// it is a factor for the input number. now check is it prime or not ?
		//console.log(i + ' is a factor for ' + userinputnumber);
		if(isNumberPrimeorNot(i))
		{
			//console.log(i + ' is a prime factor of ' + userinputnumber);
		}
	}
}

var enddate = new Date();
var timediff = Math.abs(enddate.getMilliseconds() - startdate.getMilliseconds());
//console.log(startdate.getMilliseconds(),enddate.getMilliseconds(),timediff);

console.log(eval(5*63));

var startingnumber = 0;
var firstnumber = 1;

var uptonumber = 15;
var currentnumber = 0;

for(var i =0; i< uptonumber; i++){
currentnumber = startingnumber + firstnumber;
startingnumber = firstnumber;
firstnumber = currentnumber;

}
console.log(currentnumber);
console.log('Fibonacci series done------------');

var gcdresult = 0;
function findgcd(a, b){
 	if(a == 0 || b == 0){
		gcdresult = 0;
		return gcdresult;
	}

	if(a == b){
		gcdresult = a;	
		return gcdresult;
	}

	if(a > b){
		findgcd(a-b,b);
	}else{
		findgcd(a, b-a);
	}
}
 findgcd(8,15);
console.log(gcdresult);
console.log('gcdresult done------------ 🤖 💩');

var numberarray = [1,2,3,4,5,6,1,2,3];
console.log(numberarray);


var tempArray = new Array();
numberarray.forEach(function(thelement){
//first check if current element is present in temparray
// else add it.
var thebool = false;
tempArray.forEach(function(tempelement){
	if(thelement == tempelement){
		thebool = true;
	}
});

if(!thebool){
	tempArray.push(thelement);
}

});

console.log('array with distinct values ' + tempArray);