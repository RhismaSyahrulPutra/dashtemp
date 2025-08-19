import PageWrapper from "../../components/UiComponents/PageWrapper";
import Header from "../../components/UiComponents/Header";
import Card, { CardBody } from "../../components/UiComponents/Card";
import PieChart from "../../components/ChartUI/PieChart";

// helper buat generate angka random
function generateRandomData(length, min = 10, max = 50) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
}

function PieChartPage() {
  return (
    <PageWrapper>
      <Header>Pie Chart</Header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: 2 slice */}
        <Card>
          <CardBody>
            <PieChart
              series={generateRandomData(2)}
              labels={["Apple", "Banana"]}
            />
          </CardBody>
        </Card>

        {/* Card 2: 3 slice */}
        <Card>
          <CardBody>
            <PieChart
              series={generateRandomData(3)}
              labels={["Orange", "Grape", "Pineapple"]}
            />
          </CardBody>
        </Card>
      </div>
    </PageWrapper>
  );
}

export default PieChartPage;
