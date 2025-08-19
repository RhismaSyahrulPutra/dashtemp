import React, { useState } from "react";
import PageWrapper from "../../components/UiComponents/PageWrapper";
import Card, { CardHeader, CardBody } from "../../components/UiComponents/Card";

import Kanban, {
  KanbanSection,
  KanbanHeader,
  KanbanBody,
  KanbanCard,
} from "../../components/TaskUI/kanban";

function KanbanPage() {
  const [todo, setTodo] = useState([
    { id: "1", content: "Design UI" },
    { id: "2", content: "Setup project" },
  ]);
  const [progress, setProgress] = useState([{ id: "3", content: "Build API" }]);
  const [done, setDone] = useState([{ id: "4", content: "Research tools" }]);

  return (
    <PageWrapper>
      <Card>
        <CardHeader>
          <h2 className="font-bold text-lg">Kanban Board</h2>
        </CardHeader>
        <CardBody>
          <Kanban
            onChange={(snapshot) => {
              console.log("Snapshot state:", snapshot);
            }}
          >
            {/* Todo */}
            <KanbanSection id="todo" items={todo} setItems={setTodo}>
              <KanbanHeader>
                <span>Todo</span>
              </KanbanHeader>
              <KanbanBody>
                {todo.map((t) => (
                  <KanbanCard key={t.id} id={t.id}>
                    {t.content}
                  </KanbanCard>
                ))}
              </KanbanBody>
            </KanbanSection>

            {/* In Progress */}
            <KanbanSection
              id="progress"
              items={progress}
              setItems={setProgress}
            >
              <KanbanHeader>In Progress</KanbanHeader>
              <KanbanBody>
                {progress.map((t) => (
                  <KanbanCard key={t.id} id={t.id}>
                    {t.content}
                  </KanbanCard>
                ))}
              </KanbanBody>
            </KanbanSection>

            {/* Done */}
            <KanbanSection id="done" items={done} setItems={setDone}>
              <KanbanHeader>Done</KanbanHeader>
              <KanbanBody>
                {done.map((t) => (
                  <KanbanCard key={t.id} id={t.id}>
                    {t.content}
                  </KanbanCard>
                ))}
              </KanbanBody>
            </KanbanSection>
          </Kanban>
        </CardBody>
      </Card>
    </PageWrapper>
  );
}

export default KanbanPage;
