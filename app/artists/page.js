import Category from "@/Components/Category";
import Artists from "@/Components/Artists";
import Albums from "@/Components/Albums";
import Podcasts from "@/Components/Podcasts";
export default function Page() {
	return (
		<>
			<div className="media_wrapper flex flex-col">
				<Artists />
			</div>
		</>
	);
}
