import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getGuildQueueChannels} from "../actions/neatqueue-actions";
import {useParams} from "react-router";
import LeaderboardChannel from "./LeaderboardChannel";

const LeaderboardMenu = () => {

    const session = useSelector(state => state.sessionReducer)
    const dispatch = useDispatch()
    const {guildID} = useParams()

    useEffect(() => {
        const getChannels = async () => {
            await getGuildQueueChannels(dispatch, guildID)
        }

        getChannels()
    }, [])

    return (
        <div className="row">
            <div className="col-3"/>
            {'queueChannels' in session &&

                <div className="col-6 text-center">
                    <h1>{session.guild.name}</h1>
                    {session.queueChannels.map(channel => <LeaderboardChannel key={channel[0]} channel={channel}/>)}
                </div>

            }
            <div className="col-3"/>
        </div>
    );
}

export default LeaderboardMenu;