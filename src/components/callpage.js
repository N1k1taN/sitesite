import React, { useState, useRef, useEffect } from 'react'; 
import '../App.css'; // Import any necessary styles
import call from"../icons/call.png";
import ContactForm from "./emailjs";

const OpenMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const callPageRef = useRef(null); // Reference to the call page
  const timerRef = useRef(null); // Timer reference

  // Function to open the contact form
  const openMenu = () => {
    setIsMenuOpen(true);
    clearTimeout(timerRef.current); 
  };

  useEffect(() => {
    // Set a 20-second timer to open the form automatically
    timerRef.current = setTimeout(() => {
      setIsMenuOpen(true);
    }, 1120000);

    return () => clearTimeout(timerRef.current);
  }, []);

  const handleBackgroundClick = (event) => {
    if (callPageRef.current && !callPageRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    } else {
    }
  };

  return (
    <div>
      {/* Button to manually open the contact form */}
      <button className="butcall" onClick={openMenu}>
        <img className="callpng" src={call} alt="call"></img>Замовити дзвінок
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

