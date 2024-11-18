import './Ease.css'
import img from './Ease-assets/1Z5A6152-removebg-preview1.png'

export default function Ease(){
    return(
        <>
            <section className="background-ease">
                <div className="swiper_header">
                    <div className="swiper-header-text">
                        <div>
                            <h2>«GastroChef - легко для занятых»</h2>
                        </div>
                        <div className="nonetext">
                            <p>GastroChef - правильное питание с доставкой на дом, создано что бы облегчить жизнь, освободить время от готовки, от ненужных перекусов, фастфудов и дать возможность чувствовать себя легко и полным энергии, сил, для новых свершений и побед.</p>
                        </div>
                        <div className="nonetext">
                            <p>Все продукты для приготовления правильного питания закупаются только с сертификатами, а рационы готовятся на современной и безопасной кухне ночью перед приездом к Вам!</p>
                        </div>
                        <div className="nonetext">
                            <p>Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить нам или написать мне лично в Инстаграм или Фейсбук.</p>
                        </div>
                        <div className='big'>
                            <p>С уважением, Кобылинский Кирилл.</p>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}