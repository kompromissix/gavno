import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import './Albom.css'
import img from './Albom-assets/1Z5A61231.png'
import img2 from './Albom-assets/1Z5A6413.png'
import img3 from './Albom-assets/1Z5A6181.png'
import img4 from './Albom-assets/1Z5A6526.png'
import img5 from './Albom-assets/1Z5A6346.png'
import img6 from './Albom-assets/1Z5A6084.png'

export default function Albom() {
    return(
        <>
            <section className="background3">
                <div>
                    <h3>Фото блюд</h3>
                    <Swiper className='img-slider' modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay]} loop={true}  speed={1200} autoplay={{enabled: true, delay: 0, disableOnInteraction: false}} spaceBetween={50} slidesPerView={4.5} navigation scrollbar = {{draggable:true}} direction='horizontal' pagination = {{clickable:true, el: '.swiper-pagination',}} mousewheel = {{clickable:true}}>
                        <SwiperSlide>
                            <img src={img} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img6} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}