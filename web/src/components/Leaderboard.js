import {useParams} from "react-router";
import React, {useEffect} from "react";
import {getGuildChannelStats} from "../actions/neatqueue-actions";
import {useDispatch, useSelector} from "react-redux";
import LeaderboardItem from "./LeaderboardItem";

const Leaderboard = () => {

    const {guildID, channelID} = useParams()
    const dispatch = useDispatch()
    const stats = useSelector(state => state.statsReducer)

    useEffect(() => {
        const getChannelStats = async () => {
            await getGuildChannelStats(dispatch, guildID, channelID)
        }

        getChannelStats()

        const interval = setInterval(() => {
            console.log("Trigger!")
            getChannelStats()
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [])

    console.log(stats.channelStats)

    return (
        <div className="row">
            <div className="col-lg-2 col-md-1"/>

            <div className="col-lg-8 col-md-12">
                <div className="nq-leaderboard-header row">
                    <div className="col-8 col-md-7">

                        <h3 className="ps-5">Name</h3>



                    </div>
                    <div className="col-2 text-end">
                        <h3>MMR</h3>
                    </div>
                    <div className="col-2 col-md-3 text-end d-none d-lg-block">
                        <h3>Win - Loss</h3>
                    </div>
                </div>

                {stats.channelStats !== undefined && stats.channelStats.map(player => <LeaderboardItem key={player.id} player={player}/>)}
            </div>
            <div className="col-lg-2 col-md-1"/>
        </div>
    );
}

export default Leaderboard;