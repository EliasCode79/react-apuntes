import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('tset en el archivo 05 funciones', () => {
	test('getUser debe retornar un objeto igual', () => {
		const objeto = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};

		const getuser = getUser();

		expect(objeto).toEqual(getuser);
	});

	test('getUsuarioActivo debe retornar ......', () => {
		let name = 'elias';
		const user = getUsuarioActivo(name);

		expect(user).toEqual({
			uid: 'ABC567',
			username: name,
		});
	});
});
