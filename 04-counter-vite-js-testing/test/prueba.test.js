describe('prueba de componenete <appComponete/>', () => {
	test('esta prueba no puede fallar', () => {
		let message = 'hola mundo';
		let message2 = message.trim();

		expect(message).toBe(message2);
		expect(message).toBe(message2);
	});
});
