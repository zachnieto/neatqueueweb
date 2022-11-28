import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getBracket} from "../actions/neatqueue-actions";
import Helmet from "react-helmet";

async function render(guildID, tournyName) {
    const data = await getBracket(guildID, tournyName);

    window.bracketsViewer.render({
        stages: data.stage,
        matches: data.match,
        matchGames: data.match_game,
        participants: data.participant,
    });
}

const Bracket = () => {
    const {guildID, tournyName} = useParams();

    useEffect(() => {
        render(guildID, tournyName);

    }, []);

    return <div className="brackets-viewer"></div>

}

export default Bracket;