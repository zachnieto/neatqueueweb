import { Dispatch, SetStateAction, useEffect, useState } from "react";
import globalState, { PremiumData } from "../../State";
import ChangePlans from "./ChangePlans";
import Extend from "./Extend";
import Modal from "../Modal";
import { purchasePremium } from "../../services/neatqueue-service";
import { useHookstate } from "@hookstate/core";

const PremiumStatus = ({
  premiumData,
  setPremiumData,
  guildID,
  setError,
  setSuccess,
}: {
  premiumData: PremiumData;
  setPremiumData: Dispatch<SetStateAction<PremiumData | undefined>>;
  guildID: string;
  setError: (s: string) => void;
  setSuccess: (s: string) => void;
}) => {
  const state = useHookstate(globalState);
  const { auth } = state.get();
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [extendModalOpen, setExtendModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>();
  const [selectedPlan, setSelectedPlan] = useState<string>(
    premiumData.premium?.plan || ""
  );

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 60);

    return () => {
      clearInterval(interval);
    };
  }, [premiumData]);

  const calculateTimeLeft = () => {
    let difference;
    if (premiumData.premium)
      difference =
        new Date(premiumData.premium.until * 1000).getTime() - Date.now();
    else difference = 0;

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const handlePurchase = async () => {
    if (!guildID) return;

    try {
      const prem = await purchasePremium(guildID, auth, selectedPlan);
      console.log(prem);
      setSuccess(
        `30 days have been added to your server's premium timer at the cost of ${
          prem.plans[prem.premium.plan].price
        } credits`
      );
      setPremiumData(prem);
    } catch (e: any) {
      setError(e.response.data.detail);
      setSuccess("");
      return;
    }

    setTimeLeft(calculateTimeLeft());
  };

  const handleChangePlans = async () => {
    if (selectedPlan === premiumData.premium?.plan) return;
    await handlePurchase();
  };

  return (
    <>
      <div className="col-span-4 bg-stone-900 rounded shadow-md p-5">
        {premiumData.premium && timeLeft ? (
          <div className="grid place-items-center">
            <h1 className="text-3xl">Premium</h1>
            <h1 className="text-2xl text-green-500">
              {premiumData.premium.plan}
            </h1>
            <h3>
              For Another {timeLeft.days} Days, {timeLeft.hours} Hours, and{" "}
              {timeLeft.minutes} Minutes
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => setPlanModalOpen(true)}
                className="btn-primary"
              >
                Change Plan
              </button>
              <button
                onClick={() => setExtendModalOpen(true)}
                className="btn-primary"
              >
                Extend
              </button>
            </div>
          </div>
        ) : (
          <div className="grid place-items-center">
            <h1 className="text-3xl">Premium</h1>
            <h1 className="text-2xl">❌</h1>
            <div className="flex gap-3">
              <button
                onClick={() => setPlanModalOpen(true)}
                className="btn-primary"
              >
                Change Plan
              </button>
            </div>
          </div>
        )}
      </div>

      <Modal
        onSubmit={handleChangePlans}
        visible={planModalOpen}
        setVisibility={setPlanModalOpen}
        title="Change Plans"
        submitText="Confirm"
        component={
          <ChangePlans
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            plans={premiumData.plans}
          />
        }
      />
      {premiumData.premium && (
        <Modal
          onSubmit={handlePurchase}
          visible={extendModalOpen}
          setVisibility={setExtendModalOpen}
          title="Extend Plan?"
          submitText="Confirm"
          component={
            <Extend plan={premiumData.plans[premiumData.premium.plan]} />
          }
        />
      )}
    </>
  );
};

export default PremiumStatus;
