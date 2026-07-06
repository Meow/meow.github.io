import SkillLevel from "./_skill_level";

function ProgrammerTech() {
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
          <td>git</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--advanced">
          <td>Unity</td>
          <td>
            <SkillLevel level="advanced" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>Unreal Engine 5</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>Blender</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>nginx</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--advanced">
          <td>Caddy</td>
          <td>
            <SkillLevel level="advanced" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>NodeJS</td>
          <td>
            <SkillLevel level="expert" />
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
        <tr className="language--intermediate">
          <td>Helm</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>ArgoCD</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>Infisical</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
        <tr className="language--advanced">
          <td>Cloudflare</td>
          <td>
            <SkillLevel level="advanced" />
          </td>
        </tr>
        <tr className="language--expert">
          <td>Wireguard</td>
          <td>
            <SkillLevel level="expert" />
          </td>
        </tr>
        <tr className="language--intermediate">
          <td>Proxmox</td>
          <td>
            <SkillLevel level="intermediate" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProgrammerTech;
