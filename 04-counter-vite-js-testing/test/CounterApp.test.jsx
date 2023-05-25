import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('pruebas en el <CounterApp />', () => {
	const valorInicial = 10;
	test('Snaptshot del CounterApp', () => {
		const { container } = render(<CounterApp value={valorInicial} />);

		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el valor inical 100', () => {
		render(<CounterApp value={100} />);
		expect(screen.getByText('100')).toBeTruthy();
	});

	test('Debe mostrar el 11 cuando hagamos click en el boton de +1', () => {
		render(<CounterApp value={valorInicial} />);
		fireEvent.click(screen.getByText('+1'));
		// screen.debug();
		expect(screen.getByText(11)).toBeTruthy();
	});

	test('Debe mostrar el 9 cuando hagamos click en el boton de -1', () => {
		render(<CounterApp value={valorInicial} />);
		fireEvent.click(screen.getByText('-1'));
		// screen.debug();
		expect(screen.getByText(9)).toBeTruthy();
	});

	test('Debe mostrar el valor inicial cuando presionemos en reset', () => {
		render(<CounterApp value={valorInicial} />);
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		// fireEvent.click(screen.getByText('Reset')); // esta es un forma de encontar el elemento(getByText)
		// si queremos ser mas especificos podemos usar el sgte metodo
		// agregamos a nuestro componente un 'aria-label' y le damos un  id, en este caso el id aca es 'btn-reset'. Haci podemos ser mas especificos a la hora de buscar un elemento.
		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
		expect(screen.getByText(valorInicial)).toBeTruthy(); //
	});
});
