
const personaje = ['goku', 'vegeta', 'trunks'];

const [ ,,p1 ] = personaje;

// console.log(p1);

const retornarArreglo = () => {
    return [123,'abc'];
}

const [ letras, numeros ] = retornarArreglo();
console.log( letras );
console.log( numeros );

const usoEstado = (valor) => {
    return [ valor, () => {console.log('hola mundo')}];
}

const [nombre, setNombre] = usoEstado('elias');
console.log(nombre);
setNombre();