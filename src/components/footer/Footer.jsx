import {Typography} from '@mui/material'
import data from '../../utils/resumeData'
import './footer.css'

export const Footer=()=>{
   return(
      <div className='footer'>
         	<div className='footer_left'>
		<Typography>{data.name}</Typography>
	</div>
	<div className='footer_right'>
		<Typography className='footer_copyright'>
			Designed and Developed by {" "}
			<a href="#" target='_blank'>Htet Swam</a>
			<br/>
			Clone idea from{" "}
			<a href='#' target='_blank'>Travonline</a>
		</Typography>
	</div>
      </div>
   )
}
 