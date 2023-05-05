const persona = {
    nombre : 'Tony',
    edad : '45',
    clave : 'iroman'
};

const { nombre } = persona;   // Si vamos a utilizar el mismo nombre del objeto literal lo dejamos asi.
// console.log(nombre);

const { clave:username } = persona;  // Si queremos almacenar la clave en un variable con un nombre diferente del objeto literal._
// console.log( username );


const imprimePersona = ( {nombre:name, edad, clave} ) => {  // tambien podemos desestructura en los argumentos de una funcion.
    console.log( name, edad );
    return {
        nombreClave: clave,
        edad : edad,
        latlng: {
            lat: 1204.343,
            lng: -1323.2323
        }
    }
}

const {nombreClave, edad, latlng:{lat, lng }} = imprimePersona( persona ); // Si caso de tener un objeto dentro de otro y queremos mostrar los valores de forma independiente los hacemos con esta en 'latlng'.

// console.log( avenger );

// const { nombreClave, edad }  = avenger;
console.log( nombreClave, edad );
console.log(lat, lng);