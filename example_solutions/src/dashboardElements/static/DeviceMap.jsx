import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { orderedGroupBy } from "../../helpers";
import snapshot from "../../data/snapshot.json";
import { buildings } from "../../data/buildings";

const locatedInBuilding = () => {
  const sortedData = orderedGroupBy(snapshot, "building");

  const numberOfEach = buildings.map((b) => {
    return {
      location: b,
      amount: sortedData[b.building].length,
    };
  });

  return numberOfEach;
};

const DeviceMap = () => {
  const defaultPosition = [63.417042086349085, 10.404390558263986]; // middle of Gløshaugen

  return (
    <MapContainer center={defaultPosition} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locatedInBuilding().map((l) => (
        <Marker
          key={l.location.building}
          position={[l.location.latitude, l.location.longitude]}
        >
          <Popup>
            {l.location.building}
            <br />
            Number of devices: {l.amount}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DeviceMap;
