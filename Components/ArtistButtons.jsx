import { FaPlay } from "react-icons/fa6";
import { RxShuffle } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
export default function ArtistButtons() {
	return (
		<>
			<div className="ml-10 mt-3 flex items-center gap-8">
				<button className="rounded-full flex items-center justify-center w-16 h-16 bg-green-500 p-4 pl-5 hover:scale-105">
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
