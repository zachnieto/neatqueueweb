import {useParams} from "react-router";
import {useEffect, useState} from "react";
import { getProducts, requestCheckout } from "../services/server-service";
import { useHookstate } from "@hookstate/core";
import { purchasePremium } from "../services/neatqueue-service";
import globalState, { PremiumData, Product } from "../State";
import Modal from "./Modal";

const Premium = ({premiumData}: {
    premiumData: PremiumData
}) => {
    const {guildID} = useParams();

    const CREDIT_MULTIPLIER = 1.07

    const [extendConfirm, setExtendConfirm] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(true)
    
    const [purchaseAmountCredits, setPurchaseAmountCredits] = useState<number>(5);
    const [purchaseAmountDollars, setPurchaseAmountDollars] = useState<number>(5);

    const [creditModalOpen, setCreditModalOpen] = useState(false);
    const [planModalOpen, setPlanModalOpen] = useState(false);

    const state = useHookstate(globalState);
    const { user, auth } = state.get()
    const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>()
    const [products, setProducts] = useState<Product[]>([])

    function nameCompare(a: any, b: any) {
        return parseInt(a.name.split(" ")[0]) - parseInt(b.name.split(" ")[0])
    }

    useEffect(() => {
        const getPremiumData = async () => {
            setTimeLeft(calculateTimeLeft())
            setProducts((await getProducts()).filter((product: { active: any; }) => product.active).sort(nameCompare))
            setLoading(false)
        }
        getPremiumData()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 60);

        return () => {
            clearInterval(interval);
        };
    }, [premiumData])

    const confirmPurchasePremium = async (plan: string) => {
        
        if (!guildID) 
            return;

        setExtendConfirm(false)
        setPlanModalOpen(false)

        try {
            const prem = await purchasePremium(guildID, auth, plan)
            console.log(prem)
            setSuccess(`30 days have been added to your server's premium timer at the cost of ${prem.plans[prem.premium.plan].price} credits`)

        } catch (e: any) {
            setError(e.response.data.detail)
            setSuccess("")
            return
        }

        setTimeLeft(calculateTimeLeft())
    }

    function calculateTimeLeft() {
        let difference;
        if (premiumData.premium)
            difference = new Date(premiumData.premium.until * 1000).getTime() - Date.now();
        else
            difference = 0

        let timeLeft = {days: 0, hours: 0, minutes: 0, seconds: 0};

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


    const handlePurchaseCredits = async (default_price: number) => {
        if (!user || !guildID) return;

        const checkout_session = await requestCheckout(user.id, `${user.username}#${user.discriminator}`,
            guildID, default_price, window.location.href)
        console.log(checkout_session)
        window.location.replace(checkout_session.url)

    }


    const purchaseCreditsComponents = 
        <div className="grid place-items-center">
            <div className="flex">
                <input type="number" onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setPurchaseAmountCredits(val);
                    setPurchaseAmountDollars(Math.pow(val, 1 / CREDIT_MULTIPLIER));
                }} value={purchaseAmountCredits.toFixed(1)} 
                    className="text-center rounded w-20 text-black px-2 mb-5"/>
                <h1 className="mx-2">Credits = </h1>

                <input type="number" onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setPurchaseAmountDollars(val)
                    setPurchaseAmountCredits(Math.pow(val, CREDIT_MULTIPLIER));
                }} value={purchaseAmountDollars.toFixed(2)} 
                className="text-center rounded w-20 text-black px-2 mb-5"/>
                <h1 className="ml-2">$</h1>
            </div>



            <input onChange={(e) => {
                const val = parseInt(e.target.value);
                setPurchaseAmountDollars(val)
                setPurchaseAmountCredits(Math.pow(val, CREDIT_MULTIPLIER));
            }} max={200} type="range" value={purchaseAmountDollars} 
                className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700" />
        </div>

    if (!auth)
        return <></>



    return (
        <>
            <div className="col-span-4 bg-stone-900 rounded shadow-md p-5">

                {premiumData.premium && timeLeft ? 
                    <div className="grid place-items-center">
                        <h1 className="text-3xl">Premium</h1>
                        <h1 className="text-2xl text-green-500">{premiumData.premium.plan}</h1>
                        <h3>For Another {timeLeft.days} Days, {timeLeft.hours} Hours, and {timeLeft.minutes} Minutes</h3>

                    </div>
                    :
                    <div className="grid place-items-center">
                        <h1 className="text-3xl">Premium</h1>
                        <h1 className="text-2xl">❌</h1>
                    </div>
                }




            </div>
            <div className="col-span-4 bg-stone-900 rounded shadow-md p-5 grid place-items-center">

                <h1 className="text-3xl">Credits: {premiumData.credits}</h1>
                <button onClick={() => setCreditModalOpen(true)} className="bg-violet-900 text-white rounded-md px-3 py-2 text-xl font-medium hover:translate-y-1 transition-all">Buy</button>
            </div>
            <div className="col-span-4 bg-stone-900 rounded shadow-md p-5 grid place-items-center">

                <h1 className="text-3xl">(BETA) Private Instance</h1>
                <button className="bg-violet-900 text-white rounded-md px-3 py-2 text-xl font-medium opacity-50 cursor-not-allowed">Buy</button>
            </div>
                


            <Modal
                onSubmit={handlePurchaseCredits}
                visible={creditModalOpen}
                setVisibility={setCreditModalOpen}
                title="Purchase Credits"
                submitText="Purchase"
                component={purchaseCreditsComponents}
            />
        </>
    );


}

export default Premium;