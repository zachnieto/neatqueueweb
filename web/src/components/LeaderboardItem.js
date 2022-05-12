import {useEffect, useState} from "react";

const LeaderboardItem = ({player}) => {

    const [arrow, setArrow] = useState("🔻")
    const [arrowClass, setArrowClass] = useState("nq-red-arrow")

    useEffect(() => {
        console.log(player)
        if (player.data.rank > player.num) {
            setArrowClass("nq-green-arrow")
        }
        else if (!('rank' in player.data) || player.data.rank === player.num) {
            setArrow("")
            setArrowClass("nq-no-symbol")
        }
    }, [])

    return (
        <div className="nq-leaderboard-item row">
            <div className="col-8 col-md-7">

                <h1><div className={`${arrowClass} d-lg-inline-block`}>{arrow}</div>{player.num}. {player.name} {player.num === 1 && "🏆"}</h1>



            </div>
            <div className="col-2 text-end">
                <h1>{parseInt(player.data.mmr)}</h1>
            </div>
            <div className="col-2 col-md-3 text-end d-none d-lg-block">
                <h1>({player.data.wins} - {player.data.losses})</h1>
            </div>
        </div>
    );
}

export default LeaderboardItem;