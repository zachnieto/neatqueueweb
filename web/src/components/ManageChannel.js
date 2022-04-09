import {useNavigate} from "react-router";

const ManageChannel = ({channel, setChannel}) => {

    const navigate = useNavigate();


    return (
        <h2 className="nq-leaderboard-item nq-hover-action" onClick={setChannel(channel)}>{channel.name}</h2>
    );
}

export default ManageChannel