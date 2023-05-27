export const GitItem = ({ url, title }) => {
	return (
		<div className='card'>
			<img className='card' src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};
