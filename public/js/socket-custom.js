var socket = io();
//.on es para escuchar
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//.emit es para emitir informacion
socket.emit('enviarMensaje', {
    usuario: 'Edgardo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});