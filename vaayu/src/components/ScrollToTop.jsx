import React, { useState, useEffect } from 'react';

function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-btn">
          <i className="fa-solid fa-circle-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
