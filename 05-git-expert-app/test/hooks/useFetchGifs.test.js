import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
	test('Debe regresar el estado inicial', () => {
		// si queremos testear un hook, lo hacemos con renderHook ya q no se puede solo no podemos renderizar un hook(custom hooks) de manera aislada, por eso lo hacemos.

		const { result } = renderHook(() => useFetchGifs('one punch'));
		const { images, isLoading } = result.current;

		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy();

		// useFetchGifs();
	});

	test('Debe de retornar un arreglo de imagenes', async () => {
		const { result } = renderHook(() => useFetchGifs('one punch'));

		await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

		const { images, isLoading } = result.current;

		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();

		// useFetchGifs();
	});
});
