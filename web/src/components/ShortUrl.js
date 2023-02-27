import {useNavigate, useParams} from "react-router";
import {useEffect} from "react";
import {getLongUrl} from "../actions/neatqueue-actions";


const ShortUrl = () => {

    const {shortUrl} = useParams()
    let navigate = useNavigate();

    const commonMaps = {
        ProCity: "/leaderboard/1061301529597976700/1061303977460908173"
    }

    useEffect(() => {
        if (shortUrl in commonMaps) {
            navigate(commonMaps[shortUrl])
        } else {
            getLongUrl(shortUrl).then(res => {
                if (res !== null) {
                    navigate(res);
                }
            });
        }

    })


}

export default ShortUrl;