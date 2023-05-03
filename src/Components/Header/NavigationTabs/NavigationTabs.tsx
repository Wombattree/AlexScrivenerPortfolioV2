import { PageName } from "../../../Utilities/Enums"
import NavigationTab from "../NavigationTab/NavigationTab";
import "./style.css";

interface Props
{
	currentPage: PageName,
	HandlePageChange: (page: PageName) => void,
}

class Page
{
	constructor (pageName: string, pageNameEnum: PageName)
	{
		this.pageName = pageName;
		this.pageNameEnum = pageNameEnum;
	}

	pageName: string;
	pageNameEnum: PageName;
}

export default function NavigationTabs(props: Props) 
{
	const pages: Page[] = [new Page("About Me", PageName.AboutMe), new Page("Portfolio", PageName.Portfolio), new Page("Resume", PageName.Resume)];

	return (
		<div className="NavigationTabs">
			{ pages.map((page, index) => (
				<NavigationTab
					key={`${page.pageName} tab`}
					number={index}
					pageName={page.pageName}
					pageNameEnum={page.pageNameEnum}
					isPageSelected={page.pageNameEnum === props.currentPage ? true : false}
					HandlePageChange={props.HandlePageChange}/>
          	))}
		</div>
	);
}
