import { PageName } from "../../../Utilities/Enums";
import NavigationTabLabel from "../NavigationTabLabel/NavigationTabLabel";
import "./style.css";

interface Props
{
	number: number,
	pageName: string,
	pageNameEnum: PageName,
	isPageSelected: boolean,
	HandlePageChange: (page: PageName) => void,
}

export default function NavigationTab(props: Props) 
{
	return (
		<div 
			className={ props.isPageSelected ? "NavigationTab NavigationTabSelected" : "NavigationTab"}
			onClick = {() => props.HandlePageChange(props.pageNameEnum)}>
			<NavigationTabLabel pageName={props.pageName}/>
		</div>
	);
}
