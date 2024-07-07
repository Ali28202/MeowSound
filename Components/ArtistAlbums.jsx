const albums = [
	//moein
	[
		{
			id: 1,
			src: "/albums/khooneyeArezoo.jpg",
			title: "Khooneye Arezoo",
		},
		{
			id: 2,
			src: "/albums/Divane-Miraghsad.jpg",
			title: "Divane Miraghsad",
		},
		{
			id: 3,
			src: "/albums/rooto-barnagardoon.jpg",
			title: "Rooto Barnagardoon",
		},
	],
	//mickgordon
	[
		{
			id: 1,
			src: "/albums/doomEternal.png",
			title: "Doom Eternal",
		},
		{
			id: 2,
			src: "/albums/MIWScoring.jpg",
			title: "Scoring The End of The World",
		},
		{
			id: 3,
			src: "/albums/Wolfenstein_The_New_Order_cover.jpg",
			title: "Wolfenstein The New Order",
		},
	],
	//twenty one pilots
	[
		{
			id: 1,
			src: "/albums/blurryFace.jpg",
			title: "Blurryface",
		},
		{
			id: 2,
			src: "/albums/Trench_Twenty_One_Pilots.png",
			title: "Trench",
		},
		{
			id: 3,
			src: "/albums/Twenty_One_Pilots_-_Clancy.png",
			title: "Clancy",
		},
	],
	//anathema
	[
		{
			id: 1,
			src: "/albums/Anathema-Judgement.jpg",
			title: "Judgement",
		},
		{
			id: 2,
			src: "/albums/Weather_Systems.jpg",
			title: "Weather System",
		},
		{
			id: 3,
			src: "/albums/Anathema_-_A_Natural_Disaster_(cover).jpg",
			title: "A Natural Disaster",
		},
	],
];
export default function ArtistAlbums(props) {
	return (
		<>
			<div className="ml-10 mt-12">
				<h1 className="text-3xl font-bold">Albums</h1>
				<div className="flex gap-7 mt-12">{Mapper(props.id)}</div>
			</div>
		</>
	);
}
function Mapper(id) {
	return albums[id - 1].map((album) => {
		return (
			<>
				<div
					className="flex flex-col gap-3 rounded-2xl p-4 hover:text-black hover:-translate-y-3 hover:shadow-md hover:shadow-[rgb(160,160,160)] duration-300 cursor-pointer hover:bg-[#cccccc]"
					key={album.id}
				>
					<img className="h-60 w-60" src={album.src} />
					<h3 className="text-xl">{album.title}</h3>
				</div>
			</>
		);
	});
}
