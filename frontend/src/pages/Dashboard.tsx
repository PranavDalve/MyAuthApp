import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg border-0 p-5 login-card text-center">
            <div className="mb-4">
              <div className="dashboard-icon mx-auto mb-3">User</div>
              <h2 className="fw-bold text-primary">Welcome Back!</h2>
              <p className="text-muted">You are successfully logged in.</p>
            </div>

            <button
              onClick={handleLogout}
              className="btn btn-danger btn-lg w-100 login-btn"
            >
              Logout
            </button>

            <p className="mt-4 text-muted small">
              Secure session • Active
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}