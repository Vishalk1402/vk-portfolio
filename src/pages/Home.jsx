import React, {useEffect, useState} from 'react';

const Home = () => {
    let sen = ["Coder", "Developer", "Leader",];
    const [text, setText] = useState("");
    const [length, setLength] = useState(0);
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {
            setText(sen[idx].slice(0, length + 1));
            setLength(prev => prev + 1);
            if (length === sen[idx].length) {
                setTimeout(() => {
                    setText(" ");
                    setLength(0)
                    setIdx(prev => prev + 1);
                    if (idx === sen.length - 1) {
                        setIdx(0);
                    }
                }, 1000)
            }
        }, 300);
        return () => clearInterval(interval);
    }, [idx, length]);
    return (
        <div className={"t1 flex flex-col gap-4 text-white"}>
            <h2 className={"md:text-7xl sm:text-6xl text-4xl font-bold"}>Hello,</h2>
            <h2 className={"t1 md:text-7xl sm:text-6xl text-4xl font-bold"}>I'am <span className={"text1 text-[#edb900] md:text-8xl sm:text-7xl text-5xl "}>V</span>ishal
                Koli</h2>
            <h2 className={"t1 md:text-7xl sm:text-6xl text-4xl font-bold"}>A <span className={"text text-yellow-300"}> {text}</span></h2>
        </div>
    );
};
export default Home;