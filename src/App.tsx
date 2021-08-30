import asolvi from "./asolvi.svg";
import "./App.css";
import Doughnuts from "./dashboardElements/static/Doughnuts";
import DeviceMap from "./dashboardElements/static/DeviceMap";
import { StreamProvider } from "./data/stream/StreamContext";
import Alarms from "./dashboardElements/stream/Alarms";
import EventMap from "./dashboardElements/stream/EventMap";
import DeviceTypeEvents from "./dashboardElements/otherExamples/DeviceTypeEvents";
import StatusPerDevice from "./dashboardElements/otherExamples/StatusPerDevice";
import GenericGraph from "./dashboardElements/otherExamples/GenericGraph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={asolvi} className="App-logo" alt="logo" />
        <div>
          <div className="App-linkContainer">
            <a
              className="App-link"
              href="https://reactchartjs.github.io/react-chartjs-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              More Chart.js examples
            </a>
          </div>
          <div className="App-linkContainer">
            <a
              className="App-link"
              href="https://react-leaflet.js.org/docs/example-popup-marker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More Leaflet examples
            </a>
          </div>
        </div>
      </header>
      <StreamProvider>
        <>
          <div className="CategoryContainer">
            <p>Static snapshot data</p>
            <div className="DashboardContainer">
              <Doughnuts />
              <DeviceMap />
            </div>
          </div>
          <div className="CategoryContainer">
            <p>"Real time" stream</p>
            <div className="DashboardContainer">
              <Alarms />
              <EventMap />
            </div>
          </div>
          <div className="CategoryContainer">
            <p>Other examples</p>
            <div className="DashboardContainer">
              <DeviceTypeEvents />
              <StatusPerDevice />
              <GenericGraph />
            </div>
          </div>
        </>
      </StreamProvider>
    </div>
  );
}

export default App;
