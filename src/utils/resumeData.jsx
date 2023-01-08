import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

export default {
	name:"Harry Lin",
	title:"Full Stack Developer",
	
	birthday:"06th April 2002",
	email:"harry@gmail.com",
	address:"123 Test st",
	phone:"0934343242",
	aboutme:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. \n\n\nIf youAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",

	socials:{
		Facebook:{
			link:"https://www.facebook.com",
			text:"My Facebook",
			icon:<FacebookIcon/>
		},
		Twitter:{
			link:"https://www.twitter.com",
			text:"My Twitter",
			icon:<TwitterIcon/>
		},
		LinkedIn:{
			link:"https://www.linkedlin.com",
			text:"My LinkedIn",
			icon:<LinkedInIcon/>
		},
		Github:{
			link:"https://www.github.com",
			text:"MyGitHub",
			icon:<GitHubIcon/>
		}
	},
	experiences:[
		{
			title:'work 1',
			date:'2023-present',
			description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
		},
		{
			title:'work 2',
			date:'2019-2022',
			description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
		},
		{
			title:'work 3',
			date:'2016-2019',
			description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
		},
	],
	educations:[
		{
			title:'school 1',
			date:'2023-present',
			description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
		},
		{
			title:'school 2',
			date:'2019-2022',
			description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
		},
		{
			title:'school 3',
			date:'2016-2019',
			description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
		},
	] ,
	services:[
		{
			title:"Web Development",
			description:"I have a badass programmer for over 3 years",
			icon:<WebIcon/>,
		},
		
		{
			title:"Branding Identity",
			description:"I will make a you a brand that is catchy and leaves a trace",
			icon:<AssignmentIcon/>,
		},
		
		{
			title:"Illustrator",
			description:"I have been working on illustrator desing for a years.",
			icon:<DesignServicesIcon/>,
		}
		
	],
	skills:[
			{
				title:"FONT-END",
				description:["Reactjs","JavaScript","Typescript","Bootstrap","Material UI"]
			},
			{
				title:"BACK-END",
				description:["Nodejs","Java","Python","Solidity"]
			},
			{
				title:"DATABASES",
				description:["Firebase","Ms SQL Server","MySQL","MongoDB"]
			},
			{
				title:"SOURCE CONTROL",
				description:["Git","GitHub","SCRUM/Agile"]
			}
	],
	projects:[
			{
				tag:'React',
				images:['https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/freebies/carousel-full-cover/assets/featured.jpg','https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Stars-Nature-Landscape-Simple-Background-Image.jpg'],
				title:'React Project 1',
				caption:'this is short description',
				description:'This is my project descripton.Please fill it in',
				links:[
					{link:'https://www.google.com',icon:<YouTubeIcon/>},
					{link:'https://www.google.com',icon:<GitHubIcon/>},
					{link:'https://www.google.com',icon:<LanguageIcon/>}
				]
			},
			{
				tag:'React',
				images:['https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/freebies/carousel-full-cover/assets/featured.jpg'],
				title:'React Project 2',
				caption:'this is short description',
				description:'This is my project descripton.Please fill it in',
				links:[
					{link:'https://www.google.com',icon:<YouTubeIcon/>},
					{link:'https://www.google.com',icon:<GitHubIcon/>},
					{link:'https://www.google.com',icon:<LanguageIcon/>}
				]
			},
			{
				tag:'Python',
				images:['https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/freebies/carousel-full-cover/assets/featured.jpg'],
				title:'Python Project 1',
				caption:'this is short description',
				description:'This is my project descripton.Please fill it in',
				links:[
					{link:'https://www.google.com',icon:<YouTubeIcon/>},
					{link:'https://www.google.com',icon:<GitHubIcon/>},
					{link:'https://www.google.com',icon:<LanguageIcon/>}
				]
			},
			{
				tag:'Java',
				images:['https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/freebies/carousel-full-cover/assets/featured.jpg'],
				title:'Java Project 1',
				caption:'this is short description',
				description:'This is my project descripton.Please fill it in',
				links:[
					{link:'https://www.google.com',icon:<YouTubeIcon/>},
					{link:'https://www.google.com',icon:<GitHubIcon/>},
					{link:'https://www.google.com',icon:<LanguageIcon/>}
				]
			}
		
		]
		
		
}