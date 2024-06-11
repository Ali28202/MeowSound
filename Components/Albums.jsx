import Card from "./Card.jsx";
export default function Albums() {
	const albums = [
		{ src: "https://via.placeholder.com/800x400/ff5733/fff", artist: 1 },
		{ src: "https://via.placeholder.com/800x400/33ff57/fff", artist: 2 },
		{ src: "https://via.placeholder.com/800x400/5733ff/fff", artist: 3 },
		{ src: "https://via.placeholder.com/800x400/5733ff/fff", artist: 4 },
	];
	const renderCard = (albums) => (
		<Card src={albums.src} title={albums.artist} key={albums.artist} />
	);

	const cardElements = albums.map(renderCard);
	return (
		<div className="" id="projects-section">
			<h1 className="title text-2xl mt-3 ml-5">Popular Albums</h1>
			<div className="flex">{cardElements}</div>
		</div>
	);
}
