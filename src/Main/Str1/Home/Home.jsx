import "./Home.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import fish from './Home-assets/fish_1.png'
import carrot from './Home-assets/carrot.png'
import butilka from './Home-assets/Vector.png'
import meet from './Home-assets/Ellipse103.png'
import table from './Home-assets/table.png'
import { data } from "./data";

function Swiper_header(header){
    return(
        <>
            <div className="swiper_header">
                <div className="swiper-header-text">
                    <div>
                        <h2><span>{header.span_top}</span>{header.text}<span>{header.span}</span>{header.text2}</h2>
                    </div>
                    <div className="nonetext">
                        <p><span>{header.text_bottom_span}</span>{header.text_bottom}<span>{header.text_bottom_span2}</span>{header.text_bottom2}</p>
                    </div>
                    <div className="green-div">
                        <div className="green">
                            <p>{header.green_text}</p>
                        </div>
                        <div className="green-bottom">
                            <p>{header.text_right}</p>
                            <span>{header.text_right_green}</span>
                        </div>
                    </div>
                </div>
                <div className="swipewr-img">
                    <div>
                        <img src={header.img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Home(){
    return(
        <>
            <section className="background1">
                <div className="left">
                    <div>
                        <p>Ккал</p>
                    </div>
                    <div>
                        <img src={fish} alt="" />
                    </div>
                    <div>
                        <img src={carrot} alt="" />
                    </div>
                    <div>
                        <img src={butilka} alt="" />
                    </div>
                    <div>
                        <img src={meet} alt="" />
                    </div>
                    <div className="column">
                        <p>5</p>
                        <img src={table} alt="" />
                    </div>
                </div>
                <Swiper className="swiper-home" modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]} spaceBetween={50} slidesPerView={1} navigation scrollbar = {{draggable:true}} direction='horizontal' pagination = {{clickable:true}} mousewheel = {{clickable:true}} grabCursor={true}>
                    <SwiperSlide>
                        <Swiper_header {...data[0]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swiper_header {...data[1]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swiper_header {...data[2]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swiper_header {...data[3]}/>
                    </SwiperSlide>
                </Swiper>

            </section>
        </>
    )
}