import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('pruebas en el <CounterApp />', () => {
	const valorInicial = 100;
	test('Snaptshot del CounterApp', () => {
		const { container } = render(<CounterApp value={valorInicial} />);

		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el valor inical 100', () => {
		render(<CounterApp value={100} />);
		expect(screen.getByText('100')).toBeTruthy();
	});
});
