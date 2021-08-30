import { Line } from "react-chartjs-2";
import { orderedGroupBy } from "../../helpers";
import stream from "../../data/stream/stream.json";
import snapshot from "../../data/snapshot.json";
import { findDevices } from "../static/Doughnuts";

const amountOfEachDevice = findDevices(snapshot);

const messagesPerStatus = orderedGroupBy(stream, "status");

const labels = ["Off", "Armed", "Alarm", "Failure"];

const devices = [
  "IR sensor",
  "Inventory sensor",
  "Smoke detector",
  "Gas detector",
  "Intrusion sensor",
  "Panic alarm",
];

const colors = [
  {
    backgroundColor: "rgb(152, 223, 175)",
    borderColor: "rgba(152, 223, 175, 0.2)",
  },
  {
    backgroundColor: "rgb(54, 162, 235)",
    borderColor: "rgba(54, 162, 235, 0.2)",
  },
  {
    backgroundColor: "rgb(255, 206, 86)",
    borderColor: "rgba(255, 206, 86, 0.2)",
  },
  {
    backgroundColor: "rgb(75, 192, 192)",
    borderColor: "rgba(75, 192, 192, 0.2)",
  },
  {
    backgroundColor: "rgb(153, 102, 255)",
    borderColor: "rgba(153, 102, 255, 0.2)",
  },
  {
    backgroundColor: "rgb(255, 159, 64)",
    borderColor: "rgba(255, 159, 64, 0.2)",
  },
];

const data = {
  labels: devices,
  datasets: labels.map((type, index) => ({
    label: type,
    data: orderedGroupBy(messagesPerStatus[index], "deviceType").map((x) =>
      Math.round(x.length / amountOfEachDevice[index])
    ),
    fill: false,
    backgroundColor: colors[index].backgroundColor,
    borderColor: colors[index].borderColor,
  })),
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const StatusPerDevice = () => (
  <div className="Example">
    <p>Status per device type</p>
    <Line data={data} options={options} />
  </div>
);

export default StatusPerDevice;
