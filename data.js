module.exports = function () {
    var data = 
{
    conductor: [
        {
            id: 1,
            nombre: "Jose",
            apellido: "Ramirez",
            dni: "60205900",
            genero: "M",
            edad: 40,
            tiempoconduccion: 20,
            direccion: "Av. Brasil 1345 Jesus Maria",
	        verificado: "Si"
        },
        {
            id:2,
            nombre: "Pedro",
            apellido: "Saavedra",
            dni: "45673657",
            genero: "M",
            edad: 35,
            tiempoconduccion: 10,
            direccion: "Av. Ayacucho 443 Magdalena",
	        verificado: "Si"
        },
        {
            id:3,
            nombre: "Juan",
            apellido: "Manrique",
            dni: "41284848",
            genero: "M",
            edad: 25,
            tiempoconduccion: 5,
            direccion: "Av. Javier Prado Oeste 234 San Isidro",
	        verificado: "Si"
        },
        {
            id:4,
            nombre: "Anthony",
            apellido: "Huamán",
            dni: "10484838",
            genero: "M",
            edad: 50,
            tiempoconduccion: 30,
            direccion: "Av. Salaverry 3455 Jesus Maria",
	        verificado: "Si"

        },
        {
            id:5,
            nombre: "Alejandro",
            apellido: "Perez",
            dni: "23848488",
            genero: "M",
            edad: 35,
            tiempoconduccion: 10,
            direccion: "Jr. Cuzco 374",
	        verificado: "Si"
        },
        {
            id:6,
            nombre: "Armando",
            apellido: "Vilca",
            dni: "38488588",
            genero: "M",
            edad: 43,
            tiempoconduccion: 17,
            direccion: "AV. 28 de Julio 456 San Isidro",
	        verificado: "Si"
        },
        {
            id:7,
            nombre: "Maria",
            apellido: "Montero",
            dni: "57375777",
            genero: "F",
            edad: 28,
            tiempoconduccion: 8,
            direccion: "Av. Lampa 353",
	        verificado: "Si"
        },
        {
            id:8,
            nombre: "Oscar",
            apellido: "Zevallos",
            dni: "36546466",
            genero: "M",
            edad: 35,
            tiempoconduccion: 15,
            direccion: "Av. Camelias 365",
	        verificado: "Si"
        },
        {
            id:9,
            nombre: "Alberto",
            apellido: " Medina",
            dni: "40509399",
            genero: "M",
            edad: 30,
            tiempoconduccion: 10,
            direccion: "Av. El Ejercito 374",
	        verificado: "Si"
        },
        {
            id:10,
            nombre: "Guillermo",
            apellido: "Salazar ",
            dni: "38384848",
            genero: "M",
            edad: 50,
            tiempoconduccion: 30,
            direccion: "Av. Angamos 3847",
	        verificado: "Si"
        }
    ],

    padredefamilia: [
        {
            id: 1,
            nombre: "KATY",
            apellido: "VARGAS",
            edad: 40,
            email: "email@hotmail.co",
            telefono: 989373747,
            direccion: "Av. Salaverry3737"
        },
        {
            id: 2,
            nombre: "OSCAR",
            apellido: "NAVARRO",
            edad: 38,
            email: "EMAL@GMAIL.COM",
            telefono: 98374737,
            direccion: "Av. Brasil 4738"
        },
        {
            id: 3,
            nombre: "JOSE",
            apellido: "MONTRO",
            edad: 29,
            email: "EMAIL@GMAIL.COM",
            telefono: 839849993,
            direccion: "AV. AYACUCHO 345"
        },
        {
            id: 4,
            nombre: "MARIA",
            apellido: "RODRIGUEZ",
            edad: 45,
            email: "EMAIL@HOTMAIL.COM",
            telefono: 98383737,
            direccion: "AV. LENCIO PRADO 338"
        },
        {
            id: 5,
            nombre: "EDGAR",
            apellido: "PEREZ",
            edad: 34,
            email: "EMAIL@YAHOO.COM",
            telefono: 964747477,
            direccion: "AV. TACNA 366"
        },
        {
            id: 6,
            nombre: "JUAN",
            apellido: "ORTIZ",
            edad: 35,
            email: "EMAIL@HOTMAIL.COM",
            telefono: 974646666,
            direccion: "AV. BOLOGNESI 3837"
        },
        {
            id: 7,
            nombre: "LIDIA",
            apellido: "VASQUEZ",
            edad: 37,
            email: "EMAIL@HOTMAIL.COM",
            telefono: 973847827,
            direccion: "AV. LOS CLAVELES 464"
        },
        {
            id: 8,
            nombre: "TEODORO",
            apellido: "BERROCAL",
            edad: 45,
            email: "EMAIL@GMAIL.COM",
            telefono: 988376377,
            direccion: "AV. LA MARINA 345"
        },
        {
            id: 9,
            nombre: "WALTER",
            apellido: "FERNANDEZ",
            edad: 37,
            email: "EMAIL@GMAIL.COM",
            telefono: 98393893,
            direccion: "AV.LOS PROCESRES 4646"
        },
        {
            id: 10,
            nombre: "ALEJANDRO",
            apellido: "GARCIA",
            edad: 50,
            email: "EMAIL@HOTMAI.COM",
            telefono: 987867655,
            direccion: "AV. SUCRE 4647"
        }
    ],

    vehiculo: [
        {
            idvehiculo: 1,
            aniomodelo: "2018",
            placa: "KL-4758",
            color: "ROJO",
            estado: "A",
            marca: "TOYOTA",
            caracteristica: "MODELO SEDAN",
            conductor:{idconductor: 1}
        },
        {
            idvehiculo: 2,
            aniomodelo: "2020",
            placa: "MN-3646",
            color: "AZUL",
            estado: "A",
            marca: "HYUNDAI",
            caracteristica: "CAMIONETA",
            conductor:{idconductor: 3}
        },
        {
            idvehiculo: 3,
            aniomodelo: "2010",
            placa: "HY-4747",
            color: "NEGRO",
            estado: "A",
            marca: "VOLVO",
            caracteristica: "CAMION",
            conductor:{idconductor: 2}
        },
        {
            idvehiculo:4,
            aniomodelo: "2015",
            placa: "JU-2948",
            color: "VERDE",
            estado: "A",
            marca: "TOYOYAL",
            caracteristica: "CAMIONETA",
            conductor:{idconductor: 4}
        },
        {
            idvehiculo:5,
            aniomodelo: "2017",
            placa: "HY-3746",
            color: "ACERO",
            estado: "A",
            marca: "HYUNDAI",
            caracteristica: "CAMIONETA",
            conductor:{idconductor: 5}
        },
        {
            idvehiculo:6,
            aniomodelo: "2010",
            placa: "JY-3847",
            color: "NEGRO",
            estado: "A",
            marca: "TOYOTA",
            caracteristica: "CAMIONETA",
            conductor:{idconductor: 6}
        },
        {
            idvehiculo:7,
            aniomodelo: "2012",
            placa: "JUYRE",
            color: "AZUL",
            estado: "A",
            marca: "TOYOTA",
            caracteristica: "CAMIONETA",
            conductor:{idconductor: 7}
        },
        {
            idvehiculo:8,
            aniomodelo: "2014",
            placa: "JYU-3737",
            color: "VERDE",
            estado: "A",
            marca: "TOYOTA",
            caracteristica: "CAMIONETA",
            conductor:{idconductor: 8}
        },
        {
            idvehiculo:9,
            aniomodelo: "2022",
            placa: "EY-3837",
            color: "MARRON",
            estado: "A",
            marca: "TOYOTA",
            caracteristica: "CAMIONETA",
            conductor:{idconductor: 9}
        },
        {
            idvehiculo:10,
            aniomodelo: "2021",
            placa: "HY-4746",
            color: "AZUL",
            estado: "A",
            marca: "VOLVO",
            caracteristica: "CAMIONETA",
            conductor:{idconductor: 10}
        }
    ],

    solicitud: [
	{	
	idsolicitud:1,
	precio: 25,
	duracion: "1 mes",
	fecha:140922,
	descripcion:"Llevar a niño de 15 años a escuela",
	vehiculo:{idvehiculo: 1},
	conductor:{idconductor: 1},
	padredefamilia:{idpadre: 1}
	},	
	{	
	idsolicitud:2,
	precio: 30,
	duracion: "2 meses",
	fecha:150822,
	descripcion:"Llevar a niño de 8 años a escuela",
	vehiculo:{idvehiculo: 2},
	conductor:{idconductor: 2},
	padredefamilia:{idpadre: 2}
	},
	{	
	idsolicitud:3,
	precio: 80,
	duracion: "1 mes",
	fecha:140721,
	descripcion:"Llevar a dos niños a la  escuela",
	vehiculo:{idvehiculo: 3},
	conductor:{idconductor: 3},
	padredefamilia:{idpadre: 3}
	},
	{	
	idsolicitud:4,
	precio: 50,
	duracion: "1 mes",
	fecha:150721,
	descripcion:"Llevar a un niño a la  escuela Boston",
	vehiculo:{idvehiculo: 4},
	conductor:{idconductor: 4},
	padredefamilia:{idpadre: 4}
	},
	{	
	idsolicitud:5,
	precio: 70,
	duracion: "3 meses",
	fecha:150721,
	descripcion:"Llevar a dos niños a la  escuela Boston",
	vehiculo:{idvehiculo: 5},
	conductor:{idconductor: 5},
	padredefamilia:{idpadre: 5}
	},
	{	
	idsolicitud:6,
	precio: 70,
	duracion: "3 meses",
	fecha:150721,
	descripcion:"Llevar a dos niños a la  escuela Boston",
	vehiculo:{idvehiculo: 6},
	conductor:{idconductor: 6},
	padredefamilia:{idpadre: 6}
	},
	{	
	idsolicitud:7,
	precio: 60,
	duracion: "2 meses",
	fecha:160620,
	descripcion:"Llevar a dos niños a la  escuela inicial",
	vehiculo:{idvehiculo: 7},
	conductor:{idconductor: 7},
	padredefamilia:{idpadre: 7}
	},
	{	
	idsolicitud:8,
	precio: 50,
	duracion: "1 mes",
	fecha:150620,
	descripcion:"Llevar a dos niños a la  escuela inicial",
	vehiculo:{idvehiculo: 8},
	conductor:{idconductor: 8},
	padredefamilia:{idpadre: 8}
	},
	{	
	idsolicitud:9,
	precio: 50,
	duracion: "1 mes",
	fecha:150620,
	descripcion:"Llevar a dos niños a la  escuela inicial",
	vehiculo:{idvehiculo: 9},
	conductor:{idconductor: 9},
	padredefamilia:{idpadre: 9}
	},
	{	
	idsolicitud:10,
	precio: 50,
	duracion: "1 mes",
	fecha:150620,
	descripcion:"Llevar a dos niños a la  escuela inicial",
	vehiculo:{idvehiculo: 10},
	conductor:{idconductor: 10},
	padredefamilia:{idpadre: 10}
	},
    ],
    viajes: [
	{	
	idviaje:1,
	pasajeros: 2,
	direccion: "Las  olvias 20",
	solicitud:{idsolicitud: 1}
	},
	{	
	idviaje:2,
	pasajeros: 3,
	direccion: "Las palmeras 13",
	solicitud:{idsolicitud: 2}
	},
	{	
	idviaje:3,
	pasajeros: 1,
	direccion: "Las lomas 2",
	solicitud:{idsolicitud: 3}
	},
	{	
	idviaje:4,
	pasajeros: 2,
	direccion: "Las lomas 51",
	solicitud:{idsolicitud: 4}
	},
	{	
	idviaje:5,
	pasajeros: 2,
	direccion: "Olmas 20",
	solicitud:{idsolicitud: 5}
	},
	{	
	idviaje:6,
	pasajeros: 5,
	direccion: "Olmas 15",
	solicitud:{idsolicitud: 6}
	},
	{
	idviaje:7,
	pasajeros: 5,
	direccion: "Chorrillos",
	solicitud:{idsolicitud: 7}
	},
	{
	idviaje:8,
	pasajeros: 4,
	direccion: "Colonial",
	solicitud:{idsolicitud: 8}
	},
	{
	idviaje:9,
	pasajeros: 2,
	direccion: "Pizarro",
	solicitud:{idsolicitud: 9}
	},
	{
	idviaje:10,
	pasajeros: 3,
	direccion: "Pueblo Libre",
	solicitud:{idsolicitud: 10}
	},
    ],
    estado: [
	{	
	idestado:1,
	caracteristica: "Buen estado",
	tiemporestante: 20,
	comentarios: "Todo en orden",
	viajes:{idviaje: 1}
	},
	{	
	idestado:2,
	caracteristica: "Mal estado",
	tiemporestante: 20,
	comentarios: "Un niño tiene fiebre",
	viajes:{idviaje: 2}
	},
	{	
	idestado:3,
	caracteristica: "Estado promedio",
	tiemporestante: 10,
	comentarios: "Un niño esta incomodo",
	viajes:{idviaje: 3}
	},
	{	
	idestado:4,
	caracteristica: "Buen estado",
	tiemporestante: 5,
	comentarios: "Todo en orden",
	viajes:{idviaje: 4}
	},
	{	
	idestado:5,
	caracteristica: "Buen estado",
	tiemporestante: 20,
	comentarios: "Todo en orden",
	viajes:{idviaje: 5}
	},
	{	
	idestado:6,
	caracteristica: "Mal estado",
	tiemporestante: 20,
	comentarios: "Niño se puso mal",
	viajes:{idviaje: 6}
	},
	{	
	idestado:7,
	caracteristica: "Buen estado",
	tiemporestante: 2,
	comentarios: "Todo en orden",
	viajes:{idviaje: 7}
	},
	{	
	idestado:8,
	caracteristica: "Buen estado",
	tiemporestante: 10,
	comentarios: "Todo en orden",
	viajes:{idviaje: 8}
	},
	{	
	idestado:9,
	caracteristica: "Mal estado",
	tiemporestante: 8,
	comentarios: "Niño se puso mal",
	viajes:{idviaje: 9}
	},
	{	
	idestado:10,
	caracteristica: "Buen estado",
	tiemporestante: 30,
	comentarios: "Todo en orden",
	viajes:{idviaje: 10}
	},
    ],
    ubicacion:[
        {
        id:1,
        distrito: "ate",
        hora: 0564,
        },
        {
        id:2,
        distrito: "breña",
        hora: 0210,
        },
        {
        id:3,
        distrito: "barranco",
        hora: 1500,
        },
        {
        id:4,
        distrito: "lince",
        hora: 1430,
        },
        {
        id:5,
        distrito: "molina",
        hora: 1320,
        },
        {
        id:6,
        distrito: "lima",
        hora: 1510,
        },
        {
        id:7,
        distrito: "rimac",
        hora: 1454,
        },
        {
        id:8,
        distrito: "santa anita",
        hora: 0820,
        },
        {
        id:9,
        distrito: "lima",
        hora: 0910,
        },
        {
        id:10,
        distrito: "molina",
        hora: 0730,
        }
    ],
    historialdeviajes:[
        {
        idhistorial:1,
        observaciones: "Fue un buen viaje",
        viajes:{idviaje:1}
        },
        {
        idhistorial:2,
        observaciones: "Fue un viaje malo",
        viajes:{idviaje:2}
        },
        {
        idhistorial:3,
        observaciones: "Fue un viaje promedio",
        viajes:{idviaje:3}
        },
            {
        idhistorial:4,
        observaciones: "Fue un viaje promedio sin observaciones",
        viajes:{idviaje:4}
        },
            {
        idhistorial:5,
        observaciones: "Fue un buen viaje",
        viajes:{idviaje:5}
        },
            {
        idhistorial:6,
        observaciones: "Fue un buen viaje",
        viajes:{idviaje:6}
        },
            {
        idhistorial:7,
        observaciones: "Fue un buen viaje",
        viajes:{idviaje:7}
        },
            {
        idhistorial:8,
        observaciones: "Fue un buen viaje",
        viajes:{idviaje:8}
        },
            {
        idhistorial:9,
        observaciones: "Fue un buen viaje",
        viajes:{idviaje:9}
        },
            {
        idhistorial:10,
        observaciones: "Fue un mal viaje",
        viajes:{idviaje:10}
        }
    ],
}
return data
}
