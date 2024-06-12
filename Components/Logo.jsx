import Link from "next/link";
export default function Logo() {
	return (
		<>
			<div className="flex gap-2 pl-4 items-center bg-[#0D0D0D] xl:w-72 w-96 h-20 rounded-2xl rounded-tl-none rounded-bl-none rounded-tr-none">
				<Link href={"/"}>
					<img src="logo.png" alt="logo" className="w-14" />
				</Link>
				<Link href={"/"}>
					<h1 className="text-lg">MeowSound</h1>
				</Link>
			</div>
		</>
	);
}
