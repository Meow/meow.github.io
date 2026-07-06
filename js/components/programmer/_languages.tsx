import SkillLevel from "./_skill_level";

function ProgrammerLanguages() {
  return (
    <table className="projects">
      <thead>
        <tr>
          <th></th>
          <th>
            <i className="fa fa-clock"></i> Started
          </th>
          <th>
            <i className="fa fa-dumbbell"></i> Skill Level
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="language--expert">
          <td>Lua</td>
          <td>2011</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>HTML</td>
          <td>2012</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>CSS (plain)</td>
          <td>2012</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>Javascript</td>
          <td>2012</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>PHP</td>
          <td>2013</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
        <tr className="language--advanced">
          <td>C / C++</td>
          <td>2014</td>
          <td>
            <SkillLevel level="advanced" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>SCSS (SASS)</td>
          <td>2015</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--advanced">
          <td>SQL (MySQL, SQLite)</td>
          <td>2016</td>
          <td>
            <SkillLevel level="advanced" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>SQL (PostgreSQL)</td>
          <td>2016</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>Ruby</td>
          <td>2017</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>Rust</td>
          <td>2019</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
        <tr className="language--advanced">
          <td>Elixir</td>
          <td>2020</td>
          <td>
            <SkillLevel level="advanced" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>Typescript</td>
          <td>2023</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>CSS (PostCSS)</td>
          <td>2024</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProgrammerLanguages;
