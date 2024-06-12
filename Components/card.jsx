export default function Card(props) {
	const classN =
		props.type === "artistCard"
			? "mb-2 rounded-full h-full w-full"
			: "mb-2 h-full w-full";
	return (
		<div className="flex flex-col xl:w-1/2 my-8 xl:m-2 xl:p-6 p-4 hover:bg-[#cccccc] rounded-xl hover:text-black hover:-translate-y-3 hover:shadow-md hover:shadow-[rgb(160,160,160)] duration-300 cursor-pointer">
			<img className={classN} src={props.src} />
			<h3 className="mt-2 ml-2 text-base xl:text-xl">{props.title}</h3>
		</div>
	);
}
