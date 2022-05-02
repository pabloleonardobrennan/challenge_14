let num;

while(isNaN(num)){
    num = Number(prompt('Ingrese un número'));
    if (isNaN(num)) {
        alert('El numero ingresado es invalido');
    }
}

if (num%2==0) {
    alert('El numero ingresado es par');
} else {
    alert('El numero ingresado es impar');
} 
