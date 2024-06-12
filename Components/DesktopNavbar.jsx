import Logo from "./Logo";
import Navbar from "./Navbar";
export default function DesktopNavbar() {
	return (
		<>
			<div className="xl:flex hidden justify-between gap-5">
				<Logo />
				<Navbar />
			</div>
		</>
	);
}
