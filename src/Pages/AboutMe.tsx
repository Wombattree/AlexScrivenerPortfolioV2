import "./style.css";

export default function AboutMe()
{
	return (
		<div className="PageBody">
			<div className="Paragraph">
				Hello! My name's Alex, and I'm a Web Developer. Having completed the Adelaide Uni Coding Bootcamp, I'm now looking for work. Take a look through my site and if you like what you see let me know!
			</div>
			<div className="Paragraph">
				I like to make video games with C# and Unity during my spare time. When I'm not learning to program I also like to play video games, draw, listen to music, watch horror movies and eat chocolate.
			</div>
			<a className="GithubLink" href="https://github.com/Wombattree">
				<img className="GithubIcon" src="./icons/githubIcon.png" alt="Github Icon"></img>
			</a>
		</div>
	);
}