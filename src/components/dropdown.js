import React, { useState, useEffect, useRef } from 'react';
import viber from '../icons/messengers/Viber_icon_white.svg'
import signal from '../icons/messengers/Signal-Logo-Ultramarine.svg'
import teleg from "../icons/messengers/teleg.svg"
import whatsapp from "../icons/messengers/Digital_Glyph_White.svg"
import { Link } from 'react-router-dom';
const Dropdown = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1259);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Обновляем состояние ширины экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1259);
    };

    window.addEventListener('resize', handleResize);

    // Очистка обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Обработчик кликов вне dropdown для его закрытия
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Закрываем dropdown, если клик вне области
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); // Для мобильных устройств

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Функция для открытия/закрытия dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Если ширина экрана больше 1259px, ничего не рендерим
  if (!isMobile) {
    return null;
  }

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {isDropdownOpen ? '' : ''}
      </button>

      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li className="dad"><Link to="/#help" className="linked" onClick={toggleDropdown}>Послуги</Link></li>
          <li className="dad"><Link to="/#about" className="linked" onClick={toggleDropdown}>Про нас</Link></li>
          <li className="dad"><Link to="/#vidguk" className="linked" onClick={toggleDropdown}>Відгуки</Link></li>
          <li className="dad"><Link to="/#case" className="linked" onClick={toggleDropdown}>Кейси</Link></li>
          <li className="dad"><Link to="/#contacts" className="linked" onClick={toggleDropdown}>Контакти</Link></li>
          <li className="dad">Тел:+380937452557</li>
          <li className="dad"><a className='socials-dropdown' href='viber://chat?number=%2B380937452557' target="_blank" rel="noopener noreferrer"><img src={viber}></img></a><a className='socials-dropdown' href='https://signal.me/#eu/F8axajmr2fkdM4fu5Vl8yFJwj1W31Us0SMwc0h0axGvNA8Svn0NL-JkxLsnJBnCC' target="_blank" rel="noopener noreferrer"><img src={signal}></img></a><a className='socials-dropdown' href='https://t.me/Nlaw_company' target="_blank" rel="noopener noreferrer"><img src={teleg}></img></a><a className='socials-dropdown' href='https://wa.me/message/X3PEXBN6BKQHF1' target="_blank" rel="noopener noreferrer"><img src={whatsapp}></img></a></li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
