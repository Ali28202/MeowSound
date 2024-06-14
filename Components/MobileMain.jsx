import Category from "@/Components/Category";
import Artists from "@/Components/Artists";
import Albums from "@/Components/Albums";
import Podcasts from "@/Components/Podcasts";

export default function MobileMain() {
	return (
		<>
			<div className="flex xl:hidden xl:flex-row">
				<div className="media_wrapper_mobile flex flex-col">
					<Category />
					<Artists />
					<Albums />
					<Podcasts />
				</div>
			</div>
		</>
	);
}
