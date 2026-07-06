import ProgrammerProject from "./_project";

function ProgrammerProjects() {
  return (
    <table className="projects">
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
          desc="An imageboard site focused on My Little Pony cartoon. Hired as a DevOps Engineer in 2017 and assumed the lead developer role in 2020."
          link="https://github.com/derpibooru/philomena"
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
        <ProgrammerProject
          name="Space Chaos"
          time="2022"
          icon="fa-graduation-cap"
          type="University"
          info="GameMaker Language"
          desc="A simple 2D sidescroller game where a space ship shoots innocent creatures. Or are they so innocent?"
          link="https://github.com/Meow/spacegame"
        />
        <ProgrammerProject
          name="Assemblia"
          time="2022"
          icon="fa-graduation-cap"
          type="University"
          info="C, C++, Lua"
          desc="A 2D game written from scratch in C (engine) and C++ (game logic) with Lua scripting. Uses Vulkan for rendering. Part of a university assignment."
          link="https://github.com/Meow/assemblia"
        />
        <ProgrammerProject
          name="Pathfinding"
          time="2022"
          icon="fa-graduation-cap"
          type="University"
          info="Rust"
          desc="A simple game written as exercise in implementing pathfinding and sorting algorithms in context of videogames, as well as an exercise in Rust programming. Uses the bevy engine."
          link="https://github.com/Meow/pathfinding"
        />
        <ProgrammerProject
          name="ML Chess"
          time="2023"
          icon="fa-graduation-cap"
          type="University"
          info="Python + PyTorch"
          desc="A chess engine that uses a homemade neural network based on Lichess public data to evaluate board positions and make decisions. Written as part of a university assignment."
          link="https://github.com/Meow/mlchess"
        />
        <ProgrammerProject
          name="POS System"
          time="2023-present"
          icon="fa-user"
          type="Personal"
          info="Ruby on Rails, Javascript, PostgreSQL"
          desc="A point-of-sale system for a convention art shop business, built with Ruby on Rails and PostgreSQL. Closed source for now."
        />
        <ProgrammerProject
          name="AsymmetricVR"
          time="2024"
          icon="fa-graduation-cap"
          type="University"
          info="Unreal Engine C++"
          desc="An attempt at creating a VR game project template for the university bachelor thesis. The game is a simple asymmetrical multiplayer game where one player is in VR and the other is on a PC."
          link="https://github.com/Meow/AsymmetricVR"
        />
      </tbody>
    </table>
  );
}

export default ProgrammerProjects;
