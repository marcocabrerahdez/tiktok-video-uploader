import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <p>
          &copy; {new Date().getFullYear()} Guess Wizardry. All rights reserved.
        </p>
      </div>
      <div>
        <p>
          <Link to={"/terms"}>Terms of Service</Link>
          {" | "}
          <Link to={"/privacy"}>Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
