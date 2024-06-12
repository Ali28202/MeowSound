import Menu from "@/Components/Menu";
import Library from "@/Components/Library";
import Category from "@/Components/Category";
import Artists from "@/Components/Artists";
import Albums from "@/Components/Albums";
import Podcasts from "@/Components/Podcasts";

export default function DesktopMain() {
	return (
		<>
			<div className="xl:flex hidden xl:flex-row justify-between">
				<div className="sidebar">
					<Menu />
					<Library />
				</div>
				<div className="media_wrapper flex flex-col">
					<Category />
					<Artists />
					<Albums />
					<Podcasts />
				</div>
			</div>
		</>
	);
}
