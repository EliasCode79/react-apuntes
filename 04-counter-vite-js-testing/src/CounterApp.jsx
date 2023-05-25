import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
	const [counter, setCounter] = useState(value);

	const handler = (operation) => {
		setCounter(counter + 1);
	};

	const handlerRest = () => setCounter(counter - 1);
	const handlerReset = () => setCounter(value);

	return (
		<>
			<h1>Counter App</h1>
			<h2>{counter}</h2>

			<button onClick={handler}>+1</button>
			<button onClick={handlerRest}>-1</button>
			<button aria-label='btn-reset' onClick={handlerReset}>
				Reset
			</button>
		</>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};

CounterApp.defaultPros = {
	value: 'No hay numero',
};
