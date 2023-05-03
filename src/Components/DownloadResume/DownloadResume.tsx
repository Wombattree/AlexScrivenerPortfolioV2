import "./style.css";

interface Props
{
	
}

export default function DownloadResume(props: Props) 
{
	return (
        <div>
            <a className="ResumeDownloadButton" href="./Alex Scrivener Resume.pdf" download>Download resume as a PDF</a>
        </div>
	);
}