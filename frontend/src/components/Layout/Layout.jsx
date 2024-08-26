import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Navbar from "../Navbar";
import PropTypes from "prop-types";


const Layout = ({ children }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && <Navbar />}
      <div className="font-mono">{children}</div>
    </>
  );
};

export default Layout;
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
