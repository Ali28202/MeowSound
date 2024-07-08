import { FaPlay } from "react-icons/fa6";
import { RxShuffle } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
const musics = [
	// moein
	{
		artist: "Moein",
		id: 1,
		title: "Halghe Tala",
		plays: "3,629,885",
		duration: "5:15",
		href: "/Moein/Moein - Halghe Tala [320].mp3",
		img: "/albums/khooneyeArezoo.jpg",
	},
	//mickgordon
	{
		artist: "MickGordon",
		id: 1,
		title: "Rip & Tear",
		plays: "107,809,803",
		duration: "4:17",
		href: "/Mickgordon/1_2 - Rip  Tear - Mick Gordon (320).mp3",
		img: "/albums/doomEternal.png",
	},
	//twenty one pilots
	{
		artist: "Twenty One Pilots",
		id: 1,
		title: "Stressed Out",
		plays: "2,334,962,418",
		duration: "3:22",
		href: "/21Pilots/1_2 - Stressed Out - Twenty One Pilots (320).mp3",
		img: "/albums/blurryFace.jpg",
	},
	//anathema
	{
		artist: "Anathema",
		id: 1,
		title: "One Last Goodbye - Remastered",
		plays: "12,723,626",
		duration: "5:23",
		href: "/Anathema/1_6 - One Last Goodbye (Remastered) - Anathema (320).mp3",
		img: "/albums/Anathema-Judgement.jpg",
	},
];
export default function ArtistButtons({ setTrack, id }) {
	return (
		<>
			<div className="ml-10 mt-3 flex items-center gap-8">
				<button
					className="rounded-full flex items-center justify-center w-16 h-16 bg-green-500 p-4 pl-5 hover:scale-105"
					onClick={() => setTrack(musics[id - 1])}
				>
					<FaPlay className="text-black text-2xl" />
				</button>
				<button className="text-slate-400 hover:text-white hover:scale-105 font-bold text-4xl mb-1">
					<RxShuffle className="inline-block" />
				</button>
				<button className="text-slate-300 hover:text-white font-bold p-2 rounded-full w-20 h-10 border-white border hover:scale-105">
					Follow
				</button>
				<button className="text-slate-400 hover:text-white hover:scale-105 text-4xl">
					<BsThreeDots className="inline-block mb-1" />
				</button>
			</div>
		</>
	);
}
