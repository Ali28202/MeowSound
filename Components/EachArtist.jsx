import ArtistThumbnail from "./ArtistThumbnail";
import ArtistButtons from "@/Components/ArtistButtons";
import ArtistMusics from "./ArtistMusics";
import ArtistAlbums from "./ArtistAlbums";

export default function EachArtist({ id, setTrack }) {
	return (
		<>
			<div className="flex flex-col gap-2">
				<ArtistThumbnail id={id} />
				<ArtistButtons id={id} {...{ setTrack }} />
				<ArtistMusics id={id} {...{ setTrack }} />
				<ArtistAlbums id={id} />
			</div>
		</>
	);
}
