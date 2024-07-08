"use client";
import { useState, useEffect, useRef, useCallback, track } from "react";
// icons
import {
	IoPlaySkipBackSharp,
	IoPlaySkipForwardSharp,
	IoPlaySharp,
	IoPauseSharp,
} from "react-icons/io5";

const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress }) => {
	const [isPlaying, setIsPlaying] = useState((track) => {
		if (track) return false;
		else return true;
	});

	const togglePlayPause = () => {
		setIsPlaying((prev) => !prev);
	};
	const playAnimationRef = useRef();

	const repeat = useCallback(() => {
		if (audioRef.current) {
			const currentTime = audioRef.current.currentTime;
			setTimeProgress(currentTime);
			progressBarRef.current.value = currentTime;

			playAnimationRef.current = requestAnimationFrame(repeat);
		}
	}, [audioRef, duration, progressBarRef, setTimeProgress]);

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
			playAnimationRef.current = requestAnimationFrame(repeat);
		} else {
			audioRef.current.pause();
			cancelAnimationFrame(playAnimationRef.current);
		}
	}, [isPlaying, audioRef, repeat]);
	return (
		<div className="mb-3 mt-2">
			<div className="flex items-center gap-5 justify-center">
				<button>
					<IoPlaySkipBackSharp className="text-2xl hover:text-green-600 duration-200" />
				</button>
				<button onClick={togglePlayPause}>
					{isPlaying ? (
						<IoPauseSharp className="text-2xl hover:text-green-600 duration-200" />
					) : (
						<IoPlaySharp className="text-2xl hover:text-green-600 duration-200" />
					)}
				</button>
				<button>
					<IoPlaySkipForwardSharp className="text-2xl hover:text-green-600 duration-200" />
				</button>
			</div>
		</div>
	);
};

export default Controls;
