import { useState, createContext, useContext, useEffect } from "react";
import stream from "./stream.json";

const streamContext = createContext(stream[0]);

interface StreamProviderProps {
  children: JSX.Element;
}

export const StreamProvider = (props: StreamProviderProps) => {
  const [currentState, setCurrentState] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((currentState) =>
        currentState === stream.length - 1
          ? stream.length - 1
          : currentState + 1
      );
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <streamContext.Provider value={stream[currentState]}>
      {props.children}
    </streamContext.Provider>
  );
};

export default function useStream() {
  const context = useContext(streamContext);
  if (context === undefined) {
    throw new Error("useHighscore must be used within a StreamProvider");
  }
  return context;
}
