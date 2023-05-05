import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
	return <h1>Hola mundo</h1>;
};

ReactDOM.createRoot(document.querySelector('#root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
