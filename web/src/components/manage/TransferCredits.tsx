import { Dispatch, SetStateAction, useState } from "react";
import CurrencyInput from "react-currency-input-field";

const TransferCredits = ({
  transferAmountCredits,
  setTransferAmountCredits,
  transferGuildId,
  setTransferGuildId
}: {
    transferAmountCredits: number;
    setTransferAmountCredits: Dispatch<SetStateAction<number>>;
    transferGuildId: string
    setTransferGuildId: Dispatch<SetStateAction<string>>
}) => {

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 place-items-end items-center">
        <h1 className="mx-2 text-xl">Credits</h1>
        <input
            type="number"
            onChange={(e) => {
                const val = parseFloat(e.target.value);
                setTransferAmountCredits(val);
            }}
            value={transferAmountCredits}
            className="text-center rounded w-1/2 text-black px-2 place-self-start"
        />
        <h1 className="mx-2 text-xl">Server ID</h1>
        <input
            type="number"
            onChange={(e) => {
                setTransferGuildId(e.target.value);
            }}
            value={transferGuildId}
            size={50}
            className="text-center rounded text-black px-2"
        />
    </div>
  );
};

export default TransferCredits;
