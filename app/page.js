import Logo from "@/Components/Logo";
import Navbar from "@/Components/Navbar";
import Menu from "@/Components/Menu";
import Library from "@/Components/Library";
import Category from "@/Components/Category";
import Artists from "@/Components/Artists";
import Albums from "@/Components/Albums";
import Podcasts from "@/Components/Podcasts";

export default function Home() {
	return (
		<>
			<div className="flex justify-between gap-5">
				<Logo />
				<Navbar />
			</div>
			<div className="flex flex-row justify-between">
				<div className="sidebar">
					<Menu />
					<Library />
				</div>
				<div className="media_wrapper flex flex-col justify-between">
					<Category />
					<Artists />
					<Albums />
					<Podcasts />
				</div>
			</div>
		</>
	);
}
