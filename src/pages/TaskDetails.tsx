import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTaskContext } from "../components/TaskContext";
import type { Task } from "../Task.model";

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getTaskById } = useTaskContext();
  const navigate = useNavigate();

  const task: Task | undefined = id ? getTaskById(id) : undefined;

  if (!task) {
    return (
      <div className="dashboard">
        <h2>Task not found</h2>
        <button onClick={() => navigate(-1)} className="create-button">
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h2>Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description || "No description"}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Created At:</strong> {new Date(task.createdAt).toLocaleString()}</p>
      <p><strong>Updated At:</strong> {new Date(task.updatedAt).toLocaleString()}</p>

      <div className="button-row" style={{ marginTop: "1.5rem" }}>
        <Link to={`/edit/${task.id}`} className="create-button">
          Edit Task
        </Link>
        <button onClick={() => navigate(-1)} className="create-button">
          ← Back
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
