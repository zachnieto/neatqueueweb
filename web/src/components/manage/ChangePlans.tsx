import { Dispatch, SetStateAction, useState } from "react";
import { classNames } from "../../util/tailwind";
import { Plans, PremiumData } from "../../types";

const ChangePlans = ({
  plans,
  selectedPlan,
  setSelectedPlan,
}: {
  plans: Plans;
  selectedPlan: string;
  setSelectedPlan: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex">
      {Object.keys(plans).map((plan: string, i: number) => (
        <div
          key={i}
          className="m-1 max-w-sm rounded overflow-hidden shadow-lg bg-black/25 text-white text-center"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">{plan}</div>
            <div className="font-bold text-xl mb-2">{plans[plan].price} Credits/Month</div>
            <div className="font-bold text-xl mb-2">{plans[plan].details}</div>
            <button
              onClick={() => setSelectedPlan(plan)}
              className={classNames(
                "btn-primary",
                selectedPlan !== undefined && selectedPlan !== plan
                  ? "opacity-50 hover:opacity-100"
                  : ""
              )}
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChangePlans;
