console.log('Node js - hello world');


for(var counter = 0; counter< 5 ;counter++){
	//console.log("#");

	// console.log("----------------");
	var pound = "#";
	for(var localcounter = 0; localcounter < counter; localcounter++ ){
	  
	  //console.log("localcounter is ", localcounter);
	   //console.log("counter is ", counter);
	  //console.log(pound);
	  pound += "#" ;
	  //console.log(pound);
	}
	console.log(pound);
	//console.log("----------------");
	
	//
	pound = "";
	pound = null;
}


function printnumber ( n){
 
//////
if ( (n%3 == 0) && (n%5 == 0)){
		console.log('FizzBuzz');
	}else{
	if(n%3 == 0){
	console.log('Fizz');
}else {
	if (n%5 == 0) {
	console.log('Buzz');
	}else{	
	 
	console.log(n);
	 
}
}
	}
	




if(n<=1){return;}
printnumber(n-1);
}

printnumber(50);
