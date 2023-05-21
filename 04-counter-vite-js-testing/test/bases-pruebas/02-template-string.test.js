import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('getSaludo debe retornar Hola elias', () => {
	test('descripcion de del test', () => {
		let nombre = 'elias';
		let saludo = getSaludo(nombre);

		expect(saludo).toBe(`Hola ${nombre}`);
	});
});
