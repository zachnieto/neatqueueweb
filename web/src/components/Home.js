import React, {useEffect} from "react";
import {getStats} from "../actions/neatqueue-actions";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {

    const stats = useSelector(state => state.statsReducer)
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchStats = async () => {
            await getStats(dispatch)
        }

        fetchStats();
    }, []);

    return (
        <div>
            <div className="h-100 row align-items-center justify-content-center main">
                <div className="col-6">
                    <h1 className="text-center home-header"><strong>NeatQueue</strong></h1>
                    <h1 className="align-items-start m-0 p-0 code">Servers: &nbsp;{stats.servers}</h1>
                    <h1 className="align-items-start m-0 p-0 code">Players: &nbsp;{stats.players}</h1>
                    <h1 className="align-items-start m-0 p-0 code">Matches: &nbsp;{stats.games}</h1>
                </div>
            </div>
        </div>
    );
}

export default Home