import {useEffect, useState} from "react";

const LeaderboardItem = ({player, rank, sortKey}) => {

    const [arrow, setArrow] = useState("")
    const [arrowClass, setArrowClass] = useState("")

    useEffect(() => {
        if (sortKey !== "mmr") {
            setArrow("")
            setArrowClass("")
            return
        }
        console.log(player)
        console.log(rank, ' ', player.data.rank, ' ', player.name, ' ', player.data[sortKey], ' ', sortKey)
        if (player.data.rank > rank) {
            setArrow("🔻")
            setArrowClass("nq-green-arrow")
        }
        else if (!player.data?.rank || player.data.rank === rank) {
            setArrow("")
            setArrowClass("nq-no-symbol")
        } else {
            setArrow("🔻")
            setArrowClass("nq-red-arrow")
        }
    }, [rank, player, sortKey])

    return (
        <div className="nq-leaderboard-item row">
            <div className="col-8 col-md-7">
                <h1 className="d-inline-flex"><div className={`${arrowClass} d-lg-inline-block`}>{arrow}</div>{rank}. {player.name} {rank === 1 && "🏆"}</h1>
            </div>

            {sortKey === "mmr" ?
                <>
                <div className="col-2 text-end">
                    <h1>{parseInt(player.data[sortKey])}</h1>
                </div>
                <div className="col-2 col-md-3 text-end d-none d-lg-block">
                <h1>({player.data.wins} - {player.data.losses})</h1>
                </div>
                </>
                :
                <>
                <div className="col-2" />
                <div className="col-2 col-md-3 text-end d-none d-lg-block">
                    <h1>{player.data[sortKey]}</h1>
                </div>
                </>
            }

        </div>
    );
}

export default LeaderboardItem;