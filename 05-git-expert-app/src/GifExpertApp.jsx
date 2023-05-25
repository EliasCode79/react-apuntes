import { useState } from 'react';

export const GifExpertApp = () => {
	// podemos tener n cantidades de estados(useState), estos no tiene un nombre se identifican por el orden q se vayan creando. Asi q evita meter useState en condicionales porque afectara el orden de los useState.
	const [categories, setCategories] = useState(['one punch', 'dragon ball']);
	return (
		<>
			{/* title */}
			<h1>GifExpertApp</h1>

			{/* input */}

			{/* grid table */}

			<ol>
				{/* Para recorrer un array usamo el map, a los elementos li tenemos q agregarles un key para q no nos presente problemas en la consola */}
				{categories.map((categorie) => {
					return <li key={categorie}>{categorie}</li>;
				})}
			</ol>

			{/* grid item */}
		</>
	);
};
