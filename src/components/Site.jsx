import React from "react";

const siteText = [
    {
        text: ["make", "site complitant with", "webstandard"],
        title: "비트를 이용한 사이트 제작",
        code: "https://dorea.kr",
        view: "https://dorea.kr",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable",
        ],
    },
    {
        text: ["make", "site complitant with", "react.js"],
        title: "리액트를 이용한 사이트 제작",
        code: "https://dorea.kr",
        view: "https://dorea.kr",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, React",
        ],
    },

];

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
            <div className="site__title">Site Coding <em>작업물</em></div>
            <div className="site__wrap">
                {siteText.map((site,key) => (
                    <article className={`site__item s${key+1}`} key={key}>
                    <span className="num">{key+1}.</span>
                    <div className="text">
                        <div>{site.text[0]}</div>
                        <div>{site.text[1]}</div>
                        <div>{site.text[2]}</div>
                    </div>
                    <h3 className="title">{site.title}</h3>
                    <div className="btn">
                        <a href={site.code}>code</a>
                        <a href={site.view}>view</a>
                    </div>
                    <div className="info">
                        <span>{site.info[0]}</span>
                        <span>{site.info[1]}</span>
                        <span>{site.info[2]}</span>
                    </div>
                </article>
                ))}


                {/*  // 위와 같은 내용
                <article className="site__item s1">
                    <span className="num">1.</span>
                    <div className="text">
                        <div>make</div>
                        <div>site comlitant with</div>
                        <div>webstandard</div>
                    </div>
                    <h3 className="title">웹 표준을 준수한 사이트 제작</h3>
                    <div className="btn">
                        <a href="/">code</a>
                        <a href="/">view</a>
                    </div>
                    <div className="info">
                        <span>site coding</span>
                        <span>production period : two days</span>
                        <span>use stack : html5/css3, CSS Varable</span>
                    </div>
                </article>
                <article className="site__item s2">
                    <span className="num">2.</span>
                    <div className="text">
                        <div>Make</div>
                        <div>site complitant with</div>
                        <div>react.js</div>
                    </div>
                    <h3 className="title">리액트를 이용한 사이트 제작</h3>
                    <div className="btn">
                        <a href="https://dorea.kr"></a>
                        <a href="https://dorea.kr"></a>
                    </div>
                    <div className="info">
                        <span>site coding</span>
                        <span>production period : two days</span>
                        <span>use stack : html5/css3, CSS Varable</span>
                    </div>
                </article>
                */}
                </div>
            </div>
        </section>
    );
};

export default Site;