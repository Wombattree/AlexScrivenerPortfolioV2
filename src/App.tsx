import { useState } from 'react';
import PageContainer from './Components/PageContainer/PageContainer';
import { PageName } from './Utilities/Enums';
import "./App.css";

function App()
{
	const [currentPage, SetCurrentPage] = useState<PageName>(PageName.AboutMe);
	const HandlePageChange = (pageName: PageName) => SetCurrentPage(pageName);

	return (
		<div>
			<PageContainer currentPage={currentPage} HandlePageChange={HandlePageChange} />
		</div>
	);
}

export default App;