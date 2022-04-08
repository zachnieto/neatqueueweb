
import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import {useDispatch} from "react-redux";
import {getSession} from "./actions/server-actions";
import Dashboard from "./components/Dashboard";


function App() {

    const dispatch = useDispatch(state => state.sessionReducer)

    useEffect(() => {
        console.log("Fetching session")
        const session = async () => {
            await getSession(dispatch)
        }
        session()
    }, [])

    return (
    <div className="container-fluid">
        <Particles />
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>

    </div>
    );
}

export default App;
