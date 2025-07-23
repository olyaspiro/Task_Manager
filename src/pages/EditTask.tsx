import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTaskContext } from "../components/TaskContext";
import type { Task } from "../Task.model";

const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getTaskById, updateTask } = useTaskContext();
  const navigate = useNavigate();

  const task = id ? getTaskById(id) : undefined;

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [status, setStatus] = useState<Task["status"]>(task?.status || "todo");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!task) {
      setError("Task not found.");
    }
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    if (!task) return;

    const updatedTask: Task = {
      ...task,
      title,
      description,
      status,
      updatedAt: new Date().toISOString(),
    };

    updateTask(updatedTask);
    navigate("/");
  };

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="dashboard">
      <h2>Edit Task</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description:</label><br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Status:</label><br />
          <select value={status} onChange={(e) => setStatus(e.target.value as Task["status"])}>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <button type="submit" className="create-button">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
