var array1 = [1,2,3,4,5,6,7,8];
var array2 = [5,6,7,8,9,10,11];

//we will take new array and check element exists in the new array
//then if it does not exists, then insert in the array .

var newarray = [];


function checkandinsertintonewarray( inputarray){
    for (var i = 0; i<=(inputarray.length -1);i++){
        var currentelement = inputarray[i];
        var isexists = false;
        for(var j = 0;j <=(newarray.length-1); j++ ){
            if(currentelement == newarray[j]){
                // element exists.
                isexists = true;
            }      
        }
    
        // if isexists == false , then insert
            if(!isexists){
                    
                    var elementtobeinserted = currentelement;
                    // if array1 is sorted one, then we can insert at last, else we have to sort our array1 and array2 .
                    // here , assuming array1 and array2 are sorted ones.
                
                    // var lastindex = newarray.length - 1;
                    // newarray[lastindex] = elementtobeinserted;
                    newarray.push(elementtobeinserted);
                }
    }
}

checkandinsertintonewarray(array1);
checkandinsertintonewarray(array2);


console.log(newarray);


// binary sort
var randomarray = [1,5,6,78,23,99,562,2,11,55,66,73,69,63,79,85];
