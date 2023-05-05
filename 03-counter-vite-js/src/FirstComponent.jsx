const menu = {
	title: 'menu',
	msg: 'Hola desde menu',
};

const suma = (a, b) => {
	return a + b;
};

export const FirtsApp = () => {
	return (
		<>
			<div>Mi nombre es elias franco</div>
			<p>hola</p>
			{/* dentro de las llaves podemos imprimir expresiones y valores de js, pero no se pueden imprimir objetos */}
			{menu.title /* dentro */}
			<p>Llamando a un funcion: {suma(4, 5)}</p>
			{/* Si queremos imprimir objetos podemos hacerlo de la sgte manera */}
			<p>{JSON.stringify(menu)}</p>
		</>
	);
};
