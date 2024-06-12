import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

export default function MobileSheet() {
	return (
		<>
			<div className="bg-[#0d0d0d] flex justify-center items-center p-7 rounded-2xl rounded-tr-none rounded-br-none rounded-tl-none">
				<Sheet>
					<SheetTrigger>
						<CiMenuFries className="text-2xl" />
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Are you absolutely sure?</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</>
	);
}
