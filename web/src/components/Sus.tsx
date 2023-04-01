import { useEffect, useState } from "react";
import { classNames } from "../util/tailwind";
import imposter from "../assets/imposter.webp";

const Sus = () => {
  const [started, setStarted] = useState(false);
  const DURATION = 15 * 1000; // seconds
  const INTERVAL = 15 * 1000 * 60; // minutes

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const loop = async () => {
    console.log("You were not the imposter...");
    setStarted(true);
    await delay(DURATION);

    setStarted(false);
    await delay(INTERVAL);
    await loop();
  };

  useEffect(() => {
    // delay((Math.random() * 10 + 5) * 1000 * 60).then(() => loop());
    loop()
  }, []);

  return (
    <img
      src={imposter}
      className={classNames(
        "w-24 h-24 absolute top-1/2 -z-[1]",
        started
          ? `off-screen-right duration-[${DURATION}ms] slow-spin ease-linear`
          : "off-screen-left"
      )}
    />
  );
};

export default Sus;
