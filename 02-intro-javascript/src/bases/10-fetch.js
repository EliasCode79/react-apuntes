
const url = 'api.giphy.com/v1/gifs/random';
const apiKey = 'EFF7byeo9XzWR29C6K6EogIoklPfcgt8';


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )
    .then( ({data}) => {
        // console.log( data );
        // Desestructuracion de objetos.
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
.catch((erro) => console.warn );
