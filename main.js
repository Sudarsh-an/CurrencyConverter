
// Fetching the values from DOM.

var  num1 = document.getElementById('num1');

var num2= document.getElementById('num2');

var dd1 = document.getElementById('dd1');

var dd2 = document.getElementById('dd2');


// Function to change the values of dropdown, if 1 input has CAD, other will have USD and vice versa.
dd1.onclick = function(){
    console.log("dd1 pressed");
    if(dd1.value === 'usd'){
        dd2.value = 'cad'; 
    } 
    if(dd1.value === 'cad'){
        dd2.value = 'usd';
    }
}

dd2.onclick = function(){
    console.log("dd2 pressed");
    if(dd2.value === 'usd'){
        dd1.value = 'cad'; 
    } 
    if(dd2.value === 'cad'){
        dd1.value = 'usd';
    }
}

// Function called on pressing Convert Button. Logic for Currency conversion.
function convert(){

    console.log("Convert called");
    console.log(  "dd1 value: "+ dd1.value+" dd2 value:  " +dd2.value); 
    // Logic for calculating the Currency exchange value from USD to CAD and viceversa. By, checking only 1 input has value and
    // based on the dropdown vakue selected, conversion is made.  
    if(num1.value != '' && num2.value == ''){ 
        if(dd1.value === 'usd'){
            num2.value = num1.value * 1.32;
        }
        else{
            num2.value = num1.value * 0.76;
        }
    }
    else if(num2.value != '' && num1.value == '' ){
        if(dd2.value === 'usd'){
            num1.value = num2.value * 1.32;
        }
        else{
            num1.value = num2.value * 0.76;
        }
    }
    else{
        alert("There can't be values in both the inputs.");
    }
}