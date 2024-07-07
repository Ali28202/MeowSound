import { Inter } from "next/font/google";
// import "./globals.css";
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
						<div className="xl:flex hidden xl:flex-row justify-between">
							<SideBar />
							{children}
						</div>
					</>
				}
			</body>
		</html>
	);
}
