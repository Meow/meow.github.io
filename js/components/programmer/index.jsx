import React from "react";
import ProgrammerProjects from "./_projects";
import ProgrammerLanguages from "./_languages";

function ProgrammerPage(_props) {
  return <div className="description">
      <div className="block">
        <div className="block__header">
          <i className="fa fa-code"></i> Programmer
        </div>
        <div className="block__content">
          <p>I've been coding since 2011, starting off with Garry's Mod Lua, trying my hand at game development with Unreal Engine, and ultimately moving on to web development. In 2017 I was invited to work on Derpibooru, an image hosting site dedicated to the My Little Pony cartoon, which caused my web development and sysadmin skills to skyrocket, turning me into a fairly competent systems administrator and web developer... hopefully. I'm experienced with Ruby, Lua, C (and coincidentally C++), as well as most of web dev stack (CSS, HTML, SQL, and such).</p>
          <p>Before web development, game development was my passion, and it still remains one of my "guilty pleasures". I've been coding some simple personal 2D games, drawing sprites and making silly stories. I've been looking to also get into VR game development, but have been postponing this plan until Source 2 SDK becomes available to the general public.</p>
        </div>
      </div>
      <div className="block">
        <div className="block__header"><i className="fa fa-briefcase"></i> Projects</div>
        <div className="block__content">
          <ProgrammerProjects />
        </div>
      </div>
      <div className="block">
        <div className="block__header"><i className="fa fa-code"></i> Languages</div>
        <div className="block__content">
          <ProgrammerLanguages />
        </div>
      </div>
      <div className="block block--information">
        <div className="block__content block__content--centered">
          <a href="https://github.com/Meow" className="logo_link"><i className="fab fa-github"></i></a>
        </div>
      </div>
  </div>;
}

export default ProgrammerPage;
