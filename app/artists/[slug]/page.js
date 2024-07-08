"use client";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/Components/EachArtist"), { ssr: false });
import Player from "@/Components/Player";
import { useState } from "react";
// import EachArtist from "@/Components/EachArtist";
export default function Home({ params }) {
	const [track, setTrack] = useState(null);
	return (
		<>
			<div className="xl:media_wrapper media_wrapper_mobile !p-0 flex flex-col">
				<NoSSR id={params.slug} setTrack={setTrack} />
				{/* <EachArtist id={params.slug} /> */}
				{track ? <Player track={track} /> : <></>}
			</div>
		</>
	);
}
