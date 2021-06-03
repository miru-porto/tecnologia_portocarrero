# ✨Bijouterie

Ecommerce desarrollado en React como parte del proyecto correspondiente al curso de ReactJs en CoderHouse, que se encarga de la comercialización de accesorios y adornos.

## Instrucciones de Instalación
```
git clone https://github.com/Miranda-777/tecnologia_portocarrero.git
npm install
npm start
```
Abrir navegador en http://localhost:3000/

## Aclaraciones

-   El diseño está basado en **Todomoda**.

## Routes
|Route| Descripción  |
|--|--|
| / | Home y listado de todos los productos.|
| /item/:itemId  |Detalles del producto según el id del item. En caso de que el produtco no exista en la base de datos, se avisa al usuario al respecto.| 
|/category/:categoryId|Listado de productos según categoría.|
|/cart|Carrito en el que se muestra un resumen del pedido del cliente.|
|/checkout|Despacho del cliente, en el que se registra su información en la base de datos.|

## Recorrido
gif con el recorrido del ecommerce

## Dependencias

 - [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner): librería de spinners utilizado para tener una animación mientras el contenido carga.

- [dropdown-bootstrap](https://react-bootstrap.netlify.app/components/dropdowns/#dropdowns): librería de componentes utilizada para tener un dropdown.

