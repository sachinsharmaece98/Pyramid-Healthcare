import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './ScrollTop.scss';

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {visible && (
                <Button
                    variant="dark"
                    className="scroll-button"
                    onClick={scrollToTop}
                >
                    <i className="bi bi-arrow-up"></i>
                </Button>
            )}
        </div>
    );
};

export default ScrollToTop;
