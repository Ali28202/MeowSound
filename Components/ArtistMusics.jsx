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
			id: 1,
			title: "Halghe Tala",
			plays: "3,629,885",
			duration: "5:15",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 2,
			title: "Faghat To",
			plays: "2,168,345",
			duration: "3:12",
			href: "/Moein/Moein - Faghat To [320].mp3",
		},
		{
			id: 3,
			title: "Arbabe Vafa",
			plays: "1,062,675",
			duration: "4:58",
			href: "/Moein/Moein - Arbabe Vafa [320].mp3",
		},
		{
			id: 4,
			title: "Kaftar Kakol Be Sar",
			plays: "987,534",
			duration: "4:41",
			href: "/Moein/Moein - Kaftare Kakol Be Sar [320].mp3",
		},
		{
			id: 5,
			title: "Pa Be Paye To",
			plays: "586,243",
			duration: "5:31",
			href: "/Moein/Moein - Pa Be Paye To [320].mp3",
		},
	],
	//mickgordon
	[
		{
			id: 1,
			title: "Rip & Tear",
			plays: "107,809,803",
			duration: "4:17",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 2,
			title: "Bfg Division",
			plays: "93,520,460",
			duration: "8:26",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 3,
			title: "At Doom's Gate",
			plays: "64,938,649",
			duration: "1:10",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 4,
			title: "Rust,Dust & Guts",
			plays: "25,514,011",
			duration: "7:41",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 5,
			title: "Hellwalker",
			plays: "23,870,937",
			duration: "5:05",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
	],
	//twenty one pilots
	[
		{
			id: 1,
			title: "Stressed Out",
			plays: "2,334,962,418",
			duration: "3:22",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 2,
			title: "Ride",
			plays: "1,749,794,940",
			duration: "3:34",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 3,
			title: "Heathens",
			plays: "1,798,365,672",
			duration: "3:15",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 4,
			title: "Backslide",
			plays: "33,756,401",
			duration: "3:00",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 5,
			title: "Overcompensate",
			plays: "51,814,067",
			duration: "3:56",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
	],
	//anathema
	[
		{
			id: 1,
			title: "One Last Goodbye - Remastered",
			plays: "12,723,626",
			duration: "5:23",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 2,
			title: "Flying - Remastered",
			plays: "6,929,548",
			duration: "5:57",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 3,
			title: "Deep - Remastered",
			plays: "8,005,025",
			duration: "4:53",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 4,
			title: "Untouchable Part 1",
			plays: "8,115,583",
			duration: "6:14",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
		{
			id: 5,
			title: "Fragile Dreams - Studio",
			plays: "5,450,616",
			duration: "5:32",
			href: "/Moein/Moein - Halghe Tala [320].mp3",
		},
	],
];
export default function ArtistMusics(props) {
	return (
		<>
			<div className="mt-5 ml-10 w-3/4 flex flex-col gap-5">
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
					<TableBody>{Mapper(props.id)}</TableBody>
				</Table>
			</div>
		</>
	);
}
function Mapper(id) {
	return musics[id - 1].map((music) => {
		return (
			<TableRow key={music.id}>
				<TableCell className="font-medium">{music.id}</TableCell>
				<TableCell>{music.title}</TableCell>
				<TableCell>{music.plays}</TableCell>
				<TableCell className="text-right">{music.duration}</TableCell>
			</TableRow>
		);
	});
}
