import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {getGuildChannels} from "../actions/neatqueue-actions";
import ManageChannel from "./ManageChannel";

const Manage = () => {
    const dispatch = useDispatch();
    const {guildID} = useParams();
    const session = useSelector(state => state.sessionReducer);
    const [selectedChannel, setChannel] = useState(undefined)

    useEffect(() => {

            const getChannels = async () => {
                await getGuildChannels(dispatch, guildID, session.auth)
            }

            getChannels()

    }, [session.auth])

    return (
        <div className="row">
            <h1 className="text-center">{session.guild.name}</h1>
            <div className="col-3 text-center">
                {'guildChannels' in session &&
                    session.guildChannels.channels.map(channel =>
                        <h2 className="nq-leaderboard-item nq-hover-action" onClick={setChannel(channel)}>
                            {channel.name}
                        </h2>)
                }
            </div>

            <div className="col-9 text-center">
                {selectedChannel !== undefined &&
                    <h1>{selectedChannel.name}</h1>
                }
            </div>

        </div>
    );


}

export default Manage;