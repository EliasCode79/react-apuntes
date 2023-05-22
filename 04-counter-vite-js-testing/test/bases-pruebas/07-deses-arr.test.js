import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('pruebas en el archivo 07-deses-arr', () => {
	test('Debe retornar un string y un numero', () => {
		const [letras, numero] = retornaArreglo();
		// comprobando valores
		expect(letras).toBe('ABC');
		expect(numero).toBe(123);

		// comprobando el tipo de dato.
		expect(typeof letras).toBe('string');
		expect(typeof numero).toBe('number');

		// se estara q las letras sea de tipo string, no importa lo  contenga siempre y cuando sea string pasara.
		expect(letras).toEqual(expect.any(String));
	});
});
