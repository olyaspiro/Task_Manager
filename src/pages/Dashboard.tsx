import React from "react";
import { Link } from "react-router-dom";
import { useTaskContext } from "../components/TaskContext";

const Dashboard: React.FC = () => {
  const { tasks, deleteTask } = useTaskContext();


  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  };

  return (
    <div className="dashboard">
      <h2>Task Dashboard</h2>
      <Link to="/create" className="create-button">
        + Create Task
      </Link>
      
      <Link to="/">🔙 Go Back to Home</Link>


      {tasks.length === 0 ? (
        <p>No tasks available. Create one!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p>{task.description || "No description"}</p>
              <p>Status: {task.status}</p>

              <div className="button-group">
                <Link to={`/task/${task.id}`} className="details-button">
                 🔍 Details
                </Link>
                <Link to={`/edit/${task.id}`} className="edit-button">
                ✏️ Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="delete-button"
                  type="button"
                >
                  🗑 Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
