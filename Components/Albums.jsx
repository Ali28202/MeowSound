import Card from "./Card.jsx";
export default function Albums() {
	const albums = [
		{
			src: "/albums/khooneyeArezoo.jpg",
			artist: "Khooneye Arezoo",
			type: "albums",
			id: 1,
		},
		{
			src: "/albums/doomEternal.png",
			artist: "Doom Eternal",
			type: "albums",
			id: 2,
		},
		{
			src: "/albums/blurryFace.jpg",
			artist: "Blurry Face",
			type: "albums",
			id: 3,
		},
		{ src: "/albums/toxicity.jpg", artist: "Toxicity", type: "albums", id: 4 },
	];
	const renderCard = (albums) => (
		<Card
			src={albums.src}
			title={albums.artist}
			key={albums.artist}
			type={albums.type}
			id={albums.id}
		/>
	);

	const cardElements = albums.map(renderCard);
	return (
		<div className="" id="projects-section">
			<h1 className="title text-2xl mt-3 ml-5">Popular Albums</h1>
			<div className="xl:flex mt-6 grid grid-cols-2 grid-rows-2 gap-2 xl:gap-0">
				{cardElements}
			</div>
		</div>
	);
}
