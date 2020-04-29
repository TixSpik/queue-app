var socket = io()

var lblTck1 = $('#lblTicket1')
var lblTck2 = $('#lblTicket2')
var lblTck3 = $('#lblTicket3')
var lblTck4 = $('#lblTicket4')

var lblEsc1 = $('#lblEscritorio1')
var lblEsc2 = $('#lblEscritorio2')
var lblEsc3 = $('#lblEscritorio3')
var lblEsc4 = $('#lblEscritorio4')

var lblTickets = [lblTck1, lblTck2, lblTck3, lblTck4]
var lblEscritorios = [lblEsc1, lblEsc2, lblEsc3, lblEsc4]

socket.on('estadoActual', function (data) {
    actualizaHTML(data.ultimos4)
})

function actualizaHTML(ultimos4) {
    for (let i = 0; i < ultimos4.length; i++) {
        lblTickets[i].text('Ticket ' + ultimos4[i].numero)
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio)
    }
}

socket.on('ultimos4', function (data) {
    console.log(data)
    var audio = new Audio('audio/new-ticket.mp3')
    audio.play()
    actualizaHTML(data.ultimos4)
})