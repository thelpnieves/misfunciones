//funcion clima array

const climaCiudades = [
  { ciudad: "Bogota", temperatura: 17, lluvioso: true },
  { ciudad: "Cali", temperatura: 28, lluvioso: false },
  { ciudad: "Medellin", temperatura: 21, lluvioso: false },
  { ciudad: "Cucuta", temperatura: 30, lluvioso: true },
  { ciudad: "Cartagena", temperatura: 32, lluvioso: false },
  { ciudad: "Popayan", temperatura: 16, lluvioso: true },
  { ciudad: "Neiva", temperatura: 31, lluvioso: false },
  { ciudad: "Tunja", temperatura: 12, lluvioso: true },
  { ciudad: "Pasto", temperatura: 17, lluvioso: true },
  { ciudad: "Villavicencio", temperatura: 28, lluvioso: false }

];
console.log('Este es el clima inicial', climaCiudades);

//funcion random
let temperaturaRandom = climaCiudades.map(function (ciudad) {
  let aleatoria = Math.random() < 0.5 ? -2 : 2;
  return {
    ciudad: ciudad.ciudad,
    temperatura: ciudad.temperatura + aleatoria,
    lluvioso: ciudad.lluvioso
  }
});
console.log(temperaturaRandom);

function actualizarCiudad(ciudadACambiar) {
  let climasActualizados = climaCiudades.map(function (clima) {

    if (clima.ciudad === ciudadACambiar) {
      let aleatoria = Math.random() < 0.5 ? -2 : 2;
      return { ...clima, temperatura: clima.temperatura + aleatoria }
    }

    return clima;
  });
  return climasActualizados;
}

let ciudadesActualizadas = actualizarCiudad('Neiva');
console.log('Este es el clima actual actualizando Bogotá', ciudadesActualizadas);

//funcion ingresa grados fa
function centigradosAFarenheit(grados) {
  return (grados * 1.8) + 32
}


function agregarObjetosFarenheit(){
  let climasActualizados = climaCiudades.map(function(clima) {
    
    return { 
      ciudad:clima.ciudad,
      temperatura:clima.temperatura,
      lluvioso:clima.lluvioso,        
      farenheit: centigradosAFarenheit(clima.temperatura)
    }
    
  });
  return climasActualizados;
}
let farenheit = agregarObjetosFarenheit();

console.log(farenheit);
