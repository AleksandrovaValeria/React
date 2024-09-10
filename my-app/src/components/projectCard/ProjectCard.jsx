import { NavLink } from "react-router-dom";

export default function ProjectCar(props) {
  const { image, title, index } = props;
  return (
    <li className="project">
      <NavLink to={`/project/${index}`}>
        <img
          src={`/img/projects/${image}`}
          alt="Project img"
          className="project__img"
        />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
}
