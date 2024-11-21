import './Str4.css'
import { Left_block } from '../Str1/Home/Home'
import strel from '../Str3/Blog/Blog-assets/Arrow23.png'
import img from './Str4-assets/123213242.png'
import img2 from './Str4-assets/MaskGroup.png'
import { Link } from 'react-router-dom'
export default function Str4(){
    return(
        <>
            <div className='left-div'>
                <Left_block/>
            </div>
            <section className='gastrochop'>
                <div>
                    <div>
                        <img src={img} alt="" />
                        <div>
                            <p>Полезные конфеты</p>
                            <div>
                                <Link to='/Str4_blog'>Ассортимент</Link>
                                <img src={strel} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                        <div>
                            <p>Гранола</p>
                            <div>
                                <Link to='/Str4_blog'>Ассортимент</Link>
                                <img src={strel} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}