import SkillLevel from "./_skill_level";

function ProgrammerFrameworks() {
  return (
    <table className="projects">
      <thead>
        <tr>
          <th></th>
          <th>
            <i className="fa fa-dumbbell"></i> Skill Level
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="language--expert">
          <td>Ruby on Rails</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--advanced">
          <td>Phoenix (Elixir)</td>
          <td>
            <SkillLevel level="advanced" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>Laravel</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
        <tr className="language--advanced">
          <td>React</td>
          <td>
            <SkillLevel level="advanced" />
          </td>
        </tr>
        <tr className="language--advanced">
          <td>VueJS</td>
          <td>
            <SkillLevel level="advanced" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>Bevy (Rust)</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProgrammerFrameworks;
