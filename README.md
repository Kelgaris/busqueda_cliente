# busqueda_cliente
Página web donde tenemos una serie de tarjetas de clientes, los cuales se encuentran en una lista de clientes en el main.js
Cuando cargamos la página se imprimen en pantalla todas las tarjetas de los clientes.

En la página tenemos una barra de búsqueda que nos filtra las tarjetas por el nombre que escribimos en la barra de busqueda.
Cuando hacemos la búsqueda lo que ocurre en el código es que de primeras borramos todo el contenido del container de las tarjetas, recorremos la lista de usuarios y comprobamos 
si el nombre concuerda lo guarda en otra lista, la cual, le llamamos nombreFiltro.

Y procedemos a imprimir la lista del nombreFiltro.

Las etiquetas usadas es .on() en la clase .barra(Que es el input de busqueda)
esto nos permite que la barra de búsqueda funcione correcta y dinamicamente sin tener que utilizar ningún botón.
