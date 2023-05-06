import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
	const [counter, setCounter] = useState(value);

	const handler = (operation) => {
		operation === 'add' ? setCounter(counter + 1) : operation === 'res' ? setCounter(counter - 1) : setCounter(0);
		// setCounter(counter + 1);
	};

	return (
		<>
			<h1>Counter App</h1>
			<h2>{counter}</h2>

			<button onClick={() => handler('add')}>+1</button>
			<button onClick={() => handler('res')}>-1</button>
			<button onClick={() => handler('reset')}>Reset</button>
		</>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};

CounterApp.defaultPros = {
	value: 'No hay numero',
};
