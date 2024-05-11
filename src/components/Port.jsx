//import React, { useEffect, useRef } from "react";
import React from "react";
import { portText } from "../constants";
//import { gsap } from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {


    return (
        <section id="port">
            <div className="port__inner">
                <h2 className="port__title">
                    Projects
                </h2>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article 
                            className={`port__item p${key+1}`} 
                            key={key}
                            
                        >
                            <span className="num">{port.num}.</span>
                            <a 
                                href={port.code} 
                                target="_blank" 
                                className="img" 
                                rel="noreferrer noopener"
                            >
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a 
                                href={port.view} 
                                target="_blank" 
                                className="site" 
                                rel="noreferrer noopener"
                            >
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;