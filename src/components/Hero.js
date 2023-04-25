import React, { useState, useEffect } from "react";

function Hero(props) {
  const [currSection, SetCurrSection] = useState(props.currentSection);
  const [isSubPage, SetIsSubPage] = useState(false);

  useEffect(() => {
    if (
      currSection === "About Me" ||
      currSection === "Portfolio" ||
      currSection === "Contact" ||
      currSection === "Resume"
    ) {
      SetIsSubPage(true);
    }
  }, [currSection]);

  return (
    <>
      {isSubPage ? (
        <div id="hero" style={{ height: "14vh" }}></div>
      ) : (
        <div id="hero"></div>
      )}
    </>
  );
}

export default Hero;
