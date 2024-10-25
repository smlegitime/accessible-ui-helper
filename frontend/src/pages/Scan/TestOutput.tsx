import React from 'react';
import { useLocation } from 'react-router-dom';

enum FileType {
  Html = 'Html',
  Css = 'Css',
  Js = 'Js'
}
enum Framework {
  VanillaProject = 'VanillaProject', 
  React = 'React',
  Angular = 'Angular',
  Vue = 'Vue'
}
interface Page {
  readonly pageId: string;
  filePath: string;
  viewport: {
    width: number,
    height: number;
  };
  pageContent: {
    fileType: FileType;
    framework: string | Framework;
    body: {
      originalVersion: string;
      transpiledVersion: string;
    };
  };
}

export function TestOutput() {
	const location = useLocation();
  const { pages } = location.state as { pages: Page[] };
	console.log(pages);

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