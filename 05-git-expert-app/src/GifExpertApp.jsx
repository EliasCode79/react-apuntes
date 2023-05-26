import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['one punch', 'dragon ball']);

	const onAddCategory = () => {
		let nueva = 'demon slayer';
		setCategories([...categories, nueva]);
	};

	return (
		<>
			{/* title */}
			<h1>GifExpertApp</h1>

			{/* input */}
			<AddCategory setCategories={setCategories} />
			{/* grid table */}

			{/* <button onClick={(e) => onAddCategory()}>Agregar</button> */}
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
