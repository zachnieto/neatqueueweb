import { useHookstate } from "@hookstate/core";
import { useState } from "react";
import { requestCheckout } from "../../services/server-service";
import globalState, { PremiumData } from "../../State";
import Modal from "../Modal";
import PurchaseCredits from "./PurchaseCredits";

const Credits = ({
  premiumData,
  guildID,
}: {
  premiumData: PremiumData;
  guildID: string;
}) => {
  const state = useHookstate(globalState);
  const { user } = state.get();

  const [purchaseAmountDollars, setPurchaseAmountDollars] = useState<number>(5);
  const [creditModalOpen, setCreditModalOpen] = useState(false);

  const handlePurchaseCredits = async () => {
    if (!user || !guildID) return;

    const checkout_session = await requestCheckout(
      user.id,
      `${user.username}#${user.discriminator}`,
      guildID,
      purchaseAmountDollars,
      window.location.href
    );
    console.log(checkout_session);
    window.location.replace(checkout_session.url);
  };

  return (
    <>
      <div className="col-span-4 bg-stone-900 rounded shadow-md p-5 grid place-items-center">
        <h1 className="text-3xl">Credits: {premiumData.credits}</h1>
        <button
          onClick={() => setCreditModalOpen(true)}
          className="btn-primary"
        >
          Buy
        </button>
      </div>

      <Modal
        onSubmit={handlePurchaseCredits}
        visible={creditModalOpen}
        setVisibility={setCreditModalOpen}
        title="Purchase Credits"
        submitText="Purchase"
        component={
          <PurchaseCredits
            purchaseAmountDollars={purchaseAmountDollars}
            setPurchaseAmountDollars={setPurchaseAmountDollars}
          />
        }
      />
    </>
  );
};

export default Credits;
