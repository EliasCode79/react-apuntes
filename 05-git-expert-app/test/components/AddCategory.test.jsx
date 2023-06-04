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
});
