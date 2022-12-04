import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {purchasePremium} from "../actions/neatqueue-actions";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import {getProducts, requestCheckout} from "../actions/server-actions";

const Premium = ({serverData, setServerData}) => {
    const {guildID} = useParams();
    const [timeLeft, setTimeLeft] = useState()
    const [extendConfirm, setExtendConfirm] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const session = useSelector(state => state.sessionReducer)
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const [creditModalOpen, setCreditModalOpen] = useState(false);
    const [planModalOpen, setPlanModalOpen] = useState(false);

    function nameCompare(a,b) {
        return parseInt(a.name.split(" ")[0]) - parseInt(b.name.split(" ")[0])
    }

    useEffect(() => {
        const getPremiumData = async () => {
            setTimeLeft(calculateTimeLeft())
            setProducts((await getProducts()).filter(product => product.active).sort(nameCompare))
            setLoading(false)
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
        setPlanModalOpen(false)

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
        <>
                <div className="card p-3 premium-card">
                    <div>
                        <div className="card-body">
                            <h1 className="card-title">Premium? <span className="green">{serverData.premium ? serverData.premium.plan : "❌"}</span></h1>
                            {serverData.premium && timeLeft && <h3>For Another {timeLeft.days} Days, {timeLeft.hours} Hours, and {timeLeft.minutes} Minutes</h3>}


                            {extendConfirm ?
                                <>
                                    <h4 className="mt-5">This will use {serverData.plans[serverData.premium.plan]["price"]} credits. Continue?</h4>
                                    <button onClick={() => confirmPurchasePremium(serverData.premium.plan)} className="btn btn-primary me-1 btn-lg">Confirm</button>
                                    <button onClick={() => setExtendConfirm(false)} className="btn btn-danger ms-1 btn-lg">Cancel</button>
                                </>
                                :
                                <>
                                    {serverData.premium &&
                                    <button onClick={() => {setExtendConfirm(!extendConfirm); setError("")}} className="btn btn-primary me-2 mt-5 btn-lg">Extend
                                        30 Days</button> }
                                    <button onClick={() => {setPlanModalOpen(true); setError("")}} className="btn btn-primary ms-2 mt-5 btn-lg">
                                        {serverData.premium ? "Change Plans" : "Get Premium"}
                                    </button>

                                </>
                            }



                        </div>
                    </div>
                </div>
                <h3 className="mt-5">Credits: {serverData.credits.toFixed(2)}</h3>
                <button onClick={() => setCreditModalOpen(true)} className="btn btn-secondary btn-lg">Purchase Credits</button>
                <hr/>
                {error !== "" && <h5 className="alert-danger p-2 d-inline-block">{error}</h5>}
                {success !== "" && <h5 className="alert-success p-2 mt-3 d-inline-block">{success}</h5>}


                <Modal
                    open={creditModalOpen}
                    onClose={() => setCreditModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="model">
                        <h1>Purchase Credits</h1>
                        {products.map((product, i) =>
                            <div key={i} className="card p-3 premium-card d-inline-flex m-3">
                                <div>
                                    <div className="card-body">
                                        <h4 className="card-title">{product.name}</h4>
                                        <h4 className="card-title">${product.price}</h4>
                                        <button onClick={() => handlePurchaseCredits(product.default_price)} className="btn btn-secondary btn-lg">Purchase</button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </Box>
                </Modal>

                <Modal
                    open={planModalOpen}
                    onClose={() => setPlanModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="model">
                        <h1>Monthly Plans</h1>
                        {Object.keys(serverData.plans).filter(plan => plan !== (serverData.premium ? serverData.premium.plan : "")).map((plan, i) =>
                            <div key={i} className="card p-3 premium-card d-inline-flex m-3">
                                <div>
                                    <div className="card-body">
                                        <h4 className="card-title">{plan} - {serverData.plans[plan].price} Credits</h4>
                                        <h5 className="card-title">{serverData.plans[plan].details}</h5>
                                        <button onClick={() => confirmPurchasePremium(plan)} className="btn btn-secondary btn-lg">Purchase</button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </Box>
                </Modal>

    </>
    );


}

export default Premium;