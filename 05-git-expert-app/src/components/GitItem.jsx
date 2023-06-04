import PropTypes from 'prop-types';

export const GitItem = ({ url, title }) => {
	return (
		<div className='card'>
			<img className='card' src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GitItem.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
