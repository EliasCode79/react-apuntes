import { GitItem } from './GitItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>

			{/* Esta expresion si se cumplen las 2 retorna lo q es la segunda condicion */}
			{isLoading && <h2>Cargando....</h2>}

			<div className='card-grid'>
				{images.map((image) => (
					<GitItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
