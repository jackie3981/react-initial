import { useState, useEffect } from "react";

export default function BannerClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="font-mono text-lg">{time.toLocaleTimeString()}</span>;
}
