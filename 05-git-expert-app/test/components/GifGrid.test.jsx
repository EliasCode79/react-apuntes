import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

describe('test en <GitGrid />', () => {
	const category = 'one punch';
	test('ver la palabras estaticas del componente', () => {
		render(<GifGrid category={category} />);
		expect(screen.getByText('Cargando....'));
		expect(screen.getByText(category));
	});
});
