export default function Card(props) {
	return (
		<div className="card">
			<img className="mb-2 rounded-full h-full w-full" src={props.src} />
			<h3 className="mt-2 text-lg">{props.title}</h3>
		</div>
	);
}
