import { render } from '@testing-library/react';
import { FirtsApp } from '../src/FirstComponent';

describe('pruebas en FirstComponent', () => {
	// test('tiene q hacer match con el snapshott', () => {
	// 	const title = 'hola soy Elias';

	// 	// el metodo render, renderiza nuestro componente, tambien puede darnos muchos metodos para realizar diferentes operaciones con el dom. Como en el de abajo, nos devuelve un Node de html.
	// 	const { container } = render(<FirtsApp title={title} />);
	// 	// El sgte metodo se usa mayormente para un componente q no vaya a cambiar tanto.
	// 	// Con esta linea se creaa una archivo, con todos los elementos html(dom) del componente FirstsApp, la primera ves q se ejecutan este metodo se toma un snapshot de este componente y se almacena, la segunda vez q ejecutemos nos mostrara un error si se cambio algo del html(dom) y si no hubo cambios no mostrara nada. Si hicimos cambios en html(dom), podemos actualizar nuestro snapshot desde la terminal, hay nos indica como podemos hacerlo(normalmente presionando la letra 'u').
	// 	expect(container).toMatchSnapshot();
	// });

	test('Debe de mostrar el titulo de un h1', () => {
		const title = 'hola soy Elias';
		const { container, getByText, getByTestId } = render(<FirtsApp title={title} />);

		// con el metodo getByTestId podemos obtener el elemento html y comprobar si el contenido es el esperado.
		expect(getByTestId('test-title').innerHTML).toBe(title);

		// expect(getByTestId('test-title')).toBeTruthy();  // con este test comprobamos si existe.
	});

	test('Debe de mostrar el subtitulo enviado por props', () => {
		const title = 'hola soy Elias';
		const subTitle = 'soy un subtitulo';
		const { getByText, getAllByText } = render(<FirtsApp title={title} subTitle={subTitle} />);

		expect(getByText(subTitle)).toBeTruthy(); // el metodo 'getByText' es solo para un elemento.

		// Si tenemos mas de uno podemos usar el sgte metodo.
		expect(getAllByText(subTitle).length).toBe(1); // el metodo getAllByText nos devuelve un arreglo con los elementos q contento el 'subTitle'
	});
});
