import { useHookstate } from "@hookstate/core";
import {useEffect} from "react";
import { getStats } from "../services/neatqueue-service";
import globalState from "../State";
import { LoadingBar } from "./Loading";
import CustomParticles from "./Particles";

const Home = () => {

  const global = useHookstate(globalState);

    useEffect(() => {
        getStats();
    }, []);

    return (
        <div>
            <CustomParticles/>
            <div className="h-screen flex justify-center items-center text-gray-200">
                <div className="">
                    <h1 className="text-9xl">NeatQueue</h1>
                    <div className="grid grid-cols-2 w-1/2">

                            <h1 className="text-4xl ">Servers:</h1>
                            <h1 className="text-4xl  my-auto">{global.stats.servers.get() === 0 ? <LoadingBar /> : global.stats.servers.get()}</h1>

                            <h1 className="text-4xl">Players:</h1>
                            <h1 className="text-4xl">{global.stats.players.get() === 0 ? <LoadingBar /> : global.stats.players.get()}</h1>

                            <h1 className="text-4xl">Matches:</h1>
                            <h1 className="text-4xl">{global.stats.games.get() === 0 ? <LoadingBar /> : global.stats.games.get()}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home