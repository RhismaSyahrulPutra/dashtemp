import PageWrapper from "../../components/UiComponents/PageWrapper";
import Header from "../../components/UiComponents/Header";
import Card, { CardBody } from "../../components/UiComponents/Card";
import LineChart from "../../components/ChartUI/LineChart";

function generateRandomData(length, min = 0, max = 50) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
}

function LineChartPage() {
  const categories = ["Jan", "Feb", "Mar", "Apr"];

  return (
    <PageWrapper>
      <Header>Line Chart</Header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardBody>
            <LineChart
              series={[
                {
                  name: "Product A",
                  data: generateRandomData(categories.length),
                },
                {
                  name: "Product B",
                  data: generateRandomData(categories.length),
                },
              ]}
              categories={categories}
            />
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <LineChart
              series={[
                { name: "East", data: generateRandomData(categories.length) },
                { name: "West", data: generateRandomData(categories.length) },
                {
                  name: "Central",
                  data: generateRandomData(categories.length),
                },
              ]}
              categories={categories}
            />
          </CardBody>
        </Card>
      </div>
    </PageWrapper>
  );
}

export default LineChartPage;
