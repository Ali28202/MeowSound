import { Inter } from "next/font/google";
import DesktopNavbar from "@/Components/DesktopNavbar";
import MobileNavbar from "@/Components/MobileNavbar";
import SideBar from "@/Components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "MeowSound",
	description: "Developed By CGG",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{
					<>
						<DesktopNavbar />
						<MobileNavbar />
						<div className="xl:flex xl:flex-row xl:justify-between">
							<div className="xl:flex hidden">
								<SideBar />
							</div>
							{children}
						</div>
					</>
				}
			</body>
		</html>
	);
}
