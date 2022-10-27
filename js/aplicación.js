'uso estricto'

$(documento).listo(función() {


    $('cuerpo').en({
        'movimiento del ratón': función(e) {
            consola _ claro()
            sea​​ clienteX = e.evento original.clienteX
            sea​​ clienteY = e.evento original.clienteY
            $('#cursor').CSS({
                'izquierda': (clienteX - 40) + 'px',
                'superior': (clienteY - 40) + 'px'
            })
        }
    })

    $('.a').en({
        'mouseover': función() {
            $('#cursor').añadirClase('mini')
        },
        'mouseout': función() {
            $('#cursor').eliminarClase('mini')
        },
    })

})