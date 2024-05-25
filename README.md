# busqueda_cliente
Página web donde tenemos una serie de tarjetas de clientes, los cuales se encuentran en una lista de clientes en el main.js
Cuando cargamos la página se imprimen en pantalla todas las tarjetas de los clientes.

En la página tenemos una barra de búsqueda que nos filtra las tarjetas por el nombre que escribimos en la barra de busqueda.
Cuando hacemos la búsqueda lo que ocurre en el código es que de primeras borramos todo el contenido del container de las tarjetas, recorremos la lista de usuarios y comprobamos 
si el nombre concuerda lo guarda en otra lista, la cual, le llamamos nombreFiltro.

Y procedemos a imprimir la lista del nombreFiltro.

Las etiquetas usadas es .on() en la clase .barra(Que es el input de busqueda)
esto nos permite que la barra de búsqueda funcione correcta y dinamicamente sin tener que utilizar ningún botón.

Aparte Ahora en la versión 1.1

Tenemos nuevas funcionalidades como poder eliminar de la lista a nuevos clientes con un botón situado en cada una de las tarjetas de cada cliente.
Por otro lado tenemos un método para poder añadir nuevos clientes a nuestra lista pero tambien tenemos presente que todavía hay que mejorar con respecto al trato que le damos a la ruta de las imágenes debido a que no se está comportando como se debe,
por ende hemos tomado la decisión de darle una "plantilla" es decir, darle una imagen por defecto para cada uno de los nuevos clientes.
