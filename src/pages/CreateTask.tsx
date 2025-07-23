import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../components/TaskContext";
import type { Task } from "../Task.model";
import { v4 as uuidv4 } from "uuid";

const CreateTask: React.FC = () => {
  const { addTask } = useTaskContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"todo" | "in-progress" | "done">("todo");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    const now = new Date().toISOString();

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      status,
      createdAt: now,
      updatedAt: now,
    };

    addTask(newTask);
    alert("✅ Task created successfully!");
    navigate("/"); // Original behavior
  };

  return (
    <div className="dashboard">
      <h2>Create Task</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Status:</label>
          <br />
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "todo" | "in-progress" | "done")
            }
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <button type="submit" className="create-button">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
