import {Typography} from '@mui/material'
import photo from '../../assets/images/myphoto.jpg'
import {CusTimeline,CustomTimelineSeparator} from '../timeline/CusTimeline'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GetAppIcon from '@mui/icons-material/GetApp';
import data from '../../utils/resumeData'
import {CusButton} from '../button/Button'
import './profile.css'

const CustomTimelineItem=({title,text,link})=>{
   return(
      <TimelineItem>
         <CustomTimelineSeparator/>
         <TimelineContent className='timeline_content'>
            {
               link?(
                  <Typography className='timelineItem_text'>
                        <span>{title}:</span>{" "}
                        <a href={link} target="_blank">{text}</a>
                  </Typography>
               ):(
                  <Typography className='timelineItem_text'>
                        <span>{title}:</span>{text}
                  </Typography>
               )
            }
         </TimelineContent>
      </TimelineItem>
   )
}

export const Profile=()=>{
   return(
      <div className='profile container-shadow'>
         <div className='profile_name'>
            <Typography className='name'>{data.name}</Typography>
            <Typography className='title'>{data.title}</Typography>
         </div>
         <figure className='profile_image'>
            <img src={photo}/>
         </figure>
         <div className='profile_information'>
            <CusTimeline icon={<PersonOutlineIcon/>}>
               <CustomTimelineItem title={"Name"} text={data.name}/>
               <CustomTimelineItem title={"Title"} text={data.title}/>
               <CustomTimelineItem title={"Email"} text={data.email}/>
               {
                  Object.keys(data.socials).map(key=>{
                     return <CustomTimelineItem key={key} title={key} text={data.socials[key].text} link={data.socials[key].link}/>
                  })
               }
            </CusTimeline>
            <div className='button_container'>
	               <CusButton text={"Download Cv"} icon={<GetAppIcon/>}/>
            </div>
         </div>
      </div>
   )
}
