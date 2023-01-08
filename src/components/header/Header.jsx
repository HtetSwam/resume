import {Nav,Navbar} from 'react-bootstrap'
import{NavLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import data from '../../utils/resumeData'
import {CusButton} from '../button/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

export const Header=()=>{
	return(
         <Navbar expand="lg" sticky="top" className="header">
            <NavLink to='/'>
               <Navbar.Brand className="header_home">
                  <HomeIcon/>
               </Navbar.Brand>
            </NavLink>

            <Navbar.Toggle/>

            <Navbar.Collapse>
               <Nav className='header_left'>
                  <NavLink to="/" className={({ isActive }) => (isActive ? "header_link_active" : "header_link")}>Resume</NavLink>	
                  <NavLink to="/portfolio"   className={({ isActive }) => (isActive ? "header_link_active" : "header_link")}>Portfolio</NavLink>
               </Nav>
            
               <div className="header_right">
                  {
                     Object.keys(data.socials).map(key=>(
                        <a key={key} className={data.socials[key].link} target="_blank">
                           {data.socials[key].icon}
                        </a>
                     ))
                  }
                  <CusButton text='Hire me' icon={<TelegramIcon/>}/>
               </div>
                   
            </Navbar.Collapse>

		   </Navbar>
	)
}