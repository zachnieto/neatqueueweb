import { useState } from "react";
import { classNames } from "../../util/tailwind";

const ChangePlans = ({ plans }: { plans: any[] }) => {
  const [selectedPlan, setSelectedPlan] = useState<any>();

  return (
    <div className="flex">
      {plans.map((plan: any) => (
        <div className="m-1 max-w-sm rounded overflow-hidden shadow-lg bg-black/25 text-white text-center">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">{plan.name}</div>
            <div className="font-bold text-xl mb-2">${plan.price}</div>
            <div className="font-bold text-xl mb-2">{plan.description}</div>
            <button
              onClick={() => setSelectedPlan(plan)}
              className={classNames(
                "btn-primary",
                selectedPlan !== undefined && selectedPlan.name !== plan.name
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
