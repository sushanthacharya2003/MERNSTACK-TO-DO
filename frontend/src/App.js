import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("https://your-backend.onrender.com/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);
  const addTask = () => {
    axios
      .post("https://your-backend.onrender.com/tasks', ...", { text })
      .then((res) => setTasks([...tasks, res.data]));
    setText("");
  };
  return (
    <div style={{ margin: "20px" }}>
      <h1>Task List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
