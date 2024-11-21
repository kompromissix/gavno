import './App.css'
import { Router, Route, Routes } from 'react-router-dom'
import MainS1 from './Main/Str1/MainS1'
import Str2 from './Main/Str2/Str2'
import Str3 from './Main/Str3/Str3'
import Str3_blog from './Main/Str3_blog/Str3_blog'
import Str4 from './Main/Str4/Str4'
import Str4_blog from './Main/Str4_blog/Str4_blog'
export default function App(){
    return(
        <>
            <main>
                <Routes>
                    <Route index element={<MainS1/>}/>
                    <Route path='/MainS1' element={<MainS1/>}/>
                    <Route path='/Str2' element={<Str2/>}/>
                    <Route path='/Str3' element={<Str3/>}/>
                    <Route path='/Str3_blog' element={<Str3_blog/>}/>
                    <Route path='/Str4' element={<Str4/>}/>
                    <Route path='/Str4_blog' element={<Str4_blog/>}/>
                </Routes>
            </main>
        </>
    )
}