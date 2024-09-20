import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../about.css";
import Arrow from "../icons/arrow-left-solid.svg"
import vlk from "../icons/ubd.jpg"
import OpenMenuButton from "./callpage";


function Statusubd() {
  return (
    <div>
      <div className="practice">
        <Link to="/"><img src={Arrow}></img></Link>
        <div>Практика</div>
      </div>
      <div className="alde">
      <div className="about">
        <h2>Отримання статусу УБД</h2>
        <img src={vlk}></img>
        <h3>Зокрема підставами отримання статусу учасника бойових дій є:</h3>
<p>-Перебування у зоні бойових дій </p>
<p>-Отримання поранення під час захисту Батьківщини</p>
<p>Статус учасника бойових дій дає змогу отримати соціальні пільги військовослужбовцям, навіть тим, які звільненні в запас та членам його сімей.
Наша команда, вже допомогла не одному десятку з даного питання.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Statusubd;
