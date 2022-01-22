import React, { useEffect, useRef } from "react";
import { parallaxInit } from "../../lib/parallax";

function Header(_props) {
  const textRef = useRef(null);

  useEffect(() => { parallaxInit(textRef.current); }, []);

  return <div className="header">
    <div className="parallax__background"></div>
    <div className="parallax__text" ref={textRef}>Nighty Cloud</div>
  </div>;
}

export default Header;
