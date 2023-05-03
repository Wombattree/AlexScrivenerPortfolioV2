import "./style.css";

interface Props
{
	pageName: string,
}

export default function NavigationTabLabel(props: Props) 
{
	return (
		<div className="NavigationTabLabel">
			{props.pageName}
		</div>
	);
}
