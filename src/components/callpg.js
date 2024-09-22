import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import call from"../icons/call.png";


const Callpg = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Эффект для отслеживания ширины экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize(); // Проверяем размер экрана при монтировании компонента
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Функция для переключения меню на десктопе
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Функция отправки EmailJS только с номером телефона
  const onSubmit = (data) => {
    const { phone } = data;

    emailjs.send(
      'service_6y4cf6d',   
      'template_j9ce8db',  
      { phone_number: phone },
      'Oa2baTXpg0UruiePo'       
    )
    .then(response => {
      console.log('SUCCESS!', response.status, response.text);
      reset(); // Сброс формы после отправки
    })
    .catch(err => {
      console.log('FAILED...', err);
    });
  };

  return (
    <div>
      {/* Если экран меньше 600px, показываем ссылку для звонка */}
      {isMobile ? (
        <a className='buttonfast' href="tel:+380937452557">
          <img alt="logo"src={call}></img>
        </a>
      ) : (
        <>
        <button className='buttonfast' onClick={toggleMenu}>
          <img alt="phone"src={call}></img>
          </button>
          {menuOpen && (
            <div className='pgd'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Отправьте нам номер телефона</h2>
                  <label htmlFor="phone">Номер телефону</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', { 
                      required: 'Номер телефона обязателен', 
                      pattern: { 
                        value: /^[+]?[0-9]{10,15}$/,
                        message: 'Введите корректный номер телефона' 
                      }
                    })}
                  />
                  {errors.phone && <p>{errors.phone.message}</p>}
                <button className="senderbutt2" type="submit">Замовити</button>
                <p>Або ви можете зателефонувати нам самостійно:+380937452557</p>
                </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Callpg;
