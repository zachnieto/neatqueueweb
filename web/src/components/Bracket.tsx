import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getBracket } from "../services/neatqueue-service";

const Bracket = () => {
  const { guildID, tournyName } = useParams();
  const [bracketData, setBracketData] = useState<any>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    if (!guildID || !tournyName) return;
    getBracket(guildID, tournyName).then(setBracketData);

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/brackets-viewer/dist/brackets-viewer.min.js";
    script.async = true;
    script.onload = () => {
      setLoaded(true);
    };
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href =
      "https://cdn.jsdelivr.net/npm/brackets-viewer/dist/brackets-viewer.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);


  useEffect(() => {
    if (!bracketData || !loaded || rendered) return;

    console.log("Loaded bracket")

    // @ts-ignore
    if (window.bracketsViewer) {
      setRendered(true);
      // @ts-ignore
      window.bracketsViewer.render({
        stages: bracketData.stage,
        matches: bracketData.match,
        matchGames: bracketData.match_game,
        participants: bracketData.participant,
      })
    }
  }, [bracketData, loaded, rendered])


  return <div className="brackets-viewer"></div>;
};

export default Bracket;
