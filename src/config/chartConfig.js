// Global config
export const getDefaultChartConfig = (theme) => ({
  chart: {
    toolbar: { show: false },
    background: "transparent",
    foreColor: theme === "dark" ? "#fff" : "#333",
  },
  colors:
    theme === "dark"
      ? ["#635cfb", "#f3349b", "#04d3bc"]
      : ["#432bd3", "#f4349c", "#62e3d5"],
  grid: {
    borderColor: theme === "dark" ? "#555" : "#e0e0e0",
  },
  dataLabels: {
    style: {
      colors: [theme === "dark" ? "#fff" : "#000"],
    },
  },
  tooltip: {
    theme: theme === "dark" ? "dark" : "light",
  },
});

// Config spesifik tiap chart
export const getLineChartConfig = (theme) => ({
  ...getDefaultChartConfig(theme),
  stroke: {
    curve: "smooth",
    width: 3,
  },
});

export const getBarChartConfig = (theme) => ({
  ...getDefaultChartConfig(theme),
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
});

export const getPieChartConfig = (theme) => ({
  ...getDefaultChartConfig(theme),
  legend: {
    position: "bottom",
  },
  dataLabels: {
    enabled: true,
  },
});
