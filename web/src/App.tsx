import { useHookstate } from "@hookstate/core";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Manage from "./components/manage/Manage";
import Nav from "./components/Nav";
import CustomParticles from "./components/Particles";
import { getSession } from "./services/server-service";
import globalState, { loadingState } from "./State";
import ShortURL from "./components/ShortURL";
import Bracket from "./components/Bracket";
import Status from "./components/Status";

function App() {
  const state = useHookstate(globalState);
  const loading = useHookstate(loadingState);
  const { auth } = state.get();

  useEffect(() => {
    console.log(state.get());
    if (!auth) getSession().finally(() => loading.set(() => false));
  }, []);

  return (
    <div className="container-fluid ml-5 mr-5 overflow-hidden relative">
      <>
        <CustomParticles color={""} clickable={false} />

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage/:guildID" element={<Manage />} />
          <Route
            path="/leaderboard/:guildID/:channelID"
            element={<Leaderboard />}
          />
          {/*<Route path="/leaderboard/:guildID" element={<LeaderboardMenu/>}/>*/}
          <Route path="/bracket/:guildID/:tournyName" element={<Bracket />} />
          <Route path="/lb/:shortUrl" element={<ShortURL />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
