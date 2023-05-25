import PropTypes from 'prop-types';

export const FirtsApp = ({ title, subTitle, name }) => {
	return (
		<>
			<h1 data-testid='test-title'>{title}</h1>
			<p>{subTitle}</p>
			<p>{name}</p>
		</>
	);
};

// indicamos q tipos de datos esperamos y si es obligatorio o no
FirtsApp.propTypes = {
	title: PropTypes.string.isRequired, // indicamos q es obligatorio q el required.
	subTitle: PropTypes.string,
};

FirtsApp.defaultProps = {
	name: 'no hay nombre',
	// title: 'no hay titulo',
	subTitle: 'no hay subtitulo',
};
