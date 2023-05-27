import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['one punch']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
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
