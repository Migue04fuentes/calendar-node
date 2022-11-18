// importación de todas las citas para mostrar en el calendario
import citas from '/agenda' assert{ type: "json"};

for(const citas2 of citas){
console.log(citas2);
}
let cont = citas[0].fecha;
console.log(cont);
function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

//Días
var hoy = new Date();
var dd = hoy.getDate();
if (dd < 10) {
    dd = '0' + dd;
}

//Meses
if (mm < 10) {
    mm = '0' + mm;
}

var mm = hoy.getMonth() + 1;
var yyyy = hoy.getFullYear();

dd = addZero(dd);
mm = addZero(mm);

$(document).ready(function () {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: yyyy + '-' + mm + '-' + dd,
        buttonIcons: true, // show the prev/next text
        weekNumbers: false,
        editable: true,
        eventLimit: true, // allow "mo,re" link when too many events 
        events: citas,
        //Click para agregar cita
        dayClick: function (date, jsEvent, view) {
            $('#exampleModal').modal('show');
            // console.log(date.format());
            // console.log(date);

            //Fecha
            let fechaparcial = date.format().substr(0, 10);


            //Hora Inicial
            let hora = date.hour();
            let min = date.minutes();
            if (hora < 10) {
                hora = '0' + hora;
            }
            if (min < 10) {
                min = '0' + min;
            }
            let horainicial = hora + ':' + min;
            document.getElementById('fecha').value = fechaparcial;// alert('Has hecho click en: ' + date.format());
            document.getElementById('hora').value = horainicial;
        },
        //click en cita asignada
        eventClick: function (calEvent, jsEvent, view) {
            $('#event-title').text(calEvent.title);
            $('#event-description').html(calEvent.description);
            $('#modal-event').modal();
        },
    });
});

let btnguardarcita = document.getElementById("btn_guardar_cita");
let lista = [];

btnguardarcita.addEventListener("click", function () {
    let inputdoctor = document.getElementById('namedoctor').value;
    let inputdescription = document.getElementById('description').value;
    let fecha = document.getElementById('fecha').value;
    lista.push({
        title: inputdoctor,
        description: inputdescription,
        start: fecha
    });
    console.log(lista);
});



/*
[
            {
                title: 'All Day Event',
                description: 'Lorem ipsum 1...',
                start: yyyy + '-' + mm + '-01',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Long Event',
                description: 'Lorem ipsum 2...',
                start: yyyy + '-' + mm + '-07',
                end: yyyy + '-' + mm + '-10',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Día festivo',
                description: 'Día',
                start: yyyy + '-' + mm + '-13T13:00:00',
                color: '#3A87AD',
                textcolor: '#ffffff',
            },
            {
                title: 'Repeating Event',
                description: 'Lorem ipsum 3...',
                start: yyyy + '-' + mm + '-09T16:00:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Repeating Event',
                description: 'Lorem ipsum 4...',
                start: yyyy + '-' + mm + '-16T16:00:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Conference',
                description: 'Lorem ipsum 5...',
                start: yyyy + '-' + mm + '-11',
                end: yyyy + '-' + mm + '-13',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Meeting',
                description: 'Lorem ipsum 6...',
                start: yyyy + '-' + mm + '-12T10:30:00',
                end: yyyy + '-' + mm + '-12T12:30:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Lunch',
                description: 'Lorem ipsum 7...',
                start: yyyy + '-' + mm + '-12T12:00:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Meeting',
                description: 'Lorem ipsum 8...',
                start: yyyy + '-' + mm + '-12T14:30:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Happy Hour',
                description: 'Lorem ipsum 9...',
                start: yyyy + '-' + mm + '-12T17:30:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Dinner',
                description: 'Lorem ipsum 10...',
                start: yyyy + '-' + mm + '-12T20:00:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Birthday Party',
                description: 'Lorem ipsum 11...',
                start: yyyy + '-' + mm + '-13T07:00:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Event with link',
                description: 'Lorem ipsum 12...',
                start: yyyy + '-' + mm + '-28',
                color: '#3A87AD',
                textColor: '#ffffff',
            }
        ]
*/