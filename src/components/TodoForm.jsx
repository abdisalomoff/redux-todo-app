import { useEffect, useState } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoForm = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.taskReducer.tasks);

  const [task, setTask] = useState("");

  useEffect(() => {
    dispatch(addTodo());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    const taskId = Date.now();
    dispatch(
      addTodo({
        id: taskId,
        text: task,
      })
    );
    setTask("");
  };

  return (
    <Container>
      <Form className="d-flex gap-5 my-5" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
      <ListGroup>
        {tasks.map((t) => (
          <ListGroup.Item
            key={t.id}
            className="d-flex justify-content-between align-items-center"
          >
            {t.text}
            <div>
              <Button variant="danger">Delete</Button>
              <Button variant="info">Edite</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TodoForm;
