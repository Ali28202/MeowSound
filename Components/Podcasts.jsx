import Card from "./Card.jsx";
export default function Podcasts() {
	const podcasts = [
		{
			src: "/podcasts/dead-eyes-podcast.webp",
			artist: "Dead Eyes",
			type: "podcasts",
			id: 1,
		},
		{
			src: "/podcasts/code-switch-podcast.webp",
			artist: "Code Switch",
			type: "podcasts",
			id: 2,
		},
		{
			src: "/podcasts/home-cooking-podcast.webp",
			artist: "Home Cooking",
			type: "podcasts",
			id: 3,
		},
		{
			src: "/podcasts/outsiders.webp",
			artist: "Outsiders",
			type: "podcasts",
			id: 4,
		},
	];
	const renderCard = (podcasts) => (
		<Card
			src={podcasts.src}
			title={podcasts.artist}
			key={podcasts.artist}
			type={podcasts.type}
			id={podcasts.id}
		/>
	);

	const cardElements = podcasts.map(renderCard);
	return (
		<div className="" id="projects-section">
			<h1 className="title text-2xl mt-3 ml-5">Popular Podcasts</h1>
			<div className="xl:flex mt-6 grid grid-cols-2 grid-rows-2 gap-2 xl:gap-0">
				{cardElements}
			</div>
		</div>
	);
}
