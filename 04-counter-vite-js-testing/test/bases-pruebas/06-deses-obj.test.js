import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('pruebas en el archivo 06-deses-obj', () => {
	test('Debe devolver un objeto', () => {
		let objeto = {
			clave: 'sp1',
			nombre: 'peter',
			edad: 23,
			rango: 'teniente',
		};
		const retorno = usContext(objeto);

		expect(retorno).toEqual({
			nombreClave: objeto.clave,
			anios: objeto.edad,
			latlng: {
				lat: 14.1232,
				lng: -12.3232,
			},
		});
	});
});
