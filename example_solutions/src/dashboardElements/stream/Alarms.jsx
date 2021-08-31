import { Status } from "../../Types";
import { useEffect, useState } from "react";
import useStream from "../../data/stream/StreamContext";

export default function Alarms() {
  const [alarms, setAlarms] = useState([]);
  const streamElement = useStream();

  useEffect(() => {
    setAlarms((alarms) => {
      const deviceInAlarms =
        alarms.filter((alarm) => alarm.name === streamElement.name).length > 0;

      if (streamElement.status === Status.Alarm && !deviceInAlarms) {
        return [...alarms, streamElement];
      } else if (streamElement.status !== Status.Alarm && deviceInAlarms) {
        return alarms.filter((alarm) => alarm.name !== streamElement.name);
      } else {
        return alarms;
      }
    });
  }, [streamElement]);

  return (
    <div className={alarms.length > 0 ? "Alarms" : "NoAlarms"}>
      {alarms.length > 0 ? (
        alarms.map((alarm) => (
          <div key={alarm.name}>
            <p>{alarm.name}</p>
            <p>{alarm.lastAlarm}</p>
          </div>
        ))
      ) : (
        <p>No active alarms</p>
      )}
    </div>
  );
}
