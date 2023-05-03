import PortfolioExample from "../Components/PortfolioExample/PortfolioExample";
import "./style.css";

class PortfolioExampleInfo
{
	constructor (name: string, description: string, githubLink: string, link: string, imageSource: string)
	{
		this.name = name;
		this.description = description;
		this.githubLink = githubLink;
		this.link = link;
		this.imageSource = imageSource;
	}

	name: string;
	description: string;
	githubLink: string;
	link: string;
	imageSource: string;
}

export default function Portfolio() 
{
	const examples: PortfolioExampleInfo[] = 
	[
		new PortfolioExampleInfo("Chess", "Play chess against the computer", "https://github.com/Wombattree/ChessWebsite", "https://wombattree.github.io/ChessWebsite/", "./thumbnails/chessWebsiteThumbnail.png"), 
		new PortfolioExampleInfo("Recipe Price Checker", "Make a recipe and see how much it would cost", "https://github.com/Wombattree/RecipePriceChecker", "https://wombattree.github.io/RecipePriceChecker/", "./thumbnails/recipePriceCheckerThumbnail.png"),
		new PortfolioExampleInfo("Merchant Game", "Trade resources to make a profit", "https://github.com/Wombattree/MerchantGame", "https://ascrivener-merchant-game.herokuapp.com", "./thumbnails/merchantGameThumbnail.png"), 
		new PortfolioExampleInfo("Tech Blog", "A simple tech blog to post your thoughts", "https://github.com/Wombattree/TechBlog", "https://ascrivener-tech-blog.herokuapp.com", "./thumbnails/techBlogThumbnail.png"), 
		new PortfolioExampleInfo("Note Taker", "Jot down notes", "https://github.com/Wombattree/NoteTaker", "https://alexscrivenernotetaker.herokuapp.com", "./thumbnails/noteTakerThumbnail.png"), 
		new PortfolioExampleInfo("Social Network API", "An basic API for a social network site", "https://github.com/Wombattree/SocialNetworkAPI", "https://www.youtube.com/watch?v=WhiW8BIAF-c", "./thumbnails/socialNetworkAPIThumbnail.png")
	];

	return (
		<div className="PageBody">
			<div className="PortfolioResumeColumn">
				{ examples.map((example, index) => (
					<PortfolioExample
						key={`${example.name}`}
						name={example.name}
						description={example.description}
						githubLink={example.githubLink}
						link={example.link}
						imageSource={example.imageSource}
						index={index}/>
				))}
			</div>
		</div>
	);
}