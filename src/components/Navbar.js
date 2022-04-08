import React, {useEffect} from "react";
import {RiDiscordLine} from "react-icons/ri";
import {FaDiscord, FaList} from "react-icons/fa";
import {MdOutlineDashboardCustomize, MdOutlineFeaturedPlayList, MdOutlineApi} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import {useNavigate, useLocation} from 'react-router-dom';
import {discordAuth, discordGetUser} from "../actions/discord-actions";
import {useDispatch, useSelector} from "react-redux";

const Navbar = () => {

    const discordState = useSelector(state => state.discordReducer)
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }

    const logIn = () => {
        window.open(process.env.REACT_APP_DISCORD_AUTH, "_self")
    }

    useEffect(() => {
        console.log(discordState.auth)
        const getUser = async () => {
            await discordGetUser(dispatch, discordState.auth)
        }
        getUser()
    }, [discordState.auth])

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        const code = queryParams.get("code")

        const authUser = async () => {
            await discordAuth(dispatch, code)
        }
        authUser()

        navigate("/")
    }, [location.search])


    return (
        <ul className="nav nav-pills">
            {JSON.stringify(discordState)}
            <li className="nav-item ms-auto p-4">
                <a className="nav-link" href=""> <AiOutlineHome style={{fontSize: "1.2em", marginBottom: "6px"}}/>Home</a>
            </li>
            <li className="nav-item p-4">
                <a className="nav-link" href={process.env.REACT_APP_DISCORD_INVITE}><RiDiscordLine style={{fontSize: "1.2em", marginBottom: "6px"}} />Invite</a>
            </li>
            <li className="nav-item p-4">
                <a className="nav-link" href="/leaderboard"><FaList style={{fontSize: "1.2em", marginBottom: "6px"}}/>Leaderboard</a>
            </li>
            <li className="nav-item p-4">
                <a className="nav-link" href="#"><MdOutlineDashboardCustomize style={{fontSize: "1.2em", marginBottom: "6px"}}/>Dashboard</a>
            </li>
            {discordState.user === "" ?
                <li className="nav-item p-4 pe-5">
                    <a className="nav-link nq-button" onClick={logIn}><FaDiscord style={{fontSize: "1.2em", marginBottom: "6px"}} /> Login</a>
                </li>
                :
                <li className="nav-item p-4 pe-5">
                    <a className="nav-link nq-button" onClick={logOut}><FaDiscord style={{fontSize: "1.2em", marginBottom: "6px"}} /> Logout</a>
                </li>
            }
        </ul>
    );
}

export default Navbar;