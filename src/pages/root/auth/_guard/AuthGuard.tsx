import { Navigate, useLocation } from "react-router-dom";
import { getUserToken } from "@/stores/user";


export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isAuthenticated = getUserToken() !== null && getUserToken() !== '';

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/auth/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
}
  
