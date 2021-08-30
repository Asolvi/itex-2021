import { Bar } from "react-chartjs-2";
import { orderedGroupBy } from "../../helpers";
import stream from "../../data/stream/stream.json";
import { Status } from "../../Types";

const devices = [
  "IR sensor",
  "Inventory sensor",
  "Smoke detector",
  "Gas detector",
  "Intrusion sensor",
  "Panic alarm",
];

const events = stream.filter(
  (device) => device.status === Status.Alarm || device.status === Status.Failure
);

const alarms = events.filter((device) => device.status === Status.Alarm);
const failures = events.filter((device) => device.status === Status.Failure);

const numberOfAlarms = orderedGroupBy(alarms, "deviceType").map(
  (x) => x.length
);
const numberOfFailures = orderedGroupBy(failures, "deviceType").map(
  (x) => x.length
);

const data = {
  labels: devices,
  datasets: [
    {
      label: "Alarms",
      data: numberOfAlarms,
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Failures",
      data: numberOfFailures,
      backgroundColor: "rgb(153, 102, 255)",
    },
  ],
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

export default function DeviceTypeEvents() {
  return (
    <>
      <div className="Example">
        <p>Critical events per device type</p>
        <Bar data={data} options={options} />
      </div>
    </>
  );
}
