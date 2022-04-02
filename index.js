
const buttons = document.querySelector('.help');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear')
const input = document.querySelector('.input');

buttons.addEventListener('click', (num) =>{
    if (!num.target.classList.contains('numb') && !num.target.classList.contains('operation'))
        return;
    input.value += num.target.textContent;
    console.log("ready")
})


clear.addEventListener('click', (cl) =>{
    input.value = '';
})

equal.addEventListener('click', (eq) =>{
    expression= input.value;
    firstN = '';
    secondN = '';
    op = '';
    counter = 0;
    if (expression[0] === '-'){
        firstN += '-';
        counter++;
    }
    operIn = false;
    for(counter; counter < expression.length; counter++){
        if(expression[counter] === '+' || expression[counter] === '-' || expression[counter] === '*' || expression[counter] === '/'){
            op = expression[counter];
            counter++;
            operIn = true;
        }
        if(!operIn){
            firstN += expression[counter];
        }
        else{
            secondN += expression[counter];
        }
    }

    console.log(firstN, secondN);
    switch (op){
        case '+':
            input.value = Number(firstN) + Number(secondN);
            break;
        case '-':
            input.value = Number(firstN) - Number(secondN);
            break;
        case '*':
            input.value = Number(firstN) * Number(secondN);
            break;
        case '/':
            input.value = Number(firstN) / Number(secondN);
            break;
    }
})
