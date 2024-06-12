import Card from "./Card.jsx";
export default function Artists() {
	const artists = [
		{ src: "artists/moein.jpg", name: "moein" , type: "artistCard"},
		{ src: "artists/mickGordon.jpg", name: "mickGordon" , type: "artistCard"},
		{ src: "artists/21pilots.jpeg", name: "21pilots" , type: "artistCard"},
		{ src: "artists/anathema.jpeg", name: "anathema" , type: "artistCard"},
	];
	const renderCard = (artists) => (
		<Card src={artists.src} title={artists.name} key={artists.name} type={artists.type}/>
	);

	const cardElements = artists.map(renderCard);
	return (
		<div className="" id="projects-section">
			<h1 className="title text-2xl mt-3 ml-5">Popular Artists</h1>
			<div className="flex">{cardElements}</div>
		</div>
	);
}
