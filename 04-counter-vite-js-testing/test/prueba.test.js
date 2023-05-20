test('esta prueba no puede fallar', () => {
	if (0 === 3) {
		throw new Error('son iguales, entrara aca y mostrara el error');
	}
});
