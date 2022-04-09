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
    }, [])

    console.log(stats.channelStats)

    return (
        <div className="row">
            <div className="col-3"></div>

            <div className="col-6">

                {stats.channelStats !== undefined && stats.channelStats.map(player => <LeaderboardItem key={player.id} player={player}/>)}
            </div>
            <div className="col-3"></div>
        </div>
    );
}

export default Leaderboard;