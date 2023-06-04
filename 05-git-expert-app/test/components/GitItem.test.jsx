import { render, screen } from '@testing-library/react';
import { GitItem } from '../../src/components';

describe('test de <GitItem />', () => {
	const title = 'saitama';
	const url = 'https://google.com/';

	test('Snapshot del componente', () => {
		const { container } = render(<GitItem url={url} title={title} />);
		expect(container).toMatchSnapshot();
	});

	test('ver q los titulos la url y el title sean iguales', () => {
		render(<GitItem url={url} title={title} />);
		// expect(screen.getByRole('img').src).toBe(url);

		// esto es lo mismo q arriba pero aca lo hicimos mas legible.
		const { src, alt } = screen.getByRole('img');
		expect(alt).toBe(title);
		expect(src).toBe(url);
	});

	test('Debe mostrar el titulo del componente', () => {
		render(<GitItem url={url} title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
