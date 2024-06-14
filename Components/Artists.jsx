import Card from "./Card.jsx";
export default function Artists() {
	const artists = [
		{ src: "artists/moein.jpg", name: "Moein", type: "artistCard" },
		{ src: "artists/mickGordon.jpg", name: "MickGordon", type: "artistCard" },
		{ src: "artists/21pilots.jpeg", name: "21Pilots", type: "artistCard" },
		{ src: "artists/anathema.jpeg", name: "Anathema", type: "artistCard" },
	];
	const renderCard = (artists) => (
		<Card
			src={artists.src}
			title={artists.name}
			key={artists.name}
			type={artists.type}
		/>
	);

	const cardElements = artists.map(renderCard);
	return (
		<div className="" id="projects-section">
			<h1 className="title text-2xl mt-3 ml-5">Popular Artists</h1>
			<div className="xl:flex mt-6 grid grid-cols-2 grid-rows-2 gap-2 gap-y-0 xl:gap-0">
				{cardElements}
			</div>
		</div>
	);
}
