import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../about.css";
import Arrow from "../icons/arrow-left-solid.svg"
import vlk from "../icons/vislav.jpg"
import OpenMenuButton from "./callpage";
import Callpg from "./callpg";
import Dropdown from "./dropdown";
import { useEffect } from "react";

function Oskargenyavlk() {
  useEffect(() => {
    document.title = "Оскарження ВЛК";
  })
  return (
    <div>
        <Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h1>Оскарження рішення ВЛК</h1>
        <img src={vlk}></img>
        <h3>Рішення військо - лікарської комісії підлягає оскарженню в наступних випадках: </h3>
<p>-Необ'єктивність лікарської комісії </p>
<p>-Порушення процедури проведення ВЛК</p>
<p>-Не вірне застосування законодавства військово - лікарською комісією </p>
<p>-Незаконне рішення ВЛК</p>
<p>-Помилковий причинний звʼязок захворювання (травми) </p>
<p>-Не вірно вказана ступень тяжкості поранення</p>
<p>Не рідко військово - лікарська комісія упереджено та не обʼєктивно проводить огляд військового або військовозобовʼязаного, внаслідок чого приймає незаконне рішення.</p>
<p>Тому, в ході оскарження рішення ВЛК наша команда фахівців, яку очолює адвокат з медичного права, залучає лікарів, для написання максимально якісної заяви на перегляд рішення ВЛК.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Oskargenyavlk;
