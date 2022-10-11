// Array Carrito //

const entradasParaVender = [
    {
        entrada: 'LOST KIDS',
        precio: 10.0,
        tikect: 1,
        fecha: 'Nombiembre',
    },
    {
        entrada: 'LOST KIDS',
        precio: 10.0,
        tikect: 1,
        fecha: 'Enero',
    },
    {
        entrada: 'LOST KIDS',
        precio: 15.0,
        tikect: 1,
        fecha: 'Diciembre',
    },
];

let carrito = [];

let usuarioname = prompt('Porfavor Ingresa su nombre');
alert(
    `Hola ${usuarioname} bienvenido a su compra de tickets Online Para Lost Kids .\n A continuacion les mostraremos las fechas disponibles`
);

function menu() {
    let seleccionar = parseInt(
        prompt(
            `${usuarioname} seleccione una opcion:\n 1-Noviembre\n 2 - Diciembre\n 3 - Enero `
        )
    );
    while (seleccionar !== 1 && seleccionar !== 2 && seleccionar !== 3) {
        alert('Ingrese una opcion correcta');
        seleccionar = parseInt(
            prompt(
                `${usuarioname} seleccione una opcion:\n 1-Noviembre\n2 - Diciembre\n 3 - Enero`
            )
        );
    }
    return seleccionar;
}

function entradas() {
    entradasParaVender.map((e) => {
        console.log(`Nombre: ${e.entrada} Fecha: ${e.fecha} PRECIO: ${e.precio}`);
    });

    let comparTicket = parseInt(
        prompt(
            'Elija su Ticket\nOpcion 1 - Noviembre\nOpcion 2 - Diciembre\nOpcion 3 - Enero'
        )
    );
    if (comparTicket === 1 || comparTicket === 2 || comparTicket === 3) {
        switch (comparTicket) {
            case 1:
                entrada = 'LOST KIDS';
                precio = 10.0;
                tikect = 1;
                fecha = 'Nombiembre';
                break;

            case 2:
                entrada = 'LOST KIDS';
                precio = 10.0;
                tikect = 1;
                fecha = 'Enero';
                break;
            case 3:
                entrada = `LOST KIDS`;
                precio = `15.000`;
                tikect = `1`;
                fecha = `Diciembre`;
                break;
        }
        carrito.push({ entrada, precio, fecha });
        console.log(carrito);
    } else {
        alert('No quedaron Tickets para esa fecha!!!');
    }
    let ticketsComprados = carrito.forEach((tick) => {
        alert(
            `COMPRASTE: ${tick.entrada}  a un valor de $${tick.precio} para la fecha de: ${tick.fecha}`
        );
    });
    alert(`${usuarioname} Muchas gracias por tu compra! vuelve pronto!`);
}

const seleccionar = menu();
switch (seleccionar) {
    case 1:
        entradas();
        break;
    case 2:
        entradas();
        break;
    case 3:
        entradas();
        break;
}

