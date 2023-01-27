import {useNavigate, useParams} from "react-router";
import {useEffect} from "react";
import {getLongUrl} from "../actions/neatqueue-actions";


const ShortUrl = () => {

    const {shortUrl} = useParams()
    let navigate = useNavigate();


    const tempMaps = {
        ProCity: "/leaderboard/1061301529597976700/1061303977460908173"
    }

    useEffect(() => {
        console.log("Getting long url");
        // getLongUrl(shortUrl).then(res => {
        //     if (res !== null) {
        //         navigate(res);
        //     }
        // });

        if (shortUrl in tempMaps) {
            navigate(tempMaps[shortUrl])
        }

    })


}

export default ShortUrl;