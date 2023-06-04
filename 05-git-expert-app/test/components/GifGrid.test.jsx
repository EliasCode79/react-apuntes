import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('test en <GitGrid />', () => {
	const category = 'one punch';
	test('ver la palabras estaticas del componente', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);
		expect(screen.getByText('Cargando....'));
		expect(screen.getByText(category));
	});

	test('Debe mostrar items cuando se carga el useFetchGifs', () => {
		const gifs = [
			{
				id: 'Abc',
				title: 'saitama',
				url: 'https://fast.com',
			},
			{
				id: 'goku',
				title: 'gokue',
				url: 'https://goku.com',
			},
		];

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});

		render(<GifGrid category={category} />);
		expect(screen.getAllByRole('img').length).toBe(2);
		// screen.debug();
	});
});
