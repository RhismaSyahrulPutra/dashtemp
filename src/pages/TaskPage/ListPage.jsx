import React, { useState } from "react";
import PageWrapper from "../../components/UiComponents/PageWrapper";
import Header from "../../components/UiComponents/Header";
import Card, { CardHeader, CardBody } from "../../components/UiComponents/Card";
import List, {
  SectionList,
  ListHeader,
  ListBody,
  ListContent,
} from "../../components/TaskUI/List";

export default function ListPage() {
  const [todo, setTodo] = useState([
    { id: "t1", content: "Task 1" },
    { id: "t2", content: "Task 2" },
  ]);
  const [inprog, setInprog] = useState([{ id: "p1", content: "WIP 1" }]);
  const [done, setDone] = useState([{ id: "d1", content: "Done 1" }]);

  return (
    <PageWrapper>
      <Header>TASK LIST</Header>
      <Card>
        <CardBody>
          <List onChange={(snap) => console.log("snapshot:", snap)}>
            {/* Section bebas, bisa sebanyak apa pun */}
            <SectionList id="Tasks" items={todo} setItems={setTodo}>
              <ListHeader>
                <div>Tasks</div>
              </ListHeader>
              <ListBody>
                {todo.map((it) => (
                  <ListContent key={it.id} id={it.id}>
                    {it.content}
                  </ListContent>
                ))}
              </ListBody>
            </SectionList>

            <SectionList id="In-Progress" items={inprog} setItems={setInprog}>
              <ListHeader>In-Progress</ListHeader>
              <ListBody>
                {inprog.map((it) => (
                  <ListContent key={it.id} id={it.id}>
                    {it.content}
                  </ListContent>
                ))}
              </ListBody>
            </SectionList>

            <SectionList id="Completed" items={done} setItems={setDone}>
              <ListHeader>Completed</ListHeader>
              <ListBody>
                {done.map((it) => (
                  <ListContent key={it.id} id={it.id}>
                    {it.content}
                  </ListContent>
                ))}
              </ListBody>
            </SectionList>
          </List>
        </CardBody>
      </Card>
    </PageWrapper>
  );
}
