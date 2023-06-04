import { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({ onNewValue }) => {
	const [inputValue, setInputValue] = useState('');

	// este metodod es para la entrada del input
	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	// este metodo evita q el q el formulario se envie.
	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return; // Validacion de q por lo menos debe de haber 2 caracteres en la entrada del input.

		// setCategories((elementos) => [inputValue, ...elementos]);
		onNewValue(inputValue.trim());
		setInputValue(''); // limpiamos nuestro valores.
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' placeholder='introduce un texto' value={inputValue} onChange={onInputChange} />
		</form>
	);
};

AddCategory.propTypes = {
	onNewValue: propTypes.func.isRequired,
};
