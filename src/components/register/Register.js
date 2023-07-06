import { useState } from "react";
import style from "./style.module.css";
const Register = () => {
  const [registerData, setRegisterData] = useState({
    login: "",
    email: "",
    age: "",
    password: "",
  });
  function registerDataHandler(e) {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }
  return (
    <div className={style.registerBlockForm}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => {
            registerDataHandler(e);
          }}
          name="login"
          placeholder="Логин"
        />
        <input
          onChange={(e) => {
            registerDataHandler(e);
          }}
          name="email"
          placeholder="Почта"
        />
        <input
          onChange={(e) => {
            registerDataHandler(e);
          }}
          name="age"
          placeholder="Возраст"
        />
        <input
          onChange={(e) => {
            registerDataHandler(e);
          }}
          name="password"
          type="password"
          placeholder="Пароль"
        />
        <button
          type="submit"
          onClick={() => {
            console.log(registerData);
          }}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Register;
