import SkillLevel from "./_skill_level";

function ProgrammerSkills() {
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
          <td>Linux (development)</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>Linux (systems administration)</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--advanced">
          <td>Windows (development)</td>
          <td>
            <SkillLevel level="advanced" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>Windows (systems administration)</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
        <tr className="language--advanced">
          <td>macOS (development)</td>
          <td>
            <SkillLevel level="advanced" />
          </td>
        </tr>
        <tr className="language--beginner">
          <td>iOS (development)</td>
          <td>
            <SkillLevel level="beginner" />
          </td>
        </tr>
        <tr className="language--beginner">
          <td>Android (development)</td>
          <td>
            <SkillLevel level="beginner" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>Docker</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>Kubernetes</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
        <tr className="language--beginner">
          <td>Machine Learning / Neural Networks</td>
          <td>
            <SkillLevel level="beginner" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProgrammerSkills;
