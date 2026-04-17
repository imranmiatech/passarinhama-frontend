import Agenda from "./agenda/Agenda"
import Derniers from "./agenda/Derniers"
import DerniersPosts from "./agenda/DerniersPosts"
import { Footer } from "./agenda/Footer"
import { Formation } from "./agenda/Formation"
import Tous from "./agenda/Tous"



const CommissionAgenda = () => {
 
    return (
       <div>
            <Agenda />
            <Formation />
            <Derniers />
            <DerniersPosts />
            <Tous />
            <Footer />
        </div>
    )
}

export default CommissionAgenda