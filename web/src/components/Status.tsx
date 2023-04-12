import { useEffect, useState } from "react";
import { getStatus } from "../services/neatqueue-service";
import { BotStatus } from "../types";

const Status = () => {
  const [status, setStatus] = useState<BotStatus | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getStatus()
      .then(setStatus)
      .catch(() => setStatus(undefined))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      {!loading && (
        <div className="grid grid-cols-2 gap-3">
          <h1 className="col-span-2 text-6xl text-center bg-black/75 p-10 rounded-xl">
            NeatQueue is currently{" "}
            <span className={status ? "text-green-600" : "text-red-600"}>
              {status ? "Online" : "Offline"}
            </span>
          </h1>

          {status && (
            <h1 className="text-6xl text-center bg-black/75 p-10 rounded-xl">
              Shards: {status.shards}
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Status;
