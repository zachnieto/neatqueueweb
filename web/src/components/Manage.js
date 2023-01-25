import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getPremium} from "../actions/neatqueue-actions";
import Premium from "./Premium";


const Manage = () => {
    const {guildID} = useParams();
    const [serverData, setServerData] = useState({})
    const session = useSelector(state => state.sessionReducer)
    const [section, setSection] = useState("Premium")
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getPremiumData = async () => {
            setServerData(await getPremium(guildID))
            setLoading(false)
        }
        getPremiumData()
    }, [])

    console.log(session)
    if (!session.auth || loading)
        return



    return (
        <div className="row justify-content-center">
            <h1 className="text-center">{serverData.name}</h1>
            <div className="col-2">
                {/*<ul className="nav flex-column manage-nav">*/}
                {/*    <li className={`nav-item ${section === "Premium" && "manage-nav-active"}`} onClick={() => setSection("Premium")}>*/}
                {/*        <a className="nav-link" href="#">Premium</a>*/}
                {/*    </li>*/}
                {/*    <li className={`nav-item ${section === "Channels" && "manage-nav-active"}`} onClick={() => setSection("Channels")}>*/}
                {/*        <a className="nav-link" href="#">Channels</a>*/}
                {/*    </li>*/}
                {/*    <li className={`nav-item ${section === "Settings" && "manage-nav-active"}`} onClick={() => setSection("Settings")}>*/}
                {/*        <a className="nav-link" href="#">Settings</a>*/}
                {/*    </li>*/}
                {/*</ul>*/}

            </div>

            <div className="col-1"/>
            <div className="col-6 text-center">
                {section === "Premium" &&<Premium serverData={serverData} setServerData={setServerData}/>}
            </div>

            <div className="col-3"></div>

        </div>
    );


}

export default Manage;