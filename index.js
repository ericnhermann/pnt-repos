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