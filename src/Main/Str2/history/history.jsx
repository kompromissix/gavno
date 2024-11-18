import './history.css'
import img from './history-assets/DSC09038-removebg-preview.png'

export default function History(){
    return(
        <>
            <section>
                <div className="swiper_header">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="swiper-header-text">
                        <div>
                            <h2>История GastroChef началась более 6-ти лет назад...</h2>
                        </div>
                        <div className="nonetext">
                            <p>Долгое время я наблюдал как людям не хватает времени для правильного и здорового питания, какое правильного, просто питания регулярного.  </p>
                        </div>
                        <div className="nonetext">
                            <p>Они могли позавтракать, в обед съесть что-то типа шаурмы или снэка, а вечером в силу голода наесться, что плохо сказывалось на их обмене веществ и естественно здоровье. </p>
                        </div>
                        <div className="nonetext">
                            <p>Желание хоть как-то изменить ситуацию и помочь людям не давало мне покоя и я решил открыть доставку еды правильного питания.</p>
                        </div>
                        <div className="nonetext">
                            <p>Я со своим 17-и летним опытом в спорте и проф. образованием, вместе с диетологом разработали рационы правильного питания с подсчетом калорий КБЖУ.</p>
                        </div>
                        <div className='big'>
                            <p>Знакомтесь! Команда GastroChef!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}