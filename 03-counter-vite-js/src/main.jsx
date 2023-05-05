import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirtsApp } from './FirstComponent';
// import { App } from './HelloWorldApp';

ReactDOM.createRoot(document.querySelector('#root')).render(
	<React.StrictMode>
		<FirtsApp />
	</React.StrictMode>
);
