import { createContext, useContext, useEffect, useState } from "react";
import ToastContext from "./ToastContext";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { toast } = useContext(ToastContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  //check user is logged in
  const checkUserLoggedIn = async () => {
    try {
      const res = await fetch(`https://nasa-api-n4ic.onrender.com/nasa/chk`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await res.json();
      if (!result.error) {
        setUser(result);
        if (
          location.pathname === "/Login" ||
          location.pathname === "/Register"
        ) {
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 500);
        } else {
          navigate(location.pathname ? location.pathname : "/");
        }
      } else {
        navigate("/Login", { replace: true });
      }
    } catch (err) {
      console.log(err);
      navigate("/Login", { replace: true });
    }
  };
  //login request
  const loginUser = async (userData) => {
    try {
      const res = await fetch(`https://nasa-api-n4ic.onrender.com/nasa/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const result = await res.json();
      if (!result.error) {
        setUser(result.user);
        toast.success("Logged in successfully");
        localStorage.setItem("token", result.jwtToken);
        navigate("/", { replace: true });
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  //register request
  const registerUser = async (userData) => {
    try {
      const res = await fetch(`https://nasa-api-n4ic.onrender.com/nasa/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const result = await res.json();
      if (!result.error) {
        toast.success("User Registered Successfully! Login to continue ");
        navigate("/Login", { replace: true });
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ loginUser, registerUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
