import {Grid,Typography,Paper,TextField} from '@mui/material'
import {CusTimeline,CustomTimelineSeparator} from '../../components/timeline/CusTimeline'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import data from '../../utils/resumeData' 
import {CusButton} from '../../components/button/Button'
import './resume.css'

export const Resume=()=>{
   return(
		<>
			{/*about me*/}
			<Grid container className='section pb_45'>
				<Grid item className='section_title mb_30'>
					<span></span>
					<h6 className='section_title_text'>About me</h6>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='body2' className='aboutme_text'>{data.aboutme}</Typography>
				</Grid>
			</Grid>
			
			{/*education and experiences*/}
			<Grid container className='section pb_45'>
					<Grid item className='section_title mb_30'>
						<span></span>
						<h6 className='section_title_text'>Resume</h6>
					</Grid>
					<Grid item xs={12} className='resume_timeline'>
						<Grid container>
								{/* experience */}
								<Grid item sm={12} md={6}>
										<CusTimeline icon={<WorkIcon/>} title='Work Experience'>
											{
												data.experiences.map(experience=>(
													<TimelineItem>
														<CustomTimelineSeparator/>
														<TimelineContent className='timeline_content'>
															<Typography className='timeline_title'>{experience.title}</Typography>
															<Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
															<Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
														</TimelineContent>
													</TimelineItem>
												))
											}
										</CusTimeline>
								</Grid>
								{/* education */}
								<Grid item sm={12} md={6}>
										<CusTimeline icon={<SchoolIcon/>} title='Education'>
											{
												data.educations.map(experience=>(
													<TimelineItem>
														<CustomTimelineSeparator/>
														<TimelineContent className='timeline_content'>
															<Typography className='timeline_title'>{experience.title}</Typography>
															<Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
															<Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
														</TimelineContent>
													</TimelineItem>
												))
											}
										</CusTimeline>
								</Grid>
						</Grid>
					</Grid>
			</Grid>
			
			{/*services*/}
			<Grid container className='section pb_45'>
					<Grid item className='section_title mb_30'>
						<span></span>
						<h6 className='section_title_text'>Services</h6>
					</Grid>
					<Grid item xs={12}>
							<Grid container spacing={3} justify={'space-around'}>
									{
										data.services.map(service=>(
											<Grid item xs={12} sm={6} md={4}>
													<div className='service'>
														<div className='service_icon'>{service.icon}</div>
														<Typography className='service_title'>{service.title}</Typography>
														<Typography className='service_description'>{service.description}</Typography>
													</div>
											</Grid>
										))
									}
							</Grid>
					</Grid>
			</Grid>
			
			{/*skills*/}
			<Grid container className='section pb_45 graybg p_50' >
					<Grid item xs={12}>
							<Grid container justify={'space-between'} spacing={3}>
										{
												data.skills.map(skill=>(
												<Grid item xs={12} sm={6} md={3}>
													<Paper elevation={0} className='skill'>
															<Typography variant='h6' className='skill_title'>{skill.title}</Typography>
															{
																skill.description.map(element=>(
																	<Typography variant='body2' className='skill_description'>
																		<TimelineDot variant='outlined' className='timeline_dot'/>
																		{element}
																	</Typography>
																))
															}
													</Paper>
												</Grid>
											))
										}
							</Grid>
					</Grid>

			</Grid>
			
			{/*contact*/}
			<Grid container spacing={6} className='section pt_45 pb_45'>
					{/* contact form */}
					<Grid item xs={12} md={7}>
						<Grid container>
							<Grid item className='section_title mb_30'>
								<span></span>
								<h6 className='section_title_text'>About me</h6>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={3}>
										<Grid item xs={12} sm={6}>
											<TextField variant='standard' fullWidth name='name' label='Name'/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField variant='standard' fullWidth name='email' label='Email'/>
										</Grid>
										<Grid item xs={12}>
											<TextField variant='standard' fullWidth name='message' label='Message' multiline rows={4}/>
										</Grid>
										<Grid item xs={12}>
												<CusButton text='submit'/>
										</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{/* contact information */}
					<Grid item xs={12} md={4}>
						<Grid container>
							<Grid item className='section_title mb_30'>
								<span></span>
								<h6 className='section_title_text'>Contact Info</h6>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<Typography className='contactInfo_item'>
											<span>Address:</span>{data.address}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography className='contactInfo_item'>
											<span>Email:</span>{data.email}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography className='contactInfo_item'>
											<span>Phone:</span>{data.phone}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Grid container  className='contactInfo_socialsContainer'>
									{
										Object.keys(data.socials).map(key=>(
											<Grid item className='contactInfo_social'>
													<a href={data.socials[key].link}>{data.socials[key].icon}</a>
											</Grid>
										))
									}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
			</Grid>
		</>
   )
}