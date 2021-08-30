import { Status } from "../../Types";
import { useEffect, useState } from "react";
import useStream from "../../data/stream/StreamContext";

export default function Alarms() {
  const [alarms, setAlarms] = useState([]); // list of alarms and function for setting alarm list

  /* useStream lets us access the current stream element.
   * The current stream element "automatically" changes with time. */
  const streamElement = useStream(); // lets us access the current stream element

  /* This will run every time we receive a new event (stream element) */
  useEffect(() => {
    setAlarms((alarms) => {
      const deviceInAlarms =
        alarms.filter((alarm) => alarm.name === streamElement.name).length > 0;

      if (streamElement.status === Status.Alarm && !deviceInAlarms) {
        /* SUGGESTION 2
         * 1. Add the stream element to the alarm list and return the new list.

         * 2. The box we display the events in is not very pretty to look at.
         *    It also overflows when we add too many elements to it.
         *    Can you improve the design?
         * 
         * 3. If the window is already red, we might miss new alarms.
         *    Expand the functionality to make it e.g. blink when a new alarm arrives,
         *    and/or play a sound. 
         * 
         * See also: App.css, line 69-87*/
        return [];
      } else if (streamElement.status !== Status.Alarm && deviceInAlarms) {
        /* If the device is no longer in alarm, remove it from alarms */
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
