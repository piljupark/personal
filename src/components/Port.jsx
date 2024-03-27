import React from "react";

const Port = () => {
    return (
        <section id="id">
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em>포폴 작업물</em>
                </div>
                <div className="port__wrap">
                    <article className="port__item p1">
                        <span className="num">01.</span>
                        <a href="https://piljupark.github.io/officialwork/index.html">
                            <img src="../assets/img/intro_page.png" alt="포트폴리오1" />
                        </a>
                        <h3 className="title">인트로</h3>
                        <p className="desc">
                            저를 잘 표현할 수 있도록 표현한 포트폴리오입니다.
                        </p>
                        <a href="https://piljupark.github.io/officialwork/index.html"></a>
                    </article>

                    <article className="port__item p2">
                        <span className="num">02.</span>
                        <a href="dorea.kr">
                            <img src="../assets/img/dorea_page.png" alt="포트폴리오2" />
                        </a>
                        <h3 className="title">WebGL을 사용한 포트폴리오</h3>
                        <p className="desc">
                            WebGL을 활용하여 제작한 포트폴리오로 
                        </p>
                        <a href="dorea.kr"></a>
                    </article>

                    <article className="port__item p3">
                        <span className="num">03.</span>
                        <a href="https://pilpark25.cafe24.com">
                            <img src="../assets/img/third_page.png" alt="포트폴리오3" />
                        </a>
                        <h3 className="title">더욱 친근하게 다가갈 수 있는 청소업체</h3>
                        <p className="desc">
                            청소업체 홈페이지지만 더욱 친근하게 다가갈 수 있도록 제작하였습니다.
                        </p>
                        <a href="https://pilpark25.cafe24.com"></a>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Port;