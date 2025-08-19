import React from "react";
import Chart from "react-apexcharts";
import { getBarChartConfig } from "../../config/chartConfig";
import { useTheme } from "../../hooks/useTheme";

export default function BarChart({ series, categories }) {
  const { theme } = useTheme(); // ambil langsung dari hook

  const options = {
    ...getBarChartConfig(theme),
    xaxis: { categories },
  };

  return <Chart options={options} series={series} type="bar" height={350} />;
}
