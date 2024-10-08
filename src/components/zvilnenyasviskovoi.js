import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../about.css";
import Arrow from "../icons/arrow-left-solid.svg"
import vlk from "../icons/zvilnenya.jpg"
import OpenMenuButton from "./callpage";
import Callpg from "./callpg";
import { useEffect } from "react";

function Zvilnenyasviskovoi() {
  useEffect(() => {
    document.title = "Звільнення з військової служби";
  })
  return (
    <div>
<Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h1>Звільнення з військової служби</h1>
        <img src={vlk}></img>
<h3>Рапорт на звільнення з військової служби подається за наявністю наступних підстав:</h3>
<p>-За сімейними обставинами </p>
<p>-За станом здоров’я </p>
<p>Існують непоодинокі випадки, коли рапорт на звільнення з військової служби не розглядається, або військовий отримує незаконну відмову. </p>
<p>Наша команда має великий досвід супроводу звільнення з військової служби, навіть у дійсно важких ситуаціях.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Zvilnenyasviskovoi;
