import React from "react";
import about from "../assets/img/about.jpg";
import { introText } from "../constants";


const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">Simple as it looks. <br/>for the Front-End</h1>
                <div className="video__wrapper">
                    <iframe 
                        width="1920"
                        height="1080"
                        src="https://player.vimeo.com/video/945203743?autoplay=1&muted=1&loop=1" 
                        title="Vimeo video player" 
                        allow="autoplay; fullscreen" 
                        frameBorder="0"
                        allowFullScreen>
                    </iframe>
                </div>
                
                
                <div className="intro__text">
                    <div className="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;