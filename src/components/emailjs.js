import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = ({ handleBackgroundClick, callPageRef }) => {
  const form = useRef();
  const [phoneError, setPhoneError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Получаем введённый номер телефона
    const phoneNumber = e.target['phone-number'].value;

    // Проверяем, соответствует ли номер формату украинских номеров без кода страны
    const phoneRegex = /^[0-9]{9}$/; // Регулярное выражение для проверки 9 цифр

    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError(true); // Устанавливаем ошибку, если формат неверный
      return; // Прекращаем отправку формы
    }

    setPhoneError(false); // Сбрасываем ошибку, если номер валиден

    // Отправка формы через EmailJS
    emailjs.sendForm('service_6y4cf6d', 'template_j9ce8db', form.current, 'Oa2baTXpg0UruiePo')
      .then((result) => {
        console.log('Email успешно отправлен!', result.text);
        alert('Ваше сообщение было отправлено!');
      }, (error) => {
        console.error('Ошибка при отправке:', error.text);
        alert('Ошибка при отправке, попробуйте еще раз.');
      });

    // Очистка формы после отправки (опционально)
    e.target.reset();
  };

  return (
    <div 
      className="backgroundpage" 
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}
      onClick={handleBackgroundClick} 
    >
      <div className="callpage" ref={callPageRef}>
        <form ref={form} onSubmit={sendEmail}>
          <h2>Замовити консультацію адвоката</h2>
          <p>Введіть ваш номер телефону і ми зв'яжемося з Вами протягом 5 хвилин!</p>
          
          <label htmlFor="phone-number">Номер телефону</label>
          <input 
            type="tel" 
            name="phone-number" 
            id="phone-number" 
            required 
            onChange={() => setPhoneError(false)} // Сбрасываем ошибку при изменении
          />
          
          {phoneError && <p style={{ color: 'red' }}>Неправильний формат номера</p>}

          <button className="senderbutt" type="submit">Замовити</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;