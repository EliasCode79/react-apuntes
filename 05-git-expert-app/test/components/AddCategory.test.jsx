const { render, screen, fireEvent } = require('@testing-library/react');
const { AddCategory } = require('../../src/components');

describe('test en <AddCategory />', () => {
	test('Asegurarme de q la funcion de input este funcionando', () => {
		render(<AddCategory onNewValue={() => {}} />);
		// obtenemos el elemento html q queremos evaluar
		const input = screen.getByRole('textbox');
		// con fireEvent(funcion para disparar eventos), le indicamos el tipo de evento(.input) y le mandamos el input.
		fireEvent.input(input, { target: { value: 'saitama' } });
		// se espera q el atributo value del textbox(html) sea igual 'saitama'.
		expect(input.value).toBe('saitama');
		// screen.debug();
	});

	test('Debe de llamar a onNewValue si el textbox tiene un string', () => {
		const valor = 'saitama';
		render(<AddCategory onNewValue={() => {}} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: { valor } } });
		fireEvent.submit(form);

		expect(input.value).toBe('');
	});
});
