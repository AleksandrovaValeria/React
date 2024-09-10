export default function ProjectCar(props) {
  const {image, title} = props;
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={`./img/projects/${image}`} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
}
