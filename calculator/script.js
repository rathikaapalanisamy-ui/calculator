const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

function squareRoot(){
    display.value = Math.sqrt(display.value);
}

function power(){
    display.value = Math.pow(display.value, 2);
}

function sin(){
    display.value = Math.sin(display.value * Math.PI / 180);
}

function cos(){
    display.value = Math.cos(display.value * Math.PI / 180);
}

function tan(){
    display.value = Math.tan(display.value * Math.PI / 180);
}

function log(){
    display.value = Math.log10(display.value);
}

function factorial(){
    let n = parseInt(display.value);
    let fact = 1;

    for(let i = 1; i <= n; i++){
        fact *= i;
    }

    display.value = fact;
}