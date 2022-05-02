import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {discordGetGuilds} from "../actions/discord-actions";
import Guild from "./Guild";

const Dashboard = () => {

    const dispatch = useDispatch()
    const session = useSelector(state => state.sessionReducer)

    useEffect(() => {
        console.log((!("guilds" in session) && "auth" in session))
        if (!("guilds" in session) && "auth" in session) {
            const getGuilds = async () => {
                await discordGetGuilds(dispatch, session.auth)
            }

            getGuilds()
        }
    }, [session])

    console.log(session)
    return (
        <div>
        {("guilds" in session) &&
            <div className="row text-center">{session.guilds.map(guild =>
                <Guild key={guild.id} guild={guild} />
            )}
            </div>

        }
        </div>
    );
}

export default Dashboard