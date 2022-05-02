import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Guild = ({guild}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const setGuild = () => {
        dispatch({
            type: "GUILD",
            guild
        })
    }

    const gotoLeaderboard = () => {
        setGuild()
        navigate(`/leaderboard/${guild.id}`)
    }

    const gotoManage = () => {
        setGuild()
        navigate(`/manage/${guild.id}`)
    }

    return (
    <div className="col-3">
        <div className="card text-center p-3 mb-4 nq-card">
            <div>
                <img
                    src={guild.icon !== null ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` : 'https://i.imgur.com/2X6ZRmm.png'}
                    className="card-img-top w-50 mx-auto"
                />
                <div className="card-body">
                    <h5 className="card-title">{guild.name}</h5>
                </div>
            </div>
            <button className="btn btn-primary mb-2">
                <h5 className="card-title" onClick={gotoManage}>Manage</h5>
            </button>
            <button className="btn btn-primary">
                <h5 className="card-title" onClick={gotoLeaderboard}>Leaderboard</h5>
            </button>
        </div>
    </div>
    )
}

export default Guild