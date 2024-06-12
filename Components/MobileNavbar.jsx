import Logo from "./Logo";
import MobileSheet from "./Sheet";
export default function MobileNavbar() {
	return (
		<>
			<div className="flex xl:hidden items-center justify-between gap-5">
				<Logo />
				<MobileSheet />
			</div>
		</>
	);
}
