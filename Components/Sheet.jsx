import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { IoHome, IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
export default function MobileSheet() {
	return (
		<>
			<div className="bg-[#0d0d0d] flex justify-center items-center p-7 rounded-2xl rounded-tr-none rounded-br-none rounded-tl-none">
				<Sheet>
					<SheetTrigger>
						<CiMenuFries className="text-2xl opacity-70 hover:opacity-100 duration-200" />
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							{/* Logo */}
							<div className="bg-[#111111] flex pr-4 gap-1 items-center justify-end mb-6 w-full h-[10vh] rounded-2xl rounded-tr-none rounded-tl-none">
								<Link href={"/"}>
									<img src="logo.png" alt="logo" className="w-10 mb-1" />
								</Link>
								<Link href={"/"}>
									<h1 className="text-base">MeowSound</h1>
								</Link>
							</div>
							{/* Menu */}
							<div className="bg-[#111111] w-full mb-6 rounded-2xl pl-8 py-8 h-full flex items-start justify-start flex-col gap-10">
								<Link
									href={"/"}
									className="flex gap-4 items-center hover:text-gray-400 duration-200 w-24"
								>
									<IoHome className="text-2xl mb-1" />
									<h1 className="text-xl">Home</h1>
								</Link>
								<Link
									href={"/"}
									className="flex gap-4 items-center  hover:text-gray-400 duration-200 w-28"
								>
									<IoNewspaperOutline className="text-2xl mb-1" />
									<h1 type="button" className="text-xl">
										Activity
									</h1>
								</Link>
							</div>
							{/* Library */}
							<div className="bg-[#111111] w-full h-[100vh] rounded-2xl pl-8 py-8 flex items-start justify-start flex-col gap-10">
								<div className="flex gap-7">
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
								<div className="w-56 h-36 p-3 rounded-2xl bg-[#2c2c2c] flex flex-col justify-between">
									<h1 className="ml-1 mt-2">Create Your First Playlist</h1>
									<button className="rounded-3xl w-20 bg-[#DDDDDD] px-2 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 text-sm font-semibold">
										Create
									</button>
								</div>
							</div>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</>
	);
}
