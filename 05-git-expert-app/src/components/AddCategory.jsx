import { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({ onNewValue }) => {
	const [inputValue, setInputValue] = useState('');

	// este metodod es para la entrada del input
	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	// este metodo evita q el q el formulario se envie.

	// TODO:Aclaracion: setState() osea en este caso (setInpuValue) es asincrono y las funciones son sincronas, primero se estaría ejecutando la función  onNewValue(inputValue.trim()); ya que las funciones sincronas entran primero al callstack y despues entra setInputValue('');  ya que se termina todo lo sincrono empieza lo asincrono.

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return; // Validacion de q por lo menos debe de haber 2 caracteres en la entrada del input.
		// setCategories((elementos) => [inputValue, ...elementoss]);
		setInputValue(''); // limpiamos nuestro valores. Estos se ejecutara cuando todas las funciones sicronas se hayan ejecutada.
		onNewValue(inputValue.trim());
	};

	return (
		<form onSubmit={onSubmit} aria-label='form'>
			<input type='text' placeholder='introduce un texto' value={inputValue} onChange={onInputChange} />
		</form>
	);
};

AddCategory.propTypes = {
	onNewValue: propTypes.func.isRequired,
};
