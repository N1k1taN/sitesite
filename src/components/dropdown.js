import React, { useState, useEffect } from 'react';

const Dropdown = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  // Функция для открытия/закрытия dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Если ширина экрана больше 900px, ничего не рендерим
  if (!isMobile) {
    return null;
  }

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {isDropdownOpen ? '' : ''}
      </button>

      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li className="dad"><a href="#2" class="linked" onClick={toggleDropdown}>Послуги</a></li>
          <li className="dad"><a href="#3" class="linked" onClick={toggleDropdown}>Про нас</a></li>
          <li className="dad"><a href="#6" class="linked" onClick={toggleDropdown}>Кейси</a></li>
          <li className="dad"><a href="#5" class="linked" onClick={toggleDropdown}>Контакти</a></li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

