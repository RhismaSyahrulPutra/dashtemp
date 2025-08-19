import React from "react";
import Chart from "react-apexcharts";
import { getLineChartConfig } from "../../config/chartConfig";
import { useTheme } from "../../hooks/useTheme";

export default function LineChart({ series, categories }) {
  const { theme } = useTheme();

  const options = {
    ...getLineChartConfig(theme),
    xaxis: { categories },
  };

  return <Chart options={options} series={series} type="line" height={350} />;
}
