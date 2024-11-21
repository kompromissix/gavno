import './Blog.css'
import { data } from './data'
import arrow from './Blog-assets/Arrow23.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom'
import { Left_block } from '../../Str1/Home/Home'

export function Blogs(div){
    return(
        <>
            <div className='blog-div'>
                <img src={div.img} alt="" />
                <p>{div.text}</p>
                <div>
                    <p>{div.date}</p>
                    <div>
                        <Link to='/Str3_blog'>Подробнее</Link>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Blog(){
    return(
        <>
            <div className='left-div'>
                <Left_block/>
            </div>
            <section className='background-blog'>
                <div>
                    <div>
                        <div>
                            <p>1</p>
                        </div>
                        <div>
                            <p>2</p>
                        </div>
                        <div>
                            <p>3</p>
                        </div>
                    </div>
                    <div className='blog'>
                        <Swiper className="" modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]} spaceBetween={50} slidesPerView={1} direction='horizontal' pagination = {{clickable:true}} mousewheel = {{clickable:true}} grabCursor={true}>
                            <SwiperSlide>
                                {data.map((way) =>(
                                    <Blogs {...way}/>
                                ))}
                            </SwiperSlide>
                            <SwiperSlide>
                                {data.map((way) =>(
                                    <Blogs {...way}/>
                                ))}
                            </SwiperSlide>
                            <SwiperSlide>
                                {data.map((way) =>(
                                    <Blogs {...way}/>
                                ))}
                            </SwiperSlide>
                        </Swiper>
                        
                    </div>
                    <div>
                        <div>
                            <p>1</p>
                        </div>
                        <div>
                            <p>2</p>
                        </div>
                        <div>
                            <p>3</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}