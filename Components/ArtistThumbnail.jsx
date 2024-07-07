const artist = [
	{
		src: "/artists/moein.jpg",
		name: "Moein",
		type: "artists",
		id: 1,
	},
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
export default function ArtistThumbnail(props) {
	return (
		<>
			<div className="flex gap-10 items-center p-6 bg-gradient-to-b from-violet-700 to-green-500 bg-opacity-90 rounded-tl-3xl">
				<img
					className="mb-2 rounded-full h-56 w-56"
					src={artist[props.id - 1].src}
				/>
				<div className="flex flex-col gap-6">
					<h1 className="text-7xl font-bold">{artist[props.id - 1].name}</h1>
					<h1 className="text-sm ml-1">
						{Math.floor(Math.random() * 300000).toLocaleString()} monthly
						listeners
					</h1>
				</div>
			</div>
		</>
	);
}
