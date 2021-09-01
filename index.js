function numberFunction(num) {
    if (input.value == 0) {
        input.value = num;
    } else {
        var a = input.value += num;
        input.value = a;
    }
}

function answerFunction(answer) {
    var ans = eval(input.value);
    var d = ans;
    input.value = '(' + d + ')';
    displayanswer.innerHTML="";
}

function onFunction(off) {
    if (of.innerHTML == 'ON') {
        of.innerHTML = 'OFF';
        input.value = 0;
        display.value
    } else if (of.innerHTML == 'ON') {
        of.innerHTML == 'OFF';
        input.value == 0;
    }
    else {
        of.innerHTML = 'ON ';
        input.value
    }
}

function cancelFunction(cancel) {
    if (cancel == 'CLR') {
        input.value= input.value.slice(0, -1);
    } else if(cancel == 'AC'){
        input.value = 0;
        displayanswer.innerHTML = "";
    }
}

function equalFunction(equal) {
    var a = input.value;
    var b = display.value;
    if (a.search('sin') == -1  && a.search('cos') == -1 && a.search('tan') == -1 
    && a.search('log') == -1 && a.search('In') == -1 && a.search('tanh') == -1 
    && a.search('sinh') == -1  && a.search('cosh') == -1 && a.search('&#8730;') == -1 
    && a.search('⊼') == -1) {
        var c = eval(input.value);
        displayanswer.innerHTML = c;
    } else if (a.search('tanh') != -1) {
        var c = a.replace('tanh', '');
        var d = Math.tanh(eval(c));
        displayanswer.innerHTML = d.toPrecision(15);
    } else if (a.search('cosh') != -1) {
        var c = a.replace('cosh', '');
        var d = Math.cosh(eval(c));
        displayanswer.innerHTML = d.toPrecision(15);
    } else if (a.search('sinh') != -1) {
        var c = a.replace('sinh', '');
        var d = Math.sinh(eval(c));
        displayanswer.innerHTML = d.toPrecision(15);
    } else if (a.search('sin') != -1) {
        var c = a.replace('sin', '(Math.PI/180)*');
        var d = Math.sin(eval(c));
        displayanswer.innerHTML = d.toPrecision(15);
    } else if (a.search('cos') != -1) {
        var c = a.replace('cos', '(Math.PI/180)*');
        var d = Math.cos(eval(c));
        displayanswer.innerHTML = d.toPrecision(15);
    } else if (a.search('tan') != -1) {
        var c = a.replace('tan', '(Math.PI/180)*');
        var d = Math.tan(eval(c));
        displayanswer.innerHTML = d.toPrecision(15);
    } else if (a.search('log') != -1) {
        var c = a.replace('log', '');
        var d = Math.log10(eval(c));
        displayanswer.innerHTML = d.toPrecision(15);
    } else if (a.search('In') != -1) {
        var c = a.replace('In', '');
        var d = Math.log(eval(c));
        displayanswer.innerHTML = d.toPrecision(15);
    } else if (equal == '-') {
        var c = -(displayanswer.innerHTML);
        displayanswer.innerHTML = d;
    } else if (a.search('&#8730;') != -1) {
        var c = a.replace('&#8730;' , 'Math.Pow(input.value, 0.5)' );
        console.log(c);
    } else if (a.search('⊼') != -1) {
        var c = a.replace('⊼' , '*(22/7)');
        var d = eval(c);
        displayanswer.innerHTML = d;
    }
}

function negativeFunction(negative) {
    var c = -(displayanswer.innerHTML);
    displayanswer.innerHTML = c;
}

function myTimeFunction() {
    var i = new Date();
    myTime.innerHTML=i.toLocaleTimeString();
}
setInterval(myTimeFunction, 1000)