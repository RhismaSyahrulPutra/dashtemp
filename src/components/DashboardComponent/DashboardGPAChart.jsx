import Card, { CardBody } from "../UiComponents/Card";
import Chart from "react-apexcharts";
import { useTheme } from "../../hooks/useTheme";
import { getDefaultChartConfig } from "../../config/chartConfig";

const data1 = [
  { name: "1980-1", GPA: 2.2 },
  { name: "1980-2", GPA: 4.0 },
  { name: "1981-1", GPA: 3.25 },
  { name: "1981-2", GPA: 3.68 },
  { name: "1982-1", GPA: 2.22 },
  { name: "1982-2", GPA: 3.69 },
  { name: "1983-1", GPA: 4.27 },
  { name: "1983-2", GPA: 3.65 },
];

const data2 = [
  { name: "1980-1", GPA: 3.0 },
  { name: "1980-2", GPA: 3.5 },
  { name: "1981-1", GPA: 3.8 },
  { name: "1981-2", GPA: 3.2 },
  { name: "1982-1", GPA: 2.8 },
  { name: "1982-2", GPA: 4.0 },
  { name: "1983-1", GPA: 3.5 },
  { name: "1983-2", GPA: 4.2 },
];

function DashboardGPAChart() {
  const { theme } = useTheme();
  const baseConfig = getDefaultChartConfig(theme);

  const options = {
    ...baseConfig,
    chart: {
      ...baseConfig.chart,
      type: "line",
    },
    xaxis: {
      categories: data1.map((item) => item.name),
    },
    yaxis: {
      title: { text: "GPA" },
      min: 0,
      max: 5,
    },
    stroke: {
      curve: "smooth", // biar garisnya nggak tajam-tajam
      width: 2,
    },
  };

  const series = [
    {
      name: "GPA Mahasiswa A",
      data: data1.map((item) => item.GPA),
    },
    {
      name: "GPA Mahasiswa B",
      data: data2.map((item) => item.GPA),
    },
  ];

  return (
    <Card className="md:col-span-2">
      <CardBody>
        <div className="w-full h-80">
          <Chart options={options} series={series} type="line" height="100%" />
        </div>
      </CardBody>
    </Card>
  );
}

export default DashboardGPAChart;
