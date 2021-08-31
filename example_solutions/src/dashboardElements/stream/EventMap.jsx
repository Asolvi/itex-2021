import { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import useStream from "../../data/stream/StreamContext";
import { Status } from "../../Types";

const EventMap = () => {
  const defaultPosition = [63.417042086349085, 10.404390558263986]; // middle of Gløshaugen
  const [alarms, setAlarms] = useState([]);
  const [failures, setFailures] = useState([]);
  const streamElement = useStream();

  useEffect(() => {
    setFailures((failures) => {
      const deviceInFailures =
        failures.filter((failure) => failure.name === streamElement.name)
          .length > 0;

      if (streamElement.status === Status.Failure && !deviceInFailures) {
        return [...failures, streamElement];
      } else if (streamElement.status !== Status.Failure && deviceInFailures) {
        return failures.filter(
          (failure) => failure.name !== streamElement.name
        );
      } else {
        return failures;
      }
    });

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
    <MapContainer center={defaultPosition} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {alarms.map((device) => (
        <CircleMarker
          center={[device.latitude, device.longitude]}
          pathOptions={{ color: "red" }}
          radius={15}
          key={device.name}
        >
          <Popup>
            {device.building}
            <br />
            Device name: {device.name}
            <br />
            Alarm date: {device.lastAlarm}
          </Popup>
        </CircleMarker>
      ))}
      {failures.map((device) => (
        <CircleMarker
          center={[device.latitude, device.longitude]}
          pathOptions={{ color: "purple" }}
          radius={13}
          key={device.name}
        >
          <Popup>
            {device.building}
            <br />
            Device name: {device.name}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default EventMap;
