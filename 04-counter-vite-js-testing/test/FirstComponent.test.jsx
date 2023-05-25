import { render } from '@testing-library/react';
import { FirtsApp } from '../src/FirstComponent';

describe('pruebas en FirstComponent', () => {
	test('tiene q hacer match con el snapshott', () => {
		const title = 'hola soy Elias';

		// el metodo render, renderiza nuestro componente, tambien puede darnos muchos metodos para realizar diferentes operaciones con el dom. Como en el de abajo, nos devuelve un Node de html.
		const { container } = render(<FirtsApp title={title} />);
		// El sgte metodo se usa mayormente para un componente q no vaya a cambiar tanto.
		// Con esta linea se creaa una archivo, con todos los elementos html(dom) del componente FirstsApp, la primera ves q se ejecutan este metodo se toma un snapshot de este componente y se almacena, la segunda vez q ejecutemos nos mostrara un error si se cambio algo del html(dom) y si no hubo cambios no mostrara nada. Si hicimos cambios en html(dom), podemos actualizar nuestro snapshot desde la terminal, hay nos indica como podemos hacerlo(normalmente presionando la letra 'u').
		expect(container).toMatchSnapshot();
	});

	test('Debe de mostrar el titulo de un h1', () => {
		const title = 'hola soy Elias';
		const { container, getByText } = render(<FirtsApp title={title} />);

		// con este test comprobamos de q el title exista dentro del dom, todavia no estamos comprobando q este dentro de un h1.
		expect(getByText(title)).toBeTruthy();

		// Aca extraemos del node container el node h1.
		const h1 = container.querySelector('h1');
		// el test comprueba si el contenido del h1 es igual al title. Cuando usamos toBe tienes q ser identico
		expect(h1.innerHTML).toBe(title);

		// Si queremos q el contenido este dentro del h1 sin importar si hay espacion o no usamo el sgte metodo.
		// expect(h1.innerHTML).toContain(title);
	});
});
