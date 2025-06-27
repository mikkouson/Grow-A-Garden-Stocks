import { Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  refetch: () => void;
}
const Timer = ({ refetch }: Props) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });
  const prevTime = useRef({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const totalSeconds = now.getMinutes() * 60 + now.getSeconds();
      const secondsToNextMark = 300 - (totalSeconds % 300);

      const minutesLeft = Math.floor(secondsToNextMark / 60);
      const secondsLeft = secondsToNextMark % 60;

      const newTime = {
        minutes: minutesLeft,
        seconds: secondsLeft,
      };

      setTimeLeft(newTime);

      // Trigger at 4:59 (i.e. 1 second after refresh starts)
      if (
        newTime.minutes === 4 &&
        newTime.seconds === 59 &&
        !(prevTime.current.minutes === 4 && prevTime.current.seconds === 59)
      ) {
        refetch();
      }

      prevTime.current = newTime;
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [refetch]);

  return (
    <div>
      <div className="text-center mb-4 sm:mb-6 mt-6">
        <p className="text-gray-400 mb-3 text-xs sm:text-sm">
          Live Inventory • Auto-refresh
        </p>

        <div className="mb-3 ">
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Next update in:</span>
            <span className="text-2xl font-bold text-green-400 font-mono">
              {timeLeft.minutes}m {timeLeft.seconds.toString().padStart(2, "0")}
              s
            </span>
          </div>
        </div>

        {/* Discord Link */}
      </div>
    </div>
  );
};

export default Timer;
