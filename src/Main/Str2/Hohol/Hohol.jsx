import "./Hohol.css"
import kabila from '../../Str1/Home/Home-assets/Kiril.png'
import fish from '../../Str1/Home/Home-assets/fish_1.png'
import carrot from '../../Str1/Home/Home-assets/carrot.png'
import butilka from '../../Str1/Home/Home-assets/Vector.png'
import meet from '../../Str1/Home/Home-assets/Ellipse103.png'
import table from '../../Str1/Home/Home-assets/table.png'

export default function Hohol(){
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
                <div className="swiper_header">
                    <div className="swiper-header-text">
                        <div>
                            <h2>Здравствуйте! Меня зовут <span>Кобылинский Кирилл</span>, и я являюсь <span>основателем GastroChef.</span></h2>
                        </div>
                        <div className="nonetext">
                            <p>Я Мастер Спорта Украины по тяжёлой атлетике, а так же состоял в составе сборной Украины. </p>
                        </div>
                        <div className="nonetext">
                            <p>У меня высшее образование национального университета физического воспитания и спорта Украины НФВСУ, а так же в прошлом я профессиональный фитнес тренер! </p>
                        </div>
                        <div>
                            <p>И я хочу Вам рассказать побольше о GastroChef.</p>
                        </div>
                    </div>
                    <div className="swipewr-img">
                        <div>
                            <img src={kabila} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}