import { Dispatch, SetStateAction, useState } from "react";
import CurrencyInput from "react-currency-input-field";

const PurchaseCredits = ({
  purchaseAmountDollars,
  setPurchaseAmountDollars,
}: {
  purchaseAmountDollars: number;
  setPurchaseAmountDollars: Dispatch<SetStateAction<number>>;
}) => {
  const [purchaseAmountCredits, setPurchaseAmountCredits] = useState<number>(0);

  const CREDIT_MULTIPLIER = 1.07;

  const roundTo2Decimals = (num: number) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  return (
    <div className="grid place-items-center">
      <div className="flex">
        <input
          type="number"
          onChange={(e) => {
            const val = parseInt(e.target.value);
            setPurchaseAmountDollars(Math.pow(val, 1 / CREDIT_MULTIPLIER));
            setPurchaseAmountCredits(val);
          }}
          value={purchaseAmountCredits}
          className="text-center rounded w-20 text-black px-2 mb-5"
        />
        <h1 className="mx-2">Credits = </h1>

        <CurrencyInput
          className="text-center rounded w-20 text-black px-2 mb-5"
          name="input-name"
          value={purchaseAmountDollars}
          decimalsLimit={2}
          prefix="$"
          // @ts-ignore
          onValueChange={(val: number, name: string) => {
            setPurchaseAmountDollars(val);
            setPurchaseAmountCredits(
              roundTo2Decimals(Math.pow(val, CREDIT_MULTIPLIER))
            );
          }}
        />
      </div>

      <input
        onChange={(e) => {
          const val = parseInt(e.target.value);
          setPurchaseAmountDollars(val);
          setPurchaseAmountCredits(
            roundTo2Decimals(Math.pow(val, CREDIT_MULTIPLIER))
          );
        }}
        max={200}
        type="range"
        value={purchaseAmountDollars}
        className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
      />
    </div>
  );
};

export default PurchaseCredits;
