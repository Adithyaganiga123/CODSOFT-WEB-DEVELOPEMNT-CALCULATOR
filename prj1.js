function Solve(val) {
   var v = document.getElementById('res');
   // Prevent multiple operators in a row
   const lastChar = v.value[v.value.length - 1];
   const operators = ['+', '-', '*', '/'];
   if (operators.includes(val) && operators.includes(lastChar)) {
       return; // Do not allow multiple operators in a row
   }
   v.value += val;
}

function Result() {
   var num1 = document.getElementById('res').value;
   try {
       // Replace 'x' with '*' for multiplication
       var num2 = eval(num1.replace(/x/g, '*'));
       document.getElementById('res').value = num2;
   } catch (error) {
       document.getElementById('res').value = 'Error';
   }
}

function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}

function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
   } else if (key === 'Enter') {
       Result();
   } else if (key === 'Backspace') {
       Back();
   } else if (key.toLowerCase() === 'c') {
       Clear();
   }
});