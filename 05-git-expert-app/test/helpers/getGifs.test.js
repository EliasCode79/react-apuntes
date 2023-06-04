import { getGifs } from '../../src/helpers/getGifs';

describe('evaluando la funcion de peticion', () => {
	test('la funcion debe retornar un array de objetos', async () => {
		const response = await getGifs('one punch');
		// test para verificar q el retorno de la funcion se un array q contengan por los menos un elemento.
		expect(response.length).toBeGreaterThan(0);
		// test para verificar la estructura
		expect(response[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
