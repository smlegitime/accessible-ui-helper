/**
 * @fileoverview For selecting an Entry File and Terms and Services
 * @author Jiecheng(Jason) Chen
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 * Created date: Oct 25, 2024 | Updated date: Dec 6, 2024 
 */

import { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FileType, Framework, Page } from '../../interfaces/scanInterfaces';

interface EntryFile {
	path: string;
	fileName: string;
	value: number;
	isIndex: boolean;
}

interface Props {
	files: File[];
	setIsVisible: (visability: boolean) => void;
}

export function PopUpWindow({ files, setIsVisible }: Props) {
	const [selectedEntryFile, setSelectedEntryFile] = useState<number>(-1);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [seeTermsOfServices, setSeeTermsOfServices] = useState<boolean>(false);

	// set up navigate to send files on navigate to scan page
	const navigate = useNavigate();

	// Hold the index value of all html files in the files array
	let htmlFileIndex: number[] = [];
	// Get the index of each html file in files array and store in htmlFileIndex
	for (let i = 0; i < files.length; i++) {
		if (files[i].type === 'text/html') {
			htmlFileIndex.push(i);
		}
	}

	// Create entryFiles array for display, allow users to select
	// Map all html files into EntryFile typed objects
	const entryFiles: EntryFile[] = htmlFileIndex.map(index => {
		const entirePath = files[index].webkitRelativePath;
		const parts = entirePath.split('/');
		parts.pop();
		const path = parts.join('/');

		return {
			path: path,
			fileName: files[index].name,
			value: index,
			isIndex: files[index].name === 'index.html'
		};
	});

	// Pre-select An entry file
	useEffect(() => {
		// Default to the first file
		setSelectedEntryFile(htmlFileIndex[0]);
		// Select the index.html as the default
		for (let i = 0; i < htmlFileIndex.length; i++) {
			if (files[htmlFileIndex[i]].name === 'index.html') {
				setSelectedEntryFile(htmlFileIndex[i]);
			}
		}
		// eslint-disable-next-line
	}, []);

	// User selecting the entry file
	const handleEntryFileChange = (value: number) => {
		setSelectedEntryFile(value);
	};

	// Check box for terms and services
	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	// Click "X" button to close the pop up window
	const handleClosePopUp = () => {
		setIsVisible(false);
	}

	// Make Term of Services section visible
	const handleViewTermOfServices = () => {
		setSeeTermsOfServices(true);
	}

	// When Accept Button is click, back to select entry window, check the input box
	const handleAccept = () => {
		setSeeTermsOfServices(false);
		setIsChecked(true);
	}
	
	// When Decline Button is click, back to select entry window
	const handleDecline = () => {
		setSeeTermsOfServices(false);
	}

	// When user click the enhance button, Convert all files into Pages, Send Pages to scan and navigate to it
	const handleSubmit = async (): Promise<void> => {
		const pages: Page[] = await convertFilesToPages();
		// set the only entry file
		pages[selectedEntryFile].isEntry = true;
		console.log(pages);
		navigate('/scan', { state: { pages } });
	};

	// Helper function to convert all uploaded files into Page objects
	const convertFilesToPages = async (): Promise<Page[]> => {
		// Get pages from files
		const pages = await Promise.all(files.map(async (file) => {
			const fileType: FileType = getFileType(file.type);
			let fileContent: string = '';
			try {
				if (fileType === FileType.Other) {
					fileContent = await toBase64(file);
				} else {
					fileContent = await file.text();
				}
			} catch (error) {
				console.error('Error getting file content:', error);
			}

			return {
				pageId: `${file.name} ID`,
				isEntry: false,
				filePath: file.webkitRelativePath,
				viewport: {
					width: 1920,
					height: 1080
				},
				pageContent: {
					fileType: fileType,
					framework: Framework.Vanilla, // Default to 'Vanilla'
					body: {
						originalVersion: fileContent,
						transpiledVersion: fileContent
					}
				}
			}
		}));

		return pages;
	};

	// Helper function to get file type from file extension
	const getFileType = (fileType: string): FileType => {
		switch (fileType) {
			case 'text/html':
				return FileType.Html;
			case 'text/css':
				return FileType.Css;
			case 'text/javascript':
				return FileType.Js;
			case 'application/json':
				return FileType.Json;
			default:
				return FileType.Other;
		}
	};

	// Helper function to convert files into Base64 string
	const toBase64 = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = (error) => reject(error);
		});
	}

	return (
		<div id='PopUpBackground'
			className='fixed top-[0] left-[0] w-full h-full
				flex items-center justify-center 
				bg-[rgba(0,_0,_0,_0.45)] backdrop-filter backdrop-blur-[7.5px]'
		>

			<div id='PopUpDialog'
				className='z-10 flex flex-col rounded-lg
                max-w-lg min-h-[450px] p-6 bg-[#414141]'>
				<button onClick={handleClosePopUp} className='ml-auto -mt-[10px] -mr-[10px] max-w-[46px]'>
					<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"
						className=''>
						<rect width="46" height="46" rx="23" fill="#1E1E1E" />
						<path d="M24.6686 23L31 29.3314V31H29.3314L23 24.6686L16.6686 31H15V29.3314L21.3314 23L15 16.6686V15H16.6686L23 21.3314L29.3314 15H31V16.6686L24.6686 23Z" fill="#C7C7C7" />
					</svg>
				</button>


				<section 
					id='selectEntryFile'
					className={`
						flex flex-col flex-1
						${seeTermsOfServices === true ? 'hidden' : ''}
					`}
				>
					<h2 className='text-3xl font-bold mb-2'>Select Entry File</h2>
					<p>
						Please Select the entry file corresponding to your websites landing page
						<span className='italic text-[#D9D9D9]'> e.g. index.html</span>
					</p>
					<ul className='flex-1 max-h-[464px] overflow-scroll mt-4'>
						{entryFiles.map((entryFile) => (
							<li key={entryFile.value} className=''>
								<label className={`
									block w-full h-full px-5 py-1.5
									cursor-pointer rounded-md  [transition:all_.2s_ease]                                
									${selectedEntryFile === entryFile.value
									? 'bg-primary-600 text-black'
									: 'hover:bg-[#5B5A5A]'}                             
                `}>
									<input
										type="radio"
										name="entryFiles"
										value={entryFile.value}
										checked={selectedEntryFile === entryFile.value}
										onChange={() => handleEntryFileChange(entryFile.value)}
										className='invisible h-[0] w-[0]'
									/>
									{entryFile.path}/<b className='font-bold'>{entryFile.fileName}</b>
								</label>
							</li>
						))}
						{entryFiles.length === 0 &&
							<li>Please Include
								<span className='text-primary-100 font-bold'> HTML </span>
								files in your uploaded folder.
							</li>}
					</ul>

					<div className='flex justify-between'>
						<div id='termsAService' className='flex gap-1.5 items-center text-xs'>
							<input id='terms' type='checkbox' className='w-4 h-4 cursor-pointer' checked={isChecked} onChange={handleCheckboxChange} />
							<label htmlFor="terms">I have read the &nbsp;
								<button className='text-[#88AFEF] underline' onClick={handleViewTermOfServices}> terms and services</button>
							</label>
						</div>

						<Button variant='outline' onClick={handleSubmit} disabled={selectedEntryFile === -1 || isChecked === false}
							className='max-h-6 min-w-20 bg-primary-100 rounded-full hover:bg-slate-400 text-black p-4 font-bold'
						>
							ENHANCE
							<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
								<path fillRule="evenodd" clipRule="evenodd" d="M4.35001 14.5C4.35001 14.2115 4.46458 13.9349 4.66853 13.731C4.87247 13.527 5.14908 13.4125 5.43751 13.4125H20.8626L14.8335 7.67046C14.7257 7.57267 14.6386 7.45425 14.5774 7.32219C14.5162 7.19014 14.4822 7.04715 14.4773 6.90169C14.4724 6.75623 14.4967 6.61127 14.5488 6.47538C14.601 6.3395 14.6798 6.21547 14.7808 6.11063C14.8818 6.00579 15.0027 5.92229 15.1365 5.86506C15.2704 5.80783 15.4143 5.77805 15.5598 5.77747C15.7054 5.7769 15.8496 5.80554 15.9838 5.86171C16.1181 5.91787 16.2397 6.00042 16.3415 6.10446L24.3165 13.717C24.4218 13.8184 24.5055 13.94 24.5627 14.0746C24.6198 14.2091 24.6493 14.3538 24.6493 14.5C24.6493 14.6461 24.6198 14.7908 24.5627 14.9254C24.5055 15.0599 24.4218 15.1815 24.3165 15.283L16.3415 22.8955C16.2397 22.9995 16.1181 23.082 15.9838 23.1382C15.8496 23.1944 15.7054 23.223 15.5598 23.2224C15.4143 23.2219 15.2704 23.1921 15.1365 23.1349C15.0027 23.0776 14.8818 22.9941 14.7808 22.8893C14.6798 22.7844 14.601 22.6604 14.5488 22.5245C14.4967 22.3886 14.4724 22.2437 14.4773 22.0982C14.4822 21.9528 14.5162 21.8098 14.5774 21.6777C14.6386 21.5457 14.7257 21.4272 14.8335 21.3295L20.8626 15.5875H5.43751C5.14908 15.5875 4.87247 15.4729 4.66853 15.2689C4.46458 15.065 4.35001 14.7884 4.35001 14.5Z" fill="black" />
							</svg>
						</Button>
					</div>
				</section>


				<section 
					id='termsOfServices' 
					className={`
						flex flex-col flex-1
						${seeTermsOfServices === false ? 'hidden' : ''}
					`}
				>
					<h2 className='text-3xl font-bold mb-2'>Terms Of Service</h2>
					<p className='flex-1 bg-[#282828] rounded-md my-3 p-3 max-h-[264px] overflow-y-scroll'>
						<b>By using our web app, <br />you agree to the following terms:</b><br /><br />
						<span className='text-[#D9D9D9] text-s'>						
							Our app analyzes the accessibility of uploaded files (including HTML, CSS, and JavaScript) based on the Web Content Accessibility Guidelines (WCAG) and utilizes AI to suggest and provide potential fixes for identified issues. While we strive to deliver accurate and helpful results, the AI-generated fixes are not guaranteed to fully comply with WCAG or other accessibility standards. <br /><br />
							It is your responsibility to review all suggested fixes and ensure compliance with WCAG Guidelines and any applicable legal or organizational requirements before implementation. We are not liable for any accessibility issues or non-compliance resulting from reliance on the AI-generated fixes. <br /><br />
							By continuing to use the app, you acknowledge these limitations and agree to use the service with due diligence. If you have questions or need assistance beyond what the app provides, we recommend consulting with a qualified accessibility expert. <br /><br />
						</span>
						<br />
						<i className='block text-right'>— From Team AccUI</i> 
					</p>

					<div className='flex justify-end gap-3'>
						<button className='text-[#88AFEF] underline' onClick={handleDecline}>Decline</button>
						<Button variant='outline' onClick={handleAccept} 
							className='max-h-6 min-w-20 bg-primary-100 rounded-full hover:bg-slate-400 text-black p-4 font-bold'
						>
							ACCEPT
						</Button>
					</div>


				</section>
			</div>
		</div>
	);
}
