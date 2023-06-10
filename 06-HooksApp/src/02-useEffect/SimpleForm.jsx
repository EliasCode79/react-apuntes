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

	// Si el useEffect no tiene dependencias este se llamara cada vez q se cambien q se el estado(useState de formState), la dependencia de useEffect es el 2do argumento q se pasa al useEffect, el segundo argumento normalmente es un arreglo.
	useEffect(() => {
		console.log('llamando a userEffect');
	}, []); // cuando le pasamos la dependecia de un arreglo vacio, esto indica q el useEffect se llamara cuando se cree el componente o se monte el compoente.

	// se ejecuta el useEffect cuando el formState(lo pasamos como dependencia del useEffect) tiene algun cambio.
	useEffect(() => {
		console.log('cambian el formState');
	}, [formState]);

	useEffect(() => {
		console.log('cambiando el email');
	}, [email]);

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
