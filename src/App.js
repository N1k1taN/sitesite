import logo from"./icons/Nlaw.png"
import slide1 from "./icons/res/res1.webp"
import slide2 from "./icons/res/res2.webp"
import slide3 from "./icons/res/res3.webp"
import { Navigation, Pagination, Zoom , } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Accordions from "./components/accordion"
import 'accordion-js/dist/accordion.min.css';
import './App.css';
import OpenMenuButton from "./components/callpage"
import viber from './icons/messengers/Viber_icon_white.svg'
import signal from './icons/messengers/Signal-Logo-Ultramarine.svg'
import teleg from "./icons/messengers/teleg.svg"
import whatsapp from "./icons/messengers/Digital_Glyph_White.svg"
import Dropdown from "./components/dropdown"
import face from "./icons/socials/facebook.svg"
import tik from "./icons/socials/./tiktok.svg"
import inst from "./icons/socials/instagram.svg"
import youtube from "./icons/socials/youtube-123.svg"




function App() {
  return (
<div>

    <div className="navbar">
<a href="#1" className="logoname">
    <img src={logo} alt="logo"></img>
    <div className="name">COMPANY</div>
</a>
<a href="#2" className="linked">ПОСЛУГИ</a>
<a href="#3" className="linked">ПРО НАС</a>
<a href="#6" className="linked">КЕЙСИ</a>
<a href="#5" className="linked">КОНТАКТИ</a>
<Dropdown></Dropdown>
    </div>
<div className="mainpage">
    <div className="info" id="1">
    <h1>ВІЙСЬКОВИЙ АДВОКАТ</h1>
    <h2>ОДНІ З НАЙКРАЩИХ У ВИРІШЕННІ ЮРИДИЧНИХ ПИТАНЬ З ВІЙСЬКОВОГО ПРАВА</h2>
    <h2 >ПРАЦЮЄМО ПО ВСІЙ УКРАЇНІ</h2>
    <OpenMenuButton></OpenMenuButton>
</div>
</div>
<div className="main">
    <div className="help" id="2" >

<h2>ПРОФЕСІЙНО НАДАЄМО ПОСЛУГИ:</h2>

<Accordions></Accordions>
</div>

<div className="consulting " id="3">
<h2>ПРО НАШУ КОМПАНІЮ</h2>
<h3 className="bods"><img src={logo}></img><span>COMPANY</span></h3>
<p>Наше гасло «ЕКСПЕРТНІСТЬ, УСПІХ, ПРОФЕСІОНАЛІЗМ»</p>
<p>NLAW Company, являється юридичною компанією заснованою у 2024 році в Україні, керуючим партнером Науменко Ярославом Олексійовичем.
<p>Так, ми досить молоді, але й досить амбіціозні.</p>
<p>Ми не просто бажаємо надати послугу нашому клієнту, а прагнемо надати той результат, який він прагне, та навіть більше, застосовуючи різноманітні рішення.</p>
<p>Наша команда складається з досвідчених адвокатів та юристів, яки мають різноманітний досвід роботи у тому числі в державних установах чи правоохоронних органів.</p>
Тому при вирішенні задач, ми підходимо з різних сторін, для досягнення максимального результату у
 штаті нашої компанії, наявні спеціалісти з практик військового, цивільного, сімейного, спадкового, господарського, адміністративного та кримінального права. </p>

</div>
<div className="documents" id="4">
    <h2>ЗАВАНТАЖИТИ ЗРАЗКИ ДОКУМЕНТІВ</h2>
<div className="doc">
        <a className="doico" href="/documentsdown/Акт про встановлення факту здійснення особою догляду (постійного догляду).docx" download="Акт про встановлення факту здійснення особою догляду (постійного догляду).docx"></a><h3>Акт про встановлення факту здійснення особою догляду (постійного догляду)</h3>
</div>
<div className="doc">
    <a className="doico" href="/documentsdown/Заява про призначення та виплати одноразової грошової допомоги у разі загибелі (смерті).docx" download="Заява про призначення та виплати одноразової грошової допомоги у разі загибелі (смерті).docx"></a><h3>Заява про призначення та виплати одноразової грошової допомоги у разі загибелі (смерті) військовослужбовців Збройних Сил України в період дії воєнного стану</h3>
</div>
<div className="doc">
    <a className="doico" href="/documentsdown/Довідка про здобувача освіти за даними єдиної державної електронної бази.docx" download="Довідка про здобувача освіти за даними єдиної державної електронної бази.docx"></a><h3>Довідка про здобувача освіти за даними єдиної державної електронної бази з питань освіти</h3>
</div>
<div className="doc">
    <a className="doico" href="/documentsdown/Контракт про проходження громадянами України.doc" download="Контракт про проходження громадянами України.doc"></a><h3>Контракт про проходження громадянами України військової служби у Збройних Силах України на посадах осіб</h3>
</div>
<div className="doc">
    <a className="doico" href="/documentsdown/Заява на отримання відстрочки.docx" download="Заява на отримання відстрочки.docx"></a><h3>Заява на отримання відстрочки</h3>
</div>
<div className="doc">
    <a className="doico" href="/documentsdown/Довідка про обставини травми (поранення, контузії, каліцтва).docx" download="Довідка про обставини травми (поранення, контузії, каліцтва).docx"></a><h3>Довідка про обставини травми (поранення, контузії, каліцтва)</h3>
</div>
<div className="doc">
    <a className="doico" href="/documentsdown/Заява про надання статусу учасника бойових дій.docx" download="Заява про надання статусу учасника бойових дій.docx"></a><h3>Заява про надання статусу учасника бойових дій</h3>
</div>
<div className="doc">
    <a className="doico" href="/documentsdown/Довідка військово-лікарської комісії.docx" download="Довідка військово-лікарської комісії.docx"></a><h3>Довідка військово-лікарської комісії</h3>
</div>
  

</div>
<section id="6">
    <h2> НАШІ РЕЗУЛЬТАТИ:</h2>
    <Swiper 
          modules={[Navigation, Pagination,Zoom]}
          centeredSlides={true} 
          spaceBetween={5}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          zoom={true}
          loop={true}
          breakpoints= {{
            // Когда ширина экрана меньше или равна 768px
            1100: {
              slidesPerView: 3,}}}
    >
      <SwiperSlide style={{ margin: 0 }}><div className="swiper-zoom-container">
          <img src={slide1} alt="Slide 1" />
        </div>
</SwiperSlide>
<SwiperSlide><div className="swiper-zoom-container">
          <img src={slide2} alt="Slide 2" />
        </div>
</SwiperSlide>
<SwiperSlide><div className="swiper-zoom-container">
          <img src={slide3} alt="Slide 3" />
        </div>
</SwiperSlide>
<SwiperSlide><div className="swiper-zoom-container">
          <img src={slide1} alt="Slide 4" />
        </div>
</SwiperSlide>
    </Swiper>

</section>

<div className="contacts">
    <div className="contactinfo">
        <div>
            <div>
            <p>АДРЕСА</p>
            <p>М.КИЇВ</p>
            </div>
            <div>
            <p>ГРАФІК</p>
            <p>10:00 по 19:00 ПН-ПТ</p>
            <p>ВИХІДНІ ПО ДОМОВЛЕНОСТІ</p>
            </div>
        </div>
        <div className ="giv">
        <div>
            <p>ТЕЛЕФОН</p>
            <p>+380937452557</p>
            </div>
            <div>
            <p>EMAIL</p>
            <p>NLAWCOMPANY@GMAIL.COM</p>
            </div>
        </div>
        <div className="socials">
<p>МИ В СОЦМЕРЕЖАХ</p>
<div className="social">
<a><img src={face} alt="facebook"></img></a>
<a><img src={inst} alt="instagram"></img></a>
<a><img src={tik} alt="tiktok"></img></a>
<a><img src={youtube} alt="youtube"></img></a>
</div>
        </div>
    </div>
    <div className="messengers" id="5">
        <a href="viber://chat?number=%2B380937452557"><img src={viber} alt="viber"></img></a>
        <a href="https://signal.me/#eu/F8axajmr2fkdM4fu5Vl8yFJwj1W31Us0SMwc0h0axGvNA8Svn0NL-JkxLsnJBnCC"><img src={signal} alt="signal"></img></a>
        <a href="https://t.me/Nlaw_company"><img src={teleg} alt="telegram"></img></a>
        <a href="https://api.whatsapp.com/message/X3PEXBN6BKQHF1?autoload=1&app_absent=0"><img src={whatsapp} alt="whatsapp"></img></a>
    </div>
</div>
<div className="allrights">
    <p>© Усі права захищено.</p>
    <p>2024</p>
</div>
</div>
</div>)}

export default App