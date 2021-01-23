var buttons = document.getElementsByTagName("button");
var result = document.getElementById("result");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function(){
        var value = this.getAttribute("data-value");
        if(value == "+"){
            operator = '+';
            operand1 = parseFloat(result.textContent);
            if(!Number.isFinite(operand1)){
                result.innerText = "Error";
            }else{ 
                result.innerText = "+";
            }
        }else if(value == "-"){
            operator = '-';
            operand1 = parseFloat(result.textContent);
            if(!Number.isFinite(operand1)){
                result.innerText = "Error";
            }else{ 
                result.innerText = "-";
            }
        }else if(value == "*"){
            operator = '*';
            operand1 = parseFloat(result.textContent);
            if(!Number.isFinite(operand1)){
                result.innerText = "Error";
            }else{ 
                result.innerText = "*";
            }
        }else if(value == "/"){
            operator = '/';
            operand1 = parseFloat(result.textContent);
            if(!Number.isFinite(operand1)){
                result.innerText = "Error";
            }else{ 
                result.innerText = "/";
            }
        }else if(value == "A/C"){
            result.innerText = "";
        }else if(value == "+/-"){
            operand1 = parseFloat(result.textContent);
            if(!Number.isFinite(operand1)){
                result.innerText = "Error";
            }else{ 
                operand1 *= -1;
                result.innerText = operand1;
            }
        }else if(value == "%"){
            operator = '%';
            operand1 = parseFloat(result.textContent);
            if(!Number.isFinite(operand1)){
                result.innerText = "Error";
            }else{ 
                operand1 /= 100;
                result.innerText = operand1.toFixed(3);
            }
        }else if(value == "="){
            operand2 = parseFloat(result.textContent);
            if(!Number.isFinite(operand2)){
                result.innerText = "Error";
            }else{ 
                if(operator == null){
                    result.innerText = operand2;
                }else{
                    var ans = eval(operand1+""+operator+""+operand2);
                    if(ans == Infinity){
                        result.innerText = "Error";
                    }else{
                        result.innerText = ans;    
                    }
                }
            }
        }else{
            if(operator == "="){
                result.innerText = value;
            }else{
                var curr = parseFloat(result.textContent);
                if(!Number.isFinite(curr)){
                    result.innerText = value;
                }else{
                    if(curr == 0){
                        result.innerText = value;
                    }else{
                        result.innerText +=  value;
                    }
                }
            }
        }
    });
}
