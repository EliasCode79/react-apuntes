import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('test en <GifExpertApp />', () => {
	test('test', () => {
		render(<GifExpertApp />);
		expect(screen.getByText('GifExpertApp'));
	});
});
