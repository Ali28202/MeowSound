import Card from "./Card.jsx";
export default function Albums() {
	const albums = [
		{
			src: "albums/khooneyeArezoo.jpg",
			artist: "Khooneye Arezoo",
			type: "albumCard",
		},
		{
			src: "albums/doomEternal.png",
			artist: "Doom Eternal",
			type: "albumCard",
		},
		{ src: "albums/blurryFace.jpg", artist: "Blurry Face", type: "albumCard" },
		{ src: "albums/toxicity.jpg", artist: "Toxicity", type: "albumCard" },
	];
	const renderCard = (albums) => (
		<Card
			src={albums.src}
			title={albums.artist}
			key={albums.artist}
			type={albums.type}
		/>
	);

	const cardElements = albums.map(renderCard);
	return (
		<div className="" id="projects-section">
			<h1 className="title text-2xl mt-3 ml-5">Popular Albums</h1>
			<div className="xl:flex grid grid-cols-2 grid-rows-2 gap-3 xl:gap-0">
				{cardElements}
			</div>
		</div>
	);
}
