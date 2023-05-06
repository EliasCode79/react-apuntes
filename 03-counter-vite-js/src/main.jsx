import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirtsApp } from './FirstComponent';
// import { App } from './HelloWorldApp';
import './styles.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
	<React.StrictMode>
		{/* normalmente se envia string en la props, si queremos enviar un numero lo hacemos como una expresion de js */}
		<FirtsApp title='Hola mundo' subTitle={123} />
	</React.StrictMode>
);
