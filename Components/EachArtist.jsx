import ArtistThumbnail from "./ArtistThumbnail";
import ArtistButtons from "@/Components/ArtistButtons";
import ArtistMusics from "./ArtistMusics";
import ArtistAlbums from "./ArtistAlbums";
export default function EachArtist(props) {
	return (
		<div className="flex flex-col gap-2">
			<ArtistThumbnail id={props.id} />
			<ArtistButtons />
			<ArtistMusics id={props.id} />
			<ArtistAlbums id={props.id} />
		</div>
	);
}
