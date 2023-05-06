import PropTypes from 'prop-types';

export const FirtsApp = ({ title, subTitle }) => {
	return (
		<>
			<h1>{title}</h1>
			<p>{subTitle}</p>
		</>
	);
};

// indicamos q tipos de datos esperamos y si es obligatorio o no
FirtsApp.propTypes = {
	title: PropTypes.string.isRequired, // indicamos q es obligatorio q el required.
	subTitle: PropTypes.string,
};

FirtsApp.defaultProps = {
	name: 'elias franco',
	title: 'no hay titulo',
	subTitle: 'no hay subtitulo',
};
