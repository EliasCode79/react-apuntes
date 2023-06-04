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
		const onNewCategory = jest.fn(); // esta funcion esa para simular un funcion.

		render(<AddCategory onNewValue={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: valor } });
		fireEvent.submit(form);

		expect(input.value).toBe('');

		expect(onNewCategory).toHaveBeenCalled(); // con esto indicamos q sea llamanda esta funcion.
		expect(onNewCategory).toHaveBeenCalledTimes(1); // con esto nos aseguramo q esta funcion sea llamanda las veces q queramos, es este caso le decimos q sea llamada 1 vez.
		console.log(valor, 'este es el valor');
		expect(onNewCategory).toHaveBeenCalledWith(valor);
	});

	test('No debe de llamar el onNewCategory si el input esta vacio', () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewValue={onNewCategory} />);
		const form = screen.getByRole('form');

		fireEvent.submit(form);

		// Indicamos q el metodo no haya sido ejectuado por el if no lo en nuestr funcion no lo permite
		expect(onNewCategory).toHaveBeenCalledTimes(0);
		// es otra forma negando q se haya llamando.
		expect(onNewCategory).not.toHaveBeenCalled();
	});
});
