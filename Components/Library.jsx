import { MdOutlineLibraryMusic } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

export default function Library() {
	return (
		<>
			<div className="flex flex-col gap-5 bg-[#0D0D0D] w-72 pt-2 mt-6 rounded-2xl rounded-tl-none rounded-bl-none rounded-br-none h-[143.9vh]">
				<div className="flex gap-7 mt-6 ml-10 ">
					<a
						href="/"
						className="flex gap-5 hover:text-gray-400 duration-200 w-28"
					>
						<MdOutlineLibraryMusic className="text-2xl" />
						<h1 className="text-xl">Library</h1>
					</a>
					<a href="/" className="hover:text-gray-400 duration-200 w-10">
						<FiPlus className="text-2xl ml-12 mt-1" />
					</a>
				</div>
				<div className="w-56 h-36 mt-6 p-3 rounded-2xl bg-[#2c2c2c] ml-8 flex flex-col justify-between">
					<h1 className="ml-1 mt-2">Create Your First Playlist</h1>
					<button className="rounded-3xl w-20 bg-[#DDDDDD] px-2 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 text-sm font-semibold">
						Create
					</button>
				</div>
			</div>
		</>
	);
}
