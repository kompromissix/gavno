import './App.css'
import { Router, Route, Routes } from 'react-router-dom'
import MainS1 from './Main/Str1/MainS1'
import Str2 from './Main/Str2/Str2'
export default function App(){
    return(
        <>
            <main>
                <Routes>
                    <Route index element={<Str2/>}/>
                    <Route path='/MainS1' element={<MainS1/>}/>
                    <Route path='/Str2' element={<Str2/>}/>
                </Routes>
            </main>
        </>
    )
}