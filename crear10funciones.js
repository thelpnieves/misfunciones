let nombre = "Nieves";
let apellido = "Cruz";
let nombreCompleto = "Nieves Cruz";
let edad = 58;
let producto = "papa";
let precio = 1200;
let cantidad = 10;
let estaAbierto = true;
const recibo = { 
  comprador: nombreCompleto, 
  edad:edad,
  producto:producto,
  precio:precio, 
  cantidad:cantidad, 
  estaAbierto:estaAbierto 
} 

function imprimirRecibo(){
 let impresion = "";
 impresion = "El comprador " + nombreCompleto + " con edad " + edad + " años compro " + cantidad + " libras de " + producto + " por la modica suma de " + precio + " pesos aprovechando que la tienda esta abierta " + estaAbierto;
  
 return impresion;  
}

 const resultado = imprimirRecibo();
 console.log (resultado);


function suma(a , b){
  return  a + b;
}

const total = suma(10, 4);
console.log(total);

function restar(a , b){
  return a - b;
}
const diferencia = restar(16, 8);
console.log(diferencia);


function areaCirculo(r){
 const PI = 3.14;
  return PI * r * r;
}
const radio = areaCirculo(24);
console.log(radio);


function areaTriangulo(b , a){
  return b * a / 2;
  
}
const area = areaTriangulo(2, 3);
console.log(area);

//FUNCIONES COMPROMISO

//FUNCION MAYOR DE EDAD

function mayorEdad(edad){
  
  if(edad >= 18){
    return true;
  }else {
    return false;  
  }
}
   const edadPersona =19;
  if (mayorEdad(edadPersona)) {
  console.log( "La persona es mayor de edad.");
} else{ console.log("La persona es menor de edad.")}   
    

 
  



//FUNCION AREA CUADRADO

function areaCuadrado(a,b){
  return (a * b);
}
let respuesta= areaCuadrado(13,13);
console.log("El area del cuadrado es: " + respuesta);




//FUNCION CONTAR CARACTERES
function contarCaracteres(caracteres) {
  const totalCaracteres = caracteres;
  return totalCaracteres.length;
}

console.log("Total caracteres  " + contarCaracteres ("Hola como estan estudiantes de thelp, es un placer estudiar con ustedes")); 



//FUNCION METROS A CENTIMETROS

function conversionMetros(metros){
  return metros * 100;
}

console.log(conversionMetros(8) +  "  Centimetros")



//FUNCION HORAS A MINUTOS

function horasMinutos (horas){
  return horas * 60;
  
}
console.log(horasMinutos(24) + "  Minutos")




//FUNCION CALCULAR LA VELOCIDAD

function calculoVelocidad(distancia, tiempo){
  return distancia/tiempo;
}

let velocidad = calculoVelocidad(50,5);
console.log("Su velocidad es:" + velocidad);


//FUNCION NUMEROS PARES DE 0 A 200

function numerosPares(numero){
  let pares = "";
  for(i = 0; i <= numero; i+=2){
    pares += " " + i + ", ";
  }
  return pares;
}
console.log(numerosPares(100))


//FUNCION CONVERSION GRADOS


function farenheitCelius(grados){
 return (grados - 32) * 0.5556; 
  
}
let gradosCelius = farenheitCelius(60);
console.log(gradosCelius +  "  Grados Celius");


//FUNCION CALCULAR INDICE DE MASA CORPORAL

function calcularImc (peso,altura){
  return peso/(altura * altura);
  
}
let indiceMasaCorporal = calcularImc (57,1.50);
console.log("El Indice de Masa Corporal es: " + indiceMasaCorporal);




//FUNCION CALCULAR DISTANCIA ENTRE DOS PUNTOS

function calcularDistancia(x1,y1,x2,y2){
  const dx= x2-x1;
  const dy = y2-y1;
  return Math.sqrt(dx * dx + dy * dy)
   
}

console.log( "La distancia es " + (2,4,5,3));
