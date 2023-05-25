import { render } from '@testing-library/react';
import { FirtsApp } from '../src/FirstComponent';

describe('pruebas en FirstComponent', () => {
	test('tiene q hacer match con el snapshott', () => {
		const title = 'hola soy Elias';
		render(<FirtsApp title={title} />);
	});
});
