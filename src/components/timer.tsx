import { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";

const Timer = () => {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["stocks"],
    queryFn: () =>
      fetch("https://api.joshlei.com/v2/growagarden/stock").then((res) =>
        res.json()
      ),
  });

  const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });
  const prevTime = useRef({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const currentMinutes = now.getMinutes();
      const currentSeconds = now.getSeconds();
      const nextMark = Math.ceil(currentMinutes / 5) * 5;

      let minutesLeft = nextMark - currentMinutes - 1;
      let secondsLeft = 60 - currentSeconds;

      if (nextMark >= 60) {
        minutesLeft = 59 - currentMinutes;
      }

      if (secondsLeft === 60) {
        secondsLeft = 0;
        minutesLeft += 1;
      }

      if (minutesLeft < 0) minutesLeft = 4;

      const newTime = {
        minutes: Math.max(0, minutesLeft),
        seconds: Math.max(0, secondsLeft),
      };

      setTimeLeft(newTime);

      // Check if just reset to 0
      if (
        newTime.minutes === 0 &&
        newTime.seconds === 0 &&
        !(prevTime.current.minutes === 0 && prevTime.current.seconds === 0)
      ) {
        refetch(); // trigger manual refetch
      }

      prevTime.current = newTime;
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [refetch]);

  const formatTime = (minutes: number, seconds: number) => {
    const m = minutes.toString();
    const s = seconds.toString().padStart(2, "0");
    return `${m}m ${s}s`;
  };

  if (isPending) return "Loading...";
  if (error) return "An error occurred: " + error.message;

  return (
    <div>
      {formatTime(timeLeft.minutes, timeLeft.seconds)}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Timer;
