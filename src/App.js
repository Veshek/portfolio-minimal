import {useContext} from 'react'
import {Route, Routes} from "react-router-dom";
import {ThemeContext} from './contexts/theme'
import Header from './components/Header/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import Homepage from "./components/Pages/Homepage/Homepage";
import './App.css'
import USVisaRescheduler from "./components/Pages/US-Visa-Rescheduler/US-Visa-Rescheduler";
import Korotu from "./components/Pages/KorotuDevOpsTransformation/Korotu";

const App = () => {
    const [{themeName}] = useContext(ThemeContext)
    return (
        <div id='top' className={`${themeName} app`}>
            <Header/>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='/VisaRescheduler' element={<USVisaRescheduler/>}/>
                    <Route path='/Korotu' element={<Korotu/>}/>
                </Routes>
            <Footer/>
        </div>
    )
}

export default App
