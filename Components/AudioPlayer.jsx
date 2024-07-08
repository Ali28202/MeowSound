export default function AudioPlayer({
	track,
	audioRef,
	setDuration,
	progressBarRef,
}) {
	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds;
	};
	return (
		<>
			<div>
				<audio
					src={track.href}
					ref={audioRef}
					onLoadedMetadata={onLoadedMetadata}
				/>
			</div>
		</>
	);
}
