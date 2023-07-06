import { Link } from "react-router-dom";
import style from "./style.module.css";
const Header = () => {
  return (
    <div className={style.headerStyle}>
      <Link to="/">Домой</Link>
      <Link to="/autorize">Авторизация</Link>
      <Link to="/register">Регистрация</Link>
    </div>
  );
};
export default Header;
