import AboutMe from '../../Pages/AboutMe';
import Resume from '../../Pages/Resume';
import Portfolio from '../../Pages/Portfolio';
import { PageName } from '../../Utilities/Enums';
import "./style.css";
import Header from '../Header/Header';

interface Props
{
	currentPage: PageName,
	HandlePageChange: (page: PageName) => void,
}

function GetPageContainerWidth(): string
{
	const screenWidth = window.innerWidth;

	if (screenWidth > 2000) return "40%";
	else if (screenWidth > 1000) return "50%";
	else if (screenWidth > 500) return "80%";
	else return "95%";
}

function GetPageContainerLeftOffset(width: string): string
{
	const screenWidth = window.innerWidth;

	if (screenWidth > 2000) return "30%";
	else if (screenWidth > 1000) return "25%";
	else if (screenWidth > 500) return "10%";
	else return "2.5%";
}

export default function PageContainer(props: Props) 
{
	function RenderPage()
	{
        switch (props.currentPage)
        {
            case PageName.Portfolio: return <Portfolio />;
            case PageName.Resume: return <Resume />;
            case PageName.AboutMe: return <AboutMe />;
            default: return <AboutMe />;
        }
	};

	const PageContainerWidth = GetPageContainerWidth();

	const PageContainerStyle = 
    {
		width: PageContainerWidth,
        left: GetPageContainerLeftOffset(PageContainerWidth),
    }

	return (
		<div className="PageContainer" style={PageContainerStyle}>
			<div className="PageContainerInner">
				<Header currentPage={props.currentPage} HandlePageChange={props.HandlePageChange} />
            	{RenderPage()}
			</div>
		</div>
	);
}
