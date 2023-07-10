import { useState } from "react";
import style from "./style.module.css";
const Autorize = () => {
  const [autorizeForm, setAutorizeForm] = useState({
    login: "",
    password: "",
  });
  function formSet(e) {
    setAutorizeForm({ ...autorizeForm, [e.target.name]: e.target.value });
  }
  return (
    <div className={style.autorizeFormStyle}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => formSet(e)}
          name="login"
          placeholder="Логинasdasdasd"
        />
        <input
          onChange={(e) => formSet(e)}
          name="password"
          placeholder="Пароль"
        />
        <button
          onClick={() => {
            console.log(autorizeForm);
          }}
          type="submit"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Autorize;
