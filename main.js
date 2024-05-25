$(document).ready(function () {

    var usuarios = [
        {
            "imagen": "./imagenes/stikerGato.jfif",
            "nombre": "David",
            "uid": "1",
            "apellidos": "Priego Puga",
            "descripcion": "Alumno de Aula Estudio."
        },

        {
            "imagen": "./imagenes/stikerGato2.jfif",
            "nombre": "Agustin",
            "uid": "2",
            "apellidos": "Alonso Martinez",
            "descripcion": "Estudiante de Aula Estudio"
        },

        {
            "imagen": "./imagenes/stikerGato3.jfif",
            "nombre": "Jorge",
            "uid": "3",
            "apellidos": "Arias Rodriguez",
            "descripcion": "Estudiante de Tanatopraxia"
        },

        {
            "imagen": "./imagenes/gato_llorando.jpeg",
            "nombre": "Marta",
            "uid": "4",
            "apellidos": "Gomez Perez",
            "descripcion": "Actirz de Doblaje"
        },

        {
            "imagen": "./imagenes/michi_llorando2.webp",
            "nombre": "Diego",
            "uid": "5",
            "apellidos": "Perez Vila",
            "descripcion": "Estudiante de Aula Estudio"
        },
        {
            "imagen": "./imagenes/stikerGato4.jfif",
            "nombre": "Bea",
            "uid": "6",
            "apellidos": "Gregores Almeida",
            "descripcion": "Ilustradora"
        },
        {
            "imagen": "./imagenes/stikerGAto5.webp",
            "nombre": "Antonio",
            "uid": "7",
            "apellidos": "Priego Justo",
            "descripcion": "Ya jubilado"
        },
        {
            "imagen": "./imagenes/stikerGato6.jfif",
            "nombre": "Mael",
            "uid": "8",
            "apellidos": "Alonso Abreu",
            "descripcion": "Trabajador de Copiadoiro"
        }
    ];

    // Inicializar usuariosCompletos
    var usuariosCompletos = usuarios.slice();

    $('.containerForm').hide();

    // Función para mostrar usuarios
    function mostrarUsuarios(usuariosAMostrar) {
        $('.container').empty(); // Limpiar el contenedor antes de mostrar los usuarios
        for (let i = 0; i < usuariosAMostrar.length; i++) {
            $('.container').append('<div class="card"><div class="info"><img src="' + usuariosAMostrar[i].imagen + '" alt="icono"><div class="datos"><div class="nombre">' + usuariosAMostrar[i].nombre + ' UID:' + usuariosAMostrar[i].uid + '</div><div class="apellidos">' + usuariosAMostrar[i].apellidos + '</div></div></div><div class="container_desc"><div class="desc">' + usuariosAMostrar[i].descripcion + '</div><button class="eliminar" data-uid="' + usuariosAMostrar[i].uid + '">X</button></div></div>');
        }
    }

    mostrarUsuarios(usuarios);

    // AÑADIR NUEVO CLIENTE.
    $('.añadirCliente').click(function () {
        $('.container').hide();
        $('.containerForm').show();
    });

    $('.añadir').click(function () {
        var nuevoCliente = {
            "imagen": "./imagenes/icono_usuario.png",
            "nombre": $('.nombreCliente').val(),
            "apellidos": $('#apellidos').val(),
            "descripcion": $('.descripcionCliente').val(),
            "uid": (usuariosCompletos.length + 1).toString() // Generar un nuevo UID para el usuario
        };

        console.log(nuevoCliente);

        usuariosCompletos.push(nuevoCliente);
        // Mostrar los usuarios actualizados
        mostrarUsuarios(usuariosCompletos);

        $('.containerForm').hide();
        $('.container').show();
    });

    // FILTRADO
    $('.barra').on('input', function () {
        let nombreUsuario = $(".barra").val();
        const usuariosFiltrados = usuariosCompletos.filter(usuario => usuario.nombre.toLowerCase().includes(nombreUsuario.toLowerCase()));
        // función de filtrar
        mostrarUsuarios(usuariosFiltrados);
    });

    // ELIMINAR
    $('.container').on('click', '.eliminar', function () {
        let idCarta = $(this).data('uid');
        usuarios = usuarios.filter(usuario => usuario.uid !== idCarta);
        // Actualizar la lista completa de usuarios después del borrado
        usuariosCompletos = usuariosCompletos.filter(usuario => usuario.uid !== idCarta);
        $(this).closest('.card').remove();
    });

});
