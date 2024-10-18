## Date 10/18/2024

## Name Lex

### Completed version 1 of the rendered page design

#### Page navigation currently only listens for tag (<a>) clicks for navigation.  We need to think about other ways users might use to navigate to different pages.

#### Currently, only HTML files are being rendered. We need to include CSS and JavaScript in the htmlContent for rendering. But how we decide which CSS and JS files should be included within  htmlContent.

#### PageId is currently using the file name,  it may need to be changed.

#### Consider the case where a single page might use multiple JS and CSS files.

#### The FIX and UNDO buttons have not been added yet.

#### The resize window feature has a poor user experience. We need think about using Resizable to redesign this feature.

#### The logic for highlighting the corresponding tag is based on the sequence of ID > className > tagName to locate the specific tag. However, for codeBlock with no id, no className, and not being the first matching tag, the current logic may not correctly locate the tag. This logic needs to be revised to find the correct node.

#### Pay attention to the error Failed to load resource: the server responded with a status of 431 (Request Header Fields Too Large), and figure out its impact on the site.











