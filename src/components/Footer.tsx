import React from "react";

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
          <a href="/privacy_policy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
