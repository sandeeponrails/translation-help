

import React, {useState} from 'react';
import Viewer from '@bit/unfoldingword.resources.viewer';
import { render } from 'react-dom';

const _context = {
	username: 'unfoldingword',
	languageId: 'en',
	resourceId: 'ult',
	reference: {
		bookId: 'jhn',
		chapter: '3',
	}
};

function App() {
	const [context, setContext] = useState(_context);
	return (
		<Viewer
		  context={context}
			setContext={setContext}
			history={[]}
		/>
	);
};

render(<App /> , document.getElementById('container'))
