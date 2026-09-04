const productos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    descripcion: "Aparador de líneas contemporáneas para living o comedor.",
    imagen: "imagenes/Aparador Uspallata.png",
  },
  {
    id: 2,
    nombre: "Sofá Patagonia",
    descripcion: "Sofá de tres cuerpos para el living.",
    imagen: "imagenes/Sofá Patagonia.png",
  },
  {
    id: 3,
    nombre: "Mesa Comedor Pampa",
    descripcion: "Mesa de comedor de madera para reuniones en casa.",
    imagen: "imagenes/Mesa Comedor Pampa.png",
  },
  {
    id: 4,
    nombre: "Sillón Copacabana",
    descripcion: "Sillón de apoyo para living o rincón de lectura.",
    imagen: "imagenes/Sillón Copacabana.png",
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");

productos.forEach(function (producto) {
  const articulo = document.createElement("article");
  articulo.className = "tarjeta-mueble";

  const figura = document.createElement("figure");

  const imagen = document.createElement("img");
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;
  imagen.width = 400;
  imagen.height = 400;

  const pieDeFoto = document.createElement("figcaption");
  pieDeFoto.textContent = producto.nombre;

  figura.appendChild(imagen);
  figura.appendChild(pieDeFoto);

  const titulo = document.createElement("h3");
  titulo.textContent = producto.nombre;

  const descripcion = document.createElement("p");
  descripcion.textContent = producto.descripcion;

  articulo.appendChild(figura);
  articulo.appendChild(titulo);
  articulo.appendChild(descripcion);

  contenedorProductos.appendChild(articulo);
});