import { useEffect, useLayoutEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  useLayoutEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8000/auth/check", {
          method: "GET",
          credentials: "include",
        });

        if (res.status === 401) {
          setIsVerified(false);
          navigate("/login");
        } else {
          setIsVerified(true);
        }
      } catch {
        navigate("/login");
        setIsVerified(false);
      }
    };
    checkAuth();
  }, [navigate]);
  if (!isVerified) return null;
  return children;
};
