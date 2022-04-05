# Sobre la Página: 
### Se trata de una simulación de un Ecommerce, que toma productos de una base de datos realizada en firebase/firestore ,y los visualiza en pantalla con sus distintos datos.
### Además permite filtrar los productos por categorías, renderizando solo aquellos productos pertenecientes a una determinada categoría.
### También permite entrar en el detalle de un producto, para que el usuario pueda tener mas información sobre el mismo, y para que pueda acceder al contador, esto para poder seleccionar la cantidad  que se quiera comprar(el contador no permite agregar mas productos que los que haya en stock). Al ir agregando items al carrito, al lado del símbolo del carrito (en el navbar) se visualizara un contador que mostrará la suma de todas las cantidades de todos los productos seleccionados.
### La página cuenta también con un spinner de carga que se muestra mientras la página se encuentra cargando los productos.
### Una vez que se tienen productos en el carrito, al ingresar en el mismo, se tienen diferentes funciones como pueden ser las de borrar un producto del carrito o borrarlos todos, además se muestran los precios y cantidades parciales de cada producto y los precios y cantidades totales de toda la orden de compra.
### El botón Terminar compra del carrito redirige al usuario a una página con un formulario que deberá completar y enviar para poder finalizar con la compra, una vez finalizado y enviado el formulario, los datos del formulario y de los productos comprados se envían a una base de datos en firebase/firestore y se almacenan ahí.

||

# GIF con ejemplo de la navegación en el sitio:
![](public/multimedia/GIF-ecommmerce.gif)

||
# Estructura del sitio web:

### Index.js (contiene el render) => App.js(componente hijo)

### App.js contiene los componentes: NavBar.js, ItemListContainer.js y ItemDetailContainer.js, Footer.js

## Componentes e hijos:
||
### NavBar.js => CarWidget.js
||
### ItemListContainer.js :
### => ItemList.js => Item.js 
### => Spinner.js
||
### ItemDetailContainer.js:
### => ItemDetail.js => ItemCount.js
||
### Footer.js (sin componentes hijos)

