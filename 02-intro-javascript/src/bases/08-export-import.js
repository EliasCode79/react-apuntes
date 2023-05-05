 // las importaciones por defecto van sin llaves y las q no son por defectos(individuales) van entre llaves {}.
import  heroes, { nombres }  from '../data/heroes'; 

// console.log(heroes);

const getHeroeById = ( id ) => {
    return heroes.find(( heroe ) =>  heroe.id === id  );
}

// console.log( nombres );
// console.log( getHeroeById(5) );


const getHeroeByOwner = ( owner ) => {
    return heroes.filter(( heroe ) =>  heroe.owner === owner  );
}

// console.log( getHeroeByOwner('DC') );

export {
    getHeroeById,
    getHeroeByOwner
}
