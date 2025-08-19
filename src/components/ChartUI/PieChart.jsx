import React from "react";
import Chart from "react-apexcharts";
import { getPieChartConfig } from "../../config/chartConfig";
import { useTheme } from "../../hooks/useTheme";

export default function PieChart({ series, labels }) {
  const { theme } = useTheme();

  const options = {
    ...getPieChartConfig(theme),
    labels,
  };

  return <Chart options={options} series={series} type="pie" height={350} />;
}
