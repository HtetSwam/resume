import {Container,Grid} from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import {Profile} from './components/profile/Profile'
import {Header} from './components/header/Header'
import {Footer} from './components/footer/Footer'
import {Portfolio} from './pages/portfolio/Portfolio'
import {Resume} from './pages/resume/Resume'
import './App.css'

function App() {
  return (
      <Container className='top_60'>
        <Grid container> 
            <Grid item xs={12} sm={12} md={4} lg={3} mr={4}><Profile/></Grid>
            <Grid item xs>
              <Header/>
                <div className='main-content container-shadow'>
                    <Routes>
                        <Route path='/' element={<Resume/>}/>
                        <Route path='/portfolio' element={<Portfolio/>}/>
                    </Routes>
                </div>
              <Footer/>
            </Grid>
        </Grid>
      </Container>
  ) 
}

export default App
