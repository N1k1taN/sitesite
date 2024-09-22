import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../about.css";
import Arrow from "../icons/arrow-left-solid.svg"
import vlk from "../icons/vidstr.jpg"
import OpenMenuButton from "./callpage";
import Callpg from "./callpg";

function Vidstrochka() {
  return (
    <div>
<Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h2>Відстрочка від мобілізації</h2>
        <img src={vlk}></img>
<h3>Відстрочка від військової служби є правом особи, яка повинна його використати за наявністю законних підстав, зокрема:</h3>
<p>-За сімейними обставинами </p>
<p>-Наявністю інвалідності</p>
<p>-Навчання у вищому закладі </p>
<p>Ні для кого не секрет, що ТЦК та СП не завжди обʼєктивно оцінює законні підстави для надання відстрочки та намагається мобілізувати військовозобовʼязаного, навіть який подав заяву для отримання відстрочки.
Наша команда має досвід підходу до даного питання та його вирішення навіть у кризових ситуаціях.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Vidstrochka;