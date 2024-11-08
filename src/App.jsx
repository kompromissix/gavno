import './App.css'
import { Router, Route, Routes } from 'react-router-dom'
import Home from './Main/Home/Home'
import Circle from './Main/Circle/Circle'
export default function App(){
    return(
        <>
            <main>

                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/Home' element={<Home/>}/>
                </Routes>
            </main>
        </>
    )
}