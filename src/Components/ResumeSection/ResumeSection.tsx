import { useState } from "react";
import "./style.css";

interface Props
{
	name: string,
    sectionContents: JSX.Element,
}

export default function ResumeSection(props: Props) 
{
    const [expanded, SetExpanded] = useState<boolean>(false);

	return (
        <div>
            <div className="ResumeSection"
                onClick={() => SetExpanded(!expanded)}>
            
                <div className={expanded ? "ResumeSectionTitle ResumeSectionTitleExpanded" : "ResumeSectionTitle"}>
                    <img className="ResumeSectionIcon" src={expanded ? "./icons/collapseIcon.png" : "./icons/expandIcon.png"} alt="Expand/Collapse Icon"></img>
                    <div className="ResumeSectionText">{props.name}</div>
                </div>
            </div>

            <div className={expanded ? "ResumeSectionContents ResumeSectionContentsShow" : "ResumeSectionContents"}>
                {props.sectionContents}
            </div>
        </div>
	);
}