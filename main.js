$(document).ready(function(){

    var usuarios = [
        {
            "imagen":"./imagenes/stikerGato.jfif",
            "nombre":"David",
            "apellidos":"Priego Puga",
            "descripcion":"Alumno de Aula Estudio."
        },
        
        {
            "imagen":"./imagenes/stikerGato2.jfif",
            "nombre":"Agustin",
            "apellidos":"Alonso Martinez",
            "descripcion":"Estudiante de Aula Estudio"
        },
        
        {
            "imagen":"./imagenes/stikerGato3.jfif",
            "nombre":"Jorge",
            "apellidos":"Arias Rodriguez",
            "descripcion":"Estudiante de Tanatopraxia"
        },
        
        {
            "imagen":"./imagenes/gato_llorando.jpeg",
            "nombre":"Marta",
            "apellidos":"Gomez Perez",
            "descripcion":"Actirz de Doblaje"
        },
        
        {
            "imagen":"./imagenes/michi_llorando2.webp",
            "nombre":"Diego",
            "apellidos":"Perez Vila",
            "descripcion":"Estudiante de Aula Estudio"
        },
        {
            "imagen":"./imagenes/stikerGato4.jfif",
            "nombre":"Bea",
            "apellidos":"Gregores Almeida",
            "descripcion":"Ilustradora"
        },
        {
            "imagen":"./imagenes/stikerGAto5.webp",
            "nombre":"Antonio",
            "apellidos":"Priego Justo",
            "descripcion":"Ya jubilado"
        },
        {
            "imagen":"./imagenes/stikerGato6.jfif",
            "nombre":"Mael",
            "apellidos":"Alonso Abreu",
            "descripcion":"Trabajador de Copiadoiro"
        }
    ];
   

    for(let i = 0; i<usuarios.length; i++){
        $('.container').prepend('<div class="card"><div class="info"><img src="'+ usuarios[i].imagen +'" alt="icono"><div class="datos"><div class="nombre">'+ usuarios[i].nombre +'</div><div class="apellidos">'+usuarios[i].apellidos+'</div></div></div><div class="container_desc"><div class="desc">'+usuarios[i].descripcion+'</div></div></div>');
    }

    $('.barra').on('input',function(){
        var nombreBusqueda = $(this).val();
        var usuariosFiltrados = [];

        $('.container').empty();

        if(nombreBusqueda){
            usuariosFiltrados = usuarios.filter(usuario => usuario.nombre === nombreBusqueda);
            for(let i =0; i<usuariosFiltrados.length; i++){
                $('.container').prepend('<div class="card"><div class="info"><img src="'+ usuariosFiltrados[i].imagen +'" alt="icono"><div class="datos"><div class="nombre">'+ usuariosFiltrados[i].nombre +'</div><div class="apellidos">'+usuariosFiltrados[i].apellidos+'</div></div></div><div class="container_desc"><div class="desc">'+usuariosFiltrados[i].descripcion+'</div></div></div>');
            }
        }else{
            for(let i = 0; i<usuarios.length; i++){
                $('.container').prepend('<div class="card"><div class="info"><img src="'+ usuarios[i].imagen +'" alt="icono"><div class="datos"><div class="nombre">'+ usuarios[i].nombre +'</div><div class="apellidos">'+usuarios[i].apellidos+'</div></div></div><div class="container_desc"><div class="desc">'+usuarios[i].descripcion+'</div></div></div>');
            }
        }
    })
});

