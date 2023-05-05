
import { getHeroeById, getHeroeByOwner} from './bases/export-import';
import heroes from './data/heroes';



/*  Asi se crea una promesa y esta se ejecuta automaticamente (si no tiene los argumentos de 'resolve' y 'reject')  */
// const promesa = new Promise( ( resolve, reject )=> {

//     setTimeout( () => {

//         const p1 = getHeroeById(2);
//         resolve( p1 );
//         // reject('No se pudo encontrar el heroe');
//     }, 2000 );
    
// });

// promesa.then( ( heroe )=> {
//     console.log('Heroe', heroe);
// })
// .catch( (err) => console.warn( err ));



const getHeroeByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject )=> {

        setTimeout( () => {
    
            const personaje = getHeroeById( id );
            if( personaje !== undefined ){
                resolve( personaje );
            }else{
                reject('No se pudo encontrar el personaje');
            }

        }, 2000 );
        
    });
    
}

getHeroeByIdAsync(1)
    .then( (heroe) => console.log(heroe) )    // aca podriamo escribir: "console.log" y imprimiria el primer argumento q se le envia
    .catch( (err) => console.log(err) );   // dentro de las parentesis podriamos escribir "console.warn" y imprimir el primer argumento q sea le envia, asi envitamos crear una funcion(callback).

