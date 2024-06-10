import Logo from "@/Components/Logo";
import Navbar from "@/Components/Navbar";
import Menu from "@/Components/Menu";
import Library from "@/Components/Library";

export default function Home() {
	return (
		<>
			<div className="flex justify-between gap-5">
				<Logo />
				<Navbar />
			</div>
			<div className="flex flex-col justify-between">
				<Menu />
				<Library />
			</div>
		</>
	);
}
