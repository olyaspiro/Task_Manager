import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="home">
      <h1>Welcome to the Task Manager</h1>

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>🔐 Log In</button>
      ) : (
        <>
          <h3>Hello</h3>
          <button onClick={() => logout()}>🔒 Log Out</button>
          <br />
          <Link to="/dashboard" className="dashboard-link">
            ➡ Go to Dashboard
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
