// Footer.js

import React from "react";
import "./FotterStyle.css";

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <div className={`property-default ${className}`}>
            <div className="frame">
                <p className="text-wrapper">© 2023 All rights reserved</p>
                <div className="terms-of-service-pri">
                    Terms of Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy Policy
                </div>
            </div>
            <div className="div">
                <div className="links">
                    <div className="text-wrapper-2">Discover</div>
                    <div className="text-wrapper-3">About us</div>
                    <div className="text-wrapper-4">Explore</div>
                    <div className="text-wrapper-5">Books</div>
                </div>
                <div className="social">
                    <img className="facebook-black" alt="Facebook" src="" /> {/* Placeholder for Facebook icon */}
                    <img className="vimeo-black" alt="Vimeo" src="" /> {/* Placeholder for Vimeo icon */}
                    <img className="twitter-black" alt="Twitter" src="" /> {/* Placeholder for Twitter icon */}
                    <div className="youtube-black" /> {/* Placeholder for YouTube icon */}
                </div>
            </div>
            <div className="overlap">
                <img className="shape" alt="Shape" src="" /> {/* Placeholder for shape image */}
                <div className="group">
                    <div className="frame-2">
                        <div className="subscribe-newsletter">Subscribe Newsletters</div>
                        <p className="stay-in-the-loop">
                            Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our
                            latest products, special promotions, and exciting updates.
                        </p>
                    </div>
                    <div className="text-field">
                        <div className="overlap-group">
                            <div className="rectangle" />
                            <div className="enter-your-email">Enter Your Email</div>
                            <div className="subcribe-now-wrapper">
                                <div className="subcribe-now">SUBSCRIBE NOW</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
