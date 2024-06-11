import Card from "./Card.jsx";
export default function Artists() {
	const artists = [
		{ src: "https://via.placeholder.com/800x400/ff5733/fff", name: 1 },
		{ src: "https://via.placeholder.com/800x400/33ff57/fff", name: 2 },
		{ src: "https://via.placeholder.com/800x400/5733ff/fff", name: 3 },
		{ src: "https://via.placeholder.com/800x400/5733ff/fff", name: 4 },
	];
	const renderCard = (artists) => (
		<Card src={artists.src} title={artists.name} key={artists.name} />
	);

	const cardElements = artists.map(renderCard);
	return (
		<div className="" id="projects-section">
			<h1 className="title text-2xl mt-3 ml-5">Popular Artists</h1>
			<div className="flex">{cardElements}</div>
		</div>
	);
}
