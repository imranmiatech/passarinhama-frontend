
import Derniers from "./auiteur/Derniers"
import DerniersPosts from "./auiteur/DerniersPosts"

import { Formation } from "./auiteur/Formation"
import Tous from "./auiteur/Tous"



export const Auditeur = () => {
 
    return (
       <div>
          
            <Formation />
            <Derniers />
            <DerniersPosts />
            <Tous />
         
        </div>
    )
}

