const express = require('express');
const app = express();
const port = 3000;

// Endpoint para obtener todos los productos
app.get('/productos', (req, res) => {
  // Lógica para obtener todos los productos
  res.send('Lista de productos');
});

// Endpoint para obtener un producto por su ID
app.get('/productos/:id', (req, res) => {
  const id = req.params.id;
  // Lógica para obtener un producto por su ID
  res.send(`Producto con ID ${id}`);
});

// Endpoint para agregar un producto al carrito de compras
app.post('/carrito', (req, res) => {
  // Lógica para agregar un producto al carrito de compras
  res.send('Producto agregado al carrito de compras');
});

// Endpoint para obtener todos los productos en el carrito de compras
app.get('/carrito', (req, res) => {
  // Lógica para obtener todos los productos en el carrito de compras
  res.send('Lista de productos en el carrito de compras');
});

// Endpoint para actualizar la cantidad de un producto en el carrito de compras
app.put('/carrito/:id', (req, res) => {
  const id = req.params.id;
  // Lógica para actualizar la cantidad de un producto en el carrito de compras
  res.send(`Cantidad actualizada del producto con ID ${id}`);
});

// Endpoint para eliminar un producto del carrito de compras
app.delete('/carrito/:id', (req, res) => {
  const id = req.params.id;
  // Lógica para eliminar un producto del carrito de compras
  res.send(`Producto con ID ${id} eliminado del carrito de compras`);
});

// Endpoint para crear una nueva orden
app.post('/orden', (req, res) => {
  // Lógica para crear una nueva orden
  res.send('Nueva orden creada');
});

// Endpoint para obtener una orden por su ID
app.get('/orden/:id', (req, res) => {
  const id = req.params.id;
  // Lógica para obtener una orden por su ID
  res.send(`Orden con ID ${id}`);
});

// Endpoint para obtener todas las órdenes
app.get('/orden', (req, res) => {
  // Lógica para obtener todas las órdenes
  res.send('Lista de órdenes');
});

// Endpoint para actualizar el estado de una orden
app.put('/orden/:id', (req, res) => {
  const id = req.params.id;
  // Lógica para actualizar el estado de una orden
  res.send(`Estado de la orden con ID ${id} actualizado`);
});

// Endpoint para cancelar una orden
app.delete('/orden/:id', (req, res) => {
  const id = req.params.id;
  // Lógica para cancelar una orden
  res.send(`Orden con ID ${id} cancelada`);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
