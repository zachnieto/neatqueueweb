import { useParams } from "react-router";
import React, {useEffect, useRef, useState} from "react";
import {getTranscript} from "../services/neatqueue-service";
import Loading from "./Loading";
import IframeResizer from "iframe-resizer-react";

const Transcript = () => {
  const { guildID, gameNum } = useParams();
  const [html, setHtml] = useState<string>('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!guildID || !gameNum) return;
    getTranscript(guildID, gameNum).then(html => {
      setHtml(html);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />

  return (
      <div className="h-100vh">
      <IframeResizer
          log
          srcDoc={html}
          style={{ width: '1px', minWidth: '100%', height: '90vh'}}
          scrolling={false}
      />
      </div>
  );
};

export default Transcript;
