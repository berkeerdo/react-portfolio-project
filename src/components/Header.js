import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Website made with React by Berke Erdogan</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "React Developer",
            "Backend Developer",
            "Frontend Developer",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
         <button type="button" class="btn btn-warning contact">Contact Me</button>
      </div>
    </div>
  );
};

export default Header;
