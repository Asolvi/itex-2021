import { Doughnut } from "react-chartjs-2";
import { orderedGroupBy } from "../../helpers";
import snapshot from "../../data/snapshot.json";

export const findDevices = (snapshot) => {
  /* Put all devices of a type into its own array. */
  const sortedData = orderedGroupBy(snapshot, "deviceType");
  /* Find the length of each array. */
  const numberOfEach = sortedData.map((x) => x.length);
  return numberOfEach;
};

const findState = (snapshot) => {
  /* SUGGESTION 1
   * Display what status each of the devices had at the time of the snapshot.
   * See also: src/Types.ts */

  return [];
};

const data = {
  labels: [
    "IR sensor",
    "Inventory sensor",
    "Smoke detector",
    "Gas detector",
    "Intrusion sensor",
    "Panic alarm",
  ],
  datasets: [
    {
      label: "# of Devices",
      data: findDevices(snapshot),
      backgroundColor: [
        "rgba(152, 223, 175, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(152, 223, 175, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const data_suggestion_1 = {
  labels: ["Off", "Armed", "Alarm", "Failure"],
  datasets: [
    {
      label: "Status",
      data: findState(snapshot),
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Doughnuts() {
  return (
    <>
      <div className="Donut">
        <Doughnut data={data} />
      </div>
      <div className="Donut">
        <Doughnut data={data_suggestion_1} />
      </div>
    </>
  );
}
