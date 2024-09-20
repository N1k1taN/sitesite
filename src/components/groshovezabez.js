import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../about.css";
import Arrow from "../icons/arrow-left-solid.svg"
import vlk from "../icons/grosh.jpg"
import OpenMenuButton from "./callpage";

function Groshovezabez() {
  return (
    <div>
      <div className="practice">
        <Link to="/"><img src={Arrow}></img></Link>
        <div>Практика</div>
      </div>
      <div className="alde">
      <div className="about">
        <h2>Грошове забезпечення та додаткова винагорода</h2>
        <img src={vlk}></img>
        <p>Відповідно до чинного законодавства України, 
            військовослужбовці повинні мати достатній рівень грошового забезпечення, а у разі ведення військового стану мають право на додаткову винагороду за наступних пдстав: </p>
<p>-Перебування в зоні бойових дій (Бойові) </p>
<p>-Стаціонарне лікування внаслідок поранення у лікувальних закладах</p>
<p>-Не вірне застосування законодавства військово - лікарською комісією </p>
<p>-Перебування у відпустці за станом здоров’я</p>
<p>Нажаль не завжди фінансова частина нараховує всі відповідні виплати.
Наша команда має успішні кейси по вирішенню зазначеного питання, навіть у досудовому порядку</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Groshovezabez;
