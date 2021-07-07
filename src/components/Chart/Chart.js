import "./Chart.css";
import ChartBar from "../Chart/ChartBar";

const Chart = (props) => {
  const dataPointsValue = props.datapoints.map(
    (datapoints) => datapoints.value
  );
  const maxV = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.datapoints.map((datapoints) => (
        <ChartBar
          key={datapoints.label}
          value={datapoints.value}
          maxValue={maxV}
          label={datapoints.label}
        />
      ))}
    </div>
  );
};
export default Chart;
