import { Link } from 'react-router-dom'
import './Header.css'
import logo from './Header-assets/Website_banner4.png'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <div className='Absolute'>
                        <img src={logo} alt="" />
                        <p>healthy ration</p>
                    </div>
                    <div className='link-div'>
                        <div className='div-link-div'>
                            <div>
                                <p>Програмы питания</p>
                                <p>Бизнес-ланчи</p>
                                <p><span>Gastro Shop</span></p>
                                <p>О нас</p>
                                <p>Блог</p>
                            </div>
                            
                        </div>
                        <div className='div-link-div-bottom'>
                            <p>+38 (068) 949 - 49 -19</p>
                        </div>
                    </div>
                    <div className='country'>
                        <div>
                            <p>RU</p>
                        </div>
                        <div>
                            <p>UA</p>
                        </div>
                        <div>
                            <p>EN</p>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}