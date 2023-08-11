import React from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

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
          <a href="/terms">Terms of Service</a> |{" "}
          <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
