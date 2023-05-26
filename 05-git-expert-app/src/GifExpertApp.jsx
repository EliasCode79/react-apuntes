import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['one punch', 'dragon ball']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return; // con esta linea hacemos q no haya valores repetidos y tambien resolvemos el tema del 'key' unico den los 'li'.
		setCategories([...categories, newCategory]);
	};

	return (
		<>
			{/* title */}
			<h1>GifExpertApp</h1>

			{/* input */}
			<AddCategory
				// setCategories={setCategories}
				onNewValue={(event) => onAddCategory(event)}
			/>
			{/* grid table */}

			<ol>
				{/* Para recorrer un array usamo el map, a los elementos li tenemos q agregarles un key para q no nos presente problemas en la consola */}
				{categories.map((categorie) => {
					return <li key={categorie}>{categorie}</li>;
				})}
			</ol>
		</>
	);
};
