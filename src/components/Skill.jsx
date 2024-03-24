import React from "react";

const skillText = [
    {
    title: "꿈을 설계하고 디자인하다.",
    desc: "나는 공간을 만드는 것을 좋아한다.",
    },
    {
    title: "일단 만들어놓고 보자.",
    desc: "나는 일단 만들어야한다.",
    },
    {
    title: "공부 많이 해야 한다.",
    desc: "일단 공부를 많이 해야한다.",
    },
];

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">Challenge</h2>
                <div className="skill__desc">
                    {skillText.map((skill,key) => (
                        <div key={key}>
                            <span>{key + 1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                    {/*<div>
                        <span>1.</span>
                        <h3>꿈을 설계하고 디자인하다</h3>
                        <p>
                            나는 공간을 만드는 것을 좋아한다.
                        </p>
                    </div>
                    <div>
                        <span>1.</span>
                        <h3>꿈을 설계하고 디자인하다</h3>
                        <p>
                            나는 공간을 만드는 것을 좋아한다.
                        </p>
                    </div>
                    <div>
                        <span>1.</span>
                        <h3>꿈을 설계하고 디자인하다</h3>
                        <p>
                            나는 공간을 만드는 것을 좋아한다.
                        </p>
                    </div>
                    */}
                </div>
            </div>
        </section>
    );
};

export default Skill;