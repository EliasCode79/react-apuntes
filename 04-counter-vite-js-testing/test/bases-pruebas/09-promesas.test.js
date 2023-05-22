import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('test 09-promesas', () => {
	test('getHeroeByIdAsync debe retornar un heroe', (done) => {
		let id = 1;
		getHeroeByIdAsync(id).then((heroe) => {
			expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
			done();
		});
	});

	// probando el error
	test('getHeroeByIdAsync debe arrogar un error', (done) => {
		let id = 100;
		getHeroeByIdAsync(id).catch((error) => {
			expect(error).toEqual(`No se pudo encontrar el héroe ${id}`);
			done();
		});
	});
});
