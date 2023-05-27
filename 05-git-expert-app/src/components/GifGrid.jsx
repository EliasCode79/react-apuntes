import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
	// este hooks nos ayuda a dispara un evento secuandario(ej: cuando se creo por primera vez el componenete, cuando cambia el estado, etc), en este caso vamos hacer q este hook se ejecute cuando se crea el este componente, para esto le pasamos el 2do parametro un bracket vacio [].
	useEffect(() => {
		getGifs(category);
	}, []);

	return (
		<>
			<h3>{category}</h3>
		</>
	);
};
