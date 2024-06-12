import Card from "./Card.jsx";
export default function Podcasts() {
	const podcasts = [
		{ src: "podcasts/dead-eyes-podcast.webp", artist: "Dead Eyes" , type: "podcastCard"},
		{ src: "podcasts/code-switch-podcast.webp", artist: "Code Switch" , type: "podcastCard"},
		{ src: "podcasts/home-cooking-podcast.webp", artist: "Home Cooking" , type: "podcastCard"},
		{ src: "podcasts/outsiders.webp", artist: "outsiders" , type: "podcastCard"},
	];
	const renderCard = (podcasts) => (
		<Card src={podcasts.src} title={podcasts.artist} key={podcasts.artist} />
	);

	const cardElements = podcasts.map(renderCard);
	return (
		<div className="" id="projects-section">
			<h1 className="title text-2xl mt-3 ml-5">Popular Podcasts</h1>
			<div className="flex">{cardElements}</div>
		</div>
	);
}
