// Array organiza alfabeticamente a -z y z-a
const estudiantes = ["sanchez", "cruz", "arevalo", "perez"];
console.log(" Este es el array inicial", estudiantes);
estudiantes.sort();
console.log(" Este es el array de la a ala z", estudiantes);
estudiantes.reverse();
console.log("Este es el aray invertido z a la a", estudiantes);

// Array objeto organiza alfabeticamente



const estudiantesGradoCuarto = [
     { apellido: "sanchez", nombre: "juanita", edad: "9" },
     { apellido: "Zapata", nombre: "Santiago", edad: "16" },
     { apellido: "Cruz", nombre: "Salome", edad: "18" },
     { apellido: "Ramirez", nombre: "Juaquin", edad: "23" },
     { apellido: "Arevalo", nombre: "Lucio", edad: "20" },
     { apellido: "Perez", nombre: "Mariana", edad: "40" },
     { apellido: "Lopez", nombre: "Janet", edad: "12" },
     { apellido: "Caceres", nombre: "Matias", edad: "19" },
];

console.log("Este es el array inicial de objetos", estudiantesGradoCuarto)

const listaAlfabetica = estudiantesGradoCuarto.toSorted(function (a, b) {
     return a.apellido.localeCompare(b.apellido)
})

console.log(" Este es el array ordenado alfabeticamente a - z de objetos", listaAlfabetica);



const listaDescendente = estudiantesGradoCuarto.toSorted(function (a, b) {
     return b.apellido.localeCompare(a.apellido);
});
console.log(" Este es el array de objetos invertido de la z a la a", listaDescendente);


const adicionarPropiedad = estudiantesGradoCuarto.map(function (estudiante) {
     let miNumeroAlAzar = Math.random() * (210 - 30 + 1) + 30;
     let azarAprox = Math.floor(miNumeroAlAzar);
     return {
          apellido: estudiante.apellido,
          nombre: estudiante.nombre,
          edad: estudiante.edad,
          estatura: azarAprox
     };
});
console.log(adicionarPropiedad);

const resumenEstudiante = adicionarPropiedad.map(function(resumen) {
     let historia = " El estudiante "  + resumen.nombre + " con apellido " 
     + resumen.apellido + " con edad :  " + resumen.edad + " años " + "y estatura de : " 
     + resumen.estatura; 
     return {
          apellido: resumen.apellido,
          nombre: resumen.nombre,
          edad: resumen.edad,
          estatura: resumen.estatura,
          resumen: historia
     }
});

console.log(resumenEstudiante);



