import { render, screen } from '@testing-library/react';
import { FirtsApp } from '../src/FirstComponent';

describe('pruebas en FirstComponent', () => {
	const title = 'hola soy un titulo';
	const subTitle = 'hola soy un subtitulo';

	test('Debe hace un match con el snapshot', () => {
		const { container } = render(<FirtsApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el msj de: hola soy un titulo', () => {
		// el 'screen' el la pantalla q estamos renderizando.
		// screen.debug();
		render(<FirtsApp title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
		// screen.debug();  // este metodo nos muestra el dom(html) del screen.
	});

	test('Debe mostrar el titulo en un h1', () => {
		render(<FirtsApp title={title} />);
		expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
	});

	test('Debe mostrar el subtitulo enviado por los props', () => {
		render(<FirtsApp title={title} subTitle={subTitle} />);

		expect(screen.getAllByText(title).length).toBe(1);
	});
});
