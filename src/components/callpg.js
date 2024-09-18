import React, { useState, useEffect } from 'react';

const Callpg = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // состояние для открытия/закрытия меню

  // Эффект для отслеживания ширины экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Проверяем размер экрана при монтировании компонента
    handleResize();

    // Добавляем слушатель события изменения размеров окна
    window.addEventListener('resize', handleResize);

    // Очищаем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // переключаем состояние меню
  };

  return (
    <div>
      {/* Если экран меньше 600px, кнопка работает как ссылка для звонка */}
      {isMobile ? (
        <a href="tel:+123456789" style={styles.link}>
          Позвонить: +1 (234) 567-89
        </a>
      ) : (
        // Если экран больше 600px, кнопка открывает меню
        <>
          <button onClick={toggleMenu} style={styles.button}>
            {menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          </button>
          {menuOpen && (
<div className='pgd'>

</div>

          )}
        </>
      )}
    </div>
  );
};
export default Callpg;
