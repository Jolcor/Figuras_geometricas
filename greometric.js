const valorResultado = document.querySelector("#result");

//Area y perimetro del cuadrado
const perimetro = (num) => num * 4;
const area = (num) => num * num;

//El área del Cuadrado es de: 45 cm
function calcularPerimetroCuadrado(){
    let inputSide = document.querySelector("#inputSide");
    let valor = Number(inputSide.value); // obtenesmos el valor

    const resultado = `El perimetro del cuadrado es ${perimetro(valor)} cm`;
    valorResultado.innerText = resultado;
}

function calcularAreaCuadrado(){
    let inputSide = document.querySelector("#inputSide");
    let valor = Number(inputSide.value); // obtenesmos el valor

    const resultado = `El perimetro del cuadrado es ${area(valor)} cm^2`;
    valorResultado.innerText = resultado;
}

//Area y perimetro del triangulo
const perimetroTriangulo = (num1, num2, numBase) => num1 + num2 + numBase;
const areaTriangulo = (numBase, num) => (numBase + num) / 2

function calcularPerimetroTriangulo(){
    let Lado1 = document.querySelector("#side1");
    let Lado2 = document.querySelector("#side2");
    let base = document.querySelector("#side3");

    let valor1 = Number(side1.value);
    let valor2 = Number(side2.value);
    let valor3 = Number(side3.value); // obtenesmos el valor

    const resultado = `El perimetro del triangulo es ${perimetroTriangulo(valor1, valor2, valor3)} cm`;
    valorResultado.innerText = resultado;
}

function calcularAreaTriangulo(){
    let base = document.querySelector("#sideBase");
    let alto = document.querySelector("#sideAltura")
    
    let baseNum = Number(base.value)
    let altoNum = Number(alto.value); // obtenesmos el valor

    const resultado = `El area del triangulo es ${areaTriangulo(baseNum, altoNum)} cm^2`;
    valorResultado.innerText = resultado;
}

/**
 * Area, perimetro y diamtro de circulo
 */

const diameamtreoCirculo = (radio) => radio * 2
const perimetroCirculo = (radio) => diameamtreoCirculo(radio) * Math.PI;
const areaCirculo = (radio) => (radio * radio) *  Math.PI;

function calcularDiametroCirculo() {
    let radio = document.querySelector('#sideRadio');
    radio = Number(radio.value);
    
    const resultado = `El diámetro del circulo es: ${diameamtreoCirculo(radio)} cm`;
    valorResultado.innerText = resultado;
}

function calcularPerimetroCirculo() {
    let radio = document.querySelector('#sideRadio');
    radio = Number(radio.value);
    
    const resultado = `El perimetro del circulo es: ${perimetroCirculo(radio)} cm`;
    valorResultado.innerText = resultado;
}

function calcularAreaCirculo() {
    let radio = document.querySelector('#sideRadio');
    radio = Number(radio.value);
    
    const resultado = `El area del circulo es: ${areaCirculo(radio)} cm`;
    valorResultado.innerText = resultado;
}