import { Bar } from "react-chartjs-2";
import { groupBy, range, uniqueObjects } from "../../helpers";
import stream from "../../data/stream/stream.json";
import { Status } from "../../Types";

const years = range(12, 2010);

const failedDevices = uniqueObjects(
  stream
    .filter((device) => device.status === Status.Failure)
    .map((device) => ({ name: device.name, installed: device.installed }))
);

const installYears = groupBy(
  failedDevices.map((device) => ({
    year: new Date(device.installed).getFullYear(),
  })),
  "year"
);

const data = {
  labels: years,
  datasets: [
    {
      label: "Failed",
      data: years.map((year) => (installYears[year] || []).length),
      backgroundColor: ["rgba(153, 102, 255, 0.2)"],
      borderColor: ["rgb(153, 102, 255)"],
      borderWidth: 1,
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

const FailuresPerInstallYear = () => (
  <div className="Example">
    <p>Failures per install year</p>
    <Bar data={data} options={options} />
  </div>
);

export default FailuresPerInstallYear;
