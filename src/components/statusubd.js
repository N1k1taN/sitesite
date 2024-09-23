import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../about.css";
import Arrow from "../icons/arrow-left-solid.svg"
import vlk from "../icons/ubd.jpg"
import OpenMenuButton from "./callpage";
import Callpg from "./callpg";


function Statusubd() {
  return (
    <div>
<Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h2>Отримання статусу УБД</h2>
        <img src={vlk}></img>
        <h3>Зокрема підставами отримання статусу учасника бойових дій є:</h3>
<p>-Перебування у зоні бойових дій </p>
<p>-Отримання поранення під час захисту Батьківщини</p>
<p>Статус учасника бойових дій дає змогу отримати соціальні пільги військовослужбовцям, навіть тим, які звільненні в запас та членам його сімей.</p>
<p>Наша команда, вже допомогла не одному десятку військовослужбовців з даного питання.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Statusubd;
