

for (var counter = 1 ; counter <= 10; counter++)
{
	console.log(counter * 2);
}

function testfunction (param) {
	console.log('function invoked');
	return null ;
}
console.log(typeof(testfunction()));
var sqrtnumber = Math.sqrt(29);
console.log(sqrtnumber);

console.log('-----------checking isprime------------------------');

var inputnumber = 89798;
var primeflag = 0;
for(var i = 2; i<= inputnumber/2; i++)
{ if(inputnumber%i == 0)	
	{
		primeflag = 1;
	}
}

if(primeflag == 1)
{
	console.log('Not a prime number');
}else{
	console.log('Yay-- ' + inputnumber + '\tis a Prime')
}

console.log('-----------checking isprime------------Done------------');
