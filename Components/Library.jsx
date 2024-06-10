import { MdOutlineLibraryMusic } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

export default function Library() {
	return (
		<>
			<div className="flex gap-4 items-start bg-[#0D0D0D] w-72 pt-2 mt-6 rounded-2xl rounded-tl-none rounded-bl-none rounded-br-none h-[100vh]">
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
			</div>
		</>
	);
}
