import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPremium } from "../services/neatqueue-service";
import globalState, { Guild, PremiumData } from "../State";
import CustomParticles from "./Particles";
import Premium from "./Premium";


const Manage = () => {

    const {guildID} = useParams();
    const state = useHookstate(globalState);
    const [guild, setGuild] = useState<Guild>();
    const [premiumData, setPremiumData] = useState<PremiumData>();


    useEffect(() => {
        
        
        if (guildID) {
            getPremium(guildID).then(setPremiumData)
            setGuild(state.guilds.get()?.find(g => g.id == guildID));
        }

        
        console.log(guild);
        console.log(premiumData);
    }, [state.guilds])

    if (!guild) {
        return <></>
    }


    return (
        
        <>
        

        <div className="grid grid-cols-12 mx-32 gap-8">
            
            <div className="text-5xl flex col-span-12 justify-center">
                <h1>{guild.name}</h1>     
            </div>
            
            
            {premiumData && <Premium premiumData={premiumData} />}

        </div>
        
        </>

    );
    
}

export default Manage;