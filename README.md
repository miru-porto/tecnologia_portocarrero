# ✨Bijouterie

Ecommerce desarrollado en React como parte del proyecto correspondiente al curso de ReactJs en CoderHouse, que se encarga de la comercialización de accesorios y adornos. Hecho por Miranda Portocarrero.

## Instrucciones de Instalación
```
git clone https://github.com/Miranda-777/tecnologia_portocarrero.git
npm install
npm start
```
Abrir navegador en http://localhost:3000/tecnologia_portocarrero

## Aclaraciones

-   El diseño está basado en **Todomoda**.
-   Se agrega **LocalStorage** para mantener el cart cuando se actualice la página.

## Routes
|Route| Descripción  |
|--|--|
| /tecnologia_portocarrero | Home y listado de todos los productos.|
| /item/:itemId  |Detalles del producto según el id del item. En caso de que el produtco no exista en la base de datos, se avisa al usuario al respecto.| 
|/category/:categoryId|Listado de productos según categoría.|
|/cart|Carrito en el que se muestra un resumen del pedido del cliente.|
|/checkout|Despacho del cliente, en el que se registra su información en la base de datos.|

## Recorrido
![](https://github.com/Miranda-777/tecnologia_portocarrero/blob/master/public/gif/recorridoEcommerceBijouterie2021byMirandaPortocarrero.gif)

## Dependencias

 - [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner): librería de spinners utilizado para tener una animación mientras el contenido carga.

- [dropdown-bootstrap](https://react-bootstrap.netlify.app/components/dropdowns/#dropdowns): librería de componentes utilizada para tener un dropdown.

