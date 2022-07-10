import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getPremium, purchasePremium} from "../actions/neatqueue-actions";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
    Elements,
} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js";
import {getProducts, requestCheckout} from "../actions/server-actions";
import Premium from "./Premium";

const stripePromise = loadStripe('pk_test_51LJSkiJb0xMnjPScX1NAUq6BsxF19GRDKiqaySO3SYG4RoAOkXkUPeofMieXGVkAzKJ32ojlf0lb3XPPF7fEMyjT00v0tb7I4D');

const Manage = () => {
    const {guildID} = useParams();
    const [serverData, setServerData] = useState({})
    const [timeLeft, setTimeLeft] = useState()
    const [extendConfirm, setExtendConfirm] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const session = useSelector(state => state.sessionReducer)
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [section, setSection] = useState("Premium")

    const [creditModalOpen, setCreditModalOpen] = useState(false);
    const [planModalOpen, setPlanModalOpen] = useState(false);

    function nameCompare(a,b) {
        return parseInt(a.name.split(" ")[0]) - parseInt(b.name.split(" ")[0])
    }

    useEffect(() => {
        const getPremiumData = async () => {
            setServerData(await getPremium(guildID))
            setTimeLeft(calculateTimeLeft())
            setLoading(false)
            setProducts((await getProducts()).filter(product => product.active).sort(nameCompare))
        }

        getPremiumData()

    }, [])

    useEffect(() => {
        console.log(serverData)
        const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 60);

        return () => {
            clearInterval(interval);
        };
    }, [serverData])

    const confirmPurchasePremium = async (plan) => {
        setExtendConfirm(false)

        try {
            const prem = await purchasePremium(guildID, session.auth, plan)
            console.log(prem)
            setServerData(prem)
            setSuccess(`30 days have been added to your server's premium timer at the cost of ${prem.plans[prem.premium.plan].price} credits`)

        } catch (e) {
            setError(e.response.data.detail)
            setSuccess("")
            return
        }

        setTimeLeft(calculateTimeLeft())
    }

    function calculateTimeLeft() {
        let difference;
        if (serverData.premium)
            difference = new Date(serverData.premium.until * 1000) - new Date();
        else
            difference = 0

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }


    const handlePurchaseCredits = async (default_price) => {
        const checkout_session = await requestCheckout(session.user.id, `${session.user.username}#${session.user.discriminator}`,
            guildID, default_price, window.location.href)
        console.log(checkout_session)
        window.location.replace(checkout_session.url)

    }


    if (loading)
        return

    if (!session.auth)
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
                {section === "Premium" &&<Premium/>}
            </div>

            <div className="col-3"></div>

        </div>
    );


}

export default Manage;