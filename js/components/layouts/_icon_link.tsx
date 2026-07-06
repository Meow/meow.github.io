interface IconLinkProps {
  href?: string;
  icon: string;
  name: string;
}

function IconLink(props: IconLinkProps) {
  return (
    <a href={props.href} className="icon_link">
      <i className={`fa ${props.icon}`}></i> {props.name}
    </a>
  );
}

export default IconLink;
