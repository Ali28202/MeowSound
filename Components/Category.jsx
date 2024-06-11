"use client";
import { useState } from "react";
export default function Category() {
	const [selected, setSelected] = useState("1");
	let class1;
	let class2;
	let class3;
	if (selected == 1) {
		class1 =
			"rounded-3xl bg-[#ffffff] px-5 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 font-semibold";
		class2 =
			"rounded-3xl bg-[#6C6C6C] px-5 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 font-semibold";
		class3 =
			"rounded-3xl bg-[#6C6C6C] px-5 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 font-semibold";
	} else if (selected == 2) {
		class1 =
			"rounded-3xl bg-[#6C6C6C] px-5 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 font-semibold";
		class2 =
			"rounded-3xl bg-[#ffffff] px-5 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 font-semibold";
		class3 =
			"rounded-3xl bg-[#6C6C6C] px-5 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 font-semibold";
	} else if (selected == 3) {
		class1 =
			"rounded-3xl bg-[#6C6C6C] px-5 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 font-semibold";
		class2 =
			"rounded-3xl bg-[#6C6C6C] px-5 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 font-semibold";
		class3 =
			"rounded-3xl bg-[#ffffff] px-5 py-2 hover:bg-[#bbbbbb] duration-200 text-gray-900 font-semibold";
	}
	return (
		<>
			<div className="flex gap-3 ml-3 mb-5">
				<button className={class1} onClick={() => setSelected("1")}>
					All
				</button>
				<button className={class2} onClick={() => setSelected("2")}>
					Music
				</button>
				<button className={class3} onClick={() => setSelected("3")}>
					Podcast
				</button>
			</div>
		</>
	);
}
