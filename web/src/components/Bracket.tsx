import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getBracket } from "../services/neatqueue-service";

const Bracket = () => {
  const { guildID, tournyName } = useParams();
  const [bracketData, setBracketData] = useState<any>();

  useEffect(() => {
    if (!guildID || !tournyName) return;
    getBracket(guildID, tournyName).then(setBracketData);

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/brackets-viewer/dist/brackets-viewer.min.js";
    script.async = true;
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

  // @ts-ignore
  if (!bracketData || !window.bracketsViewer) return <></>;


  return <div className="brackets-viewer">

    {
      // @ts-ignore
      window.bracketsViewer.render({
        stages: bracketData.stage,
        matches: bracketData.match,
        matchGames: bracketData.match_game,
        participants: bracketData.participant,
      })
    }

  </div>;
};

export default Bracket;
