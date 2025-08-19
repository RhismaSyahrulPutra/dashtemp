import PageWrapper from "../../components/UiComponents/PageWrapper";
import Header from "../../components/UiComponents/Header";
import Card, { CardHeader, CardBody } from "../../components/UiComponents/Card";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "../../components/UiComponents/Table";
import Badge from "../../components/UiComponents/Badge";

const dummyData = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 4,
    name: "David",
    email: "david@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 5,
    name: "Eva",
    email: "eva@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Frank",
    email: "frank@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 7,
    name: "Grace",
    email: "grace@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 8,
    name: "Hannah",
    email: "hannah@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Ian",
    email: "ian@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 10,
    name: "Julia",
    email: "julia@example.com",
    role: "Admin",
    status: "Active",
  },
];

function SimpleTablePage() {
  const getBadgeVariant = (status) =>
    status === "Active" ? "success" : "error";

  return (
    <PageWrapper>
      <Header>SIMPLE TABLE</Header>
      <Card>
        <CardBody>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell head>ID</TableCell>
                <TableCell head>Name</TableCell>
                <TableCell head>Email</TableCell>
                <TableCell head>Role</TableCell>
                <TableCell head>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge
                      variant={getBadgeVariant(user.status)}
                      styleType="soft"
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </PageWrapper>
  );
}

export default SimpleTablePage;
