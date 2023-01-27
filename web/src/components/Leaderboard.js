import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {getGuildChannelStats} from "../actions/neatqueue-actions";
import {useDispatch, useSelector} from "react-redux";
import LeaderboardItem from "./LeaderboardItem";

const sortKeys = {
    "MMR": "mmr",
    "Wins": "wins",
    "Losses": "losses",
    "Games": "totalgames"
}

const Leaderboard = () => {

    const {guildID, channelID} = useParams()
    const dispatch = useDispatch()
    const stats = useSelector(state => state.statsReducer)

    const [month, setMonth] = useState("alltime");
    const [sortKey, setSortKey] = useState("MMR")

    useEffect(() => {
        const getChannelStats = async () => {
            await getGuildChannelStats(dispatch, guildID, channelID)
        }

        getChannelStats()

        // const interval = setInterval(() => {
        //     getChannelStats()
        // }, 60000);
        //
        // return () => {
        //     clearInterval(interval);
        // };
    }, [])


    const dateOptions = { year: 'numeric', month: 'short' };

    return (
        <div className="row">
            <div className="col-lg-2 col-md-1">
            <ul className={`nav nav-pills`}>
                {stats.channelStats && Object.keys(stats.channelStats).length > 2 && Object.keys(stats.channelStats).map(m =>
                    <li key={m} onClick={() => setMonth(m)} className={`${month === m ? "nq-leaderboard-selected" : "nq-leaderboard-not-selected"}  nq-button nq-hover-action col ms-5 me-5 mb-1 text-center`}>
                        <h1>{m === "alltime" ? "All Time" : new Date(m + "-15").toLocaleDateString("en-US", dateOptions)}</h1>
                    </li>

                )}

            </ul>
            </div>

            <div className="col-lg-8 col-md-12">
                <div className="row m-2">
                    {Object.keys(sortKeys).map(key =>
                        <div key={key} onClick={() => setSortKey(key)} className={`${key === sortKey ? "nq-leaderboard-selected" : "nq-leaderboard-not-selected"} nq-button nq-hover-action col ms-5 me-5 mb-1 text-center`}>
                            <h1>{key}</h1>
                        </div>
                    )}
                </div>


                <div className="nq-leaderboard-header row">
                    <div className="col-8 col-md-7">
                        <h3 className="ps-5">Name</h3>
                    </div>
                    <div className="col-2 text-end">
                        {sortKey === "MMR" && <h3>MMR</h3>}
                    </div>
                    <div className="col-2 col-md-3 text-end d-none d-lg-block">
                        <h3>{sortKey === "MMR" ? "Win - Loss" : sortKey}</h3>
                    </div>
                </div>

                {
                    stats?.channelStats && stats.channelStats[month].sort((a, b) => b.data[sortKeys[sortKey]] - a.data[sortKeys[sortKey]])
                        .map((player, idx) => <LeaderboardItem key={player.id} sortKey={sortKeys[sortKey]} rank={idx + 1} player={player}/>)
                }
            </div>
            <div className="col-lg-2 col-md-1">

                {/*<ul className={`nav nav-pills`}>*/}

                {/*    {Object.keys(sortKeys).map(key =>*/}
                {/*        <li onClick={() => setSortKey(key)} className={`${key === sortKey ? "nq-leaderboard-selected" : "nq-leaderboard-not-selected"} nq-button nq-hover-action col ms-5 me-5 mb-1 text-center`}>*/}
                {/*            <h1>{key}</h1>*/}
                {/*        </li>*/}
                {/*    )}*/}

                {/*</ul>*/}

            </div>
        </div>
    );
}

export default Leaderboard;