import "./style.css";
import { useState } from 'react';

interface Props
{
	name: string,
    description: string,
    githubLink: string,
    link: string, 
    imageSource: string,
    index: number,
}

export default function PortfolioExample(props: Props) 
{
    const [hovered, SetHovered] = useState<boolean>(false);

    const style = 
    {
        backgroundImage: ` url(${props.imageSource})`,
    }

	return (
		<div className="PortfolioExample" style={style}
            onMouseEnter={() => SetHovered(true)}
            onMouseLeave={() => SetHovered(false)}>

            <div className="PortfolioExampleBlackout">
                <div className={ hovered ? "PortfolioExampleTextContainer PortfolioExampleTextContainerHovered" : "PortfolioExampleTextContainer"}>
                    <div className="Row">
                        <div className="Column MainColumn">
                            <a href={props.link} className="PortfolioExampleText">
                                <div className="PortfolioExampleTitle">{props.name}</div>
                                <div className="PortfolioExampleDescription">{props.description}</div>
                            </a>
                        </div>
                        <div className="Column GithubIconColumn">
                            <a className="GithubLink GithubIconLinkPortfolio" href={props.githubLink}>
                                <img className="GithubIcon GithubIconPortfolio" src="./icons/githubIcon.png" alt="Github Icon"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
}
