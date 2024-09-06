

function ad(num1, num2) {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    let soma = num1 + num2;

    document.getElementById('resultado').innerText(soma);
    return false
};
