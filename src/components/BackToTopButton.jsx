import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing the arrow icon

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check the scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show the button if scrolled down 300px
    } else {
      setIsVisible(false); // Hide the button if at the top
    }
  };

  // Scroll to the top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Adding scroll event listener when component is mounted
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-white border-2 border-blue-500 text-blue-500 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="Back to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
