import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['one punch', 'dragon ball']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return; // con esta linea hacemos q no haya valores repetidos y tambien resolvemos el tema del 'key' unico den los 'li'.
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewValue={(event) => onAddCategory(event)} />

			{categories.map((categorie) => (
				<GifGrid key={categorie} category={categorie} />
			))}
		</>
	);
};
