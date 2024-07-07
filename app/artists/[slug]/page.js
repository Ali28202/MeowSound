import EachArtist from "@/Components/EachArtist";
export default function Home({ params }) {
	return (
		<>
			<div className="media_wrapper !p-0 flex flex-col">
				<EachArtist id={params.slug} />
			</div>
		</>
	);
}
