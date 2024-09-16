import React, { useState, useRef } from 'react';
import '../App.css'; // Import any necessary styles
import call from"../icons/call.png"
import ContactForm from "./emailjs"

const OpenMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const callPageRef = useRef(null); // Reference to the call page

  // Function to open the menu (set background and callpage visible)
  const openMenu = () => {
    console.log("Button clicked"); // Debugging to check if button is clicked
    setIsMenuOpen(true);
    console.log("isMenuOpen:", isMenuOpen); // Check state
  };

  // Function to close the menu if clicking outside the callpage
  const handleBackgroundClick = (event) => {
    console.log("Background clicked");
    if (callPageRef.current && !callPageRef.current.contains(event.target)) {
      console.log("Clicked outside callpage, closing menu");
      setIsMenuOpen(false);
    } else {
      console.log("Clicked inside callpage, menu stays open");
    }
  };

  return (
    <div>
      {/* Button to open the menu */}
      <button className="butcall" onClick={openMenu}>
      <img class="callpng" src={call}></img>Замовити дзвінок
      </button>

      {/* Background and Call Page (conditionally rendered) */}
      {isMenuOpen && (
            <ContactForm
            handleBackgroundClick={handleBackgroundClick}
            callPageRef={callPageRef}
          />
      )}
    </div>
  );
};

export default OpenMenuButton;




/* 
<div class="callpage">
<h2>Замовити консультацію адвоката</h2>
<p>Введіть ваш номер телефону
  і ми зв'яжемося з Вами протягом 5 хвилин!</p>
<p1>Номер телефону</p1>
<input type="text"></input>
<button class="senderbutt"> Замовити</button> */