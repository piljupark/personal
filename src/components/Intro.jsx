import React from "react";
import about from "../assets/img/about.jpg";
import { introText } from "../constants";


const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">Simple as it looks. <br/>for the Front-End</h1>
                {/* 
                <h1 className="intro__title">{introText.title}</h1>
                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                */}
                <div className="video__wrapper">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/_BM816dXYPE?rel=0&vq=hd720&controls=0&autoplay=1&mute=1&loop=1&playlist=_BM816dXYPE" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>

                    <video loop autoPlay muted>
                        <source src="/videos/video-2.mp4" type="video/mp4"/>
                    </video>
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
                
                {/* 
                <div className="intro__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                */}
            </div>
        </section>
    );
};

export default Intro;