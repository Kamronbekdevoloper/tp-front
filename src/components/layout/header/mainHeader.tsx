import LanguageSelector from "./assets/localization"
import { ModeToggle } from "./assets/mode-toggle"

export default function Header() {
	return (
		<div className="flex items-center justify-between   ">
			<span className="text-2xl font-bold ">TopWords</span>
			<div className="flex gap-4">
				<LanguageSelector />
				<ModeToggle />
			</div>
		</div>
	)
}
