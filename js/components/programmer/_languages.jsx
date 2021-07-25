import React from "react";

function ProgrammerLanguages(_props) {
  return <table className="projects">
    <thead>
      <tr>
        <th><i className="fa fa-code"></i> Language</th>
        <th><i className="fa fa-clock"></i> Started</th>
        <th><i className="fa fa-dumbbell"></i> Skill</th>
      </tr>
    </thead>
    <tbody>
      <tr className="language--expert">
        <td>Lua</td>
        <td>2011</td>
        <td>Expert</td>
      </tr>
      <tr className="language--expert">
        <td>HTML + CSS</td>
        <td>2012</td>
        <td>Expert</td>
      </tr>
      <tr className="language--expert">
        <td>Javascript</td>
        <td>2012</td>
        <td>Expert</td>
      </tr>
      <tr className="language--intermediate">
        <td>PHP</td>
        <td>2013</td>
        <td>Intermediate</td>
      </tr>
      <tr className="language--advanced">
        <td>C / C++</td>
        <td>2014</td>
        <td>Advanced</td>
      </tr>
      <tr className="language--expert">
        <td>SCSS (SASS)</td>
        <td>2015</td>
        <td>Expert</td>
      </tr>
      <tr className="language--advanced">
        <td>SQL (PostgreSQL, MySQL, SQLite)</td>
        <td>2016</td>
        <td>Advanced</td>
      </tr>
      <tr className="language--expert">
        <td>Ruby</td>
        <td>2017</td>
        <td>Expert</td>
      </tr>
      <tr className="language--beginner">
        <td>Rust</td>
        <td>2019</td>
        <td>Beginner</td>
      </tr>
      <tr className="language--intermediate">
        <td>Elixir</td>
        <td>2020</td>
        <td>Intermediate</td>
      </tr>
    </tbody>
  </table>;
}

export default ProgrammerLanguages;
