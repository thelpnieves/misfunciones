// FUNCION IMPRIME LOS NUMEROS DE 7 EN 7 HASTA 100

function imprimirNumerosSiete(n, n1){
 let serieSiete = "";
  for(let i = n; i <= n1; i += 7){
   serieSiete += i + ", ";  
  }
  console.log(serieSiete);
}

imprimirNumerosSiete(10,100)



// ARRAY TIPO STRING PARA APLICACION DE VARIOS METODOS 

const frasesCelebres = [
  "La vida es como una bicicleta: para mantener el equilibrio, debes moverte. - Albert Einstein  ",
  "   El único viaje real es el que se hace interiormente. - Marcel Proust ",
  "Aprender es el camino más rápido para salir del aburrimiento. - Albert Einstein ",
  " La felicidad es una decisión. - William James  "
   
]

// METODOS APLICADOS
// Elimina los espacios al inicio y al final de los elementos del Array
 //map recorre los elementos del Array y trim elimina los espacios

const metodosCadena = frasesCelebres.map(frase =>
   frase
      .trim()                                 // Elimina espacios 
      . toUpperCase()                         //Pasa a mayusculas
    ); 

//Muestra resultados cada frase en una linea
  metodosCadena.forEach(frase => {            
  console.log(frase); 
});

  
//FILTRAR FRASES CON ALGUNA CARACTERISTICA

const frasesEinstein = frasesCelebres
  .map(frase => frase .trim())
  .filter(frase => frase.includes("Albert Einstein"));
  
 
// Mostrar resultados
frasesEinstein.forEach(frase => {
 console.log(frase)}
);