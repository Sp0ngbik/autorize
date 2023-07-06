import style from "./style.module.css";

const WelcomePage = () => {
  return (
    <h1 className={style.greetMessage}>
      На данной странице вы сможете пройти нашу кастомную авторизацию -
      регистрацию
    </h1>
  );
};

export default WelcomePage;
