import React, {useEffect, useState} from "react";
import {RiDiscordLine} from "react-icons/ri";
import {FaDiscord} from "react-icons/fa";
import {MdOutlineDashboardCustomize} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import {useNavigate, useLocation} from 'react-router-dom';
import {discordAuth, discordGetUser} from "../actions/discord-actions";
import {useDispatch, useSelector} from "react-redux";
import {resetSession} from "../actions/server-actions";
import {FaCog} from "react-icons/fa";

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

const Navbar = () => {

    const session = useSelector(state => state.sessionReducer)
    const [collapsed, setCollapsed] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logOut = () => {
        const endSession = async () => {
            await resetSession(dispatch)
        }
        endSession()
    }

    const logIn = () => {
        window.open(process.env.REACT_APP_DISCORD_AUTH, "_self")
    }

    useEffect(() => {
        if (session.auth !== undefined && !('user' in session)) {
            const getUser = async () => {
                await discordGetUser(dispatch, session.auth)
            }
            getUser()
        }
    }, [session.auth])

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        if (queryParams.has('code')) {
            const code = queryParams.get("code")

            const authUser = async () => {
                await discordAuth(dispatch, code)
            }
            authUser()

            navigate("/")
        }
    }, [location.search])



    return ( //flex-sm-column
        <>
        {/*{*/}
        {/*    windowSize.innerWidth < 550 &&*/}
        {/*        <div className="text-white p-4 pe-sm-0 pe-md-4">*/}
        {/*            <FaBars onClick={() => setCollapsed(!collapsed)} style={{fontSize: "1.5em", cursor: "pointer"}} />*/}
        {/*        </div>*/}
        {/*}*/}
        <ul className={`nav nav-pills ${collapsed && "flex-column"}`}>
            <li className="nav-item ms-auto p-4 pe-sm-0 pe-md-4">
                <a className="nav-link" href="/"> <AiOutlineHome style={{fontSize: "1.2em", marginBottom: "6px"}}/>
                    <div className="d-lg-inline d-none">Home</div></a>
            </li>
            <li className="nav-item p-4 pe-sm-0 pe-md-4">
                <a className="nav-link" href={process.env.REACT_APP_DOCS}> <FaCog style={{fontSize: "1.2em", marginBottom: "6px"}}/>
                    <div className="d-lg-inline d-none">Documentation</div></a>
            </li>
            <li className="nav-item p-4 pe-sm-0 pe-md-4">
                <a className="nav-link" href={process.env.REACT_APP_DISCORD_INVITE}><RiDiscordLine style={{fontSize: "1.2em", marginBottom: "6px"}} />
                    <div className="d-lg-inline d-none">Invite</div></a>
            </li>
            {/*<li className="nav-item p-4">*/}
            {/*    <a className="nav-link" href="/leaderboard"><FaList style={{fontSize: "1.2em", marginBottom: "6px"}}/>Leaderboard</a>*/}
            {/*</li>*/}

            {!("user" in session) ?
                <li className="nav-item p-4 pe-sm-0 pe-md-4">
                    <a className="nav-link nq-button nq-hover-action" onClick={logIn}><FaDiscord style={{fontSize: "1.2em", marginBottom: "6px"}} />
                        <div className="d-sm-inline d-none"> Login</div></a>
                </li>
                :
                <>
                <li className="nav-item p-4 pe-sm-0 pe-md-4">
                    <a className="nav-link" href="/dashboard"><MdOutlineDashboardCustomize style={{fontSize: "1.2em", marginBottom: "6px"}}/>
                        <div className="d-lg-inline d-none">Dashboard</div></a>
                </li>
                <li className="nav-item p-4 pe-sm-0 pe-md-4">
                    <a className="nav-link nq-button nq-hover-action" onClick={logOut}><FaDiscord style={{fontSize: "1.2em", marginBottom: "6px"}} />
                        <div className="d-sm-inline d-none">Logout</div>
                    </a>
                </li>
                </>
            }
        </ul>
        </>
    );
}

export default Navbar;