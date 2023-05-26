import { useState } from 'react';

export const AddCategory = () => {
	const [inputValue, setInputValue] = useState('init state');

	// este metodod es para la entrada del input
	const onInputChange = ({ target }) => {
		// console.log(target.value);
		setInputValue(target.value);
	};

	// este metodo evita q el q el formulario se envie.
	const onSubmit = (event) => {
		event.preventDefault();
		console.log(inputValue);
	};

	return (
		<form onSubmit={(event) => onSubmit(event)}>
			<input type='text' placeholder='introduce un texto' value={inputValue} onChange={onInputChange} />;
		</form>
	);
};
