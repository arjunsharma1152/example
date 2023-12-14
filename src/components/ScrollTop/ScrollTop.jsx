import React, { useState, useEffect } from 'react';
import './ScrollTop.scss';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            ^
        </button>
    );
};

export default ScrollToTopButton;
