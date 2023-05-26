import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('init state');

	// este metodod es para la entrada del input
	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	// este metodo evita q el q el formulario se envie.
	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return; // Validacion de q por lo menos debe de haber 2 caracteres en la entrada del input.

		setCategories((elementos) => [inputValue, ...elementos]);
		setInputValue(''); // limpiamos nuestro valores.
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' placeholder='introduce un texto' value={inputValue} onChange={onInputChange} />;
		</form>
	);
};
