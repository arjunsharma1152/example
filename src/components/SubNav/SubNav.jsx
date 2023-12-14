import { Link } from "react-router-dom";

const SubNav = ({ sublinks }) => {
  return (
    <ul className={`sublinks`}>
      {sublinks.map((el, idx) => (
        <li key={idx}>
          <Link to={el.to}>{el.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SubNav;
