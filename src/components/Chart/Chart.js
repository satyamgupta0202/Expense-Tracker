import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.datapoints.map((datapoints) => (
        <ChartBar
          key={datapoints.label}
          value={datapoints.value}
          max={null}
          label={datapoints.label}
        />
      ))}
    </div>
  );
};
export default Chart;
