import Agenda from "./normal/Agenda"
import Derniers from "./normal/Derniers"
import DerniersPosts from "./normal/DerniersPosts"
import { Footer } from "./normal/Footer"
import { Formation } from "./normal/Formation"
import Tous from "./normal/Tous"



const NormalMembers = () => {
 
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

export default NormalMembers