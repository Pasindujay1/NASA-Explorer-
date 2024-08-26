import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
import HomePageVideo from '../assets/video/HomePageVideo.mp4';
import VideoWrapper from '../components/VideoWrapper.jsx';

export default function Registration() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { registerUser } = useContext(AuthContext);
  const { toast } = useContext(ToastContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !credentials.email ||
      !credentials.password ||
      !credentials.confirmPassword
    ) {
      toast.error("Please enter all the required fields!");
      return;
    }

    //check if the password and confirm password match
    if (credentials.password !== credentials.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const userData = { ...credentials, confirmPassword: undefined };
    registerUser(userData);
    console.log("userdata",userData);
  };

  return (
    <VideoWrapper url={HomePageVideo}>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg p-4">
          <div className="bg-white shadow-lg p-4 rounded-lg text-center">
            <h1 className="text-2xl font-bold mb-4">Create an Account</h1>
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
              <div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  className="border p-2 w-full rounded-lg border-nasa-blue"
                  type="password"
                  placeholder="Confirm Password"
                  value={credentials.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg w-full hover:from-purple-600 hover:to-blue-600 transition duration-300 ease-in-out"
              >
                SIGN UP
              </button>
            </form>
            <div className="mt-4 text-sm">
                <Link        to='/login'
>
                <p>
                Already have an account?{" "}
                <a href="#" className="text-blue-500">
                  Log In
                </a>
              </p>
                </Link>
     
              <p className="text-gray-500">
                By signing up, you agree to our{" "}
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
