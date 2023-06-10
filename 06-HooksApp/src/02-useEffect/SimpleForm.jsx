import { useEffect, useState } from 'react';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'elias',
		email: 'elias@gmail',
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		console.log('llamando a userEffect');
	});

	return (
		<>
			<h1>Simple Formulario</h1>
			<hr />
			<input
				type='text'
				className='form-control'
				placeholder='Username'
				name='username'
				value={username}
				onChange={onInputChange}
			/>

			<input
				type='email'
				className='form-control mt-2'
				placeholder='Aqui va tu email'
				name='email'
				value={email}
				onChange={onInputChange}
			/>
		</>
	);
};
