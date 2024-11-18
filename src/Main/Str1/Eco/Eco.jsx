import { ecodata } from './data'
import './Eco.css'

function Eco_div(div){
    return(
        <>
            <div className='eco'>
                <img src={div.img} alt="" />
                <p>{div.text}</p>
            </div>
        </>
    )
}

export default function Eco(){
    return(
        <>
            <section className="background2">
                <div>
                    <div>
                        <div>
                            <Eco_div {...ecodata[0]}/>
                        </div>
                        <div>
                            <Eco_div {...ecodata[1]}/>
                        </div>
                        <div>
                            <Eco_div {...ecodata[2]}/>
                        </div>
                        <div>
                            <Eco_div {...ecodata[3]}/>
                        </div>
                        <div>
                            <Eco_div {...ecodata[4]}/>
                        </div>
                        <div>
                            <Eco_div {...ecodata[5]}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}