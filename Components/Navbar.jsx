"use client";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
	return (
		<>
			<div className="flex fixed justify-between right-0 items-center px-10 gap-5 w-[79vw] h-20 bg-[#0D0D0D] rounded-2xl rounded-tr-none rounded-br-none rounded-tl-none">
				<div className="flex items-center gap-3 bg-[#3D3D3D] rounded-3xl w-96 pl-4 pr-4">
					<input
						type="text"
						className="w-full bg-transparent outline-none text-md py-2"
						placeholder={"Search..."}
					/>
					<button>
						<CiSearch className="w-7 h-7 hover:text-gray-300 duration-100" />
					</button>
				</div>
				<div className="flex justify-end items-center gap-5">
					<button className="text-gray-300 hover:text-gray-400 duration-200 text-bas">
						Sign Up
					</button>
					<button className="rounded-3xl bg-[#DDDDDD] px-5 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 font-semibold">
						Login
					</button>
				</div>
			</div>
		</>
	);
}
