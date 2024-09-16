import React, { useState, useEffect, useRef } from 'react';

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
          <li className="dad"><a href="#2" className="linked" onClick={toggleDropdown}>Послуги</a></li>
          <li className="dad"><a href="#3" className="linked" onClick={toggleDropdown}>Про нас</a></li>
          <li className="dad"><a href="#6" className="linked" onClick={toggleDropdown}>Кейси</a></li>
          <li className="dad"><a href="#5" className="linked" onClick={toggleDropdown}>Контакти</a></li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
