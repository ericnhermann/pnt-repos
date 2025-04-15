const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
  ];

//1
console.log(productos[0].nombre); 
  

//2
for (let producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
  }

  //3

  productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
  });

  //4

  const nombres = productos.map(producto => producto.nombre);
  console.log(nombres);

  //6

  const ropa = productos.filter(producto => producto.categoria === "Ropa");
console.log(ropa);

//7

const caros = productos.filter(producto => producto.precio > 3000);
console.log(caros);

//8

const gorra = productos.find(producto => producto.nombre === "Gorra");
console.log(gorra);

//9

const hayCaro = productos.some(producto => producto.precio > 10000);
console.log(hayCaro);

//9
const todosMayor1000 = productos.every(producto => producto.precio > 1000);
console.log(todosMayor1000);

//10
const contieneCampera = nombres.includes("Campera");
console.log(contieneCampera);

//11
const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log(productosOrdenados);

//12
const mensajesPersonalizados = productos.map(producto => 
    `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoría ${producto.categoria}.`
);
console.log(mensajesPersonalizados);

//13
const nuevosProductos = [
    { id: 6, nombre: "Bufanda", precio: 800, categoria: "Accesorios" },
    { id: 7, nombre: "Botas", precio: 6500, categoria: "Calzado" }
];

const todosLosProductos = [...productos, ...nuevosProductos];
console.log(todosLosProductos);

