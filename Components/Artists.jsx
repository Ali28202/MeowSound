import Card from "./Card.jsx";
export default function Artists() {
	const artists = [
		{ src: "/artists/moein.jpg", name: "Moein", type: "artists", id: 1 },
		{
			src: "/artists/mickGordon.jpg",
			name: "MickGordon",
			type: "artists",
			id: 2,
		},
		{
			src: "/artists/21pilots.jpeg",
			name: "Twenty One Pilots",
			type: "artists",
			id: 3,
		},
		{
			src: "/artists/anathema.jpeg",
			name: "Anathema",
			type: "artists",
			id: 4,
		},
	];
	const renderCard = (artists) => (
		<Card
			src={artists.src}
			title={artists.name}
			key={artists.name}
			type={artists.type}
			id={artists.id}
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
