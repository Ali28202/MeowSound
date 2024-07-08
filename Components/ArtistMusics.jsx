import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const musics = [
	// moein
	[
		{
			artist: "Moein",
			id: 1,
			title: "Halghe Tala",
			plays: "3,629,885",
			duration: "5:15",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
			img: "/albums/khooneyeArezoo.jpg",
		},
		{
			artist: "Moein",
			id: 2,
			title: "Faghat To",
			plays: "2,168,345",
			duration: "3:12",
			href: "/Moein/Moein - Faghat To [320].mp3",
			img: "/albums/khooneyeArezoo.jpg",
		},
		{
			artist: "Moein",
			id: 3,
			title: "Arbabe Vafa",
			plays: "1,062,675",
			duration: "4:58",
			href: "/Moein/Moein - Arbabe Vafa [320].mp3",
			img: "/albums/khooneyeArezoo.jpg",
		},
		{
			artist: "Moein",
			id: 4,
			title: "Kaftar Kakol Be Sar",
			plays: "987,534",
			duration: "4:41",
			href: "/Moein/Moein - Kaftare Kakol Be Sar [320].mp3",
			img: "/albums/khooneyeArezoo.jpg",
		},
		{
			artist: "Moein",
			id: 5,
			title: "Pa Be Paye To",
			plays: "586,243",
			duration: "5:31",
			href: "/Moein/Moein - Pa Be Paye To [320].mp3",
			img: "/albums/khooneyeArezoo.jpg",
		},
	],
	//mickgordon
	[
		{
			artist: "MickGordon",
			id: 1,
			title: "Rip & Tear",
			plays: "107,809,803",
			duration: "4:17",
			href: "/Mickgordon/1_2 - Rip  Tear - Mick Gordon (320).mp3",
			img: "/albums/doomEternal.png",
		},
		{
			artist: "MickGordon",
			id: 2,
			title: "Bfg Division",
			plays: "93,520,460",
			duration: "8:26",
			href: "/Mickgordon/1_11 - Bfg Division - Mick Gordon (320).mp3",
			img: "/albums/doomEternal.png",
		},
		{
			artist: "MickGordon",
			id: 3,
			title: "At Doom's Gate",
			plays: "64,938,649",
			duration: "1:10",
			href: "/Mickgordon/1_2 - Rip  Tear - Mick Gordon (320).mp3",
			img: "/albums/doomEternal.png",
		},
		{
			artist: "MickGordon",
			id: 4,
			title: "Rust,Dust & Guts",
			plays: "25,514,011",
			duration: "7:41",
			href: "/Mickgordon/1_2 - Rip  Tear - Mick Gordon (320).mp3",
			img: "/albums/doomEternal.png",
		},
		{
			artist: "MickGordon",
			id: 5,
			title: "Hellwalker",
			plays: "23,870,937",
			duration: "5:05",
			href: "/Mickgordon/1_2 - Rip  Tear - Mick Gordon (320).mp3",
			img: "/albums/doomEternal.png",
		},
	],
	//twenty one pilots
	[
		{
			artist: "Twenty One Pilots",
			id: 1,
			title: "Stressed Out",
			plays: "2,334,962,418",
			duration: "3:22",
			href: "/21Pilots/1_2 - Stressed Out - Twenty One Pilots (320).mp3",
			img: "/albums/blurryFace.jpg",
		},
		{
			artist: "Twenty One Pilots",
			id: 2,
			title: "Ride",
			plays: "1,749,794,940",
			duration: "3:34",
			href: "/21Pilots/1_3 - Ride - Twenty One Pilots (320).mp3",
			img: "/albums/blurryFace.jpg",
		},
		{
			artist: "Twenty One Pilots",
			id: 3,
			title: "Heathens",
			plays: "1,798,365,672",
			duration: "3:15",
			href: "/21Pilots/1_1 - Heathens - Twenty One Pilots (320).mp3",
			img: "/albums/blurryFace.jpg",
		},
		{
			artist: "Twenty One Pilots",
			id: 4,
			title: "Backslide",
			plays: "33,756,401",
			duration: "3:00",
			href: "/21Pilots/1_2 - Stressed Out - Twenty One Pilots (320).mp3",
			img: "/albums/blurryFace.jpg",
		},
		{
			artist: "Twenty One Pilots",
			id: 5,
			title: "Overcompensate",
			plays: "51,814,067",
			duration: "3:56",
			href: "/21Pilots/1_2 - Stressed Out - Twenty One Pilots (320).mp3",
			img: "/albums/blurryFace.jpg",
		},
	],
	//anathema
	[
		{
			artist: "Anathema",
			id: 1,
			title: "One Last Goodbye - Remastered",
			plays: "12,723,626",
			duration: "5:23",
			href: "/Anathema/1_6 - One Last Goodbye (Remastered) - Anathema (320).mp3",
			img: "/albums/Anathema-Judgement.jpg",
		},
		{
			artist: "Anathema",
			id: 2,
			title: "Flying - Remastered",
			plays: "6,929,548",
			duration: "5:57",
			href: "/Anathema/1_8 - Flying (Remastered) - Anathema (320).mp3",
			img: "/albums/Anathema-Judgement.jpg",
		},
		{
			artist: "Anathema",
			id: 3,
			title: "Deep - Remastered",
			plays: "8,005,025",
			duration: "4:53",
			href: "/Anathema/1_1 - Deep (Remastered) - Anathema (320).mp3",
			img: "/albums/Anathema-Judgement.jpg",
		},
		{
			artist: "Anathema",
			id: 4,
			title: "Untouchable Part 1",
			plays: "8,115,583",
			duration: "6:14",
			href: "/Anathema/1_1 - Untouchable Part 1 - Anathema (320).mp3",
			img: "/albums/Anathema-Judgement.jpg",
		},
		{
			artist: "Anathema",
			id: 5,
			title: "Fragile Dreams - Studio",
			plays: "5,450,616",
			duration: "5:32",
			href: "/Anathema/1_2 - Fragile Dreams - Anathema (320).mp3",
			img: "/albums/Anathema-Judgement.jpg",
		},
	],
];
export default function ArtistMusics({ setTrack, id }) {
	return (
		<>
			<div className="mt-5 ml-10 w-4/5 flex flex-col gap-5">
				<h1 className="text-3xl font-bold">Musics</h1>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">#</TableHead>
							<TableHead>Title</TableHead>
							<TableHead>Plays</TableHead>
							<TableHead className="text-right">Duration</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>{Mapper(id, setTrack)}</TableBody>
				</Table>
			</div>
		</>
	);
}
function Mapper(artistId, setTrack) {
	return musics[artistId - 1].map((music) => {
		return (
			<TableRow
				key={music.id}
				onClick={() => setTrack(musics[artistId - 1][music.id - 1])}
			>
				<TableCell className="font-medium">{music.id}</TableCell>
				<TableCell>{music.title}</TableCell>
				<TableCell>{music.plays}</TableCell>
				<TableCell className="text-right">{music.duration}</TableCell>
			</TableRow>
		);
	});
}
