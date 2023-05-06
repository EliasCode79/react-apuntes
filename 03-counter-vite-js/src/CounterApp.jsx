import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
	const [counter, setCounter] = useState(value);

	const handler = (event) => {
		// console.log(event)
		setCounter(counter + 1);
	};

	return (
		<>
			<h1>Counter App</h1>
			<h2>{counter}</h2>

			{/* onclick envia por defecto un event, en react podemos llamar a una funcion si (), cuando se envia un parametro */}
			<button onClick={handler}>+1</button>
		</>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};

CounterApp.defaultPros = {
	value: 'No hay numero',
};
