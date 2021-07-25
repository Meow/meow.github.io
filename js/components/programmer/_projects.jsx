import React from "react";
import ProgrammerProject from "./_project";

function ProgrammerProjects(_props) {
  return <table className="projects">
    <tbody>
      <ProgrammerProject
        name="Flux"
        time="2016-2019"
        icon="fa-user"
        type="Personal"
        info="Garry's Mod Gamemode (Lua)"
        desc="Flux was my attempt at making my own framework to build games upon. Sort of like a game engine, but within Garry's Mod."
        link="https://github.com/TeslaCloud/flux-ce"
      />
      <ProgrammerProject
        name="Derpibooru"
        time="2017-present"
        icon="fa-users"
        type="Team"
        info="Website (Ruby / Elixir)"
        desc="An imageboard site focused on My Little Pony cartoon. Hired as a developer and assuming the lead developer role in 2020, performing duties of a system administrator."
        link="https://github.com/derpibooru/philomena"
      />
      <ProgrammerProject
        name="Timetable Display"
        time="2019"
        icon="fa-briefcase"
        type="Work"
        info="Website (Ruby)"
        desc="A web app to display school timetable changes, as well as allow teachers to view more detailed subject-dependent timetables, and access internal documents."
      />
      <ProgrammerProject
        name="Furbooru"
        time="2020-present"
        icon="fa-users"
        type="Team"
        info="Website (Elixir)"
        desc="An imageboard running the same software as Derpibooru, but focused on the Furry fandom. Performing duties of the head admin, lead developer and sysadmin."
        link="https://github.com/furbooru/philomena"
      />
    </tbody>
  </table>;
}

export default ProgrammerProjects;
