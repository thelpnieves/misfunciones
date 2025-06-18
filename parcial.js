//FUNCION NUMERO PAR

function numeroPar(numero){
  return numero % 2 == 0;
}
 let esPar =  numeroPar(7);
    if (esPar){
    console.log( " El numero es par")

  }else{ console.log( " El numero es impar");
    
 }

//FUNCION IMPRIMIR PALABRA PALINDROMA

function esPalindroma(palabra) {
  const limpia = palabra.toLowerCase(); // opcional: eliminar espacios si se desea
  const reversa = limpia.split('').reverse().join('');
  return limpia === reversa;
}
console.log("la palabra es palindroma  " + esPalindroma("Anilina"));  // true
console.log("la palabra no  es palindroma  " + esPalindroma("Hola"));     // false



//FUNCION IMPRIMIR NUMEROS DE 1 A N


function imprimirRango(n){
  for(let i=1; i<=n; i++){
  console.log(i);
  }
}

imprimirRango(7);



//FUNCION SERIE FIBONACCI

function fibonacci(n){
  let a = 0;
  let b = 1;
  let numerosFibonacci = [];
  
  for(let i=0; i<n; i++){
    numerosFibonacci.push(a );
    let f = a+b;
    a = b;
    b = f;
   }
  console.log(numerosFibonacci.join(', '));
}

fibonacci(10);


  

