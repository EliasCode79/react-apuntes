import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('pruebas en 11-async-await', () => {
	test('getImamgen debe retornar un url', async () => {
		const url = await getImagen();
		expect(typeof url).toEqual('string');
	});
});
