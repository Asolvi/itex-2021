import { Bar } from "react-chartjs-2";
import { groupBy, range } from "../../helpers";
import snapshot from "../../data/snapshot.json";

const years = range(12, 2010);

const installYears = groupBy(
  snapshot.map((device) => ({
    year: new Date(device.installed).getFullYear(),
  })),
  "year"
);

const data = {
  labels: years,
  datasets: [
    {
      label: "Installed",
      data: years.map((year) => (installYears[year] || []).length),
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

const Installed = () => (
  <div className="Example">
    <p>Installed per year</p>
    <Bar data={data} options={options} />
  </div>
);

export default Installed;
