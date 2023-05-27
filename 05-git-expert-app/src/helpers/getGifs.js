export const getGifs = async (categorie) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=GoB82ATLJg0niRXXxgRdXP7wNnTY0wem&q=${categorie}&limit=5`;
	const rep = await fetch(url);
	const { data } = await rep.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));

	return gifs;
};
