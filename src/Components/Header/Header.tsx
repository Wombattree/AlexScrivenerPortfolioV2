import { PageName } from "../../Utilities/Enums"
import NavigationTabs from "./NavigationTabs/NavigationTabs";
import "./style.css";

interface Props
{
	currentPage: PageName,
	HandlePageChange: (page: PageName) => void,
}

export default function Header(props: Props) 
{
	return (
		<div>
			<div className="Header">
				<div className="HeaderTitleBackdrop">
					<div className="HeaderTitle">Alex Scrivener</div>
				</div>
				<NavigationTabs currentPage={props.currentPage} HandlePageChange={props.HandlePageChange} />
			</div>
		</div>
	);
}
