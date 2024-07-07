import Menu from "@/Components/Menu";
import Library from "@/Components/Library";
export default function SideBar() {
	return (
		<>
			<div className={"xl:flex hidden xl:flex-col"}>
				<Menu />
				<Library />
			</div>
		</>
	);
}
