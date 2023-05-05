
/* con Async */
//  asyn retorna una promesa
//  await, nos ayuda a trabajar como  el codigo como si  fueran asincronico
const getImagen = async() => {

    try {
        const apiKey = 'EFF7byeo9XzWR29C6K6EogIoklPfcgt8';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
        // const {datos} = data;
        // console.log(data);
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
            
    } catch (error) {
        console.error(error);        
    }

}

getImagen();




/* con promesas */
// const getImagenPromesa = () =>  
    // new Promise(resolve => resolve('https://holamundo.com')  );
// 
// getImagenPromesa().then( console.log );




// const url = 'api.giphy.com/v1/gifs/random';
// const apiKey = 'EFF7byeo9XzWR29C6K6EogIoklPfcgt8';
// 
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
// 
// peticion
    // .then( resp => resp.json() )
    // .then( ({data}) => {
        // console.log( data );
        // Desestructuracion de objetos.
        // const { url } = data.images.original;
        // const img = document.createElement('img');
        // img.src = url;
// 
        // document.body.append(img);
    // })
// .catch((erro) => console.warn );
