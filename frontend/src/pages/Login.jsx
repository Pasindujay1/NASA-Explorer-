import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
import { Link } from "react-router-dom";
import HomePageVideo from '../assets/video/HomePageVideo.mp4';
import VideoWrapper from '../components/VideoWrapper.jsx';

export default function Login() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
      });
      const { loginUser } = useContext(AuthContext);
      const { toast } = useContext(ToastContext);
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (!credentials.email || !credentials.password) {
          toast.error("Please enter all the required fields!");
          return;
        }
    
        loginUser(credentials);
      };

  return (
    <VideoWrapper url={HomePageVideo}>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg p-4">
          <div className="bg-white shadow-lg p-4 rounded-lg text-center">
            <h1 className="text-2xl font-bold mb-4">Log in to your account</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  id="email"
                  name="email"
                  className="border p-2 w-full rounded-lg border-nasa-blue"
                  type="email"
                  placeholder="Email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  className="border p-2 w-full rounded-lg border-nasa-blue"
                  type="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg w-full hover:from-purple-600 hover:to-blue-600 transition duration-300 ease-in-out"
              >
                LOG IN
              </button>
            </form>
            <div className="mt-4 text-sm">
                <Link to="/Register">
                <p>
                Don't have an account?{" "}
                <a href="#" className="text-blue-500">
                  Sign Up
                </a>
              </p>
                </Link>
      
              <p className="text-gray-500">
                By signing in, you agree to our{" "}
                <a href="https://www.nasa.gov/privacy/" className="text-blue-500">
                  Terms
                </a>{" "}
                and{" "}
                <a href="https://www.nasa.gov/privacy/" className="text-blue-500">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </VideoWrapper>
  );
}
