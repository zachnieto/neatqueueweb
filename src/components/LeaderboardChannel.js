import {useNavigate} from "react-router";

const LeaderboardChannel = ({channel}) => {

    const navigate = useNavigate();

    const gotoLeaderboard = () => {
        navigate(`${channel[0]}`)
    }

    return (
        <h1 className="nq-leaderboard-item nq-hover-action" onClick={gotoLeaderboard}>{channel[1]}</h1>
    );
}

export default LeaderboardChannel