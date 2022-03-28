# Sobre la Página: 
### Se trata de un Ecommerce, que toma productos de una fakeAPI,y los visualiza en pantalla con sus distintos datos.
### Además permite filtrar los productos por categorías, renderizando solo aquellos productos pertenecientes a una determinada categoría.
### También permite entrar en el detalle de un producto, para que el usuario pueda tener mas información sobre el mismo, y para que pueda acceder al contador, esto para poder seleccionar la cantidad  que se quiera comprar(el contador no permite agregar mas productos que los que haya en stock).
### La página cuenta también con un spinner de carga que se muestra mientras la página se encuentra cargando los productos.

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

