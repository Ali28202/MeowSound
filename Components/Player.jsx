"use client";
import AudioInfo from "./AudioInfo";
import AudioPlayer from "./AudioPlayer";
import AudioControls from "./AudioControls";
import AudioProgressBar from "./AudioProgressBar";
import { useState, useRef } from "react";

export default function Player({ track }) {
	const audioRef = useRef();
	const progressBarRef = useRef();
	const [timeProgress, setTimeProgress] = useState(0);
	const [duration, setDuration] = useState(0);
	return (
		<>
			<div className="fixed left-0 bottom-0 xl:w-72 w-full xl:h-48 h-22 bg-[#1c1c1c] rounded-xl rounded-bl-none rounded-br-none">
				<div className="flex xl:flex-col flex-row xl:items-stretch xl:justify-center justify-between xl:pr-0 pr-9 items-center">
					<AudioInfo {...{ track }} />
					<AudioPlayer {...{ track, audioRef, setDuration, progressBarRef }} />
					<div className="xl:mt-1">
						<AudioControls
							{...{
								track,
								audioRef,
								progressBarRef,
								duration,
								setTimeProgress,
							}}
						/>
						<AudioProgressBar
							{...{ progressBarRef, audioRef, timeProgress, duration }}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
