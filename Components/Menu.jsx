import { IoHome } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import Link from "next/link";
export default function Menu() {
	return (
		<>
			<div className="w-72 h-42 flex flex-col gap-8 py-10 bg-[#0D0D0D] mt-6 rounded-2xl rounded-tl-none rounded-bl-none">
				<Link
					href={"/"}
					className="flex gap-4 items-center ml-10 hover:text-gray-400 duration-200 w-24"
				>
					<IoHome className="text-2xl mb-1" />
					<h1 className="text-xl">Home</h1>
				</Link>
				<Link
					href={"/"}
					className="flex gap-4 items-center ml-10 hover:text-gray-400 duration-200 w-28"
				>
					<IoNewspaperOutline className="text-2xl mb-1" />
					<h1 type="button" className="text-xl">
						Activity
					</h1>
				</Link>
			</div>
		</>
	);
}
