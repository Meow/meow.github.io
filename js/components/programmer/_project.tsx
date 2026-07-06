import IconLink from "components/layouts/_icon_link";
import Icon from "components/layouts/_icon";

interface ProgrammerProjectProps {
  name: string;
  time: string;
  icon: string;
  type: string;
  info: string;
  desc: string;
  link?: string;
}

function ProgrammerProject(props: ProgrammerProjectProps) {
  return (
    <tr>
      <td>{props.name}</td>
      <td className="nowrap hidden--mobile">
        <Icon name={props.icon} /> {props.type}
      </td>
      <td className="nowrap hidden--phone">
        <Icon name="fa-clock" /> {props.time}
      </td>
      <td className="nowrap hidden--phone">
        <Icon name="fa-info-circle" /> {props.info}
      </td>
      <td>{props.desc}</td>
      <td className={"nowrap" + (props.link ? "" : " hidden")}>
        <IconLink href={props.link} icon="fab fa-github" name="GitHub" />
      </td>
      <td className={props.link ? "hidden" : ""}>N/A</td>
    </tr>
  );
}

export default ProgrammerProject;
