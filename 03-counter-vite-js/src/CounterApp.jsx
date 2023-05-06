import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
	const handler = (event) => {
		// console.log(event)
		console.log('+1');
		value = 100;
	};

	return (
		<>
			<h1>Counter App</h1>
			<h2>{value}</h2>

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
