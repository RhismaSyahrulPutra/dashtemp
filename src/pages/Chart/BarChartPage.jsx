import PageWrapper from "../../components/UiComponents/PageWrapper";
import Header from "../../components/UiComponents/Header";
import Card, { CardBody } from "../../components/UiComponents/Card";
import BarChart from "../../components/ChartUI/BarChart";

// helper untuk random data
function generateRandomData(length, min = 0, max = 50) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
}

function BarChartPage() {
  const categories = ["Q1", "Q2", "Q3", "Q4"];

  return (
    <PageWrapper>
      <Header>Bar Chart</Header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: 2 series */}
        <Card>
          <CardBody>
            <BarChart
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

        {/* Card 2: 3 series */}
        <Card>
          <CardBody>
            <BarChart
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

export default BarChartPage;
