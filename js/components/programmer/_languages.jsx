import React from "react";

function ProgrammerLanguages(_props) {
  return <table className="projects">
    <tr>
      <th><i class="fa fa-code"></i> Language</th>
      <th><i class="fa fa-clock"></i> Started</th>
      <th><i class="fa fa-dumbbell"></i> Proficiency</th>
    </tr>
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
      <td>SQL (MySQL, PostgreSQL, SQLite)</td>
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
  </table>;
}

export default ProgrammerLanguages;
