import React from "react";

const contactText = [
    {
        link: "https://open.kakao.com/o/seLkjejg",
        title: "KAKAO : PILJU PARK",
    },
    {
        link: "mailto:pilpark25@gmail.com",
        title: "mail : pilpark25@gmail.com",
    },
];

const Contact = () => {

    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact__text">
                    <div className="text">
                        {contactText.map((contact, key) => (
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
                        {/* 
                        <div>
                            <a href="" target="_blank" rel="noreferrer">KAKAO : PILJU PARK</a>
                        </div>
                        <div>
                            <a href="mailto:pilpark25@gmail.com" target="_blank" rel="noreferrer">mail : PILPARK25@GMAIL.COM</a>
                        </div>
                        */}
                    </div>
                </div>
                <div className="contact__line bottom">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Contact