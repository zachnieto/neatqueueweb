
import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {getSession} from "./actions/server-actions";
import Dashboard from "./components/Dashboard";
import Manage from "./components/Manage";
import Leaderboard from "./components/Leaderboard";
import LeaderboardMenu from "./components/LeaderboardMenu";
import Bracket from "./components/Bracket";
import ShortUrl from "./components/ShortUrl";


function App() {

    const dispatch = useDispatch()
    const session = useSelector(state => state.sessionReducer)

    useEffect(() => {
        const updateSession = async () => {
            await getSession(dispatch)
        }

        updateSession()
    }, [])

    return (
    <div className="container-fluid">

        <Particles/>
        {console.log(session)}
        { session !== {} &&
            <>

                <Router>
                <Navbar />
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/manage/:guildID" element={<Manage/>}/>
                <Route path="/leaderboard/:guildID/:channelID" element={<Leaderboard/>}/>
                <Route path="/leaderboard/:guildID" element={<LeaderboardMenu/>}/>
                <Route path="/bracket/:guildID/:tournyName" element={<Bracket/>}/>
                <Route path="/lb/:shortUrl" element={<ShortUrl/>}/>
                </Routes>
                </Router>
            </>
        }

    </div>
    );
}

export default App;
