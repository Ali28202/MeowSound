export default function AudioInfo({ track }) {
	return (
		<>
			<div className="flex justify-between items-center p-2 gap-3 bg-gradient-to-b from-violet-700 to-green-500 bg-opacity-90 rounded-xl rounded-br-none rounded-bl-none">
				<div className="ml-2">
					<h1 className="xl:text-xl text-base">{track.title}</h1>
					<h2 className="xl:text-sm text-xs ml-0.5">{track.artist}</h2>
				</div>
				<img
					src={track.img}
					alt="cover"
					className="rounded-full xl:w-20 xl:h-20 w-16 h-16 animate-rotate"
				/>
			</div>
		</>
	);
}
