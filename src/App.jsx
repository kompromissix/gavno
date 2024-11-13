import './App.css'
import { Router, Route, Routes } from 'react-router-dom'
import MainS1 from './Main/MainS1'
export default function App(){
    return(
        <>
            <main>
                <Routes>
                    <Route index element={<MainS1/>}/>
                    <Route path='/MainS1' element={<MainS1/>}/>
                </Routes>
            </main>
        </>
    )
}