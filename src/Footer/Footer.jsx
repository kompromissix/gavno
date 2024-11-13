import img from "./Footer-assets/Website_banner5.png"
import img2 from "./Footer-assets/insta.png"
import img3 from "./Footer-assets/facebook.png"
import img4 from "./Footer-assets/whatsapp.png"
import img5 from "./Footer-assets/telegram.png"
import './Footer.css'

export default function Footer() {
    return(
        <>
            <footer>
                <div>
                    <div>
                        <div>
                            <p>Програмы питания</p>
                            <p>О нас</p>
                            <p>Бизнес-ланчи</p>
                            <p>Gastro Shop</p>
                            <p>Блог</p>
                        </div>
                        <div className="footer-mid">
                            <img src={img} alt="" />
                            <p>сервис здорового питания</p>
                        </div>
                        <div className="footer-right">
                            <p>Условия сотрудничества</p>
                            <p>FAQ</p>
                            <div>
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                                <img src={img4} alt="" />
                                <img src={img5} alt="" />
                            </div>
                            <span>+38 (068) 949 - 49 - 19</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}