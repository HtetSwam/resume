import {Button} from '@mui/material'
import './button.css'

export const CusButton=({text,icon})=>{
	return(
		<Button className='custom_btn' endIcon={icon?(<div className='btn_icon_container'>{icon}</div>):null}>
			<span className="btn_text">{text}</span>
		</Button>
	)
}
