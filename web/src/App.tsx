import { useHookstate } from "@hookstate/core";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/home/Home";
import Leaderboard from "./components/Leaderboard";
import Manage from "./components/manage/Manage";
import Nav from "./components/Nav";
import CustomParticles from "./components/Particles";
import { getSession } from "./services/server-service";
import globalState, { loadingState } from "./State";
import ShortURL from "./components/ShortURL";
import Status from "./components/Status";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import Guide from "./components/Guide";
import Transcript from "./components/Transcript";

function App() {
  const state = useHookstate(globalState);
  const loading = useHookstate(loadingState);
  const { auth } = state.get();

  useEffect(() => {
    if (!auth) {
      getSession().finally(() => loading.set(false));
    } else {
      loading.set(false);
    }
  }, []);

  return (
    <div className="container-fluid px-5 relative">
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
          <Route path="/lb/:shortUrl" element={<ShortURL />} />
          <Route
            path="/transcript/:guildID/:gameNum"
            element={<Transcript />}
          />
          <Route path="/status" element={<Status />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>

        <Footer />
      </>
    </div>
  );
}

export default App;
