import ResumeSection from "../Components/ResumeSection/ResumeSection";
import "./style.css";
import { GetResumeData } from "../Components/ResumeSection/ResumeData";
import DownloadResume from "../Components/DownloadResume/DownloadResume";

export default function Resume() 
{
	return (
		<div className="PageBody">
			<div className="PortfolioResumeColumn">
				{ GetResumeData().map((section, index) => (
					<ResumeSection
						key={section.name}
						name={section.name}
						sectionContents={section.contents}/>
				))}

				<DownloadResume/>
			</div>
		</div>
	);
}