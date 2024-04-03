import React from "react";

import { footerText } from "../constants";
import { footerContactText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">

                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <p>Contact</p>
                        </div>
                        <div className="left__wrap">
                        {footerContactText.map((contact, key) => (
                            <div key={key}>
                                <a 
                                    href={contact.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {contact.title}
                                </a>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="right">
                        <div className="title">
                            <p>social</p>
                        </div>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    {/* <em>{footer.desc}</em> */}
                                </li>
                            ))}
                        </ul>
                        {/*
                        <ul>
                            <li>
                                <a href="/">youtube</a>
                                <em>유튜브에 오시면 더 많은 영상을 볼 수 있습니다.</em>
                            </li>
                            <li>
                                <a href="/">github</a>
                                <em>유튜브에 오시면 더 많은 영상을 볼 수 있습니다.</em>
                            </li>
                            <li>
                                <a href="/">react</a>
                                <em>유튜브에 오시면 더 많은 영상을 볼 수 있습니다.</em>
                            </li>
                        </ul>
                        */}
                    </div>
                </div>
                <div className="footer__right">
                    @ 2024 PILJU PARK <br/>
                    Made from React.js
                </div>
            </div>
        </footer>
    );
};

export default Footer;