import { getRepositoryDetails } from '../utils';

export interface Project {
	name: string;
	demoLink: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	[key: string]: any;
}

export const projects: Project[] = [
	{
		...(await getRepositoryDetails('Reckadon/Workout_Tracker')),
		name: 'Workout Tracker',
		description:
			'Full-stack fitness tracking platform with Spring Boot, React, and a gRPC and Python based analytics service, with workout logging, secure authentication, and progress insights.',
		demoLink: 'https://github.com/Reckadon/Workout_Tracker',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['Spring', 'gRPC', 'PostgreSQL']
	},
	{
		...(await getRepositoryDetails('InterIIT-Sports')), // Since it's an org, repo details might be general
		name: 'Live Scoreboard Website | InterIIT Sports Meet 2023',
		description:
			'First open-source Inter-IIT sports website with real-time score updates, role-based access control, and admin dashboards used across all IITs.',
		demoLink: 'https://github.com/orgs/InterIIT-Sports/repositories',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['ReactJS', 'MongoDB', 'socket.io']
	},
	{
		...(await getRepositoryDetails('Reckadon/JPEG-Compression')),
		name: 'JPEG Compression on FPGA',
		description: 'An FPGA-based JPEG image compression system using DCT and UART communication, built as part of Digital Systems course.',
		demoLink: 'https://youtu.be/_Ano39_kA1w',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['Course', 'Hardware', 'FPGA']
	},
	{
		...(await getRepositoryDetails('Blithchron/blith-website-25')),
		name: 'Blithchron 2025 Official Website',
		description: "The official website for IITGn's cultural fest, Blithchron '25. Showasing the fest's events, schedules, merch and more.",
		demoLink: 'https://blithchron.iitgn.ac.in/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['ReactJS', 'Framer', 'Astro']
	},
	{
		...(await getRepositoryDetails('Reckadon/Inter-IIT-Pathway-PathRAG-Court-Simulator')),
		name: 'PathRAG Court Simulator',
		description:
			'A Multi Agent RAG Application built with LangGraph, CrewAI and Pathway. The App simulates the working of an Indian Legal Court.',
		tags: ['AI', 'RAG', 'LangGraph']
	},
	{
		...(await getRepositoryDetails('Reckadon/ML-ImageReconstruction-RFF-MF')),
		name: 'Image Super Resolution & Compression',
		description:
			'Image reconstruction pipeline using Random Fourier Features and matrix factorization for compression and upscaling with over 32 PSNR.',
		demoLink: 'https://github.com/Reckadon/ML-ImageReconstruction-RFF-MF',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['Course', 'ML', 'Image Processing']
	},
	{
		...(await getRepositoryDetails('Reckadon/MathTrainerGame')),
		name: 'Math Trainer Game',
		description: 'A Firebase-backed Native Android math game with difficulty levels, a live leaderboard, and a responsive UI.',
		demoLink: 'https://github.com/Reckadon/MathTrainerGame/releases',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['Firebase', 'Android', 'Java']
	},
	{
		...(await getRepositoryDetails('Reckadon/ML-HARwithDTs')),
		name: 'Human Activity Recognition (HAR) Analysis',
		description:
			'Used TSFEL and Decision Trees on UCI HAR dataset for activity classification, also explored LLM-based zero/few-shot recognition techniques.',
		demoLink: 'https://github.com/Reckadon/ML-HARwithDTs',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['Course', 'ML', 'Time Series']
	},
	{
		...(await getRepositoryDetails('Reckadon/Hackrush24-Software-Dev-EGate')),
		name: 'E Gate | Gate Entry System',
		description:
			'A QR-based entry system built for IITGn to replace manual gate verification with quick scanning, secure logs, and authenticated access control.',
		demoLink: 'https://github.com/Reckadon/Hackrush24-Software-Dev-EGate',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['ReactJS', 'Firebase', 'NodeJS']
	},
	{
		...(await getRepositoryDetails('Reckadon/HackRush-CollegeHub')),
		name: 'CollegeHub',
		description:
			'A PWA built to centralize student communication at IITGN, featuring event discovery, club management and calendar integration.',
		demoLink: 'https://collegehubiitgn.netlify.app/',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['ReactJS', 'PWA', 'Firebase']
	},
	{
		...(await getRepositoryDetails('Reckadon/ML-MLP-TokenPrediction')),
		name: 'Text Generator using Next Character Prediction',
		description: 'A neural network-based text generator trained to predict the next character using previous k characters',
		demoLink: 'https://github.com/Reckadon/ML-MLP-TokenPrediction',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['Course', 'ML', 'NLP']
	},
	{
		...(await getRepositoryDetails('Reckadon/SortingIllustrator')),
		name: 'Sorting Illustrator',
		description:
			'A JavaFX desktop app to visualize sorting algorithms like Bubble Sort, Selection Sort, and Insertion Sort with control of size and speed.',
		demoLink: 'https://github.com/Reckadon/SortingIllustrator/releases/tag/v1.5',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['JavaFX', 'Algorithms', 'Desktop']
	},
	{
		...(await getRepositoryDetails('Reckadon/DevChat-ChatApplication-WhatTheHack24')),
		name: 'DevChat',
		description:
			'A terminal-style real-time chat app with Firebase backend, user auth, and search. Built using React, Vite, and TypeScript.',
		demoLink: 'https://github.com/Reckadon/DevChat-ChatApplication-WhatTheHack24',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['ReactJS', 'TypeScript', 'Firebase']
	},
	{
		...(await getRepositoryDetails('Reckadon/DCC-Assignment-4-Flask')),
		name: 'Electoral Bonds Analyzer',
		description:
			'A Flask-based web app to analyze electoral bonds data via MySQL backend, PDF-to-CSV conversion, and dynamic charts and tables.',
		demoLink: 'https://github.com/Reckadon/DCC-Assignment-4-Flask',
		demoLinkRel: 'nofollow noopener noreferrer',
		tags: ['Course', 'Flask', 'Data Analysis']
	},
];
