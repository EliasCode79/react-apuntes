import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('test en 08-imp-exp-test', () => {
	test('Se espera un heroe encontrado', () => {
		let id = 1;
		let heroe = getHeroeById(id);

		expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
	});

	test('Se eespera un undefined', () => {
		let id = 100;
		let heroe = getHeroeById(id);

		// una forma de ver esperar valor undefined
		expect(heroe).toEqual(undefined);

		// con este metodo indicamos q esperamos valores undefined, null o false.
		expect(heroe).toBeFalsy();
	});

	test('getHeroesByOwner heroes de DC', () => {
		let owner = 'DC';

		let heroesDc = getHeroesByOwner(owner);
		expect(heroesDc.length).toBe(3);

		expect(heroesDc).toEqual([
			{ id: 1, name: 'Batman', owner: 'DC' },
			{ id: 3, name: 'Superman', owner: 'DC' },
			{ id: 4, name: 'Flash', owner: 'DC' },
		]);
	});

	test('getHeroesByOwner Heroes de Marvel', () => {
		let owner = 'Marvel';
		let heroesMarvel = getHeroesByOwner(owner);

		expect(heroesMarvel.length).toBe(2);
	});
});
