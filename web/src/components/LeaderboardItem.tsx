import {useEffect, useState} from "react";
import { classNames } from "../util/tailwind";

const LeaderboardItem = ({player, rank, sortKey}: {
    player: any,
    rank: number,
    sortKey: string
}) => {

    const [arrowClass, setArrowClass] = useState("")
    const [color, setColor] = useState("")

    useEffect(() => {
        if (sortKey !== "mmr") {
            setArrowClass("")
        }
        else if (player.data.rank > rank) {
            setArrowClass("w-4 h-4 border-t-4 border-l-4 border-solid rotate-45 -rotate border-t-green-400 border-l-green-400 translate-y-.5")
        }
        else if (player.data.rank < rank) {
            setArrowClass("w-4 h-4 border-t-4 border-l-4 border-solid -rotate-[135deg] -rotate border-t-red-400 border-l-red-400 -translate-y-1")
        }

        if (rank === 1) {
            setColor("bg-amber-500/80")
        }
        else if (rank === 2) {
            setColor("bg-gray-500/80")
        }
        else if (rank === 2) {
            setColor("bg-orange-900/80")
        }
        else {
            setColor("bg-violet-900/80")
        }


    }, [rank, player, sortKey])

    return (
        <div className={classNames(color, " text-white px-3 py-3 font-medium shadow-xl flex flex-row xl:text-5xl lg:text-3xl md:text-xl my-1")}>
            <div className="my-auto mx-3 basis-5">
                <div className={arrowClass}/>
            </div>

            <div className={sortKey === "mmr" ? "basis-2/4" : "basis-3/4"}>
                <h1 className="">{rank}. {player.name}</h1>
            </div>

            {sortKey === "mmr" ?
                <>
                    <div className="basis-1/4">
                        <h1>{parseInt(player.data[sortKey])}</h1>
                    </div>
                    <div className="basis-1/4">
                        <h1>({player.data.wins} - {player.data.losses})</h1>
                    </div>
                </>
                :
                <>
                    <div className="">
                        <h1>{player.data[sortKey]}</h1>
                    </div>
                </>
            }

        </div>
    );
}

export default LeaderboardItem;