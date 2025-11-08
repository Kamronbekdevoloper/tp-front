import { ModeToggle } from "./assets/mode-toggle";

export default function Header() {
	return (
		<div className="flex items-center justify-between">
			<span className="text-[32px] font-extrabold ">TopWords</span>
			<ModeToggle />
		</div>
	);
}
