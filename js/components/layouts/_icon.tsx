interface IconProps {
  name: string;
}

function Icon(props: IconProps) {
  return <i className={`fa ${props.name}`}></i>;
}

export default Icon;
