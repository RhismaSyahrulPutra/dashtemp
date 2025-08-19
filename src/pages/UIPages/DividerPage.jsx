import PageWrapper from "../../components/UiComponents/PageWrapper";
import Header from "../../components/UiComponents/Header";
import Card, { CardBody } from "../../components/UiComponents/Card";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import dividerCode from "../../components/UiComponents/Divider?raw";

function DividerPage() {
  return (
    <PageWrapper>
      <Header>DIVIDER</Header>
      <Card>
        <CardBody>
          <h4 className="font-semibold mb-2">JSX COMPONENT</h4>
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            wrapLongLines
            customStyle={{ borderRadius: "0.5rem", padding: "1rem" }}
          >
            {dividerCode}
          </SyntaxHighlighter>
        </CardBody>
      </Card>
    </PageWrapper>
  );
}

export default DividerPage;
