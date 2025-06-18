//1. FUNCION ARRAY INVENTARIO PRODUCTOS DISPONIBLES

const productos = [
  
 { nombre: "cartulina", inventario: 5},
 { nombre: "lapices", inventario: 6},
 { nombre: "plastilina", inventario: 0},
 { nombre: "boligrafo", inventario: 4},
 { nombre: "escuadra", inventario: 0},
 { nombre: "transportador", inventario:7},
 { nombre: "block", inventario: 0},
 { nombre: "cinta", inventario: 5},
 { nombre: "cuaderno", inventario: 8}
     
];
console.log(productos);



// filtra productos diferentes de cero e iguales a 0

const productoExistencias = productos.filter(function(producto) {
  if(producto.inventario > 0) {
    return true;
  }
 });
 console.log(productoExistencias);

 const productosInexistentes = productos.filter(function(producto) {
  if(producto.inventario === 0) {
    return true;
  }
 });
 console.log(productosInexistentes);










//filtra solo los productos disponibles true
const productosDisponibles = productos.filter(producto => { 
  return producto.existencia == true
});
console.log(productosDisponibles);

//Muestra unicament los productos filtrados en un string
const disponibles = productosDisponibles.map(producto => producto.nombre).join(", ");
console.log(disponibles);

//Cuenta los productos disponibles y los no disponibles
const inventario = productos.reduce((articulo, producto) => {
  if (producto.existencia) {
    articulo.true++;
  } else {
    articulo.false++;
  }
  return articulo;
}, 
{ true: 0, false: 0 }); //objeto qu acumula el conteo

console.log("Disponibles (true):", inventario.true);
console.log("No disponibles (false):", inventario.false);



//2. FUNCION ESTUDIANTES ORDENADOS ALFABETICAMENTE Y CON EDAD


const estudiantes = [
  { nombre: "Torres Mariana", edad: 6 },
  { nombre: "Toro Alexander", edad: 12 },
  { nombre: "Cruz Samuel", edad: 5 },
  { nombre: "Gonzalez Tatiana", edad: 7 },
  { nombre: "Gomez Sebastian", edad: 10 },
  { nombre: "Alvarado Jessica", edad: 11 },
  { nombre: "Cardona Luis", edad: 8 }
];
       
                    
const estudiantesOrdenados = estudiantes.sort((a, b) => {   //ordena el arreglo (a y b) dos estudiantes
  return a.nombre.localeCompare(b.nombre);                  //compara los nombres alfabeticamente 
});

// Mostrar uno por línea con nombre y edad
estudiantesOrdenados.forEach(estudiante => {
  console.log(`${estudiante.nombre} - Edad: ${estudiante.edad}`);  //plantillas mostrar nombre y edad juntos
});




//3. FUNCION  SOLO LAS INICIALES DE LOS NOMBRES Y APELLIDOS Y LOS MUESTRA EN UN ARRAY


const nombres = [
  "Laura Torres",
  "Carlos Beltran", 
  "Ana Perez",
  "Jorge Lopez", 
  "Santiago Marin"];

const siglas = [];                //Se crea array vacio para mostrar resultado en siglas

nombres
  .map(n => n
  .split(" ")                    //divide el nombres por los espacios
  .map(p => p[0])                //toma la letra en la primera posicion 0
  .join(""))                     //muestra las letras sin los espacios
  .forEach(i => siglas           //guarda las siglas en un arreglo  
   .push(i));                     // agrega el ultimo elemento al arreglo

console.log("Siglas:", siglas);