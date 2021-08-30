import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import useStream from "../../data/stream/StreamContext";

const EventMap = () => {
  const defaultPosition = [63.417042086349085, 10.404390558263986]; // middle of Gløshaugen
  const [alarms, setAlarms] = useState([]); // list of alarms and function for setting alarm list
  const [failures, setFailures] = useState([]); // list of failures and function for setting failure list

  /* useStream lets us access the current stream element.
   * The current stream element "automatically" changes with time. */
  const streamElement = useStream(); // lets us access the current stream element

  /* This will run every time we receive a new event (stream element) */
  useEffect(() => {
    /* SUGGESTION 3
     * 1. Store active alarms in the alarm list (initialized on line 8).
          If you are unsure about how to do this, src/dashboardElements/stream/Alarms.jsx
          has a similar function.

     * 2. Display the alarms on the map. It can be useful to take a look at the Leaflet documentation 
          and src/dashboardElements/static/DeviceMap.jsx.
          
     * 3. Repeat all steps for active failures. Bonus: use a different color for the failures.
          
     * Other ideas:
          - Add a small component that displays what each colored mark on the map means.
          - How can we tell if there are several alarms in the same building? */

    setAlarms((alarms) => {
      /* Edit the alarm list here*/
      return [];
    });
  }, [streamElement]);

  return (
    <MapContainer center={defaultPosition} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {alarms.map((device) => {
        /* Display something in the map for the active alarms */
        return null;
      })}
      {failures.map((device) => {
        /* Display something in the map for the active failures */
        return null;
      })}
    </MapContainer>
  );
};

export default EventMap;
