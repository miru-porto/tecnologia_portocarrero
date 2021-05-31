# ✨Bijouterie

Ecommerce desarrollado en React como parte del proyecto correspondiente al curso de ReactJs en CoderHouse, que se encarga de la comercialización de accesorios y adornos.

## Routes
|Route| Descripción  |
|--|--|
| / | Home y listado de todos los productos.|
| /item/:id  |Detalles del producto según el id del item. En caso de que el produtco no exista en la base de datos, se avisa al usuario al respecto.| 
|/category/:categoryId|Listado de productos según categoría.|
|/cart|Carrito en el que se muestra un resumen del pedido del cliente.|
|/checkout|Despacho del cliente, en el que se registra su información en la base de datos.|

## Navegación
La navegación incluye:

-   Home con productos
-   Una ruta que redirecciona a las **productos filtrados por categoría**
-   Una ruta que redirecciona al **producto con detalle**
-   Una ruta que redirecciona al **carrito**
-   Una ruta que redirecciona al **checkout**

## Detalles

-   El diseño está basado en **Todomoda**

## Instrucciones de Instalación
 1. git clone https://github.com/Miranda-777/tecnologia_portocarrero.git
 2. npm install
 3. npm start
 4. Abrir navegador en http://localhost:3000/


## Dependencias

 - [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner): librería de spinners utilizado para tener una animación mientras el contenido carga.

- [dropdown-bootstrap](https://react-bootstrap.netlify.app/components/dropdowns/#dropdowns): librería de componentes utilizada para tener un dropdown