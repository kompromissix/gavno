import Home from "./Home/Home"
import Eco from "./Eco/Eco"
import Albom from "./Albom/Albom"
import Circle from "./Circle/Circle"
export default function MainS1(){
    return(
        <>
            <Circle/>
            <main>
                <Home/>
                <Eco/>
                <Albom/>
            </main>
        </>
    )
}