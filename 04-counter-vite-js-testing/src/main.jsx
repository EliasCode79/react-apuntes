import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirtsApp } from './FirstComponent';
import { CounterApp } from './CounterApp';
// import { App } from './HelloWorldApp';
import './styles.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
	<React.StrictMode>
		<FirtsApp title='HOla soy elias' />
		{/* <CounterApp value={20} /> */}
	</React.StrictMode>
);
