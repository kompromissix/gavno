import './Str4_blog.css'
import Albom from '../Str1/Albom/Albom'
import { data } from './data'
import { Link } from 'react-router-dom'
import strel from './Str4_blog-assets/Arrow33.png'

export function Buy(div){
    return(
        <>
            <div className='buy'>
                <img src={div.img} alt="" />
                <h2>{div.text}</h2>
                <p>{div.text_bottom}</p>
                <div>
                    <p>{div.text_bold}</p>
                </div>
                <div className='green-eat'>
                    <div><p>-</p></div>
                    <p>1</p>
                    <div><p>+</p></div>
                    <p>{div.green_gram}</p>
                </div>
            </div>
        </>
    )
}

export default function Str4_blog(){
    return(
        <>
            <section className='background5'>
                <div>
                    <h2>Полезные конфеты</h2>
                    <p>Представляем сладкую коллекцию полезных конфет. Созданы с любовью и изготовлены из натуральных продуктов без добавления сахара - с заботой о вас и ваших близких!<br /><br />Стоимость доставки 60 грн по предварительному заказу (за 1 сутки).Предварительный заказ предполагает доставку на следующий день с 6:00-10:00.Минимальный заказ - от 6 конфет. Вес 1 кофетки 25 г.<br /><br />Заказы "на завтра" принимаются до 11-00 текущего дня.<br /><br />Конфеты доставляются в прозрачных пакетах со стикером. Вы можете заказать подарочный бокс с лентой стоимостью 20 грн</p>
                </div>
            </section>
            <section className='background6'>
                <div className='back'>
                    <div className='back-div'>
                        <Link to='/Str4'>
                            <div>
                                <img src={strel} alt="" />
                            </div>
                            
                            <p>Назад</p>
                        </Link>
                    </div>
                    <div className='green-back'>

                    </div>
                </div>
                <div className='buy-sect'>
                    {data.map((way) =>(
                        <Buy {...way}/>
                    ))}
                </div>
            </section>
            <Albom/>
        </>
    )
}