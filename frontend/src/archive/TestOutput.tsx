import React from 'react';
import { useLocation } from 'react-router-dom';
import { Page } from '../interfaces/scanInterfaces';

export function TestOutput() {
	const location = useLocation();
  const { pages } = location.state as { pages: Page[] };

	return (
		<div>
			test output
			{pages.map((page) => (
				<div key={page.pageId}>
					<h2>{page.filePath}</h2>
					<p>File Type: {page.pageContent.fileType}</p>
					<p>Body Content:</p>
					<pre>{page.pageContent.body.originalVersion}</pre>
					<hr />
					<br />
				</div>
			))}
		</div>
	)
}