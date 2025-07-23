import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  // If not logged in, redirect to home
  if (!isAuthenticated) return <Navigate to="/" />;

  // If logged in, show the page
  return <>{children}</>;
};

export default ProtectedRoute;
